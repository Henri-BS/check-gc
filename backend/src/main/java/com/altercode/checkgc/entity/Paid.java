package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_paid")
public class Paid extends Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paid_id")
    private Long paidId;

    @Column(name = "payment_date")
    private LocalDate paymentDate;

    @Column(name = "payment_type")
    private String paymentType;

    public Paid() {
    }

    public Paid(Integer productQuantity, Double productAmount, Product product, Client client, LocalDate paymentDate, String paymentType) {
        super(productQuantity, productAmount, product, client);
        this.paymentDate = paymentDate;
        this.paymentType = paymentType;
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
}
