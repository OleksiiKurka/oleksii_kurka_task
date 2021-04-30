import React, { useState } from "react"
import { AppBar, Box, Button, Container, makeStyles, Menu, MenuItem, Snackbar, Toolbar, Typography } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
   
    title: {
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1em",
        }
    },
    wideScreen: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    smallScreen: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        }
    }

}))

function Header(params) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAlarm = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>The beauty of Mars</Typography>

                        <Box className={classes.wideScreen} mr={1}>
                            <Button onClick={() => setOpen(true)} color="inherit" variant="outlined">Log in</Button>
                        </Box>
                        <Box className={classes.wideScreen}>
                            <Button onClick={() => setOpen(true)} color="secondary" variant="contained">Sign up</Button>
                        </Box>

                        <Box className={classes.smallScreen}>
                            <Button color="inherit" variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Open Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><Button onClick={() => setOpen(true)} color="inherit" fullWidth variant="outlined">Log in</Button></MenuItem>
                                <MenuItem onClick={handleClose}><Button onClick={() => setOpen(true)} color="secondary" fullWidth variant="contained">Sign up</Button></MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            
            <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseAlarm}>
                <Alert onClose={handleCloseAlarm} severity="error">
                    This feature is currently unavailable
                </Alert>
            </Snackbar>
            <div className={classes.toolbar} />
        </>

    );
}

export default Header;