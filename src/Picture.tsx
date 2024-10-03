import React from "react";

 type PictureType = {
    title: string;
    url: string;
    comment: string;
  };
  type PictureArr = {
    pictures: PictureType[];
  };

const Picture = (props:PictureArr) => {
    console.log(props)
  return (
    <div>
      <hr />
      {props.pictures.map((picture, index) => (
        <div key={index} className="container-width">
          <span className="title">{index+1}.　{picture.title}</span>          
          <br />
          <img src={picture.url} alt="写真" className="img-width" />
          <br />
          <p className="comment">{picture.comment}</p>
          <hr />
        </div>
      )
    )
  
    }
    </div>
    )
};

export default Picture;
