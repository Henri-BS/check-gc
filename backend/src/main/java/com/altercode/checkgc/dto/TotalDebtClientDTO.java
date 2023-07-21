package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;

public class TotalDebtClientDTO {

    private String clientName;
    private Long debtDate;
    private Double productAmount;
    private Long productQuantity;

    public TotalDebtClientDTO(Client client, Long debtDate, Double productAmount, Long productQuantity) {
        clientName = client.getName();
        this.debtDate = debtDate;
        this.productAmount = productAmount;
        this.productQuantity = productQuantity;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public Long getDebtDate() {
        return debtDate;
    }

    public void setDebtDate(Long debtDate) {
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
