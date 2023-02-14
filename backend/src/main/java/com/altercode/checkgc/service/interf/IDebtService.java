package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import org.springframework.transaction.annotation.Transactional;

public interface IDebtService {
    DebtDTO findDebtById(Long id);

    @Transactional
    DebtDTO saveDebt(DebtDTO dto);
}
