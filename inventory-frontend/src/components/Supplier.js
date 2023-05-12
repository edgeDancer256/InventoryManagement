/*
    @author Sharat C S
*/
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Supplier() {

    const nav = useNavigate();

    const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
    const [supp_name, setSuppName] = useState('');
    const [supp_address, setSuppAddress] = useState('');
    const [supp_phone, setSuppPhone] = useState('');

    const handleAddSupplier = (e) => {
        e.preventDefault()
        const supplier = {supp_name, supp_address, supp_phone}
        console.log(supplier)

        fetch("http://localhost:8080/supplier/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(supplier)
        }).then(() => {
            console.log("Supplier Added")
            nav("/supp-list")
        })
    };

    

  const classes = useStyles();

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Enter Supplier Details</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" label="Supplier Name" variant="outlined" fullWidth required
                    value={supp_name} 
                    onChange={(e) => setSuppName(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" label="Supplier Phone Number" variant="outlined" fullWidth required
                    inputProps={{ inputmode: 'numeric', pattern: '[0-9]{10}' }}
                    value={supp_phone}
                    onChange={(e) => setSuppPhone(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" label="Supplier Address" variant="outlined" fullWidth required
                    value={supp_address}
                    onChange={(e) => setSuppAddress(e.target.value)}
                />
                <Button 
                    variant='contained'
                    color='secondary'
                    disabled = {!supp_address}
                    onClick={handleAddSupplier} 
                    >
                    Add Supplier
                </Button>
            </form>
        </Paper>
    </Container>
  );
}
