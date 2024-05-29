import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SmallLogo from '../../assets/images/small_logo.png'
import LogoRemovebg from '../../assets/images/logo-removebg.png'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#553a20' }}>
                <Toolbar>
                    <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Grid xs={3}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Box
                                    component="img"
                                    src={SmallLogo}
                                // sx={{width: '50px', height: '50px'}}
                                />
                            </IconButton>
                        </Grid>
                        <Grid xs={3} sx={{alignContent: 'center'}}>
                            <Button color="inherit" onClick={() => navigate('/')} sx={{color: '#efeee7'}}>Home</Button>
                            <Button color="inherit" onClick={() => navigate('/table')} sx={{color: '#efeee7', ml: 5}}>Table</Button>
                            <Button color="inherit" sx={{color: '#efeee7', ml: 5}}>Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}