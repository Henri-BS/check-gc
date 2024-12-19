package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.service.interf.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/debt")
public class DebtController {

    @Autowired
    private DebtService debtService;

    @GetMapping("/list")
    public ResponseEntity<Page<DebtDTO>> findAllDebts(
            @RequestParam(defaultValue = "") String product,
            @RequestParam(defaultValue = "") String client,
            Pageable pageable)
    {
        Page<DebtDTO> list = debtService.findAll(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-by-client/{clientId}")
    public ResponseEntity<List<DebtDTO>> findAllDebtsByClient(@PathVariable Client clientId) {
        List<DebtDTO> list = debtService.findByClient(clientId);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-by-date/{debtDate}")
    public ResponseEntity<List<DebtDTO>> findByDebtDate(@PathVariable String debtDate) {
        List<DebtDTO> list = debtService.findByDebtDate(debtDate);
        return ResponseEntity.ok(list);
    }



    @GetMapping("/group-by-date/{client}")
    ResponseEntity<List<DebtDTO>> debtGroupByDate(@PathVariable Client client){
        List<DebtDTO> list = debtService.debtGroupByDate(client);
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

    @PutMapping("/edit")
    public ResponseEntity<DebtDTO> updateDebt(@RequestBody DebtDTO dto) {
        DebtDTO edit = debtService.updateDebt(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @PutMapping("/update-for-paid/{debtId}")
    public ResponseEntity<PaidDTO> updateDebtForPaid( PaidDTO dto, @PathVariable Long debtId) {
        PaidDTO update = debtService.updateDebtForPaid(dto, debtId);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDebt(@PathVariable Long id) {
        this.debtService.deleteDebt(id);
    }
}
