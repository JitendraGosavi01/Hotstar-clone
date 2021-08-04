import React, { useState } from 'react'
import './Recently-watched.css'

import { Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos, ClearOutlined, PlayArrow, PlaylistPlayOutlined } from '@material-ui/icons'
import { recentlyWatched as recent } from '../data'
function RecentlyWatched() {

    const [recentlyWatched, setRecentlyWatched] = useState(recent)

    const previous = () => { }

    const next = () => { }

    const loadProgressStyle = (number) => {
        let borderRadiusLeftBottom = number >= 100 ? '0 0 20px 20px' : '0 0 0 20px'
        return { width: `${number}%`, borderRadius: borderRadiusLeftBottom }
    }

    const removeFromRecent = (index) => {
        setRecentlyWatched(recentlyWatched.filter((recent, i) => i !== index))
    }
    return (
        <div className="continue-watching">
            <span className="continue-watching-header">Continue Watching</span>
            <div className="tiles-container">
                {
                    recentlyWatched.map((tile, index) => (
                        <div className="tile" key={index}>
                            <img src={tile.photoURL} alt="" />
                            <div className="tile-info">
                                {tile.name}

                            </div>
                            {Object.keys(tile.episode).length > 0 && <div className="hover-info">
                                <div className="remove" onClick={e => removeFromRecent(index)}><ClearOutlined /></div>
                                <div className="episode-and-date">
                                    <div className="episode-number"><PlayArrow />{tile.episode.season} {tile.episode.eps}</div>
                                    <div className="episode-date">{tile.episode.epsDate}</div>
                                </div>
                                <br />
                                <div className="episode-info">{tile.info}</div>
                                <div className="see-all-episodes"> <PlaylistPlayOutlined />SEE ALL EPISODES</div>
                            </div>}
                            {Object.keys(tile.episode).length > 0 &&
                                <div className="tile-progress-bar">
                                    <div className="progress" style={loadProgressStyle(tile.episode.watchProgress)}>

                                    </div>
                                </div>

                            }
                        </div>
                    ))
                }

                <div className="tile-slide-controls">
                    <Button onClick={previous} >
                        <ArrowBackIos />
                    </Button>

                    <Button onClick={next}>
                        <ArrowForwardIos />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default RecentlyWatched
