package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPaidService {
    Page<PaidDTO> findAllPaid(Pageable pageable);

    List<PaidDTO> findAllPaidByClient(Client client);

    PaidDTO findPaidById(Long id);

    PaidDTO savePaid(PaidDTO dto);

    PaidDTO updatePaid(PaidDTO dto);

    void deletePaid(Long paidId);

    List<PaidDTO> findAllPaidByPaymentDate(String paymentDate);

    List<PaidDTO> findPaidByProduct(Product product);
}
