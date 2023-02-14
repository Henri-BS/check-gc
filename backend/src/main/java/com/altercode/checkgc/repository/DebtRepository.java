package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {
    List<Debt> findAllDebtsByAccount(ClientAccount account);
}
