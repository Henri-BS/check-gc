package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Paid;
import com.altercode.checkgc.repository.ClientRepository;
import com.altercode.checkgc.repository.PaidRepository;
import com.altercode.checkgc.repository.ProductRepository;
import com.altercode.checkgc.service.interf.IPaidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaidService implements IPaidService {

    @Autowired
    private PaidRepository paidRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<PaidDTO> findAllStatus() {
        List<Paid> list = paidRepository.findAll();
        return list.stream().map(PaidDTO::new).collect(Collectors.toList());
    }

    @Override
    public PaidDTO savePaid(PaidDTO dto) {

        Paid add = new Paid();
        add.setPaymentDate(dto.getPaymentDate());
        add.setPaymentType(dto.getPaymentType());
        add.setProductQuantity(dto.getProductQuantity());

        return new PaidDTO(paidRepository.saveAndFlush(add));

    }

}
