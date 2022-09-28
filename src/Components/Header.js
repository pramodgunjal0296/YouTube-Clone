import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import logo from './image/mylogo.jpg';
import profile from './image/profile.png';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';



//EC7  snippet (Go download as an extensil in VSC)
function Header() {
  const [inputSearch,setInputSearch]=useState("");
  return (

    <div className="header">
        <div className="header_left">
      <MenuIcon />
      <Link to="/">
      <img className="header_logo"
      //  src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%2820152017%29.svg"
      src={logo}
      alt="logo.png" />
      </Link>
      
      </div>
      <div className="header_input">
      <input
       onChange={e=>setInputSearch(e.target.value)}
       value={inputSearch}
        placeholder='Search'
         type="text" />
         <Link to={`/search/${inputSearch}`}>
         <SearchIcon className="header_inputButton"/>
         </Link>
      
      </div>
      <div className="header_icon">
      
      <VideoCallIcon className='header_icon'/>
      
      <AppsIcon/>
      <NotificationsIcon/>
      <Avatar alt="remy sharp"
      src={profile}
      />
      </div>
      </div>

  )      
}

export default Header