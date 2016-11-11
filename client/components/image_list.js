// create image list component
// 1) Import React
import React from 'react';
import ImageDetail from './image_detail';

// 2) Create the component
const ImageList = (props) => {
  const validImages = props.images.filter(image=>!image.is_album);
  const RenderedImages = validImages.map(image => {
      return <ImageDetail image={image} key={image.key} />
  });
  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// 3) Export the component
export default ImageList;
