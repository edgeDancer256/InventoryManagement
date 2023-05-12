/*
 * @author Sharat C S
 */
package com.sharat.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Item {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String item_name;
    private int item_number;
    private int item_cost;
    private int item_mrp;
    private String item_supplier;
    
    
    public Item() {
    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getItem_name() {
        return item_name;
    }


    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }


    public int getItem_number() {
        return item_number;
    }


    public void setItem_number(int item_number) {
        this.item_number = item_number;
    }

    public int getItem_cost() {
        return item_cost;
    }


    public void setItem_cost(int item_cost) {
        this.item_cost = item_cost;
    }


    public int getItem_mrp() {
        return item_mrp;
    }


    public void setItem_mrp(int item_mrp) {
        this.item_mrp = item_mrp;
    }


    public String getItem_supplier() {
        return item_supplier;
    }


    public void setItem_supplier(String item_supplier) {
        this.item_supplier = item_supplier;
    }

    

}
