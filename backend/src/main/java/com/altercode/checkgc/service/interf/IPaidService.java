package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.PaidDTO;

import java.util.List;

public interface IPaidService {
    List<PaidDTO> findAllStatus();

    PaidDTO savePaid(PaidDTO dto);

    PaidDTO updatePaid(PaidDTO dto);

    void deletePaid(Long paidId);
}
