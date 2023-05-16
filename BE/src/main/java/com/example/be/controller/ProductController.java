package com.example.be.controller;

import com.example.be.dto.ProductDTO;
import com.example.be.service.IProductService;
import com.example.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @GetMapping("")
    public Page<ProductDTO> list(@PageableDefault(size = 3) Pageable pageable, @RequestParam(required = false, defaultValue = "") String name) {
        return iProductService.findProductByName(pageable, name);
    }

    @PostMapping("")
    public ResponseEntity<?> saveBook(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            iProductService.addProduct(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer id) {
        iProductService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO getProduct(@PathVariable Integer id) {
        return iProductService.findById(id);
    }

    @PutMapping("")
    public ResponseEntity<?> updateProduct(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            iProductService.update(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
