package com.ba.restaurantapp.service;

import com.ba.restaurantapp.entity.Cartt;
import com.ba.restaurantapp.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public List<Cartt> listAllCarts(){
        return cartRepository.findAll();
    }

    public List<Cartt> addCart(Cartt cartt){
         cartRepository.save(cartt);
         return listAllCarts();
    }

}
