package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.SumDebtQuantityDTO;
import com.altercode.checkgc.repository.ClientAccountRepository;
import com.altercode.checkgc.repository.ClientRepository;
import com.altercode.checkgc.service.interf.IClientAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientAccountService implements IClientAccountService {

    @Autowired
    private ClientAccountRepository accountRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public SumDebtQuantityDTO totalValuesOfSales(){
        return accountRepository.totalValuesOfSales();
    }

    @Override
    public void deleteAccount(Long id) {
        this.accountRepository.deleteById(id);
    }
}
