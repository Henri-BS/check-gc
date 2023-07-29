package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ProductDTO;
import com.altercode.checkgc.entity.Product;
import com.altercode.checkgc.repository.ProductRepository;
import com.altercode.checkgc.service.interf.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Page<ProductDTO> findAllProducts(Pageable pageable) {
        Page<Product> page = productRepository.findAll(pageable);
        return page.map(ProductDTO::new);
    }

    @Override
    public Page<ProductDTO> findProductsByDescription(Pageable pageable, String description) {
        Page<Product>  page = productRepository.findAllProducts(pageable, description);
        return page.map(ProductDTO::new);
    }

    @Override
    public ProductDTO findProductById(Long id) {
    Product find = productRepository.findById(id).orElseThrow();
    return new ProductDTO(find);
    }

    @Override
    public ProductDTO saveProduct(ProductDTO dto) {
        Product add = new Product();
        add.setDescription(dto.getDescription());
        add.setPrice(dto.getPrice());
        return new ProductDTO(productRepository.saveAndFlush(add));
    }

    @Override
    public ProductDTO updateProduct(ProductDTO dto) {
        Product edit = productRepository.findById(dto.getProductId()).orElseThrow();

        edit.setProductId(edit.getProductId());
        edit.setDescription(dto.getDescription());
        edit.setPrice(dto.getPrice());

        return new ProductDTO(productRepository.save(edit));
    }

    @Override
    public ProductDTO updateProductValues(ProductDTO dto) {
        Product product = productRepository.findById(dto.getProductId()).orElseThrow();

        product.setDebtQuantity(product.getDebts().size());

        return new ProductDTO(productRepository.save(product));
    }

    @Override
    public void deleteProduct(Long id) {
        this.productRepository.deleteById(id);
    }
}
