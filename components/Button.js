const Button = ({ btnText, className }) => {
  return (
    <button
      className={`${className} text-[#3C4043] bg-[#F8F9FA] p-2 rounded-md hover:border-[#a6abb1] hover:border text-sm`}
    >
      {btnText}
    </button>
  );
};

export default Button;
