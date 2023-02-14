package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.ClientAccount;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IDebtService {
    DebtDTO findDebtById(Long id);

    @Transactional
    DebtDTO saveDebt(DebtDTO dto);

    List<DebtDTO> findAllDebtsByAccount(ClientAccount account);
}
