package com.ba.restaurantapp.repository;

import com.ba.restaurantapp.entity.Cartt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cartt, Long> {

}
