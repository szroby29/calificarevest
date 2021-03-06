import { Link } from 'gatsby';
import React from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import * as styles from './Cursuri.module.css'

SwiperCore.use([Navigation]);

const Cursuri = ({ cursuri }) => {

    return (
        <>
            <p className="h3 text-center uppercase text-blue-400 mb-10 md:mb-20">Cursurile noastre</p>
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
            >
                {
                    cursuri?.length > 0 && cursuri?.map((item, index) => {
                        if(!item.images) {
                            return null;
                        }
                        return <SwiperSlide key={index} className={styles.slideWrap}>
                            <div className={styles.slide}>
                                <img className={styles.image} src={item.images[0].url} alt="stivuitorist" />
                                <p className={styles.title}>{item.name}</p>
                                <Link className="btn btn-secondary btn-small mb-2"
                                    to={`/#formular`}
                                    state={{
                                        selected: item.id
                                    }}
                                >
                                    Inscrie-te
                                </Link>
                                <Link className="btn btn-primary btn-small"
                                    to={`/cursuri/curs-${item.short}`}
                                    state={{ curs: item }}
                                >
                                    Detalii
                                </Link>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Cursuri
