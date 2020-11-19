package com.ba.restaurantapp.controller;

import com.ba.restaurantapp.entity.Product;
import com.ba.restaurantapp.service.BackOfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class BackOfficeController {
    @Autowired
    BackOfficeService backOfficeService;


    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product){

        backOfficeService.addProduct(product);
        return product;
    }
    @GetMapping("/list")
    public List<Product> listAllProduct(){
        return backOfficeService.listAllProduct();
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id){

        return backOfficeService.getProductById(id);
    }

    @PutMapping("/update/{id}")
    public Product updateProduct(@RequestBody Product product){
        return backOfficeService.updateProduct(product);
    }

    @DeleteMapping("delete/{id}")
    public void deleteProduct(@PathVariable long id) {
        backOfficeService.deleteProduct(id);
    }


    @GetMapping("/category")
    public List<String> getByCategories(){
        return backOfficeService.getProductCategory();
    }

    @GetMapping("/category/list")
    public List<Product> getByCategoryId(@RequestParam String category){
        return backOfficeService.getProductByCategory(category);

    }

}
