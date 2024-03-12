import Button from "./Button";

const FullWidthButton = ({id, type, color, onClick, text}) => {
    const btnColor = ['green', 'red'].includes(color) ? 'btn-color-'+color : "btn-color-gray";

    return (
        <button type={type} className={['FullWidthButton', `${btnColor}`].join(" ")} id={id} onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {color: "default", type: "button"}
export default FullWidthButton;