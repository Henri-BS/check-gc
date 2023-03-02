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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<DebtDTO> findAllDebts(Pageable pageable) {
        Page<Debt> page = debtRepository.findAll(pageable);
        return page.map(DebtDTO::new);
    }

    @Override
    public List<DebtDTO> findAllDebtsByAccount(ClientAccount account) {
        List<Debt> list = debtRepository.findAllDebtsByAccount(account);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<DebtDTO> findAllDebtsByStatus(Status status) {
        List<Debt> list = debtRepository.findAllDebtsByStatus(status);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
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
        Status status = statusRepository.findById(dto.getStatus()).orElse(null);

        if (status == null) {
            status = new Status();
            status.setStatusId(dto.getStatus());
            status = statusRepository.saveAndFlush(status);
        }

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

    @Override
    public DebtDTO updateDebt(DebtDTO dto) {
        Debt edit = debtRepository.findById(dto.getDebtId()).orElseThrow();
        Product product = productRepository.findById(dto.getProduct()).orElseThrow();
        Status status = statusRepository.findById(dto.getStatus()).orElse(null);

        edit.setDebtId(edit.getDebtId());
        edit.setDebtDate(dto.getDebtDate());
        edit.setProductQuantity(dto.getProductQuantity());
        edit.setProductAmount(dto.getProductAmount());
        edit.setProduct(product);
        edit.setStatus(status);

        return new DebtDTO(debtRepository.save(edit));
    }

    @Override
    public void deleteDebt(Long id) {
        this.debtRepository.deleteById(id);
    }
}
