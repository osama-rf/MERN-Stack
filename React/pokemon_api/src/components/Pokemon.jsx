import React, {useEffect, useState} from "react";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const pokeApi =  () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    };

    return (
        <div>
            <button onClick={pokeApi}>Fetch Pokemon</button>
            <ul>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (
                        <li key={index}>{pokemon.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Pokemon;

// export default () => {
//     const [time, setTime] = useState(new Date().toLocaleString());
//
//     useEffect(() => {
//         const int = setInterval(
//             () => setTime(new Date().toLocaleString()),
//             1000
//         );
//
//         return function clearInt() {
//             clearInterval(int);
//         }
//         }, []);
//
//
//     return (
//         <div>Current Time: {time}</div>
//     );
// }