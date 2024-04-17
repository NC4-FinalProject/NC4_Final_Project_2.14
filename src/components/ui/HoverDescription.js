import '../../scss/ui/HoverDescription.scss';

const HoverDescription = ({text, element}) => {
    return (
        <div className="HoverDescription">
            {element}
            <div className="arrow_box" dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    );
};

export default HoverDescription;