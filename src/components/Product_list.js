import React, { Component } from 'react'

const Product_list=(props)=> {
    

    let {title,description,imageURL,web_link}=props;
    return (
        
      <div>
        <div className="card">
            <img src={!imageURL?"https://image.shutterstock.com/image-photo/decorative-cosmetics-makeup-brushes-on-260nw-1717814998.jpg":imageURL} className="card-img-top" alt="No Preview Available"/>
            <div className="card-body">
                <h5 className="card-title" style={{color:'lightcoral'}}>{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={web_link} className="btn btn-primary" style={{backgroundColor:"pink",color:"white"}}>Visit Product</a>
        </div>
        </div>
      </div>
    )
  
}

export default Product_list