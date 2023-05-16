package com.example.be.dto;

import com.example.be.model.ProductType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class ProductDTO implements Validator {
    private Integer id;

    @NotBlank(message = "Không được để trống !")
    @Size(max = 100,message = "Không vượt quá 100 ký tự !")
    private String name;

    private String date;

    @NotNull(message = "Không được để trống !")
    @Pattern(regexp = "^[0-9]+$", message = "Số lượng phải là số nguyên dương")
    private Integer quantity;

    private ProductType productType;

    public ProductDTO() {
    }

    public Integer getId() {
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
