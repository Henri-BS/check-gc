package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.service.impl.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/list")
    public ResponseEntity<Page<ClientDTO>> findAllClients(Pageable pageable) {
        Page<ClientDTO> list = clientService.findAllClients(pageable);
        return ResponseEntity.ok(list);
    }

}
