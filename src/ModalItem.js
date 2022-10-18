import Form from "./FormInput";

function ModalItem({
  id,
  title,
  text,
  pledge,
  buttonText,
  remainder,
  handleModal,
  handleChange,
  newPledge,
  isChecked,
  checkedId,
  handleCheck,
}) {
  return (
    <li className="w-[90%] m-auto  border-darkGray   border-2 rounded-lg hover:border-moderateCyan">
      <section className="flex flex-col gap-6 p-4 relative">
        <div className="flex gap-4 items-start">
          <div>
            <button
              style={{
                borderColor:
                  isChecked && checkedId === id && "hsl(176, 50%, 47%)",
              }}
              className="w-6 h-6 border-2 border-darkGray rounded-full flex justify-center items-center"
            >
              <div
                id={id}
                onClick={handleCheck}
                style={{
                  backgroundColor:
                    isChecked && checkedId === id && "hsl(176, 50%, 47%)",
                }}
                className="w-3 h-3 rounded-full"
              ></div>
            </button>
          </div>

          <div className="md:flex gap-4 items-center">
            <h3
              id={id}
              onClick={handleCheck}
              className="font-bold text-xl md:text-[16px] lg:text-xl hover:text-moderateCyan cursor-pointer"
            >
              {title}
            </h3>
            {pledge > "1" && (
              <p className="text-moderateCyan  mr-auto">
                Pledge ${pledge} or more
              </p>
            )}
          </div>
        </div>

        {/* paragraph text */}
        <p className="md:px-9">{text}</p>

        {remainder !== "none" && (
          <p className="md:absolute top-4 right-6">
            <span className="font-bold text-xl">{remainder}</span> left
          </p>
        )}
      </section>

      {/* form section */}

      <Form
        buttonText={buttonText}
        placeholder={pledge}
        isChecked={isChecked}
        checkedId={checkedId}
        id={id}
        handleModal={handleModal}
        handleChange={handleChange}
        newPledge={newPledge}
      />
    </li>
  );
}

export default ModalItem;
