function Button({ buttonText, handleModal }) {
  function handleClick(e) {
    e.preventDefault();
    handleModal(buttonText);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: buttonText === "Out of stock" && "hsl(0, 0%, 48%)",
      }}
      type="button"
      className={
        "text-white bg-moderateCyan  w-full h-[60px] rounded-full text-xl text-center hover:bg-darkCyan"
      }
    >
      <a href="1">{buttonText}</a>
    </button>
  );
}

export default Button;
