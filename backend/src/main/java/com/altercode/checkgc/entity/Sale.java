package com.altercode.checkgc.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
public class Sale {


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

    public Sale() {
    }

    public Sale(Integer productQuantity, Double productAmount, Product product, Client client) {
        this.productQuantity = productQuantity;
        this.productAmount = productAmount;
        this.product = product;
        this.client = client;
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
