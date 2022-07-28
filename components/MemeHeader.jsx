import React from 'react';

function MemeHeader() {
    const styles = {
        maxWidth: "1100px",
        margin: "0 auto",
        backgroundColor: "purple",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "16px 0px",
    }

    const wordStyles = {
        fontSize: "50px",
        fontFamily: "consolas"
    }
    return(
        <header style={styles}>
            <img src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png" 
            alt="Troll Face" />
            <p style={wordStyles}>Le Meme Generator</p>
        </header>
    )
}

export default MemeHeader;
