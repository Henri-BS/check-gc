package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {

    Page<ProductDTO> findAllProducts(Pageable pageable);

    Page<ProductDTO> findProductsByDescription(Pageable pageable, String description);

    ProductDTO findProductById(Long id);

    ProductDTO saveProduct(ProductDTO dto);

    ProductDTO updateProduct(ProductDTO dto);

    ProductDTO updateProductValues(ProductDTO dto);

    void deleteProduct(Long id);
}
