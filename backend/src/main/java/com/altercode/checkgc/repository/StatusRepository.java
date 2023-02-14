package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status, String> {
}
