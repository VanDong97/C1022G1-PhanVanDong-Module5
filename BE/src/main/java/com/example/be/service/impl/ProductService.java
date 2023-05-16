package com.example.be.service.impl;

import com.example.be.dto.ProductDTO;
import com.example.be.model.Product;
import com.example.be.repository.IProductRepository;
import com.example.be.repository.IProductTypeRepository;
import com.example.be.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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
    public Page<ProductDTO> findProductByName(Pageable pageable, String name) {
        Page<Product> productPage = iProductRepository.findProductByName(pageable, name);
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product : productPage) {
            productDTO = new ProductDTO();
            BeanUtils.copyProperties(product, productDTO);
            productDTOList.add(productDTO);
        }
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }

    @Override
    public void addProduct(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        iProductRepository.addProduct(product.getDate(),
                product.getName(),
                Integer.valueOf(product.getQuantity()),
                product.getProductType().getId());
    }

    @Override
    public void delete(Integer id) {
        iProductRepository.deleteProduct(id);
    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = iProductRepository.findProductById(id);
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    @Override
    public void update(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        iProductRepository.updateProduct(
                product.getDate(),
                product.getName(),
                Integer.valueOf(product.getQuantity()),
                product.getProductType().getId(),
                product.getId());
    }
}
