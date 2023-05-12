/*
 * @author Sharat C S
 */
package com.sharat.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharat.inventory.model.Supplier;
import com.sharat.inventory.service.SupplierService;

@RestController
@RequestMapping("/supplier")
@CrossOrigin
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @PostMapping("/add")
    public String add(@RequestBody Supplier supplier) {
        supplierService.saveSupplier(supplier);
        return "New Supplier Added";
    }

    @GetMapping("/getSuppliers")
    public List<Supplier> getAllSuppliers() {
        return supplierService.getAllSuppliers();
    }

    @DeleteMapping("/delete")
    public void deleteSupplier(@RequestBody Supplier supplier) {
        supplierService.deleteSupplier(supplier);
    }
}
