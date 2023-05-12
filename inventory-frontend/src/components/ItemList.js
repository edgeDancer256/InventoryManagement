/*
    @author Sharat C S
*/
import React, { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Input, Paper, TextField } from '@material-ui/core';
import { Stack } from '@mui/material';
import { DeleteForever } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function ItemList() {

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [dialog, setDialog] = useState(false);
    const [sellNo, setSellNo] = useState('');
    const [itemSell, setItemSell] = useState('');
    var item1;
    var item1_id;
    var item1_name;
    var item1_number;
    var item1_cost;
    var item1_mrp;
    var item1_supplier;

    var sellItem;

    const handleDialogOpen = (item) => {
        setItemSell(item);
        
        setDialog(true);
    };

    const handleDialogClose = () => {
        setDialog(false);
    };

    const handleSell = async (sellNo) => {

        
        item1 = itemSell;
        item1 = JSON.stringify(item1);
        item1_id = JSON.parse(item1).id
        item1_name = JSON.parse(item1).item_name
        item1_number = JSON.parse(item1).item_number
        item1_cost = JSON.parse(item1).item_cost
        item1_mrp = JSON.parse(item1).item_mrp
        item1_supplier = JSON.parse(item1).item_supplier
        console.log(item1_number)
        const item1_number_update = item1_number - Number(sellNo);
        sellItem = {id:item1_id, "item_name": item1_name,
                    "item_number": item1_number_update,
                    "item_cost": item1_cost,
                    "item_mrp": item1_mrp,
                    "item_supplier": item1_supplier}
        
        
        await fetch("http://localhost:8080/item/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(sellItem)
        }).then(() => {
            console.log("Item Updated")
        })
        setDialog(false);
        navigate(0);
    };

    const handleItemDelete = (item) => {
        fetch("http://localhost:8080/item/delete", {
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item)
        }).then(() => {
            navigate(0);
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/item/getItems")
        .then(res => res.json())
        .then((result) => {
            setItems(result);
        })
    }, [])
  return (
    <div>
        <Container elevation={5}>
            {items.map(item => (
                <Paper elevation={2} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={item.id}>
                    Item Name : {item.item_name}<br />
                    Item Quantity : {item.item_number}<br />
                    Item Cost : {item.item_cost}<br />
                    Item MRP : {item.item_mrp}<br />
                    Item Supplier : {item.item_supplier}<br /> <br />
                    <Stack spacing={2} direction="row">
                        <Button variant='contained' color='success' size='small' onClick={() => handleDialogOpen(item)}>Sell</Button>
                        <Button onClick={() => handleItemDelete(item)}><DeleteForever /></Button>
                    </Stack>
                </Paper>
            ))}
        </Container>  

        <Dialog open={dialog} onClose={handleDialogClose}>
                <DialogTitle>Enter quantity</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin='dense' label=" " inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }} fullWidth 
                    value={sellNo}
                    onChange={(e) => setSellNo(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleSell(sellNo)}>Sell</Button>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                </DialogActions>
        </Dialog>
        


    </div>    
  );
}