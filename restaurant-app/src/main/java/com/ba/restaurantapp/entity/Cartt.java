package com.ba.restaurantapp.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
public class Cartt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private long productID;
    private long cartName;
    private long cartPiece;
    private long cartPrice;
    private String paymentType;
    @Column
    private Date cartDate= new Timestamp(System.currentTimeMillis());


    public Cartt() {

    }

    public Cartt( long cartName, long cartPiece, long cartPrice, String paymentType) {

        this.cartName = cartName;
        this.cartPiece = cartPiece;
        this.cartPrice = cartPrice;
        this.paymentType = paymentType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProductID() {
        return productID;
    }

    public void setProductID(long productID) {
        this.productID = productID;
    }

    public long getCartName() {
        return cartName;
    }

    public void setCartName(long cartName) {
        this.cartName = cartName;
    }

    public long getCartPiece() {
        return cartPiece;
    }

    public void setCartPiece(long cartPiece) {
        this.cartPiece = cartPiece;
    }

    public long getCartPrice() {
        return cartPrice;
    }

    public void setCartPrice(long cartPrice) {
        this.cartPrice = cartPrice;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Date getCartDate() {
        return cartDate;
    }

    public void setCartDate(Date cartDate) {
        this.cartDate = cartDate;
    }
}
