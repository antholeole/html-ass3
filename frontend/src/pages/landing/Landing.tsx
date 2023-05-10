import React from 'react';
import { NavBar } from '../../components/navbar/NavBar';
import { Pages } from '../../contexts/Page';
import { useNavigate } from "react-router";

export const LandingPage = () => {
    const page = Pages.useContainer();
    const navigate = useNavigate();

    return <>
        <section className="splash">
            <div className="text center-content">
                <div>
                <h1>
                    Hi, we're <span className="hl">IRL Fire Reaction Clothing Co.</span> Get some cute little clothes. They're comfy and
                    you should get some. Or a lot. We don't judge.
                </h1>
                <p>
                    This was created for COM S 319 By Anthony Oleinik and Tyler Evans.
                    Final Project, 2023. This is a clothing store - we got the logo and stuff
                    for free online. We're glad that we're not getting graded on content, because
                    content is hard to find. CSS and HTML? easy.
                </p>
                <button onClick={() => navigate('/products')}>
                    the articles of clothing <i className="fa fa-arrow-right"></i>
                </button>
            </div>
            </div>
            <div className="img center-content">
                <img src="waifu.png" />
            </div>
        </section>
        <section className="stats">
            <div className="stat">
                <h4>10000+</h4>
                <i className="fa-solid fa-cat"></i>
                <p>Pounds of Clothing Sold</p>
            </div>
            <div className="stat">
                <h4>23 Years</h4>
                <i className="fa-solid fa-clock"></i>
                <p>Of Serving the People </p>
            </div>
            <div className="stat">
                <h4>43 Million</h4>
                <i className="fa-solid fa-dollar"></i>
                <p>Operating Profit Donated To Charity</p>
            </div>
        </section>
    </>
}