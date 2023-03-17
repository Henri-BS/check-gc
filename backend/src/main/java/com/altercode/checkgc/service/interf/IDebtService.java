package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.TotalDebtDateDTO;
import com.altercode.checkgc.entity.Client;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDebtService {
    List<DebtDTO> findAllDebtsByClient(Client client);

    List<DebtDTO> findAllDebtsByDebtDate(String debtDate);

    List<TotalDebtDateDTO> debtAmountGroupByDate();

    DebtDTO findDebtById(Long id);

    DebtDTO saveDebt(DebtDTO dto);

    Page<DebtDTO> findAllDebts(Pageable pageable);

    DebtDTO updateDebt(DebtDTO dto);

    void deleteDebt(Long id);


}
