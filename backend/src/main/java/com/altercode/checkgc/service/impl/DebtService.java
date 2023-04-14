package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.dto.TotalDebtClientDTO;
import com.altercode.checkgc.dto.TotalDebtDateDTO;
import com.altercode.checkgc.entity.*;
import com.altercode.checkgc.repository.*;
import com.altercode.checkgc.service.interf.IDebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DebtService implements IDebtService {

    @Autowired
    private DebtRepository debtRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PaidRepository paidRepository;

    @Override
    public Page<DebtDTO> findAllDebts(Pageable pageable) {
        Page<Debt> page = debtRepository.findAll(pageable);
        double total ;
        for(Debt d: page) {
            total = d.getProductQuantity() * d.getProduct().getPrice();
            d.setProductAmount(total);
            debtRepository.save(d);
        }
        return page.map(DebtDTO::new);
    }

    @Override
    public List<DebtDTO> findAllDebtsByClient(Client client) {
        List<Debt> list = debtRepository.findAllDebtsByClient(client);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<DebtDTO> findAllDebtsByDebtDate(String debtDate) {
        LocalDate date = LocalDate.parse(debtDate);
        List<Debt> list = debtRepository.findAllDebtsByDebtDate(date);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<TotalDebtDateDTO> debtAmountGroupByDate(){
        return debtRepository.debtAmountGroupByDate();
    }

    @Override
    public List<TotalDebtClientDTO> debtAmountGroupByClient(){
        return debtRepository.debtAmountGroupByClient();
    }

    @Override
    public DebtDTO findDebtById(Long id) {
        Debt find = debtRepository.findById(id).orElseThrow();
        double total ;
        total = find.getProductQuantity() * find.getProduct().getPrice();
        find.setProductAmount(total);
        debtRepository.save(find);
        return new DebtDTO(find);
    }

    @Override
    public DebtDTO saveDebt(DebtDTO dto) {
        Product product = productRepository.findByDescription(dto.getProductDescription());
        Client client = clientRepository.findClientByName(dto.getClientName());

        Debt add = new Debt();
        add.setClient(client);
        add.setDebtDate(dto.getDebtDate());
        add.setProductQuantity(dto.getProductQuantity());
        add.setProduct(product);

        return new DebtDTO(debtRepository.saveAndFlush(add));
    }

    @Override
    public DebtDTO updateDebt(DebtDTO dto) {
        Debt edit = debtRepository.findById(dto.getDebtId()).orElseThrow();
        Product product = productRepository.findByDescription(dto.getProductDescription());

        edit.setDebtId(edit.getDebtId());
        edit.setDebtDate(dto.getDebtDate());
        edit.setProductQuantity(dto.getProductQuantity());
        edit.setProductAmount(dto.getProductAmount());
        edit.setProduct(product);

        return new DebtDTO(debtRepository.save(edit));
    }

    @Override
    public PaidDTO updateDebtForPaid(PaidDTO dto, Long debtId){
        Debt debt = debtRepository.findById(debtId).orElseThrow();

        Paid addPaid = new Paid();
        addPaid.setPaymentType(dto.getPaymentType());
        addPaid.setPaymentDate(dto.getPaymentDate());
        addPaid.setProductQuantity(debt.getProductQuantity());
        addPaid.setProductAmount(debt.getProductAmount());
        addPaid.setProduct(debt.getProduct());
        addPaid.setClient(debt.getClient());
        addPaid = paidRepository.save(addPaid);

        this.debtRepository.deleteById(debt.getDebtId());
        return new PaidDTO(addPaid);
    }

    @Override
    public void deleteDebt(Long id) {
        this.debtRepository.deleteById(id);
    }
}