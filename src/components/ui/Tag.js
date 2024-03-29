import React from 'react';
import '../../scss/ui/Tag.scss';

const Tag = ({ color, text, children }) => {
    const Tagcolor = color ? `tag-color-${color}` : '';
    return (
        <span className={`Tag ${Tagcolor}`}>
            <span className="tag-text">{text}</span>
            {children} {/* 이 부분은 이미 children으로 받으므로 수정할 필요 없음 */}
        </span>
    );
};

Tag.defaultProps = {
    color: "blue",
    text: "Tag"
};

export default Tag;