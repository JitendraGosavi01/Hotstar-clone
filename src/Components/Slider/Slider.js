

import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import './Slider.css'
function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    let array = [
        {
            title: 'Hanuman Vs Mahiravan',
            lang: 'Hindi',
            genres: 'Kids',
            year: 2008,
            info: 'The Story of Hanuman saving Rama and Lakshmana from Mahiravana, Ravana\'s brother and a dark and powerful sorcerer.',
            src: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8629/258629-h',
        },
        {
            title: 'Bobby Jasoos',
            lang: 'Hindi',
            genres: 'Drams',
            year: 2014,
            info: 'Boby, Small time detective from Hydrabad, gets a breakthrough when a rich man hires her.',
            src: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4425/1000004425/1000004425-h',
        },
        {
            title: 'VINTAGE CAR',
            genres: 'Kids',
            lang: 'Hindi',
            year: 2008,
            info: 'The Story of Hanuman saving Rama and Lakshmana from Mahiravana, Ravana\'s brother and a dark and powerful sorcerer.',
            src: 'https://i.redd.it/9cc39e9qjrb51.jpg',
        },
        {
            title: 'VAN BACK',
            lang: 'Hindi',
            genres: 'Kids',
            year: 2008,
            info: 'The Story of Hanuman saving Rama and Lakshmana from Mahiravana, Ravana\'s brother and a dark and powerful sorcerer.',
            src: 'https://www.teahub.io/photos/full/21-218675_vintage-photography-wallpapers-hd-photos-desktop-background-background.jpg',
        }
    ]
    const previous = () => {
        if (slideIndex <= 0) {
            setSlideIndex(prevState => prevState += array.length - 1)
        } else {
            setSlideIndex(prevState => prevState - 1)
        }
    }

    const next = () => {
        if (slideIndex >= array.length - 1) {
            setSlideIndex(prevState => prevState -= array.length - 1)
        } else {
            setSlideIndex(prevState => prevState + 1)
        }

    }

    return (

        <div className="slide">
            <div className="img">
                <img className="slider-img" src={array[slideIndex].src} alt="" srcSet="" />
            </div>
            <div className="info">
                <div className="title">
                    {array[slideIndex].title}
                </div>
                <div className="genres-container">
                    <span>{array[slideIndex].lang}</span>  &nbsp; &bull; &nbsp;
                    <span>{array[slideIndex].genres}</span> &nbsp; &bull;&nbsp;
                    <span>{array[slideIndex].year}</span>
                </div>
                <div className="info-container">
                    {array[slideIndex].info}
                </div>
            </div>
            <div className="control-container">
                <Button onClick={previous} >
                    <ArrowBackIos />
                </Button>

                <Button onClick={next}>
                    <ArrowForwardIos />
                </Button>
            </div>
        </div>



    )
}

export default Slider



//  {/* <h1>{array[slideIndex]}</h1> */}
//  <div className="slide-container">
//  <div className="info-container">
//      <div className="img-info-container">
//          <div className="title">
//              <h1>{array[slideIndex].title}</h1>
//          </div>
//          <div className="genres-container">
//              <span>{array[slideIndex].lang}</span> &bull;
//              <span>{array[slideIndex].genres}</span> &bull;
//              <span>{array[slideIndex].year}</span>
//          </div>
//          <div className="info-container">
//              {array[slideIndex].info}
//          </div>

//      </div>
//  </div>
//  <div className="img-container">

//      <img className="slider-img" src={array[slideIndex].src} alt="" srcSet="" />
//  </div>

// </div>