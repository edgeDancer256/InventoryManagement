/*
  @author Sharat C S
*/
import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Accordion, AccordionSummary, AccordionDetails, Icon, Menu, MenuItem } from '@material-ui/core';
import { Stack } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import { StorefrontOutlined, KeyboardArrowDown } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function InvenAppbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorEl2, setAnchorEl2] = useState('');
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Icon><StorefrontOutlined/>  </Icon> &nbsp; &nbsp;
          <Typography align='left' variant="h6" className={classes.title}>
            WHISPERING STOCK
          </Typography>


          <Stack direction="row" spacing={3}>
            <Button
              id="demo-customized-button-item"
              aria-controls={open ? 'menu-items' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
            >
              Items
            </Button>

            
            <Button
              id="demo-customized-button-supp"
              aria-controls={open2 ? 'menu-supplier' : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick2}
              endIcon={<KeyboardArrowDown />}
            >
              Suppliers
            </Button>
          </Stack>

          <Menu 
            id='menu-items'
            elevation={0}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose} disableRipple>
                <Button color="inherit">View Items</Button>
              </MenuItem>
            </Link>
            <Link to="/add-item">
              <MenuItem onClick={handleClose} disableRipple>
                <Button color="inherit" fullWidth>Add Item</Button>
              </MenuItem>
            </Link>
          </Menu>

          <Menu 
            id='menu-supplier'
            elevation={0}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
          >
            <Link to="/supp-list">
              <MenuItem onClick={handleClose2} disableRipple>
                <Button color="inherit">View Suppliers</Button>
              </MenuItem>
            </Link>
            <Link to="/add-supp">
              <MenuItem onClick={handleClose2} disableRipple>
                <Button color="inherit" fullWidth>Add Suppliers</Button>
              </MenuItem>
            </Link>
          </Menu>

          {/* <Stack direction="row" spacing={2} alignSelf="right">
            <Accordion marginRight="10px" TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                  color='inherit'
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color='inherit'>Items</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Link to="/"><Button color="inherit">View Items</Button></Link>
                  <Link to="/add-item"><Button color="inherit">Add Item</Button></Link>
                </AccordionDetails>
            </Accordion>  


            <Accordion marginRight="10px" TransitionProps={{ unmountOnExit: true }} disableGutters={true}>
                <AccordionSummary
                  color='inherit'
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Suppliers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Link to="/supp-list"><Button color="inherit">View Suppliers</Button></Link>
                  <Link to="/add-supp"><Button color="inherit">Add Suppliers</Button></Link>
                </AccordionDetails>
            </Accordion> 

          </Stack> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
