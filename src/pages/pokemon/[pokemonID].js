import React from "react";
import { useRouter } from "next/router";

const PokemonDetails = () => {
    const router = useRouter();
    const details = router.query;

    return (
        <>
            <div className="pokemon-details">
                <div className="card">
                    <h1><span>No 0{details.id}</span></h1>
                    <img src={details.imgUrl} alt=""></img>
                    <h4>A wild <span className="pokemon-name">{details.name}</span> appeared!</h4><br/>
                    <div className="stats">
                        <h2><span>HP:</span> {details.hp}</h2>
                        <h2><span>Attack:</span> {details.atk}</h2>
                        <h2><span>Defense:</span> {details.def}</h2>
                        <h2><span>Sp Atk:</span> {details.spAtk}</h2>
                        <h2><span>Sp Def:</span> {details.spDef}</h2>
                        <h2><span>Speed:</span> {details.spe}</h2>
                    </div>
                </div>

                <div className="moves-card">

                </div>
            </div>
        </>
        
    );
}
 
export default PokemonDetails;