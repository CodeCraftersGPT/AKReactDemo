// import react and useState
import React from 'react';

const Movies2023 = [
    { 
        title: "Jawan", 
        hero: "Shah Rukh Khan",
        director: "Atlee Kumar",
        posterUrl: "jawan.jpeg"
    },
    { 
        title: "Leo", 
        hero: "Vijay",
        director: "Lokeesh Kanagaraj",
        posterUrl: "leo.jpeg"
    },
    { 
        title: "Salaar", 
        hero: "Prabhas",
        director: "Prashanth Neel",
        posterUrl: "salaar.jpeg"
    }    
];

function Movies() {
    return (
        <div>
            <h1>India Movies Top 2023</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Movies2023.map((movie, index) => (
                    <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                        <img src={`/${movie.posterUrl}`} alt={movie.title} style={{ maxWidth: '200px', height: 'auto', height:'100px',width:'100px' }} />
                        <h3>{movie.title}</h3>
                        <p>{movie.hero} - {movie.director}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
    