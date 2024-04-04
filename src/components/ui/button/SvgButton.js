import '../../../scss/ui/Button.scss';

const SvgButton = ({id, color, onClick, svg}) => {
    const btnColor = ['gray', 'white', 'yellow', 'blue', 'red'].includes(color) ? 'btn-color-' + color : "btn-color-white";

    return (
        <button type="button" className={['SvgButton', `${btnColor}`].join(" ")} id={id} onClick={onClick}>
            {svg}
        </button>
    );
};

SvgButton.defaultProps = {color: "gray"}

export default SvgButton;