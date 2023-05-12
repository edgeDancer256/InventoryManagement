/*
 * @author Sharat C S
 */
package com.sharat.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Supplier {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String supp_name;
    private String supp_address;
    private String supp_phone;
    
    public Supplier() {
    }   
    
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getSupp_name() {
        return supp_name;
    }
    public void setSupp_name(String supp_name) {
        this.supp_name = supp_name;
    }
    public String getSupp_address() {
        return supp_address;
    }
    public void setSupp_address(String supp_address) {
        this.supp_address = supp_address;
    }


    public String getSupp_phone() {
        return supp_phone;
    }


    public void setSupp_phone(String supp_phone) {
        this.supp_phone = supp_phone;
    }

    
}
