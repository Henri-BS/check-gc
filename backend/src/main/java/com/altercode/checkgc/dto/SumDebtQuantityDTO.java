package com.altercode.checkgc.dto;

import javax.persistence.Column;
import java.io.Serial;
import java.io.Serializable;

public class SumDebtQuantityDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Double debtAmount;
    private Long debtQuantity;

    public SumDebtQuantityDTO(Double debtAmount, Long debtQuantity) {
        this.debtAmount = debtAmount;
        this.debtQuantity = debtQuantity;
    }

    public Double getDebtAmount() {
        return debtAmount;
    }

    public void setDebtAmount(Double debtAmount) {
        this.debtAmount = debtAmount;
    }

    public Long getDebtQuantity() {
        return debtQuantity;
    }

    public void setDebtQuantity(Long debtQuantity) {
        this.debtQuantity = debtQuantity;
    }
}
