package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.ClientAccount;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

public class ClientAccountDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long accountId;
    private Double debtAmount;
    private Integer debtQuantity;
    private Double paidAmount;
    private Integer paidQuantity;
    private LocalDateTime lastModifiedDate;
    private String clientName;

    public ClientAccountDTO() {
    }

    public ClientAccountDTO(ClientAccount entity) {
        accountId = entity.getAccountId();
        debtAmount = entity.getDebtAmount();
        debtQuantity = entity.getDebtQuantity();
        paidAmount = entity.getDebtAmount();
        paidQuantity = entity.getDebtQuantity();
        lastModifiedDate = entity.getLastModifiedDate();
        clientName = entity.getClient().getName();
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Double getDebtAmount() {
        return debtAmount;
    }

    public void setDebtAmount(Double debtAmount) {
        this.debtAmount = debtAmount;
    }

    public Integer getDebtQuantity() {
        return debtQuantity;
    }

    public void setDebtQuantity(Integer debtQuantity) {
        this.debtQuantity = debtQuantity;
    }

    public Double getPaidAmount() {
        return paidAmount;
    }

    public void setPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
    }

    public Integer getPaidQuantity() {
        return paidQuantity;
    }

    public void setPaidQuantity(Integer paidQuantity) {
        this.paidQuantity = paidQuantity;
    }

    public LocalDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(LocalDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }
}
