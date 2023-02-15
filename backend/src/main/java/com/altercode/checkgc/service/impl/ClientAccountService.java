package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ClientAccountDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.entity.Debt;
import com.altercode.checkgc.repository.ClientAccountRepository;
import com.altercode.checkgc.service.interf.IClientAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientAccountService implements IClientAccountService {

    @Autowired
    private ClientAccountRepository accountRepository;

    @Override
    public ClientAccountDTO findAccountByClient(Client client) {
        ClientAccount find = accountRepository.findAccountByClient(client);
        return new ClientAccountDTO(find);
    }

    @Override
    public ClientAccountDTO updateAccountTotalValues(ClientAccountDTO dto) {
        ClientAccount account = accountRepository.findById(dto.getAccountId()).orElseThrow();

        double total = 0.0;
        int quantity = 0;
        for (Debt d : account.getDebts()) {
            total = d.getProductQuantity() * d.getProductAmount();
            quantity = quantity + d.getProductQuantity();
        }
        account.setDebtQuantity(quantity);
        account.setDebtAmount(total);
        accountRepository.save(account);

        return new ClientAccountDTO(account);
    }
}
