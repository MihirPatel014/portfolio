import React from 'react'
import "./portfolio.css"
import img1 from "../../assests/img1.jpg";

import img4 from "../../assests/img4.jpg";

 
const Portfolio = () => {   
  return (
    <>
    <section className="portfolio section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Personal Projects</span>

        <div className="portfolio__container container">
            <div className="figure-cards">
                <figure className="image-block">
                    <h1>50 days project</h1>
                    <img src={img1} alt="" />
                    <figcaption>
                        <a href="https://github.com/MihirPatel014/50-days-project.git">
                            <button>Demo</button>
                        </a>
                    </figcaption>
                </figure>
            </div>

            <div className="figure-cards">
                <figure className="image-block">
                    <h1>Blog website</h1>
                    <img src={img1} alt="" />
                    <figcaption>
                        <a href="https://github.com/MihirPatel014/Blog-Website">
                            <button>Demo</button>
                        </a>
                    </figcaption>
                </figure>
            </div>

            <div className="figure-cards">
                <figure className="image-block">
                    <h1>Quote Generator</h1>
                    <img src={img1} alt="" />
                    <figcaption>
                        <a href="https://github.com/MihirPatel014/Quote-Generator">
                            <button>Demo</button>
                        </a>
                    </figcaption>
                </figure>
            </div>

            <div className="figure-cards">
                <figure className="image-block">
                    <h1>MovieWorld</h1>
                    <img src={img4} alt="" />
                    <figcaption>
                    <a href="https://github.com/MihirPatel014/MovieWorld">
                            <button>Demo</button>
                        </a>
                    </figcaption>
                </figure>
            </div>

            <div className="figure-cards">
                <figure className="image-block">
                    <h1>box shadow generator</h1>
                    <img src={img4} alt="" />
                    <figcaption>
                    <a href="https://github.com/MihirPatel014/Box-shadow">
                            <button>Demo</button>
                        </a>
                    </figcaption>
                </figure>
            </div>

        </div>
    </section>
    </>
  )
}

export default Portfolio