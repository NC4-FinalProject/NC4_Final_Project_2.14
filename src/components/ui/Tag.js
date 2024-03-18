import React from 'react';
// import '../../../scss/Tag.scss';
import '../../scss/ui/Tag.scss'
const Tag= ({id, type, color, onClick, text}) => {
//    const Tagcolor = color ? `tag-color-${color}` : ''; 
   const Tagcolor = ['gray', 'green', 'blue'].includes(color) ? 'tag-color-' + color : "tag-color-gray";
   return (
       <span className={`Tag ${Tagcolor}`} id={id} onClick={onClick}>
           {text}
       </span>
       
   );
};

Tag.defaultProps = {color: "default"}
export default Tag;