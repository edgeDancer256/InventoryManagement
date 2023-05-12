/*
 * @author Sharat C S
 */
package com.sharat.inventory.service;

import java.util.List;

import com.sharat.inventory.model.Item;

public interface ItemService {
    public Item saveItem(Item item);
    public Item getItemId(int id);
    public List<Item> getAllItems();
    public void deleteItem(Item item);
}
