import Button from "./Buttons";

function Form({
  id,
  placeholder,
  buttonText,
  isChecked,
  checkedId,
  handleModal,
  handleChange,
  newPledge,
}) {
  return (
    <section
      style={{ display: isChecked && checkedId === id && "flex" }}
      className="hidden border-t-2 border-darkGray flex-col items-center gap-6 p-6 md:flex-row md:justify-between"
    >
      <p>Enter your pledge</p>

      {/* form input */}
      <form className="flex items-center gap-6">
        <div className="form-content w-[100px] h-[55px] border-darkGray  border-2 cursor-pointer rounded-full flex items-center justify-evenly hover:border-moderateCyan">
          <label htmlFor={id} className="text-xl cursor-pointer">
            $
          </label>

          <input
            className="w-[45%] font-bold text-xl border-none  outline-none"
            type="text"
            id={id}
            placeholder={placeholder}
            value={newPledge}
            onChange={handleChange}
          />
        </div>

        <div className="form-content w-[130px] h-[55px]">
          <Button buttonText={buttonText} handleModal={handleModal} />
        </div>
      </form>
    </section>
  );
}

export default Form;
