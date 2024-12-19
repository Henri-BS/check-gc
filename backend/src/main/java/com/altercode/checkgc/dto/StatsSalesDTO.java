package com.altercode.checkgc.dto;

import java.io.Serial;
import java.io.Serializable;

public class StatsSalesDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Double debtAmount;
    private Double debtMaxValue;
    private Long debtQuantity;
    private Double paidAmount;
    private Double paidMaxValue;
    private Long paidQuantity;

    public StatsSalesDTO(Double debtAmount, Double debtMaxValue, Long debtQuantity, Double paidAmount, Double paidMaxValue, Long paidQuantity) {
        this.debtAmount = debtAmount;
        this.debtMaxValue = debtMaxValue;
        this.debtQuantity = debtQuantity;
        this.paidAmount = paidAmount;
        this.paidMaxValue = paidMaxValue;
        this.paidQuantity = paidQuantity;
    }

    public Double getDebtAmount() {
        return debtAmount;
    }

    public Double getDebtMaxValue() {
        return debtMaxValue;
    }

    public Long getDebtQuantity() {
        return debtQuantity;
    }

    public Double getPaidAmount() {
        return paidAmount;
    }

    public Double getPaidMaxValue() {
        return paidMaxValue;
    }

    public Long getPaidQuantity() {
        return paidQuantity;
    }
}
