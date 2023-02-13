package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;

public interface IDebtService {
    DebtDTO findDebtById(Long id);
}
