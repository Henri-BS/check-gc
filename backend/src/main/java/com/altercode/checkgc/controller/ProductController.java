package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ProductDTO;
import com.altercode.checkgc.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/list")
    public ResponseEntity<Page<ProductDTO>> findProductsByDescription(Pageable pageable, String description) {
        Page<ProductDTO> list = productService.findProductsByDescription(pageable, description);
        return ResponseEntity.ok(list);
    }
}
