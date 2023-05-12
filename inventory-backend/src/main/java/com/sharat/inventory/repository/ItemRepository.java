/*
* @author Sharat C S
*/
package com.sharat.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sharat.inventory.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    
}
