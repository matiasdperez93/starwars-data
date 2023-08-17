import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

function People (){

    const [people , setPeople] = useState([]);
    const [pages, setPages] = useState(1);
    const changePage = ()=>{
        setPages(pages + 1);
    } 
    const peopleEndpoint = `/personajes/${pages}`
    useEffect(()=>{
        const API = `https://swapi.dev/api/people/?page=${pages}`;
        fetch(API)
            .then(response => response.json())
            .then(data =>{
                setPeople(data.results)
            })
            .catch(error => console.log(error))
    })


    

    return(
        <>
        {
				        people.length === 0 && <div className="row justify-content-center" id="loading">
					    <div className="col-6 text-center">
						<div className="spinner-border text-secondary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						    <p>cargando...</p>
					    </div>
				        </div>
			        }
        <div className="row">
            {people.map(personaje =>{
                return(
                    <>
                    
                    <div className="col-12 col-sm-6 col-lg-3 "  >
                        <div className="card h-100">
                        
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>
                            <p>Fecha de nacimiento: {personaje.birth_year}</p>
                            <p>Genero: {personaje.gender}</p>

                        </div>

                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        <div className="boton">

            <button className="next" onClick={changePage}><Link to={peopleEndpoint}/> Siguiente </button> <h5 className="pagina">{pages}</h5>
        </div>
        </>    
    )
}



export default People;