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

import com.sharat.inventory.model.Item;
import com.sharat.inventory.service.ItemService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {
    @Autowired
    private ItemService itemService;

    @PostMapping("/add")
    public String add(@RequestBody Item item) {
        itemService.saveItem(item);
        return "New item added";
    }

    @GetMapping("/getItems")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @DeleteMapping("/delete")
    @Transactional
    public void deleteItem(@RequestBody Item item) {
        itemService.deleteItem(item);
    }

    @GetMapping("/get-id")
    public Item getItemId(@RequestBody int id) {
        return itemService.getItemId(id);
    }
}
