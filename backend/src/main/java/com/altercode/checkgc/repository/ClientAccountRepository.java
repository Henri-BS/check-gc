package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.SumDebtQuantityDTO;
import com.altercode.checkgc.entity.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClientAccountRepository extends JpaRepository<ClientAccount, Long> {

    @Query("SELECT new com.altercode.checkgc.dto.SumDebtQuantityDTO (SUM(obj.debtAmount), SUM(obj.debtQuantity))" +
            " FROM ClientAccount AS obj")
    SumDebtQuantityDTO totalDebtQuantity();


}
