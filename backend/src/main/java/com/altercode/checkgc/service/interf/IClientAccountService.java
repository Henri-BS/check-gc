package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ClientAccountDTO;
import com.altercode.checkgc.dto.SumDebtQuantityDTO;
import com.altercode.checkgc.entity.Client;

public interface IClientAccountService {


    SumDebtQuantityDTO totalDebtQuantity();

    void deleteAccount(Long id);
}
