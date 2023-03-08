package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientAccountRepository extends JpaRepository<ClientAccount, Long> {

}
