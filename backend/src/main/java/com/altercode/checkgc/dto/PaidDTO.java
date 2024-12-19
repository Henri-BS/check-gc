package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.Paid;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;


@JsonInclude(JsonInclude.Include.NON_NULL)
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

    public PaidDTO(Client client, LocalDate paymentDate, Long productQuantity, Double productAmount) {
        clientId = client.getClientId();
        clientName = client.getName();
        this.paymentDate = paymentDate;
        this.productQuantity = Math.toIntExact(productQuantity);
        this.productAmount = productAmount;
    }

    public Long getPaidId() {
        return paidId;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
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
