const FullWidthButton = ({id, type, scss, onClick, text}) => {
    const btnType = ["positive", "negative"].includes(scss) ? scss : "default";

    return (
        <button className={["Button", `${btnType}`].join(" ")} id={id} onClick={onClick}
                type={type}>{text}</button>
    );
};

FullWidthButton.defaultProps = {scss: "default", type:"button"}

export default FullWidthButton;