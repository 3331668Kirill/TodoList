import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'

// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
import {AppBar, Button, Container, IconButton, Toolbar, Typography, LinearProgress} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {AppRootStateType} from "./store";
import {useSelector} from "react-redux";
import {RequestStatusType} from "./app-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackBar/ErrorSnackBar";


function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    {/*<Typography variant="h6">*/}
                    {/*    News*/}
                    {/*</Typography>*/}
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>

            {status === "loading" &&
            <LinearProgress color={'secondary'}/>
            }
            <Container fixed>
                <TodolistsList/>
            </Container>

            <ErrorSnackbar/>
        </div>
    )
}

export default App
