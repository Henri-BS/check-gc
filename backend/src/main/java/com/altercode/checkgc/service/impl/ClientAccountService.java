package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ClientAccountDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.ClientAccount;
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
}
