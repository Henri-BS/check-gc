package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    private String description;

    private Double price = 0.0;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Debt> debts = new HashSet<>();

    public Product() {
    }

    public Product(Long productId, String description, Double price) {
        this.productId = productId;
        this.description = description;
        this.price = price;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Set<Debt> getDebts() {
        return debts;
    }
}
