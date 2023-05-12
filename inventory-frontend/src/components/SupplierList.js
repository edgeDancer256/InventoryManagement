/*
    @author Sharat C S
*/ 
import React, { useEffect, useState } from 'react';
import { Button, Container, Paper } from '@material-ui/core';
import { Stack } from '@mui/material';
import { DeleteForever } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SupplierList() {
    const navigate = useNavigate();

    const [suppliers, setSuppliers] = useState([]);

    const handleSuppDel = (supplier) => {
        fetch("http://localhost:8080/supplier/delete", {
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(supplier)
        }).then(() => {
            navigate(0);
        })
        console.log(JSON.stringify(supplier))
    }

    useEffect(() => {
        fetch("http://localhost:8080/supplier/getSuppliers")
        .then(res => res.json())
        .then((result) => {
            setSuppliers(result);
        })
    }, [])
  return (
    <div>
        <Container elevation={5}>
            {suppliers.map(supplier => (
                <Paper elevation={2} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={supplier.id}>
                    Supplier Name : {supplier.supp_name}<br />
                    Supplier Phone : {supplier.supp_phone}<br />
                    Supplier Address : {supplier.supp_address}<br /> <br />
                    <Stack spacing={2} direction="row">
                        <Button onClick={() => handleSuppDel(supplier)}><DeleteForever /></Button>
                    </Stack>
                </Paper>
            ))}
        </Container>  
    </div>    
  );
}