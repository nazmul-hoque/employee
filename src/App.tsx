import React from 'react';
import logo from './logo.svg';
import {Outlet, Route, Routes } from "react-router-dom";
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import Home from './pages/Home';
import { AppBar, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu'


const App: React.FC = () => {
  return (
      <Grid container >
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee Management
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/employee/add" Component={AddEmployee} ></Route>
            <Route path="/employee/:id" Component={EditEmployee} ></Route>
            <Route path="/" Component={Home} ></Route>
          </Routes>
          <Grid item xs={12} md={6}>
            <Container maxWidth="md">
              <Outlet></Outlet>
            </Container>
          </Grid>
        </Grid>
      </Grid>
  )
}
export default App