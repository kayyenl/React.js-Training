import React from 'react';

const Footer = () => {
    const date = new Date()
    return (
        <footer>
            <h3>The time now is {`${date.getHours()} : ${date.getMinutes()}...`}</h3>
        </footer>
    );
}

export default Footer;
