package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Paid;
import com.altercode.checkgc.entity.Product;
import com.altercode.checkgc.repository.ClientRepository;
import com.altercode.checkgc.repository.PaidRepository;
import com.altercode.checkgc.repository.ProductRepository;
import com.altercode.checkgc.service.interf.IPaidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public Page<PaidDTO> findAllPaid(Pageable pageable) {
        Page<Paid> page = paidRepository.findAll(pageable);
        double total ;
        for(Paid paid: page) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.setProductAmount(total);
            paidRepository.save(paid);
        }
        return page.map(PaidDTO::new);
    }

    @Override
    public List<PaidDTO> findAllPaidByClient(Client client) {
        List<Paid> list = paidRepository.findAllPaidByClient(client);
        double total;
        for(Paid paid : list) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.setProductAmount(total);
            paidRepository.save(paid);
        }
        return list.stream().map(PaidDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<PaidDTO> findAllPaidByPaymentDate(String paymentDate) {
        LocalDate date = LocalDate.parse(paymentDate);
        List<Paid> list = paidRepository.findAllPaidByPaymentDate(date);
        return list.stream().map(PaidDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<PaidDTO> findPaidByProduct(Product product) {
        List<Paid> list = paidRepository.findPaidByProduct(product);
        double total;
        for(Paid paid : list) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.setProductAmount(total);
            paidRepository.save(paid);
        }
        return list.stream().map(PaidDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<PaidDTO> paidGroupByClient(){
        double total;
        for(Paid paid : paidRepository.findAll()) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.setProductAmount(total);
            paidRepository.save(paid);
        }
      return  paidRepository.paidGroupByClient();
    }

    @Override
    public PaidDTO findPaidById(Long id) {
        Paid find = paidRepository.findById(id).orElseThrow();
        double total ;
        for(Paid paid: paidRepository.findAll()) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.setProductAmount(total);
            paidRepository.save(paid);
        }
        return new PaidDTO(find);
    }



    @Override
    public PaidDTO savePaid(PaidDTO dto) {
        Product product = productRepository.findByDescription(dto.getProductDescription());
        Client client = clientRepository.findClientByName(dto.getClientName());

        Paid add = new Paid();
        add.setPaymentDate(dto.getPaymentDate());
        add.setPaymentType(dto.getPaymentType());
        add.setProductQuantity(dto.getProductQuantity());
        add.setProduct(product);
        add.setClient(client);
        return new PaidDTO(paidRepository.saveAndFlush(add));
    }

    @Override
    public PaidDTO updatePaid(PaidDTO dto) {
        Product product = productRepository.findByDescription(dto.getProductDescription());
        Client client = clientRepository.findClientByName(dto.getClientName());
        Paid edit = paidRepository.findById(dto.getPaidId()).orElseThrow();

        edit.setPaidId(edit.getPaidId());
        edit.setPaymentDate(dto.getPaymentDate());
        edit.setPaymentType(dto.getPaymentType());
        edit.setProductQuantity(dto.getProductQuantity());
        edit.setProduct(product);
        edit.setClient(client);
        return new PaidDTO(paidRepository.save(edit));
    }

    @Override
    public void deletePaid(Long paidId) {
        this.paidRepository.deleteById(paidId);
    }


}
