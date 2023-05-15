package com.example.be.service;

import com.example.be.dto.ProductDTO;
import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IProductService {

    Page<ProductDTO> findAll(String name , Pageable pageable);

    Optional<Product> findById(int id);
}
