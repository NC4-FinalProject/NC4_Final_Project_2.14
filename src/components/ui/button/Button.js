import '../../scss/ui/Button.scss';

const Button = ({id, type, color, onClick, text}) => {
    const btnColor = ['green', 'red'].includes(color) ? 'btn-color-'+color : "btn-color-gray";

    return (
        <button className={['Button', `${btnColor}`].join(" ")} id={id} onClick={onClick}
                type={type}>{text}</button>
    );
};

Button.defaultProps = {color: "default", type:"button"}

export default Button;