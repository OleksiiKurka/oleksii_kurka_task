import { makeStyles, Typography } from "@material-ui/core";
import React from "react"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#dad8d8",
        padding: theme.spacing(4),
        marginTop:theme.spacing(5)
    }
   
}));
function Footer(params) {

    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h5" align="center" gutterBottom>Web-site was created by Oleksii Kurka</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">Hope everything works well</Typography>
            
        </footer>
    )
}

export default Footer;