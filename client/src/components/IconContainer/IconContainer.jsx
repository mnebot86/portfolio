import "./IconContainer.css";

const IconContainer = ({ icons }) => {
  return (
    <div className="icon-container">
      {icons.map((icon, idx) => (
        <img key={icon + idx} src={icon} alt={icon} />
      ))}
    </div>
  );
};

export default IconContainer;
