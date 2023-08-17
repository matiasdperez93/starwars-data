import React, {useEffect, useState} from "react";
function Films(){
    const [films , setFilms] = useState([]);
    const [pages, setPages] = useState(1);
    const changePage = ()=>{
        setPages(pages + 1);
    } 
    useEffect(()=>{
        const API = 'https://swapi.dev/api/films/';
        fetch(API)
            .then(response => response.json())
            .then(data =>{
                setFilms(data.results)
            })
            .catch(error => console.log(error))
    })



    return(
        <>
        {
           films.length === 0 && <div className="row justify-content-center" id="loading">
           <div className="col-6 text-center">
           <div className="spinner-border text-secondary" role="status">
               <span className="visually-hidden">Loading...</span>
           </div>
               <p>cargando...</p>
           </div>
           </div>
       }
            <div className="row">
                {films.map(film =>{
                    
                    return(
                        <>
                            <div className="col-10 col-sm-5 col-lg-3 my-2" key={film.episode_id}>
                                
                                <div className="card h-100">
                                    <div className="card-body">
                                    <h1>{film.title}</h1>
                                    <p>{film.opening_crawl}</p>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        
        </>
    )


}


export default Films;