import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Planets(){
    const [planets , setPlanets] = useState ([]);
    const [pages , setPages] = useState(1);

    const changePage = ()=>{
        setPages(pages + 1);
    }

    useEffect(()=>{
        
        const API = `https://swapi.dev/api/planets/?page=${pages}`;
        fetch(API)
            .then(response => response.json())
            .then(data =>{
                setPlanets(data.results)
            })
            .catch(error => console.log(error))
            
    })
    return(
        <>
            <div className="row">
                {planets.map(planet =>{
                    
                    return(
                        <>
                     {
				        planet.length === 0 && <div className="row justify-content-center" id="loading">
					    <div className="col-6 text-center">
						<div className="spinner-border text-secondary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						    <p>cargando...</p>
					    </div>
				        </div>
			        }
                            <div className="col-6 col-sm-3" >
                                
                                <div className="card h-100">
                                    <div className="card-body">
                                    <h1>{planet.name}</h1>
                                    <p>Periodo de rotación: {planet.rotation_period}</p>
                                    <p>Clima: {planet.climate}</p>
                                    <p>Gravedad: {planet.gravity}</p>
                                    <p>Población: {planet.population}</p>
                                    <p>Terreno: {planet.terrain}</p>

                                    </div>
                                </div>
                            </div>


                            
                        
                        </>
                    )
                })}
            </div>
                <div className="boton">

                    <button className="next" onClick={changePage}>Siguiente</button> <h5 className="pagina">{pages}</h5>
        
                </div>
        </>
    )


}


export default Planets;


