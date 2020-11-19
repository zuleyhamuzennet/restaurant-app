package com.ba.restaurantapp.service;

import com.ba.restaurantapp.entity.Cartt;
import com.ba.restaurantapp.entity.Person;
import com.ba.restaurantapp.entity.Product;
import com.ba.restaurantapp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonSrvice {

    @Autowired
    PersonRepository personRepository;

    public List<Person> listAllPersons(){
        List<Person> allPersons= new ArrayList<>();
        personRepository.findAll().forEach(person-> allPersons.add((Person) person));
        return allPersons;
    }



}
