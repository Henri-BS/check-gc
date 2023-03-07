package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.*;
import com.altercode.checkgc.repository.*;
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
    private ClientRepository clientRepository;



    @Override
    public Page<DebtDTO> findAllDebts(Pageable pageable) {
        Page<Debt> page = debtRepository.findAll(pageable);
        return page.map(DebtDTO::new);
    }

    @Override
    public List<DebtDTO> findAllDebtsByAccount(Client client) {
        List<Debt> list = debtRepository.findAllDebtsByClient(client);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public DebtDTO findDebtById(Long id) {
        Debt find = debtRepository.findById(id).orElseThrow();
        return new DebtDTO(find);
    }

    @Override
    public DebtDTO saveDebt(DebtDTO dto) {
        Product product = productRepository.findById(dto.getProduct()).orElseThrow();
        Client client = clientRepository.findById(dto.getClientId()).orElseThrow();

        Debt add = new Debt();
        add.setClient(client);
        add.setDebtDate(dto.getDebtDate());
        add.setProductQuantity(dto.getProductQuantity());
        add.setProduct(product);
        add.setStatus(dto.getStatus());

        return new DebtDTO(debtRepository.saveAndFlush(add));
    }

    @Override
    public DebtDTO updateDebt(DebtDTO dto) {
        Debt edit = debtRepository.findById(dto.getDebtId()).orElseThrow();
        Product product = productRepository.findById(dto.getProduct()).orElseThrow();

        edit.setDebtId(edit.getDebtId());
        edit.setDebtDate(dto.getDebtDate());
        edit.setProductQuantity(dto.getProductQuantity());
        edit.setProductAmount(dto.getProductAmount());
        edit.setProduct(product);
        edit.setStatus(dto.getStatus());

        return new DebtDTO(debtRepository.save(edit));
    }

    @Override
    public void deleteDebt(Long id) {
        this.debtRepository.deleteById(id);
    }
}
