import React, {useState,useEffect} from 'react'
import NewsItems from './NewsItems'

import Spinner from './Spinner'

export default function News(props) {

const[page,updatepage]=useState(1)
const[totalResults,checkpagesize]=useState()
const[loadSpinner,Spinner_Loading]=useState(false)

const [news_articles, setNewsArticles] = useState([])

const capitalize_title = () =>{


  const str1=props.category.charAt(0).toUpperCase() + props.category.slice(1)
  return (str1)
}
const getfromapi = async () =>{
  const response= await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d69bd0630a614eca93d93c51bbefc470&page=${page}&pageSize=${props.pageSize}`)
  Spinner_Loading(true)
  const data = await response.json()
    setNewsArticles(data.articles)
    checkpagesize(data.totalResults)
  Spinner_Loading(false) 
  document.title=`Tidings Today | ${capitalize_title()} `
}

const prevpage = async () =>{
updatepage(page-1)
getfromapi()
}
const nextpage = async () =>{

updatepage(page+1)
getfromapi()

}

useEffect(() => {
  getfromapi()
}, [])

  return (
    <div className='container my-3' >
<h1 style={{ margin: '30px 0px',color: props.dorl === 'light' ? 'black' : 'white', textAlign: 'center' }}>Tidings Today</h1>      <div className='row' style={{justifyContent: 'center', alignContent: 'center', display:"flex", alignItems: "center"}}  >
{/*         <div className='col-md-4'> 
        <NewsItems NewsTitleChanger={NewsTitleChanger} title={nd.title} desc={nd.desc} url={nd.url}></NewsItems>
        </div>
 */}
 {loadSpinner && <Spinner></Spinner>}

{ !loadSpinner && news_articles.map((element) => (

         <div className='col-md-4' key={element.url}>
         <NewsItems  urlText={element.url} title={element.title} desc={element.description} url={element.urlToImage} author={element.author} publishedAt={element.publishedAt}></NewsItems>       
         </div>
         
       ))}
  
      </div>
      <div className='container d-flex justify-content-between'>
      <button type="button" disabled={page <=1 } className="btn btn-outline-info" onClick={prevpage}>&larr; Previous</button>
      <button type="button" disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-outline-info" onClick={nextpage}>Next &rarr;</button>
      </div>   
        
        
         </div>
  )
}
