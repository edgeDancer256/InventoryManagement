/*
 * @author Sharat C S
 */
package com.sharat.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sharat.inventory.model.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Integer>{
    
}
