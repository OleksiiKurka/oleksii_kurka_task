import { Button, CircularProgress, FormControl, FormGroup, Grid, InputLabel, makeStyles, MenuItem, Paper, Select,  TextField } from "@material-ui/core";
import React, { useContext, useState } from "react"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DataContext } from "../../Context/DataContext";
import MySnackbar from "../Snackbar/MySnackbar";

const useStyles = makeStyles((theme) => ({
    
    form: {
        width: "95%",
        margin: "auto"
    },
    formControl: {
        marginTop: theme.spacing(2),
        borderRadius: "10px",
        backgroundColor: "white"
    },
    
    button: {
        margin: 'auto',
        marginTop: "1em",
        width: "60%"
    },
    load: {
        margin: 'auto',
        marginTop: "2em"
    },
    paperStyle: {
        padding: "3em 2em",
        borderRadius: "20px",
        width: "30em",

        margin: "20px auto",
        [theme.breakpoints.down("xs")]: {
            width: "15em",
        }
    },

}));


function MyForm(props) {
    const classes = useStyles();
    const [roverName, setRoverName] = useState('');
    const [camera, setCamera] = useState('');
    const [sol, setSol] = useState("");
    const [count, setCount] = useState(1);



    const { roversData, getInfo, listOfImg, setListOfImg, loading } = useContext(DataContext);


    const handelUploadNewPage = () => {
        getInfo({
            name: roverName,
            camera: camera,
            sol: sol,
            page: count + 1
        })
        setCount(prev => prev + 1);
    }
    return (

        <Grid>
            <Paper elevation={15} className={classes.paperStyle}>
                <Grid align='center'>

                    <h1>Find photos</h1>
                </Grid>
                <form className={classes.form} noValidate autoComplete="off">
                    <FormGroup>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="select-label">Rover</InputLabel>
                            <Select
                                labelId="select-label"
                                value={roverName}
                                onChange={(event) => { setRoverName(event.target.value); setListOfImg([]); }}
                                label="Rover"
                            >
                                <MenuItem value={""}>
                                    <em>None</em>
                                </MenuItem>
                                {roversData.map(
                                    (x, i) => <MenuItem key={"rovers" + i} value={x.name}>{x.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                        {roverName &&
                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                <InputLabel id="select-label-camera">Camera(optionally)</InputLabel>
                                <Select
                                    labelId="select-label-camera"
                                    value={camera}
                                    onChange={(event) => { setCamera(event.target.value); setListOfImg([]); }}
                                    label="Camera"
                                >
                                    <MenuItem value={""}>
                                        <em>None</em>
                                    </MenuItem>
                                    {roverName && roversData.find(x => x.name === roverName).camera.map(
                                        (x, i) => <MenuItem key={"camera" + i} value={x[0]}>{x[1]}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        }

                        <TextField className={classes.formControl}
                            label="Sol"
                            type="number"
                            value={sol}
                            onChange={(event) => {
                                if (!event.target.value) setSol("");
                                else setSol(Math.abs(event.target.value))
                                setListOfImg([]);
                            }
                            }
                            variant="outlined"
                        />


                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            className={classes.button}
                            onClick={() => {
                                setCount(1); getInfo({
                                    name: roverName,
                                    camera: camera,
                                    sol: sol,
                                    page: 1
                                })
                            }}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>



                        {loading === "start" &&
                            <CircularProgress className={classes.load} />
                        }
                        {(loading === "finish" && listOfImg.length > 0) &&
                            <MySnackbar type="success"  text="Success upload data!"/>
                        }
                        {(loading === "finish" && listOfImg.length <= 0) &&
                            <MySnackbar type="info" text="Photos do not exist for the following parameters"/>
                        }
                        {(loading === "wrong params" && listOfImg.length <= 0) &&
                            <MySnackbar type="error"  text="Incorrect data. You must at least fill in the Rover field and the Sol field"/>
                        }


                        
                        {(listOfImg.length > 0 && listOfImg.length === 25) &&
                            <Button
                                variant="contained"
                                color="default"
                                size="medium"
                                className={classes.button}
                                onClick={handelUploadNewPage}
                                ref={props.seeMoreButton}
                            >
                                See more...
                            </Button>
                        }
                    </FormGroup>
                </form>
            </Paper>
        </Grid>
    )
}


export default MyForm;