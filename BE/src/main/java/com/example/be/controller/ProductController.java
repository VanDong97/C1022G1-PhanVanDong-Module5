package com.example.be.controller;

import com.example.be.dto.ProductDTO;
import com.example.be.service.IProductService;
import com.example.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @GetMapping("")
    public Page<ProductDTO> showListProduct(@PageableDefault(size = 3) Pageable pageable, @RequestParam(defaultValue = "") String name){
        Page<ProductDTO> productDTOPage = iProductService.findAll(name,pageable);
        return productDTOPage;
    }
}
