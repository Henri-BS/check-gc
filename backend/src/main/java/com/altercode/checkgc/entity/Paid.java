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

    public Paid() {
    }

    public Paid(Long paidId, LocalDate paymentDate, String paymentType, Integer productQuantity, Double productAmount) {
        this.paidId = paidId;
        this.paymentDate = paymentDate;
        this.paymentType = paymentType;
        this.productQuantity = productQuantity;
        this.productAmount = productAmount;
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
}
