import React from 'react';

export const AboutPage = () => {
    return <div style={{display: 'flex', flexDirection: 'column', padding: '16px', gap: '16px'}}>
        <h1>About</h1>
        <h3>Spring 2023 Com S 319 Group 34</h3>
        <p>This website was created for the final project for Com S 319 by Anthony Oleinik and Tyler Evans. It is intended
            solely for the assignment purposes, and is not intended to be a real storefront.
        </p>
        <div style={{display: 'flex', flexDirection: 'column', padding: '8px', gap: '8px'}}>
            <p>- Tyler Evans - tevans22@iastate.edu</p>
            <p>- Anthony Oleinik - aoleinik@iastate.edu</p>
        </div>
    </div>
}