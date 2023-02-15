package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ClientAccountDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.service.impl.ClientAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class ClientAccountController {

    @Autowired
    private ClientAccountService accountService;

    @GetMapping("/client/{client}")
    public ResponseEntity<ClientAccountDTO> findAccountByClient(@PathVariable Client client) {
        ClientAccountDTO find = accountService.findAccountByClient(client);
        return ResponseEntity.ok(find);
    }

    @PutMapping("/update-values/{accountId}")
    public ResponseEntity<ClientAccountDTO> updateAccountTotalValues( ClientAccountDTO dto, @PathVariable Long accountId) {
        ClientAccountDTO update = accountService.updateAccountTotalValues(dto);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
}
