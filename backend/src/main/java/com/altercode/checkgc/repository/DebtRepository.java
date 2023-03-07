package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {

    List<Debt> findAllDebtsByClient(Client client);

}
