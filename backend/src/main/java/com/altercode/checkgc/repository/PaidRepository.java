package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Paid;
import com.altercode.checkgc.entity.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface PaidRepository extends JpaRepository<Paid, Long> {

    List<Paid> findAllPaidByClient(Client client);

    List<Paid> findAllPaidByPaymentDate(LocalDate date);

    List<Paid> findPaidByProduct(Product product);
}
