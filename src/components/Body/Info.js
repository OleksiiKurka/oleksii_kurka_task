import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react"

const useStyles = makeStyles((theme)=>({
    content:{
        marginTop:"7em",
        marginBottom:"9em",
       
    },
    text:{
        
        [theme.breakpoints.down("xs")]: {
            fontSize:"1.25rem",
            textAlign:"justify"
        },
    }
}))

function Info(params) {
    const classes = useStyles();

    return (
        <Container className={classes.content} maxWidth="md">
            <Typography paragraph variant="h2" align="center" color="textPrimary">Mars</Typography>
            <Typography className={classes.text}  paragraph variant="h3" align="center" color="textPrimary">​&emsp;Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere.</Typography>
            
            <Typography className={classes.text}  paragraph variant="h4" align="justify" color="textSecondary">&emsp;Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.</Typography>
            <Typography className={classes.text}  paragraph variant="h4" align="justify" color="textSecondary">&emsp;Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. Two NASA rovers and one lander are currently exploring the surface of Mars</Typography>
        </Container>
    )
}

export default Info;