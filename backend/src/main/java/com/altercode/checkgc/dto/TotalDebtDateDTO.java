package com.altercode.checkgc.dto;

import java.time.LocalDate;

public class TotalDebtDateDTO {

    private LocalDate debtDate;
    private Double productAmount;
    private Long productQuantity;

    public TotalDebtDateDTO() {

    }

    public TotalDebtDateDTO(LocalDate debtDate, Double productAmount, Long productQuantity) {
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
