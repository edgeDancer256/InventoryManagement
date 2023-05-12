/*
 * @author Sharat C S
 */
package com.sharat.inventory.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharat.inventory.model.Supplier;
import com.sharat.inventory.repository.SupplierRepository;

@Service
public class SupplierServiceImpl implements SupplierService{
    
    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public Supplier saveSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    @Override
    public void deleteSupplier(Supplier supplier) {
        supplierRepository.delete(supplier);        
    }

    
    
}
