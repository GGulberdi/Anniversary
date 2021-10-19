import React from 'react'
import desert from '.././images/desert_photo.jpg';

function Home() {
    return (
        <div>
           <header className="App-header">
        <div className='cover'><p>Our Journey started at January 6 2007y</p></div>


        
        <img src={desert} className="App-logo" alt="logo" />
         </header>
        </div>
    )
}

export default Home
