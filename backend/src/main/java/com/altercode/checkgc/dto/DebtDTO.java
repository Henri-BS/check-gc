package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Debt;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

public class DebtDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long debtId;
    private LocalDate debtDate;
    private Integer productQuantity;
    private Double productAmount;

    private String clientName;
    private String productDescription;
    private String status;

    public DebtDTO() {
    }

    public DebtDTO(Debt entity) {
        debtId = entity.getDebtId();
        debtDate = entity.getDebtDate();
        productQuantity = entity.getProductQuantity();
        productAmount = entity.getProductAmount();
        clientName = entity.getClient().getName();
        productDescription = entity.getProduct().getDescription();
        status = entity.getStatus();
    }

    public Long getDebtId() {
        return debtId;
    }

    public void setDebtId(Long debtId) {
        this.debtId = debtId;
    }

    public LocalDate getDebtDate() {
        return debtDate;
    }

    public void setDebtDate(LocalDate debtDate) {
        this.debtDate = debtDate;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    public Double getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(Double productAmount) {
        this.productAmount = productAmount;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
