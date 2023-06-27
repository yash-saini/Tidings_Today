import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'

export default function News(props) {

const[page,updatepage]=useState(1)

const [news_articles, setNewsArticles] = useState([])
const getfromapi = async () =>{
  const response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470")
  const data = await response.json()
    setNewsArticles(data.articles)
}

const prevpage = async () =>{
updatepage( prevpage=>prevpage-1)
const var_name=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470&page=${page}`
const response= await fetch(var_name)
const data = await response.json()
  setNewsArticles(data.articles)

}
const nextpage = async () =>{
  updatepage( nextpage=>nextpage+1)
  const var_name=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470&page=${page}`
  const response= await fetch(var_name)
  const data = await response.json()
    setNewsArticles(data.articles)

}

useEffect(() => {
  getfromapi()
}, [])

  return (
    <div className='container my-3' >
<h1 style={{ color: props.dorl === 'light' ? 'black' : 'white', textAlign: 'center' }}>Tidings Today</h1>      <div className='row' style={{justifyContent: 'center', alignContent: 'center', display:"flex", alignItems: "center"}}  >
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
      <div className='container d-flex justify-content-between'>
      <button type="button" disabled={page <=1 } className="btn btn-outline-info" onClick={prevpage}>&larr; Previous</button>
      <button type="button" className="btn btn-outline-info" onClick={nextpage}>Next &rarr;</button>
      </div>   
        
        
         </div>
  )
}
