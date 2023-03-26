package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Paid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaidRepository extends JpaRepository<Paid, Long> {


    List<Paid> findAllPaidByClient(Client client);
}
