package com.altercode.checkgc.repository;

import com.altercode.checkgc.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT obj FROM Product obj WHERE UPPER(obj.description) " +
            "LIKE UPPER(concat('%', ?1, '%')) ORDER BY (obj.description)")
    Page<Product> findAllByDescriptionLikeIgnoreCase(Pageable pageable, String description);

    Product findByDescription(String description);

}
