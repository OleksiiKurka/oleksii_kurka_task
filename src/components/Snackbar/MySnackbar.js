import React, { useContext} from "react"
import MuiAlert from '@material-ui/lab/Alert';
import { DataContext } from "../../Context/DataContext";
import {  Snackbar } from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MySnackbar(props) {
    const {setLoading } = useContext(DataContext);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setLoading(null);
    };
    return (
        <Snackbar open={true} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.type}>
                {props.text}
            </Alert>
        </Snackbar>
    )
}

export default MySnackbar;