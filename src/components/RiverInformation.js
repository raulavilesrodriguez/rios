import React, {useState, useEffect} from 'react';
import {getRiverInformation} from '../services/rivers'


export default function RiverInformation(props) {
    const [riverInformation, setRiverInformation]=useState({});
    
    useEffect(()=>{
      let mounted = true;
        getRiverInformation(props.name)
        .then(data=>{
          if(mounted){
            setRiverInformation(data)
          }   
        });
        return()=>{
          mounted=false;
        }
    }, [props.name])
    
    
  return(
    <div>
        <ul key={riverInformation.id}>
            <h2>Información de Ríos {riverInformation?.name}</h2>
            <li>Continente: {riverInformation?.continent}</li>
            <li>Longitud: {riverInformation?.length}</li>
            <li>Salida: {riverInformation?.outflow}</li>
      </ul>
    </div> 
  )
}

