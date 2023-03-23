package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Paid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaidRepository extends JpaRepository<Paid, Long> {
}
