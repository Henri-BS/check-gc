package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.Debt;
import com.altercode.checkgc.repository.DebtRepository;
import com.altercode.checkgc.service.interf.IDebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DebtService implements IDebtService {

    @Autowired
    private DebtRepository debtRepository;

    @Override
    @Transactional
    public DebtDTO findDebtById(Long id) {
        Debt find = debtRepository.findById(id).orElse(null);
        assert find != null;
        return new DebtDTO(find);
    }
}
