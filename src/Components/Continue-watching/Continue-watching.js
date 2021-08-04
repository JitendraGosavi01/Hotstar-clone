import React from 'react'
import './Continue-watching.css'

import { Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
function ContinueWatching() {

    const tiles = [
        {
            name: 'Kaal Bhairav',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3876/273876-h',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 60
            }
        },
        {
            name: 'Gum Hain Kisi ke pyaar main',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/905/840905-h',
            info: '',
            episode: {}
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 50
            }
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 100
            }
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 20
            }
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 20
            }
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 20
            }
        },
        {
            name: 'Loki',
            photoURL: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_0_5x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074',
            info: '',
            episode: {
                season: 1,
                eps: 'E10',
                epsDate: '30 Nov 2018',
                watchProgress: 20
            }
        },
    ]

    const previous = () => { }

    const next = () => { }

    const loadProgressStyle = (number) => {
        let borderRadiusLeftBottom = number >= 100 ? '0 0 20px 20px' : '0 0 0 20px'
        return { width: `${number}%`, borderRadius: borderRadiusLeftBottom }
    }
    return (
        <div className="continue-watching">
            <span className="continue-watching-header">Continue Watching</span>
            <div className="tiles-container">
                {
                    tiles.map(tile => (
                        <div className="tile">
                            <img src={tile.photoURL} alt="" />
                            <div className="tile-info">
                                {tile.name}

                            </div>
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
        </div>
    )
}

export default ContinueWatching
