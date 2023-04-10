package com.altercode.checkgc.entity;

import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "tb_client_account")
public class ClientAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "debt_amount")
    private Double debtAmount = 0.0;

    @Column(name = "debt_quantity")
    private Integer debtQuantity = 0;

    @Column(name = "paid_amount")
    private Double paidAmount = 0.0;

    @Column(name = "paid_quantity")
    private Integer paidQuantity = 0;

    @LastModifiedDate
    @Column(name = "last_modified_date")
    private LocalDateTime lastModifiedDate = LocalDateTime.now();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id")
    private Client client;

    public ClientAccount() {
    }

    public ClientAccount(Long accountId, Double debtAmount, Integer debtQuantity, LocalDateTime lastModifiedDate, Client client) {
        this.accountId = accountId;
        this.debtAmount = debtAmount;
        this.debtQuantity = debtQuantity;
        this.lastModifiedDate = lastModifiedDate;
        this.client = client;
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

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
