import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'

export default function News() {
const [news_articles, setNewsArticles] = useState([])
const getfromapi = async () =>{
  const response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470")
  const data = await response.json()
    setNewsArticles(data.articles)
}

useEffect(() => {
  getfromapi()
}, [])

  return (
    <div className='container my-3' >
      <h1 style={{justifyContent: 'center', alignContent: 'center', display:"flex", flexDirection: 'column'}}> Tidings Today </h1>
      <div className='row' style={{justifyContent: 'center', alignContent: 'center', display:"flex", alignItems: "center"}}  >
{/*         <div className='col-md-4'> 
        <NewsItems NewsTitleChanger={NewsTitleChanger} title={nd.title} desc={nd.desc} url={nd.url}></NewsItems>
        </div>
 */}

{news_articles.map((element) => (

         <div className='col-md-4' key={element.url}>
         <NewsItems  urlText={element.url} title={element.title} desc={element.description} url={element.urlToImage}></NewsItems>       
         </div>
         
       ))}
  
      </div>
    </div>
  )
}
