package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;

import java.time.LocalDate;

public class TotalDebtDateDTO {

    private String clientName;
    private LocalDate debtDate;
    private Double productAmount;
    private Long productQuantity;

    public TotalDebtDateDTO( LocalDate debtDate, Double productAmount, Long productQuantity) {
        this.debtDate = debtDate;
        this.productAmount = productAmount;
        this.productQuantity = productQuantity;
    }

    public LocalDate getDebtDate() {
        return debtDate;
    }

    public void setDebtDate(LocalDate debtDate) {
        this.debtDate = debtDate;
    }

    public Double getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(Double productAmount) {
        this.productAmount = productAmount;
    }

    public Long getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Long productQuantity) {
        this.productQuantity = productQuantity;
    }
}
