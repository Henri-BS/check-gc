package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;
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

    private Long clientId;
    private Long productId;
    private String clientName;
    private String productDescription;

    public PaidDTO() {
    }

    public PaidDTO(Paid entity) {
        paidId = entity.getPaidId();
        paymentType = entity.getPaymentType();
        paymentDate = entity.getPaymentDate();
        productQuantity = entity.getProductQuantity();
        productAmount = entity.getProductAmount();
        productId = entity.getProduct().getProductId();
        clientId = entity.getClient().getClientId();
        productDescription = entity.getProduct().getDescription();
        clientName = entity.getClient().getName();
    }

    public PaidDTO(Client client, Long productQuantity, Double productAmount) {
        clientName = client.getName();
        this.productQuantity = Math.toIntExact(productQuantity);
        this.productAmount = productAmount;
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

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
}
