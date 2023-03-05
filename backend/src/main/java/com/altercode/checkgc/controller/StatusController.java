package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.StatusDTO;
import com.altercode.checkgc.service.interf.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    private IStatusService statusService;

    @GetMapping("/list")
    public ResponseEntity<List<StatusDTO>> findAllStatus() {
        List<StatusDTO> list = statusService.findAllStatus();
        return ResponseEntity.ok(list);
    }
}
