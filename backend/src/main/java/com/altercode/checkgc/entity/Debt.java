package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_debt")
public class Debt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "debt_id")
    private Long debtId;

    @Column(name = "debt_date")
    private LocalDate debtDate;

    @Column(name = "product_quantity")
    private Integer productQuantity;

    @Column(name = "product_amount")
    private Double productAmount;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id")
    private ClientAccount account;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "status_id")
    private Status status;

    public Debt() {
    }

    public Debt(Long debtId, LocalDate debtDate, Integer productQuantity, Double productAmount, ClientAccount account, Product product, Status status) {
        this.debtId = debtId;
        this.debtDate = debtDate;
        this.productQuantity = productQuantity;
        this.productAmount = productAmount;
        this.account = account;
        this.product = product;
        this.status = status;
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

    public ClientAccount getAccount() {
        return account;
    }

    public void setAccount(ClientAccount account) {
        this.account = account;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
