import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Planet = (props) => {

    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.error(err);
                setData({error: "These are no planet you looking for"})
            });
    }, [id]);

    return (
        data.error ?
            <h1>{data.error}</h1> :
            <div>
                <h1>Planet: {data.name}</h1>
                <p>Climate: {data.climate}</p> <br/>
                <p>Terrain: {data.terrain}</p> <br/>
                <p>Surface Water:
                    {data.surface_water ? "true"
                    : "false"
                }</p> <br/>
                <p>Population: {data.population}</p>
            </div>
    );
}

export default Planet;