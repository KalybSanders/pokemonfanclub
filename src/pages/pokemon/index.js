import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Pagination from '@/components/Pagination'
import PokemonList from '@/components/PokemonList'

const pokedex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=505&offset=0");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    // const kanto = { limit: 151, offset: 0};
    // const johto = { limit: 100, offset: 151};
    // const hoenn = { limit: 135, offset: 251};
    // const sinnoh = { limit: 107, offset: 386};
    // const unova = { limit: 156, offset: 493};
    // const kalos = { limit: 72, offset: 649};
    // const alola = { limit: 88, offset: 721};
    // const galar = { limit: 96, offset: 809};
    // const paldea = { limit: 110, offset: 905};

    // function genSelector(region) {
    //     setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon/?limit=${region.limit}&offset=${region.offset}`);
    // }

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios.get(currentPageUrl, {
            params: {}
        }, { 
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) => {
            setLoading(false);
            setNextPageUrl(res.data.next);
            setPrevPageUrl(res.data.previous);
            //setPokemon(res.data.results.map((p) => p.name));

            getPokemon(res.data.results);
        });
        console.log("hi")

        return () => cancel;
    }, [currentPageUrl]);

    // const getAllPokemon=async() => {
    //     setLoading(true);
    //     const res = await axios.get(currentPageUrl);
       
    //     setNextPageUrl(res.data.next);
    //     setPrevPageUrl(res.data.previous);
    //     //setPokemon(res.data.results.map((p) => p.name));
    //     getPokemon(res.data.results);
    //     setLoading(false);
    // }

    
    const getPokemon=async(res) => {
        res.map(async(item) => {
            const result = await axios.get(item.url)

            setPokemon( state => {
                state = [...state, result.data];
                state.sort((a,b) => a.id > b.id ? 1 : -1);
                return state;
            })
        })
    }

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    if(loading) return "Loading...";

    return (
        <>
            <h1 className="page-title">POKèDEX</h1>
            {/* <button onClick={(kanto) => genSelector(kanto)}>Kanto</button>
            <button onClick={(johto) => genSelector(johto)}>Johto</button>
            <button onClick={(hoenn) => genSelector(hoenn)}>Hoenn</button>
            <button onClick={(sinnoh) => genSelector(sinnoh)}>Sinnoh</button>
            <button onClick={(unova) => genSelector(unova)}>Unova</button> */}
            <PokemonList pokemon={pokemon} />
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null} 
            />
        </>
    )
}
 
export default pokedex;