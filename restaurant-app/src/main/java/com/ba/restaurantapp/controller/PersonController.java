package com.ba.restaurantapp.controller;

import com.ba.restaurantapp.entity.Cartt;
import com.ba.restaurantapp.entity.Person;
import com.ba.restaurantapp.service.PersonSrvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
public class PersonController {
    @Autowired
    PersonSrvice personSrvice;

    @GetMapping("/list")
    public List<Person> getAllPersons(){
        return  personSrvice.listAllPersons();
    }

}
