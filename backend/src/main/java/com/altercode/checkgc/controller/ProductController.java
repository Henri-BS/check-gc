package com.altercode.checkgc.controller;

import com.altercode.checkgc.dto.ProductDTO;
import com.altercode.checkgc.service.interf.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<Page<ProductDTO>> findAllProducts(Pageable pageable) {
        Page<ProductDTO> list = productService.findAllProducts(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/list-by-description")
    public ResponseEntity<Page<ProductDTO>> findProductsByDescription(Pageable pageable, @RequestParam String description) {
        Page<ProductDTO> list = productService.findProductsByDescription(pageable, description);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findProductById(@PathVariable Long id) {
        ProductDTO find = productService.findProductById(id);
        return ResponseEntity.ok(find);
    }

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> saveProduct(@RequestBody ProductDTO dto) {
        ProductDTO add = productService.saveProduct(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO dto){
        ProductDTO edit = productService.updateProduct(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id){
        this.productService.deleteProduct(id);
    }
}
