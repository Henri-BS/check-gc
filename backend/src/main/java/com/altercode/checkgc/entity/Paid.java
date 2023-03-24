package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_paid")
public class Paid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paid_id")
    private Long paidId;

    @Column(name = "payment_date")
    private LocalDate paymentDate;

    @Column(name = "payment_type")
    private String paymentType;

    @Column(name = "product_quantity")
    private Integer productQuantity = 0;

    @Column(name = "product_amount")
    private Double productAmount = 0.0;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    public Paid() {
    }

    public Paid(Long paidId, LocalDate paymentDate, String paymentType, Integer productQuantity, Double productAmount, Product product, Client client) {
        this.paidId = paidId;
        this.paymentDate = paymentDate;
        this.paymentType = paymentType;
        this.productQuantity = productQuantity;
        this.productAmount = productAmount;
        this.product = product;
        this.client = client;
    }

    public Long getPaidId() {
        return paidId;
    }

    public void setPaidId(Long paidId) {
        this.paidId = paidId;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
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

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
