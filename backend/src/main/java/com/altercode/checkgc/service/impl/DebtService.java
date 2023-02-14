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

import java.util.List;
import java.util.stream.Collectors;

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
    public List<DebtDTO> findAllDebtsByAccount(ClientAccount account) {
        List<Debt> list = debtRepository.findAllDebtsByAccount(account);
        return list.stream().map(x -> new DebtDTO(x)).collect(Collectors.toList());
    }

    public List<DebtDTO> findAllDebtsByStatus(Status status) {
        List<Debt> list = debtRepository.findAllDebtsByStatus(status);
        return list.stream().map(x -> new DebtDTO(x)).collect(Collectors.toList());
    }

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

        double total;
        total = debt.getProductQuantity() * debt.getProduct().getPrice();
        debt.setProductAmount(total);

        return new DebtDTO(debtRepository.save(debt));
    }



}
