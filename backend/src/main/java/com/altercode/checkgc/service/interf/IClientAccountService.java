package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ClientAccountDTO;
import com.altercode.checkgc.entity.Client;

public interface IClientAccountService {
/*
    ClientAccountDTO findAccountByClient(Client client);
*/

    void deleteAccount(Long id);
}
