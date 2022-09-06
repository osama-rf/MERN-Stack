import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios'
import PirateForm from "../components/PirateForm";
import PirateDash from "../components/PirateDash";
import PirateDetails from "../components/PirateDetails";

const Main = () => {

    return(
        <>
            <PirateForm/>
            <PirateDash/>
            <PirateDetails/>
        </>
    )
}