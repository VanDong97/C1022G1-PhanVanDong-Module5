package com.example.be.service.impl;

import com.example.be.dto.ProductDTO;
import com.example.be.dto.ProductTypeDTO;
import com.example.be.model.Product;
import com.example.be.repository.IProductRepository;
import com.example.be.repository.IProductTypeRepository;
import com.example.be.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;
    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public Page<ProductDTO> findAll(String name, Pageable pageable) {
        Page<Product> productPage = iProductRepository.findAll(name,pageable);
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product : productPage){
            productDTO = new ProductDTO();
            productDTO.setProductType(new ProductTypeDTO());
            BeanUtils.copyProperties(product.getProductType(),productDTO.getProductType());
            BeanUtils.copyProperties(product,productDTO);
            productDTOList.add(productDTO);
        }
        return new PageImpl<>(productDTOList,pageable,productPage.getTotalElements());
    }


    @Override
    public Optional<Product> findById(int id) {
        return iProductRepository.findById(id);
    }
}
