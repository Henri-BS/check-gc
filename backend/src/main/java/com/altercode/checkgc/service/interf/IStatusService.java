package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.StatusDTO;

import java.util.List;

public interface IStatusService {
    List<StatusDTO> findAllStatus();
}
