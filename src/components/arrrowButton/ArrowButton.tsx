import "./arrowButton.scss";
type ArrowButtonTypes = {
  type: "primary-button" | "secondary-button";
  direction: "left" | "right";
  clickHandler: () => void;
  disabled: boolean | undefined;
};
const ArrowButton = (props: ArrowButtonTypes) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.clickHandler}
      className={props.type + " " + props.direction}
    ></button>
  );
};

export default ArrowButton;
