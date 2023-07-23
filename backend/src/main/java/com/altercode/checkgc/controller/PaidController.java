package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Product;
import com.altercode.checkgc.service.interf.IPaidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public ResponseEntity<Page<PaidDTO>> findAllPaid(Pageable pageable) {
        Page<PaidDTO> page = paidService.findAllPaid(pageable);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/list-client/{client}")
    public ResponseEntity<List<PaidDTO>> findAllPaidByClient(@PathVariable Client client) {
        List<PaidDTO> list = paidService.findAllPaidByClient(client);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-product/{product}")
    public ResponseEntity<List<PaidDTO>> findPaidByProduct(@PathVariable Product product) {
        List<PaidDTO> list = paidService.findPaidByProduct(product);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-by-date/{paymentDate}")
    public ResponseEntity<List<PaidDTO>> findAllPaidByPaymentDate(@PathVariable String paymentDate) {
        List<PaidDTO> list = paidService.findAllPaidByPaymentDate(paymentDate);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/group-by-client")
    public ResponseEntity<List<PaidDTO>> paidGroupByClient(){
        List<PaidDTO> list = paidService.paidGroupByClient();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/group-by-date/{client}")
    ResponseEntity<List<PaidDTO>> paidGroupByDate(@PathVariable Client client){
        List<PaidDTO> list = paidService.paidGroupByDate(client);
        return ResponseEntity.ok(list);
    }


    @GetMapping("/{id}")
    public ResponseEntity<PaidDTO> findPaidById(@PathVariable Long id){
        PaidDTO find = paidService.findPaidById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/add")
    public ResponseEntity<PaidDTO> savePaid(@RequestBody PaidDTO dto) {
        PaidDTO add = paidService.savePaid(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    public ResponseEntity<PaidDTO> updatePaid(@RequestBody PaidDTO dto) {
        PaidDTO edit = paidService.updatePaid(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePaid(@PathVariable Long id) {
        this.paidService.deletePaid(id);
    }
}
