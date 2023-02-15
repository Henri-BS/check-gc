package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ProductDTO;
import com.altercode.checkgc.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/list")
    public ResponseEntity<Page<ProductDTO>> findProductsByDescription(Pageable pageable, @RequestParam String description) {
        Page<ProductDTO> list = productService.findProductsByDescription(pageable, description);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable Long id) {
        ProductDTO find = productService.findProductById(id);
        return ResponseEntity.ok(find);
    }
}
