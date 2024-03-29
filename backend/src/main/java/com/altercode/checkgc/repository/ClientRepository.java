package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    @Query("SELECT obj FROM Client obj WHERE UPPER(obj.name) " +
            "LIKE UPPER(concat('%', ?1, '%')) ORDER BY obj.name DESC")
    Page<Client> findAllClients(Pageable pageable, String name);

    Client findClientByName(String name);
}
