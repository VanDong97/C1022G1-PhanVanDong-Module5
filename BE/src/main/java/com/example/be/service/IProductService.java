package com.example.be.service;

import com.example.be.dto.ProductDTO;
import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IProductService {

    Page<ProductDTO> findProductByName(Pageable pageable, String name);
    void addProduct(ProductDTO productDTO);
    void delete (Integer id);
    ProductDTO findById(Integer id);
    void update(ProductDTO productDTO);
}
