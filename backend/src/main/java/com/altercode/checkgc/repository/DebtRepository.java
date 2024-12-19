package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.TotalDebtClientDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {

    List<Debt> findByDebtDate(LocalDate debtDate);

    List<Debt> findByClient(Client client);

    @Query("SELECT new com.altercode.checkgc.dto.DebtDTO(obj.client, obj.debtDate, SUM(obj.productQuantity), SUM(obj.productAmount))" +
            "FROM Debt AS obj WHERE (obj.client) LIKE(?1) GROUP BY obj.debtDate ")
    List<DebtDTO> debtGroupByDate(Client client);
}
