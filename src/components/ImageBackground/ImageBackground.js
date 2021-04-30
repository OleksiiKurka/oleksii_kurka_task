import { Box, makeStyles} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({

    root: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginBottom: theme.spacing(10),
        padding: theme.spacing(40),
        
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(28),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(10),
        }
    },
    
}))

function VisitImage(props) {
    const classes = useStyles();
    return (

        <Box 
         className={classes.root}
         style={{backgroundImage:`url(${props.imgURL})`}}
         >
            {props.children}
            
        </Box>

    )
}

export default VisitImage;