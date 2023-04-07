package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.dto.TotalDebtClientDTO;
import com.altercode.checkgc.dto.TotalDebtDateDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.service.interf.IDebtService;
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
    private IDebtService debtService;

    @GetMapping("/list")
    public ResponseEntity<Page<DebtDTO>> findAllDebts(Pageable pageable) {
        Page<DebtDTO> list = debtService.findAllDebts(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-client/{clientId}")
    public ResponseEntity<List<DebtDTO>> findAllDebtsByClient(@PathVariable Client clientId) {
        List<DebtDTO> list = debtService.findAllDebtsByClient(clientId);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-by-date/{debtDate}")
    public ResponseEntity<List<DebtDTO>> findAllDebtsByDebtDate(@PathVariable String debtDate) {
        List<DebtDTO> list = debtService.findAllDebtsByDebtDate(debtDate);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/values-by-date")
    public ResponseEntity<List<TotalDebtDateDTO>> debtAmountGroupByDate() {
        List<TotalDebtDateDTO> list = debtService.debtAmountGroupByDate();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/values-by-client")
    public ResponseEntity<List<TotalDebtClientDTO>> debtAmountGroupByClient() {
        List<TotalDebtClientDTO> list = debtService.debtAmountGroupByClient();
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
    public ResponseEntity<PaidDTO> updateDebtForPaid(@RequestBody PaidDTO dto, @PathVariable Long debtId) {
        PaidDTO update = debtService.updateDebtForPaid(dto, debtId);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDebt(@PathVariable Long id) {
        this.debtService.deleteDebt(id);
    }
}
