import { Box, Button, Card, CardActionArea, CardActions, CardMedia, makeStyles, Snackbar, withStyles } from "@material-ui/core";
import React, { useState } from "react"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },

})(Rating);

function MyCard(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleCloseAlarm = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Card elevation={3} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Mars photo"
                        height="200"
                        image={props.url}
                        title="Mars photo"
                    />
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => setOpen(true)} size="small" color="primary">Share</Button>
                    <Button onClick={() => setOpen(true)} size="small" color="primary">Open</Button>
                    <Box component="fieldset" borderColor="transparent">
                        <StyledRating
                            defaultValue={0}
                            name={props.name}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </Box>
                </CardActions>
            </Card>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseAlarm}>
                <Alert onClose={handleCloseAlarm} severity="error">
                    This feature is currently unavailable
                </Alert>
            </Snackbar>
        </>
    );
}

export default MyCard;