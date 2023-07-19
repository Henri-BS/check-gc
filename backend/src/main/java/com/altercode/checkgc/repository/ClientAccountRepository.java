package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.StatsSalesDTO;
import com.altercode.checkgc.entity.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClientAccountRepository extends JpaRepository<ClientAccount, Long> {

    @Query("SELECT new com.altercode.checkgc.dto.StatsSalesDTO (" +
            "SUM(obj.debtAmount), MAX(obj.debtAmount), SUM(obj.debtQuantity), " +
            "SUM(obj.paidAmount), MAX(obj.paidAmount), SUM(obj.paidQuantity))" +
            " FROM ClientAccount AS obj")
    StatsSalesDTO totalValuesOfSales();

}
