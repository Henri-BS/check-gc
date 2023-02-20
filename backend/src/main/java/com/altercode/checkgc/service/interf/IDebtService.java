package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Status;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IDebtService {
    List<DebtDTO> findAllDebtsByStatus(Status status);

    DebtDTO findDebtById(Long id);

    @Transactional
    DebtDTO saveDebt(DebtDTO dto);

    List<DebtDTO> findAllDebtsByAccount(ClientAccount account);

    void deleteDebt(Long id);
}
