package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.PaidDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPaidService {
    Page<PaidDTO> findAllPaid(Pageable pageable);

    PaidDTO findPaidById(Long id);

    PaidDTO savePaid(PaidDTO dto);

    PaidDTO updatePaid(PaidDTO dto);

    void deletePaid(Long paidId);

}
