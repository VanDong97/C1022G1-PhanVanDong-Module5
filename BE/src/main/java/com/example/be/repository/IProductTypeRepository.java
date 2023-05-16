package com.example.be.repository;

import com.example.be.model.Product;
import com.example.be.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductTypeRepository extends JpaRepository<ProductType,Integer> {

    @Query(value = "select * from product_type",nativeQuery = true)
    List<ProductType> findALlProductType();
}
