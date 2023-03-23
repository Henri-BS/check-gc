package com.altercode.checkgc.entity;

import org.hibernate.annotations.LazyCollection;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

    private Integer debtQuantity;

    @OneToMany(mappedBy = "product")
    private List<Debt> debts = new ArrayList<>();


    public Product() {
    }

    public Product(Long productId, String description, Double price, Integer debtQuantity) {
        this.productId = productId;
        this.description = description;
        this.price = price;
        this.debtQuantity = debtQuantity;
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

    public Integer getDebtQuantity() {
        return debtQuantity;
    }

    public void setDebtQuantity(Integer debtQuantity) {
        this.debtQuantity = debtQuantity;
    }

    public List<Debt> getDebts() {
        return debts;
    }

}
