package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface DebtService {
    List<DebtDTO> findByClient(Client client);

    List<DebtDTO> findByDebtDate(String debtDate);

    DebtDTO findDebtById(Long id);

    DebtDTO saveDebt(DebtDTO dto);

    Page<DebtDTO> findAll(Pageable pageable);

    DebtDTO updateDebt(DebtDTO dto);

    PaidDTO updateDebtForPaid(PaidDTO dto, Long id);

    void deleteDebt(Long id);

    List<DebtDTO> debtGroupByDate(Client client);
}
