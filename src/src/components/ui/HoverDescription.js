import '../../scss/ui/HoverDescription.scss';

const HoverDescription = ({text, element}) => {
    return (
        <div className="HoverDescription">
            {element}
            <span className="arrow_box">
                {text}
            </span>
        </div>
    );
};

export default HoverDescription;