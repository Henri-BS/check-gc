package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Debt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DebtRepository extends JpaRepository<Debt, Long> {
}
