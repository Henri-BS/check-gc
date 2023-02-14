package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Debt;
import com.altercode.checkgc.entity.Product;
import com.altercode.checkgc.entity.Status;
import com.altercode.checkgc.repository.ClientAccountRepository;
import com.altercode.checkgc.repository.DebtRepository;
import com.altercode.checkgc.repository.ProductRepository;
import com.altercode.checkgc.repository.StatusRepository;
import com.altercode.checkgc.service.interf.IDebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DebtService implements IDebtService {

    @Autowired
    private DebtRepository debtRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientAccountRepository accountRepository;

    @Autowired
    private StatusRepository statusRepository;


    @Override
    public DebtDTO findDebtById(Long id) {
        Debt find = debtRepository.findById(id).orElseThrow();
        double total;
        total = find.getProductQuantity() * find.getProduct().getPrice();
        find.setProductAmount(total);
        return new DebtDTO(find);
    }

    @Override
    public DebtDTO saveDebt(DebtDTO dto) {
        Product product = productRepository.findById(dto.getProduct()).orElseThrow();
        ClientAccount account = accountRepository.findById(dto.getAccount()).orElseThrow();
        Status status = statusRepository.findById(dto.getStatus()).orElseThrow();

        Debt add = new Debt();
        add.setDebtDate(dto.getDebtDate());
        add.setProductQuantity(dto.getProductQuantity());
        add.setProduct(product);
        add.setAccount(account);
        add.setStatus(status);
        debtRepository.saveAndFlush(add);

        Debt debt = debtRepository.findById(add.getDebtId()).orElseThrow();

        double price = debt.getProduct().getPrice();
        int quantity = debt.getProductQuantity();
        double total;
        total = quantity * price;
        debt.setProductAmount(total);

        return new DebtDTO(debtRepository.save(debt));
    }
}
