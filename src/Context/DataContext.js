import { createContext, useState } from "react";
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

    const roversData = [
        {
            name: "Curiosity",
            camera: [
                ["FHAZ", "Front Hazard Avoidance Camera"],
                ["RHAZ", "Rear Hazard Avoidance Camera"],
                ["MAST", "Mast Camera"],
                ["CHEMCAM", "Chemistry and Camera Complex"],
                ["MAHLI", "Mars Hand Lens Imager"],
                ["MARDI", "Mars Descent Imager"],
                ["NAVCAM", "Navigation Camera"]
            ]
        },
        {
            name: "Opportunity",
            camera:
                [
                    ["FHAZ", "Front Hazard Avoidance Camera"],
                    ["RHAZ", "Rear Hazard Avoidance Camera"],
                    ["NAVCAM", "Navigation Camera"],
                    ["PANCAM", "Panoramic Camera"],
                    ["MINITES", "Miniature Thermal Emission Spectrometer (Mini-TES)"],
                ]
        },
        {
            name: "Spirit",
            camera:
                [
                    ["FHAZ", "Front Hazard Avoidance Camera"],
                    ["RHAZ", "Rear Hazard Avoidance Camera"],
                    ["NAVCAM", "Navigation Camera"],
                    ["PANCAM", "Panoramic Camera"],
                    ["MINITES", "Miniature Thermal Emission Spectrometer (Mini-TES)"],
                ]


        }

    ]



    const [loading, setLoading] = useState(null);
    const [listOfImg, setListOfImg] = useState([])



    function getInfo(params) {



        setLoading("start");
        if (!params.name || !params.sol) {
            setLoading("wrong params")
            return;
        }
        let requestURL = URL;
        requestURL += `/${params.name}/photos?`;
        requestURL += `sol=${params.sol}&`;
        requestURL += params.camera ? `camera=${params.camera}&` : "";
        requestURL += `page=${params.page}&api_key=DEMO_KEY`;

        axios.get(requestURL)
            .then(res => {
                setListOfImg([...res.data.photos]);
                setLoading("finish");
            }).catch(err => {
                setLoading("error");
            })
    }




    return <DataContext.Provider value={{ roversData, getInfo, listOfImg, setListOfImg, loading, setLoading }}>{children}</DataContext.Provider>;
}