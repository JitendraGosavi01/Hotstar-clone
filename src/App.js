
import React, { useRef } from 'react';
import './App.css';
import { IconButton, makeStyles } from '@material-ui/core';
import { Menu, Search, AccountCircleOutlined, GTranslateOutlined, LoyaltyOutlined, TheatersOutlined } from '@material-ui/icons';
import logo from './Assets/Images/disney-hotstar-logo-dark.svg'
import Slider from './Components/Slider/Slider'
import ContinueWatching from './Components/Continue-watching/Continue-watching';
import ComedyMovies from './Components/Comedy-movies/Comedy-movies';
function App() {
  const searchBoxEl = useRef({})
  const searchDivEl = useRef({})
  const menuItemEl = useRef({})
  const expandSearchBox = () => {
    searchBoxEl.current.style.width = "20rem"
    searchDivEl.current.style.borderBottom = '1px solid #1664E0';
  }

  document.body.addEventListener('click', (e) => {

    if (e.target.id !== 'search' && e.target.id !== 'menu' && Object.keys(searchBoxEl.current).length > 0 && Object.keys(searchDivEl.current).length > 0) {
      searchBoxEl.current.style.width = "auto";
      searchDivEl.current.style.borderBottom = '1px solid #a0a3a8';
    }

    // if (e.target.id !== 'menu-item') {
    //   menuItemEl.current.style.display = 'none'
    //   menuItemEl.current.style.transition = '2s'
    // }

  })

  // const handleOpen = () => {
  //   // alert('mouseOver')
  //   menuItemEl.current.style.display = 'block'
  //   menuItemEl.current.style.height = '140px'
  //   menuItemEl.current.style.transition = 'height 2s'
  //   menuItemEl.current.style['transition-timing-function'] = 'ease-out'
  // }

  // const handleClose = (e) => {
  //   if (e && e.targe.id !== 'menu-item') {
  //     menuItemEl.current.style.display = 'none'
  //     menuItemEl.current.style.transition = '2s'

  //   }
  // }
  return (
    <div className="App">
      <div className="app-body">
        <div className="nav-container">
          <div className="nav-left">
            <IconButton style={{ marginLeft: '50px' }} id="menu">
              <Menu
              // onMouseOver={handleOpen}
              // onMouseOut={e => handleClose(e)}

              />
            </IconButton>

            <div className="menu-item" ref={menuItemEl} id='menu-item'>
              <div className="channel-wrapper"><TheatersOutlined /><span>Channel</span></div>
              <div className="languages-wrapper"><GTranslateOutlined /><span>Languages</span></div>
              <div className="genres-wrapper"><LoyaltyOutlined /><span>Genres</span></div>
            </div>
            <img src={logo} alt="Hotstar" srcSet="" className='logo' />
            <span className="label">TV</span>
            <span className="label">Movies</span>
            <span className="label">Sports</span>
            <span className="label">Premium</span>
            <span className="label">Diseny+<br /><p>NEW</p></span>
            <span className="label kids">KiDS</span>
          </div>
          <div className="nav-right" >
            <div className="nav-right-search-container" ref={searchDivEl}>
              <input type="text" name="" id="search" placeholder="Search" onClick={expandSearchBox} ref={searchBoxEl} />
              <Search />
            </div>
            <div className="nav-right-upgrade-btn-container">
              <button>UPGRADE</button>
            </div>
            <div className="nav-right-avatar-container">
              <AccountCircleOutlined fontSize={'large'} />
            </div>
          </div>
        </div>
        <div className="content-container">
          <Slider />
          <ContinueWatching />
          <ComedyMovies />
        </div>

      </div>
    </div>
  );
}

export default App;
