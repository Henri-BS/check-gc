package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.dto.TotalDebtClientDTO;
import com.altercode.checkgc.dto.TotalDebtDateDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Debt;
import com.altercode.checkgc.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {

    List<Debt> findAllDebtsByDebtDate(LocalDate debtDate);

    @Query("SELECT obj FROM Debt obj WHERE UPPER(obj.product) " +
            "LIKE UPPER(CONCAT('%', ?1, '%')) ORDER BY obj.product DESC")
    Page<Debt> findAllDebts(Product product, Pageable pageable);

    @Query("SELECT new com.altercode.checkgc.dto.TotalDebtDateDTO(  obj.debtDate, SUM(obj.productAmount), SUM(obj.productQuantity)) " +
            "FROM Debt AS obj " +
            "GROUP BY obj.debtDate " )
    List<TotalDebtDateDTO> debtAmountGroupByDate();

    @Query("SELECT new com.altercode.checkgc.dto.TotalDebtClientDTO( obj.client, COUNT(obj.debtDate), SUM(obj.productAmount), SUM(obj.productQuantity)) " +
            "FROM Debt AS obj " +
            "GROUP BY obj.client " )
    List<TotalDebtClientDTO> debtAmountGroupByClient();

    List<Debt> findAllDebtsByClient(Client client);

    @Query("SELECT new com.altercode.checkgc.dto.DebtDTO(obj.client, obj.debtDate, SUM(obj.productQuantity), SUM(obj.productAmount))" +
            "FROM Debt AS obj WHERE (obj.client) LIKE(?1) GROUP BY obj.debtDate ")
    List<DebtDTO> debtGroupByDate(Client client);
}
