package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.TotalDebtDateDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {

    List<Debt> findAllDebtsByDebtDate(LocalDate debtDate);

    @Query("SELECT new com.altercode.checkgc.dto.TotalDebtDateDTO(obj.debtDate, SUM(obj.productAmount), SUM(obj.productQuantity))" +
            "FROM Debt AS obj GROUP BY obj.debtDate ORDER BY obj.debtDate")
    List<TotalDebtDateDTO> debtAmountGroupByDate();

    List<Debt> findAllDebtsByClient(Client client);

}
