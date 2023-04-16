import React from "react";

export default function Home() {

  return (
    <>
      <h1 className="page-title">Home</h1>
      <div className="home-container">
        {/* <div className="greeting">Welcome to the Pokèmon Fan Club!</div> */}
        <div className="topic-container">
          <div className="topic">
            <div className="topic-title">Pokedex Function Added!</div>
            <div className="topic-details">
              The pokedex feature has just been added to The Pokemon Fan Club site. 
              You may now browsing your favorite pokemon and view their in game stats
              by clicking on them.
            </div>
          </div>

          <div className="topic">
            <div className="topic-title">WIP: What Pokemon Are You? Quiz</div>
            <div className="topic-details">
              The pokedex feature has just been added to The Pokemon Fan Club site. 
              You may now browsing your favorite pokemon and view their in game stats
              by clicking on them.
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}
