import React from 'react';
// import '../../../scss/Tag.scss';
import '../../scss/ui/Tag.scss'
const Tag= ({id, type, color, onClick, text}) => {
   const Tagcolor = color ? `tag-color-${color}` : ''; 
   return (
       <div className={`Tag Tag ${Tagcolor}`} id={id} onClick={onClick}>
           {text}
       </div>
       
   );
};

Tag.defaultProps = {color: "default" , text:"f"}
export default Tag;