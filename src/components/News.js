import React, { useState }  from 'react'
import NewsItems from './NewsItems'

export default function News() {
    const [nd,changingt]=useState({title: "Default",desc: "Default",url: "Default"})

    const NewsTitleChanger = (title,desc,url) => {
      changingt({title : title, desc: desc,url: url})
  }

  return (
    <div className='container my-3' >
      <h2 style={{justifyContent: 'center', alignContent: 'center', display:"flex", flexDirection: 'column'}}> Tidings Today </h2>
      <div className='row' style={{justifyContent: 'center', alignContent: 'center', display:"flex", alignItems: "center"}}  >
        <div className='col-md-4'> 
        <NewsItems NewsTitleChanger={NewsTitleChanger} title={nd.title} desc={nd.desc} url={nd.url}></NewsItems>
        </div>
        <div className='col-md-4'> 
        <NewsItems NewsTitleChanger={NewsTitleChanger} title={nd.title} desc={nd.desc} url={nd.url}></NewsItems>
        </div>
        <div className='col-md-4'> 
        <NewsItems NewsTitleChanger={NewsTitleChanger} title={nd.title} desc={nd.desc} url={nd.url}></NewsItems>
        </div>
           
      </div>
    </div>
  )
}
