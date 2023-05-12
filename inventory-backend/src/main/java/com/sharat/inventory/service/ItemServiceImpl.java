/*
 * @author Sharat C S
 * 
 */
package com.sharat.inventory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharat.inventory.model.Item;
import com.sharat.inventory.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;
    @Override
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }
    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
    @Override
    public void deleteItem(Item item) { 
        itemRepository.delete(item);;     
    }
    @Override
    public Item getItemId(int id) {
        Optional<Item> it1 = itemRepository.findById(id);

        return it1.get();
    }
    
    

}
