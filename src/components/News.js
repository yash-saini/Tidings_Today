import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'

export default function News(props) {

const[page,updatepage]=useState(1)
const[totalResults,checkpagesize]=useState()
const[isemptypage,checknextemptypage]=useState(false)

const [news_articles, setNewsArticles] = useState([])
const getfromapi = async () =>{
  const response= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470&page=1&pageSize=20")
  const data = await response.json()
    setNewsArticles(data.articles)
    checkpagesize(data.totalResults)
}

const prevpage = async () =>{
  checknextemptypage(false)

updatepage( prevpage=>prevpage-1)
const var_name=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470&page=${page - 1}&pageSize=20`
const response= await fetch(var_name)
const data = await response.json()
  setNewsArticles(data.articles)
 

}
const nextpage = async () =>{

  if (page + 1 > Math.ceil(totalResults/20))
  {
    checknextemptypage(true)
  }
  else 
  {
  updatepage( nextpage=>nextpage+1)
  checknextemptypage(false)
  const var_name=`https://newsapi.org/v2/top-headlines?country=us&apiKey=d69bd0630a614eca93d93c51bbefc470&page=${page + 1}&pageSize=20`
  const response= await fetch(var_name)
  const data = await response.json()
    setNewsArticles(data.articles)
  }
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
      <button type="button" disabled={isemptypage} className="btn btn-outline-info" onClick={nextpage}>Next &rarr;</button>
      </div>   
        
        
         </div>
  )
}
