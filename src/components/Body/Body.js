import { Button, CircularProgress, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useRef } from "react"
import { DataContext } from "../../Context/DataContext";
import MyCard from "./Card";
import Info from "./Info";
import ImageBackground from '../ImageBackground/ImageBackground';
import MyForm from "./MyForm";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const useStyles = makeStyles((theme) => ({
    form: {
        backgroundColor: "#eeebeb",
        borderRadius: "20px",
        paddingBottom: "2em",
        paddingTop: "3em"
    },
    button: {
        marginTop: "3em",
        width: "20em"
    },
    load: {
        margin: '2em auto',

    },
    error: {
        fontSize: 150,
      
    }
}));

function Body(params) {
    const classes = useStyles();
    const { listOfImg, loading } = useContext(DataContext);
    const seeMoreButton = useRef(null);

    return (
        <>
            <ImageBackground imgURL={"https://specials-images.forbesimg.com/imageserve/5f53fbab099efa47007b0912/960x0.jpg?fit=scale"}>
                <Typography variant="h1" align="center">The beauty of Mars</Typography>
            </ImageBackground>

            <Info />


            <ImageBackground imgURL={"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f775f2683bae528aec3c1ca%2F0x0.jpg"}>
                <MyForm seeMoreButton={seeMoreButton} />
            </ImageBackground>


            <Container maxWidth="xl" id="cards-container">

                <Grid container direction="row" justify="center" alignItems="center" >
                    {loading === "start" &&
                        <CircularProgress className={classes.load} />
                    }
                    {loading === "error" &&
                        <div style={{marginBottom:"3em", textAlign:"center"}}>
                            <ErrorOutlineIcon className={classes.error} color="action"></ErrorOutlineIcon>
                            <Typography variant="h3" >Error to load data</Typography>
                        </div>
                    }
                </Grid>


                <Grid container direction="row" justify="center" alignItems="center" spacing={5} >
                    {listOfImg.map((x, i) => <Grid id={i} key={"Card " + x.id} item sm={"auto"}><MyCard name={"card rate" + i} url={x.img_src} /></Grid>)}
                </Grid>



                {(listOfImg.length > 0 && listOfImg.length === 25) &&
                    <Grid container
                        justify="center"
                        alignItems="center"
                    >
                        <Button
                            variant="contained"
                            color="default"
                            size="medium"
                            className={classes.button}
                            onClick={() => { seeMoreButton.current.click() }}
                            href={"#cards-container"}
                        >
                            See more...
                            </Button>

                    </Grid>
                }

            </Container>
        </>
    );
}

export default Body;