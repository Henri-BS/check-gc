package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.dto.StatsSalesDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Debt;
import com.altercode.checkgc.entity.Paid;
import com.altercode.checkgc.repository.ClientAccountRepository;
import com.altercode.checkgc.repository.ClientRepository;
import com.altercode.checkgc.repository.DebtRepository;
import com.altercode.checkgc.repository.PaidRepository;
import com.altercode.checkgc.service.interf.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ClientAccountRepository accountRepository;

    @Autowired
    private DebtRepository debtRepository;

    @Autowired
    private PaidRepository paidRepository;

    private void clientBaseValue(Client client) {
        for (Client c : clientRepository.findAll()) {
            if (c.getAccount().getLastModifiedDate() == null) {
                c.getAccount().setLastModifiedDate(LocalDateTime.now());
            }
        }
        double total;
        for (Debt debt : client.getDebts()) {
            total = debt.getProductQuantity() * debt.getProduct().getPrice();
            debt.getClient().getAccount().setDebtQuantity(debt.getClient().getDebts().size());
            debt.getClient().getAccount().setDebtAmount(total);
            debtRepository.save(debt);
        }
        for (Paid paid : client.getPaid()) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.getClient().getAccount().setPaidQuantity(paid.getClient().getPaid().size());
            paid.getClient().getAccount().setPaidAmount(total);
            paidRepository.save(paid);
        }
    }

    @Override
    public Page<ClientDTO> findAllClients(Pageable pageable, String name) {
        Page<Client> list = clientRepository.findAllClients(pageable, name);
        for (Client c : list) {
            clientBaseValue(c);
        }
        return list.map(ClientDTO::new);
    }

    @Override
    public ClientDTO findClientById(Long id) {
        Client client = clientRepository.findById(id).orElseThrow();
        clientBaseValue(client);
        return new ClientDTO(client);
    }


    @Override
    public StatsSalesDTO totalValuesOfSales() {
        double total;
        for (Debt debt : debtRepository.findAll()) {
            total = debt.getProductQuantity() * debt.getProduct().getPrice();
            debt.getClient().getAccount().setDebtQuantity(debt.getClient().getDebts().size());
            debt.getClient().getAccount().setDebtAmount(total);
            debtRepository.save(debt);
        }
        for (Paid paid : paidRepository.findAll()) {
            total = paid.getProductQuantity() * paid.getProduct().getPrice();
            paid.getClient().getAccount().setPaidQuantity(paid.getClient().getPaid().size());
            paid.getClient().getAccount().setPaidAmount(total);
            paidRepository.save(paid);
        }
        return accountRepository.totalValuesOfSales();
    }

    @Override
    public ClientDTO findClientByName(String name) {
        Client find = clientRepository.findClientByName(name);
        return new ClientDTO(find);
    }

    @Override
    public ClientDTO saveClient(ClientDTO dto) {

        Client add = new Client();
        add.setName(dto.getName());
        add.setAddress(dto.getAddress());
        add.setPhoneNumber(dto.getPhoneNumber());
        clientRepository.saveAndFlush(add);

        Client find = clientRepository.findById(add.getClientId()).orElseThrow();

        ClientAccount account = new ClientAccount();
        account.setClient(find);
        accountRepository.saveAndFlush(account);
        add.setAccount(account);

        return new ClientDTO(clientRepository.save(add));
    }

    @Override
    public ClientDTO updateClient(ClientDTO dto) {
        Client edit = clientRepository.findById(dto.getClientId()).orElseThrow();
        edit.setClientId(edit.getClientId());
        edit.setName(dto.getName());
        edit.setPhoneNumber(dto.getPhoneNumber());
        edit.setAddress(dto.getAddress());
        return new ClientDTO(clientRepository.save(edit));
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}
