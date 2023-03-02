package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDebtService {
    List<DebtDTO> findAllDebtsByStatus(Status status);

    DebtDTO findDebtById(Long id);

    DebtDTO saveDebt(DebtDTO dto);

    Page<DebtDTO> findAllDebts(Pageable pageable);

    List<DebtDTO> findAllDebtsByAccount(ClientAccount account);

    DebtDTO updateDebt(DebtDTO dto);

    void deleteDebt(Long id);
}
