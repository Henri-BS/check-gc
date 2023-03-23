package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.service.interf.IPaidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paid")
public class PaidController {

    @Autowired
    private IPaidService paidService;

    @GetMapping("/list")
    public ResponseEntity<List<PaidDTO>> findAllStatus() {
        List<PaidDTO> list = paidService.findAllStatus();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<PaidDTO> savePaid(@RequestBody PaidDTO dto) {
        PaidDTO add = paidService.savePaid(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }
}
