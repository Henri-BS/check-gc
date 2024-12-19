package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.DebtDTO;
import com.altercode.checkgc.dto.PaidDTO;
import com.altercode.checkgc.entity.*;
import com.altercode.checkgc.repository.*;
import com.altercode.checkgc.service.interf.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DebtServiceImpl implements DebtService {

    @Autowired
    private DebtRepository debtRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PaidRepository paidRepository;

    @Autowired
    private ClientAccountRepository account;

    private void debtBaseValue() {
        double total;
        for (Debt debt : debtRepository.findAll()) {
            total = debt.getProductQuantity() * debt.getProduct().getPrice();
            debt.setProductAmount(total);
            if (debt.getChargeDate() == null) {
                debt.setChargeDate(debt.getDebtDate().plusMonths(1));
            }
            LocalDate debtDate = debt.getChargeDate();
            LocalDateTime now = LocalDateTime.now();
            Period period = Period.between(debtDate, LocalDate.from(now));


           String years = period.getYears() <= 1 ? period.getYears() + " ano, " : period.getYears() + " anos, ";
           String months = period.getMonths() <= 1 ? period.getMonths() + " mês, " : period.getMonths() + " meses, ";
           String days = period.getDays() <= 1 ? period.getDays() + " dia " : period.getDays() + " dias ";

            debt.setDebtDays(years + months + days);
            debtRepository.save(debt);
        }
    }

    @Override
    public Page<DebtDTO> findAll(Pageable pageable) {
        Page<Debt> page = debtRepository.findAll(pageable);
        debtBaseValue();
        return page.map(DebtDTO::new);
    }

    @Override
    public List<DebtDTO> findByClient(Client client) {
        List<Debt> list = debtRepository.findByClient(client);
        debtBaseValue();
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<DebtDTO> findByDebtDate(String debtDate) {
        LocalDate date = LocalDate.parse(debtDate);
        List<Debt> list = debtRepository.findByDebtDate(date);
        return list.stream().map(DebtDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<DebtDTO> debtGroupByDate(Client client) {
        debtBaseValue();
        return debtRepository.debtGroupByDate(client);
    }

    @Override
    public DebtDTO findDebtById(Long id) {
        Debt find = debtRepository.findById(id).orElseThrow();
        debtBaseValue();
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
        add.setDiscount(dto.getDiscount());
        add.setProduct(product);
        debtRepository.saveAndFlush(add);
        double total;
        total = add.getProductQuantity() * add.getProduct().getPrice();
        add.setProductAmount(total);
        if (add.getChargeDate() == null) {
            add.setChargeDate(add.getDebtDate().plusMonths(1));
        }
        return new DebtDTO(debtRepository.save(add));
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
    public PaidDTO updateDebtForPaid(PaidDTO dto, Long debtId) {
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