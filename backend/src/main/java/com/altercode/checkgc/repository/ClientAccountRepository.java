package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientAccountRepository extends JpaRepository<ClientAccount, Long> {
}
