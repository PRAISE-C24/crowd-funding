import Form from "./FormInput";
import { useStoreState } from "easy-peasy";

function ModalItem({ item, handleModal, handleChange, handleCheck }) {
  const { id, title, text, pledge, remainder } = item;

  //isChecked state
  const isChecked = useStoreState((state) => state.isChecked);

  //checked id state
  const checkedId = useStoreState((state) => state.checkedId);

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

      <Form item={item} handleModal={handleModal} handleChange={handleChange} />
    </li>
  );
}

export default ModalItem;
