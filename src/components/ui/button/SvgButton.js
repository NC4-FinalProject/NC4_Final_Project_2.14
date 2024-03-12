import '../../../scss/ui/Button.scss';

const SvgButton = ({id, color, onClick, svg}) => {
    const btnColor = ['yellow', 'blue'].includes(color) ? 'svg-color-'+color : "svg-color-gray";

    return (
        <button type="button" className={['SvgButton', `${btnColor}`].join(" ")} id={id} onClick={onClick}>
            {svg}
        </button>
    );
};

SvgButton.defaultProps = {color: "default"}

export default SvgButton;