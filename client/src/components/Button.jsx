import "../styles/button_style.css";
// eslint-disable-next-line react/prop-types
const Button = ({ children, className, type }) => {
  return (
    <button
      type={type}
      className={`${className}  text-sm button rounded-md flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
