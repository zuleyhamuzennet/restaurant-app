package com.ba.restaurantapp.controller;

import com.ba.restaurantapp.entity.Cartt;
import com.ba.restaurantapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/carts")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/list")
    public List<Cartt> listAllCarts(){
        return cartService.listAllCarts();
    }

    @PostMapping("/add")
    public List<Cartt> addCart(@RequestBody Cartt cartt){
        return cartService.addCart(cartt);
    }

}
