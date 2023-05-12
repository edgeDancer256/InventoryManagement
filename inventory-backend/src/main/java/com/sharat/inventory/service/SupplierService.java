/*
 * @author Sharat C S
 */
package com.sharat.inventory.service;

import java.util.List;

import com.sharat.inventory.model.Supplier;

public interface SupplierService {
    public Supplier saveSupplier(Supplier supplier);
    public List<Supplier> getAllSuppliers();
    public void deleteSupplier(Supplier supplier);
}
