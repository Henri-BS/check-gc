package com.altercode.checkgc.repository;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Paid;
import com.altercode.checkgc.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface PaidRepository extends JpaRepository<Paid, Long> {

    List<Paid> findAllPaidByClient(Client client);

    List<Paid> findAllPaidByPaymentDate(LocalDate date);

    List<Paid> findPaidByProduct(Product product);

    @Query("SELECT new com.altercode.checkgc.dto.PaidDTO (obj.client, SUM(obj.productQuantity), SUM(obj.productAmount))" +
            "FROM Paid AS obj GROUP BY obj.client ")
    List<PaidDTO> paidGroupByClient();

    @Query("SELECT new com.altercode.checkgc.dto.PaidDTO (obj.client, obj.paymentDate, SUM(obj.productQuantity), SUM(obj.productAmount))" +
            "FROM Paid AS obj WHERE (obj.client) LIKE(?1) GROUP BY obj.paymentDate ")
    List<PaidDTO> paidGroupByDate(Client client);

}
