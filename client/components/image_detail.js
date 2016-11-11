// create image list component
// 1) Import React
import React from 'react';
import ImageScore from './image_score';

// 2) Create the component
const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
        <p>{props.image.description}</p>
        <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </div>
    </li>
  );
};

// 3) Export the component
export default ImageDetail;
