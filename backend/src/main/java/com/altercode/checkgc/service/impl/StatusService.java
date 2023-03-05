package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.StatusDTO;
import com.altercode.checkgc.entity.Status;
import com.altercode.checkgc.repository.StatusRepository;
import com.altercode.checkgc.service.interf.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StatusService implements IStatusService {

    @Autowired
    private StatusRepository statusRepository;

    @Override
    public List<StatusDTO> findAllStatus() {
        List<Status> list = statusRepository.findAll();
        return list.stream().map(StatusDTO::new).collect(Collectors.toList());
    }
}
