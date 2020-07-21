import React from 'react';
import './spinner.css'

const Showpost = (props) => {
    if(props.loading){
        return <h1 className='loading'></h1> 
    }
   
     const post = props.post.map((value,index)=> {
         return(
         <h3 key={value.id}>{value.id}<br></br>{value.title}<br></br>{value.body}</h3>
     )
    });

    return (
        <div>
           {post}
        </div>
    )
}

export default Showpost
