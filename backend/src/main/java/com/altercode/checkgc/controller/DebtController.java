package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.service.impl.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
