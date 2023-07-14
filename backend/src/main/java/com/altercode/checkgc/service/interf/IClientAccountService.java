package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.SumDebtQuantityDTO;

public interface IClientAccountService {


    SumDebtQuantityDTO totalValuesOfSales();

    void deleteAccount(Long id);
}
