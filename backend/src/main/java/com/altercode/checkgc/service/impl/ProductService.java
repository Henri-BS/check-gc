package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ProductDTO;
import com.altercode.checkgc.entity.Product;
import com.altercode.checkgc.repository.ProductRepository;
import com.altercode.checkgc.service.interf.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class ProductService implements IProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Page<ProductDTO> findProductsByDescription(Pageable pageable, @RequestParam String description) {
        Page<Product>  list = productRepository.findProductsByDescription(pageable, description);
        return list.map(ProductDTO::new);
    }


}
