import React from 'react';
import { Link } from 'react-router-dom'

export default function NewsItems(props) {
/* 
  const Newscallingtitle = () => {
   props.NewsTitleChanger("PUTIN","RUSSIA IS AN EVIL NATION","https://storage.googleapis.com/afs-prod/media/d4ed1506982c42e998398220ee61d51a/3000.jpeg")
} */
/* useEffect(() => {
  Newscallingtitle(); // Invoke the function when the component mounts
}); */
  return (
    <div className='container' style={{display:"flex",justifyContent: 'center'}}>
      <div className="card"  >
        <img src= {props.url} className="card-img-top" alt="News"/>
        <div className="card-body">
      
            <h5 className="card-title" >{props.title}</h5>
            <p className="card-text" >{props.desc}</p>
            <p className="card-text"><small className="text-muted">Written by : {props.author ? props.author : "Anonymous"} on {new Date(props.publishedAt).toGMTString()} </small></p>
            <Link to={props.urlText} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
        </div>
</div>
    </div>
  )
}
