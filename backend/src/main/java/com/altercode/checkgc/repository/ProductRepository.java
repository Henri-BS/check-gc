package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
