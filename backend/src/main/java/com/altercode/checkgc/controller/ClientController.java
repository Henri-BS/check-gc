package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.service.interf.IClientAccountService;
import com.altercode.checkgc.service.interf.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private IClientService clientService;

    @Autowired
    private ClientAccountController accountController;

    @GetMapping("/list")
    public ResponseEntity<Page<ClientDTO>> findAllClients(Pageable pageable) {
        Page<ClientDTO> page = clientService.findAllClients(pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/list-by-name")
    public ResponseEntity<Page<ClientDTO>> findClientsByName(Pageable pageable, String name) {
        Page<ClientDTO> page = clientService.findClientsByName(pageable, name);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> findClientById(@PathVariable Long id) {
        ClientDTO find = clientService.findClientById(id);
        return ResponseEntity.ok(find);
    }

    @GetMapping("/find-by-name/{name}")
    public ResponseEntity<ClientDTO> findClientByName(@PathVariable String name) {
        ClientDTO find = clientService.findClientByName(name);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/add")
    public ResponseEntity<ClientDTO> saveClient(@RequestBody ClientDTO dto){
        ClientDTO add = clientService.saveClient(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    public ResponseEntity<ClientDTO> editClient(@RequestBody ClientDTO dto){
        ClientDTO edit = clientService.updateClient(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @PutMapping("/update-value/{clientId}")
    public ResponseEntity<ClientDTO> updateAccountValues( ClientDTO dto, @PathVariable Long clientId){
        ClientDTO update = clientService.updateAccountValues(dto);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient(@PathVariable Long id){
        this.clientService.deleteClient(id);
    }
}
