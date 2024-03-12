import '../../scss/ui/Button.scss';

const Button = ({id, type, color, onClick, text}) => {
    const btnColor = ["green", "red"].includes(color) ? 'btn_'+color : "default";
    console.log(color);
    console.log(btnColor);
    return (
        <button className={["SvgButton", `${btnColor}`].join(" ")} id={id} onClick={onClick}
                type={type}>{text}</button>
    );
};

Button.defaultProps = {color: "default", type:"button"}

export default Button;