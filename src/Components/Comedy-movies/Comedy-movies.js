import React from 'react'
import './Comedy-movies.css'

import { Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
function ComedyMovies() {

    const movies = [
        {
            name: 'Luca',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6',
            info: '',

        },
        {
            name: 'The Princess Diaries',
            photoURL: '	https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4837/674837-v',
            info: '',
        },
        {
            name: 'Chhuri',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9202/1009202-v-93f31bfc848c',
            info: '',

        },
        {
            name: 'Chhuri',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9202/1009202-v-93f31bfc848c',
            info: '',

        },
        {
            name: 'Chhuri',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9202/1009202-v-93f31bfc848c',
            info: '',

        },
        {
            name: 'Luca',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6',
            info: '',

        },
        {
            name: 'The Princess Diaries',
            photoURL: '	https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4837/674837-v',
            info: '',
        },
        {
            name: 'Luca',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6',
            info: '',

        },
        {
            name: 'The Princess Diaries',
            photoURL: '	https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4837/674837-v',
            info: '',
        },

    ]
    const previous = () => { }

    const next = () => { }

    const loadProgressStyle = (number) => {
        let borderRadiusLeftBottom = number >= 100 ? '0 0 20px 20px' : '0 0 0 20px'
        return { width: `${number}%`, borderRadius: borderRadiusLeftBottom }
    }

    return (
        <div className="comedy-movies">
            <span className="header">Comedy Movies</span>
            <div className="comedy-movie-container">
                {
                    movies.map(tile => (
                        <div className="movie">
                            <img src={tile.photoURL} alt="" />
                            <div className="movie-info">
                                {tile.name}

                            </div>

                        </div>
                    ))
                }

                <div className="comedy-movie-slide-controls">
                    <Button onClick={previous} >
                        <ArrowBackIos />
                    </Button>

                    <Button onClick={next}>
                        <ArrowForwardIos />
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default ComedyMovies
