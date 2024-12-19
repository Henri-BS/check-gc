package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Debt;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class DebtDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long debtId;
    private LocalDate debtDate;
    private LocalDate chargeDate;
    private Double discount;
    private String debtDays;
    private Integer productQuantity;
    private Double productAmount;

    private Long clientId;
    private Long productId;
    private String clientName;
    private String productDescription;

    public DebtDTO() {
    }

    public DebtDTO(Debt entity) {
        debtId = entity.getDebtId();
        debtDate = entity.getDebtDate();
        chargeDate = entity.getChargeDate();
        discount = entity.getDiscount();
        debtDays = entity.getDebtDays();
        productQuantity = entity.getProductQuantity();
        productAmount = entity.getProductAmount();
        clientId = entity.getClient().getClientId();
        productId = entity.getProduct().getProductId();
        clientName = entity.getClient().getName();
        productDescription = entity.getProduct().getDescription();
    }

    public DebtDTO(Client client, LocalDate debtDate, Long productQuantity, Double productAmount) {
        clientId = client.getClientId();
        clientName = client.getName();
        this.debtDate = debtDate;
        this.productQuantity = Math.toIntExact(productQuantity);
        this.productAmount = productAmount;
    }

    public Long getDebtId() {
        return debtId;
    }

    public LocalDate getDebtDate() {
        return debtDate;
    }

    public LocalDate getChargeDate() {
        return chargeDate;
    }

    public Double getDiscount() {
        return discount;
    }

    public String getDebtDays() {
        return debtDays;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public Double getProductAmount() {
        return productAmount;
    }

    public Long getClientId() {
        return clientId;
    }

    public Long getProductId() {
        return productId;
    }

    public String getClientName() {
        return clientName;
    }

    public String getProductDescription() {
        return productDescription;
    }
}
