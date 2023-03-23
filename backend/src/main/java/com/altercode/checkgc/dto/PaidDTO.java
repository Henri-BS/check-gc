package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Paid;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

public class PaidDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long paidId;
    private String paymentType;
    private LocalDate paymentDate;
    private Integer productQuantity;
    private Double productAmount;

    public PaidDTO() {
    }

    public PaidDTO(Paid entity) {
        paidId = entity.getPaidId();
        paymentType = entity.getPaymentType();
        paymentDate = entity.getPaymentDate();
        productQuantity = entity.getProductQuantity();
        productAmount = entity.getProductAmount();
    }

    public Long getPaidId() {
        return paidId;
    }

    public void setPaidId(Long paidId) {
        this.paidId = paidId;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
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
