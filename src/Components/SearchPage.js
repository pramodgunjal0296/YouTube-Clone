import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>      
        </div>
        <hr />
        <ChannelRow
        image="https://i.ytimg.com/an_webp/hP1V5wehdEU/mqdefault_6s.webp?du=3000&sqp=CPi2i5YG&rs=AOn4CLCCR4CMIAXWFLTpz30CGY6CA3zvsg"
        channel="clever programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="you can find Amazing Programming Video dffds dffgfdgd gfd gerge gergerg gregre 
         errger ergerg rgref gegr "
         />
         <hr />
         <VideoRow/>

        

        </div>
  )
}

export default SearchPage