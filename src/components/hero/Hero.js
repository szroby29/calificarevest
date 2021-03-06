import { Link } from 'gatsby';
import React from 'react'

import * as styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className="grid md:justify-center content-center">
                <h2 className="mb-6 text-blue-400">
                    Cursuri <br />
                    de calificare
                </h2>
                <p className="mb-3 text-blue-300">
                    Construieste-ti cariera dorita, pas cu pas,<br />
                    cu ajutorul servicilor noastre de cea mai <br />
                    inalta calitate
                </p>
                <p className="uppercase text-blue-300 mb-5"> Toate pe teritoriul Romaniei</p>
                <a href="#cursuri" className="btn btn-primary btn-small md:justify-self-start mb-3">Vezi cursurile</a>
                <Link className="btn btn-secondary md:justify-self-start btn-small mb-2" to={`/contact`}>
                    Contact
                </Link>
            </div>
            <div className={["grid", styles.imageWrapper].join(' ')}>
                <div className={styles.imageShadow}></div>
                <img className="col-start-1 col-end-2 row-start-1 row-end-2" src={'harta.svg'} alt="teacher" />
            </div>
        </div>
    )
}

export default Hero
