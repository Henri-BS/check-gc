package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.service.impl.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/debt")
public class DebtController {

    @Autowired
    private DebtService debtService;

    @GetMapping("/{id}")
    public ResponseEntity<DebtDTO> findDebtById(@PathVariable Long id) {
        DebtDTO find = debtService.findDebtById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/add")
    public ResponseEntity<DebtDTO> saveDebt(@RequestBody DebtDTO dto) {
        DebtDTO update = debtService.saveDebt(dto);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
}
