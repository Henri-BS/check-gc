package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Product;

import java.io.Serial;
import java.io.Serializable;

public class ProductDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long productId;
    private String description;
    private Double price;
    private Integer debtQuantity;

    public ProductDTO() {
    }

    public ProductDTO(Product entity) {
        productId = entity.getProductId();
        description = entity.getDescription();
        price = entity.getPrice();
        debtQuantity = entity.getDebtQuantity();
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
}
