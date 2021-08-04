import React from 'react'
import './Comedy-movies.css'

import { Button } from '@material-ui/core'
import { Add, ArrowBackIos, ArrowForwardIos, PlayArrow } from '@material-ui/icons'
import { movies } from '../data'
function ComedyMovies() {


    const previous = () => { }

    const next = () => { }



    return (
        <div className="comedy-movies">
            <span className="header">Comedy Movies</span>
            <div className="comedy-movie-container">
                {
                    movies.map((movie, index) => (
                        <div className="movie" key={index}>
                            <img src={movie.photoURL} alt="" />

                            <div className="movie-hover-info">
                                <div className="movie-name">{movie.name}</div>
                                <div className="movie-info">{movie.info}</div>
                                <div className="watch-movie"> <PlayArrow />&nbsp;WATCH MOVIE</div>
                                <div className="add-to-playlist"> <Add />&nbsp;ADD TO PLAYLIST</div>
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
