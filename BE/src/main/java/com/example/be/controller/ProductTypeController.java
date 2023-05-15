package com.example.be.controller;

import com.example.be.dto.ProductTypeDTO;
import com.example.be.model.ProductType;
import com.example.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product-type")
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private IProductTypeService iProductTypeService;
    @GetMapping("")
    public List<ProductType> showListProductType(){
        return iProductTypeService.findAll();
    }
}
