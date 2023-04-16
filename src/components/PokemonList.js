import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";

const PokemonList = ({pokemon}) => {
    const router = useRouter();

    return (
        
        <>
            <div className="dex-container">
                {pokemon.map((p) => {
                    console.log(p)
                    const tempValue = p;
                    return (
                        <Link className=""
                         href={{
                            pathname: `/pokemon/[pokemonID]`,
                            query: {
                                id: p.id,
                                name: p.name,
                                imgUrl: p.sprites.front_default,
                                hp: p.stats[0].base_stat,
                                atk: p.stats[1].base_stat,
                                def: p.stats[2].base_stat,
                                spAtk: p.stats[3].base_stat,
                                spDef: p.stats[4].base_stat,
                                spe: p.stats[5].base_stat,
                            }
                         }}
                         as={`/pokemon/${p.name}`}>
                            <div className="dex-entry">
                                <h2 key={p.id}>#0{p.id}: {p.name}</h2>
                                <img src={p.sprites.front_default} alt=""></img>                      
                            </div>
                        </Link> 
                    )
                })}
            </div>
        </>
    );
}

 
export default PokemonList;