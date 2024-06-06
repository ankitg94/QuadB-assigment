
const Button = (props) => {
  return (
    <button 
      onClick={props.onClick} 
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {props.value}
    </button>
  );
}

export default Button;
