package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<ProductDTO> findProductsByDescription(Pageable pageable, String description);

    ProductDTO findProductById(Long id);

    ProductDTO saveProduct(ProductDTO dto);
}
