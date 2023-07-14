package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.SumDebtQuantityDTO;
import com.altercode.checkgc.service.interf.IClientAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class ClientAccountController {

    @Autowired
    private IClientAccountService accountService;

    @GetMapping("/total-value")
    public ResponseEntity<SumDebtQuantityDTO> totalValuesOfSales(){
        SumDebtQuantityDTO sum = accountService.totalValuesOfSales();
        return ResponseEntity.ok(sum);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAccount(@PathVariable Long id) {
        this.accountService.deleteAccount(id);
    }
}
