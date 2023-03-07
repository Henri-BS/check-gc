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

    private Long clientId;
    private Long product;
    private String status;

    public DebtDTO() {
    }

    public DebtDTO(Debt entity) {
        debtId = entity.getDebtId();
        debtDate = entity.getDebtDate();
        productQuantity = entity.getProductQuantity();
        productAmount = entity.getProductAmount();
        clientId = entity.getClient().getClientId();
        product = entity.getProduct().getProductId();
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

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getProduct() {
        return product;
    }

    public void setProduct(Long product) {
        this.product = product;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
