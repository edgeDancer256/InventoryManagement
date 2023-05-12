/*
    @author Sharat C S
*/
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Paper } from '@material-ui/core';
import InvenAppbar from './InvenAppbar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Item() {

    const nav = useNavigate();

    const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
    const [item_name, setItemName] = useState('');
    const [item_number, setItemNumber] = useState('');
    const [item_cost, setItemCost] = useState('');
    const [item_mrp, setItemMrp] = useState('');
    const [item_supplier, setItemSupplier] = useState('');
    
    
    const handleNumChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if(e.target.value === "" || regex.test(e.target.value)) {
            setItemNumber(e.target.value);
        }
    };

    const handleCostChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if(e.target.value === "" || regex.test(e.target.value)) {
            setItemCost(e.target.value);
        }
    };

    const handleMrpChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if(e.target.value === "" || regex.test(e.target.value)) {
            setItemMrp(e.target.value);
        }
    };

    const handleAddItem = (e) => {
        e.preventDefault()
        const item = {item_name, item_number, item_cost, item_mrp, item_supplier}
        console.log(item)

        fetch("http://localhost:8080/item/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item)
        }).then(() => {
            console.log("Item Added")
            nav("/")
        })
    };

    

  const classes = useStyles();

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Enter Item Details</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" label="Item Name" variant="outlined" fullWidth required
                    value={item_name} 
                    onChange={(e) => setItemName(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" label="Quantity" variant="outlined" fullWidth required
                    inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
                    value={item_number}
                    onChange={(e) => handleNumChange(e)}
                />
                <TextField 
                    id="outlined-basic" label="Cost" variant="outlined" fullWidth required
                    inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
                    value={item_cost}
                    onChange={(e) => handleCostChange(e)}
                />
                <TextField 
                    id="outlined-basic" label="MRP" variant="outlined" fullWidth required
                    inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
                    value={item_mrp}
                    onChange={(e) => handleMrpChange(e)}
                />
                <TextField 
                    id="outlined-basic" label="Item Supplier" variant="outlined" fullWidth required
                    value={item_supplier}
                    onChange={(e) => setItemSupplier(e.target.value)}
                />
                <Button 
                    variant='contained'
                    color='secondary'
                    disabled = {!item_supplier}
                    onClick={handleAddItem} 
                    >
                    Add Item
                </Button>
            </form>
        </Paper>
    </Container>
  );
}
