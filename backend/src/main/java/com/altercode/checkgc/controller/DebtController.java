package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Status;
import com.altercode.checkgc.service.impl.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/debt")
public class DebtController {

    @Autowired
    private DebtService debtService;

    @GetMapping("/list-account/{account}")
    public ResponseEntity<List<DebtDTO>> findAllDebtsByAccount(@PathVariable ClientAccount account, @RequestParam Status status) {
        List<DebtDTO> list = debtService.findAllDebtsByAccount(account);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-status/{status}")
    public ResponseEntity<List<DebtDTO>> findAllDebtsByStatus(@PathVariable Status status) {
        List<DebtDTO> list = debtService.findAllDebtsByStatus(status);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DebtDTO> findDebtById(@PathVariable Long id) {
        DebtDTO find = debtService.findDebtById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/add")
    public ResponseEntity<DebtDTO> saveDebt(@RequestBody DebtDTO dto) {
        DebtDTO add = debtService.saveDebt(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<DebtDTO> updateDebt(@RequestBody DebtDTO dto) {
        DebtDTO edit = debtService.updateDebt(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDebt(@PathVariable Long id) {
        this.debtService.deleteDebt(id);
    }
}
