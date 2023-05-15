package com.example.be.dto;

import com.example.be.model.Product;

import java.util.Set;

public class ProductTypeDTO {
    private int id;
    private String name;
    private Set<Product> productSet;

    public ProductTypeDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Product> getProductSet() {
        return productSet;
    }

    public void setProductSet(Set<Product> productSet) {
        this.productSet = productSet;
    }
}
