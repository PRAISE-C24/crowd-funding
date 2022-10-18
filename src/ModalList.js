import { useState } from "react";
import ModalItem from "./ModalItem";

function ModalList({ data, handleModal, handleChange, newPledge }) {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedId, setCheckedId] = useState(0);

  function handleCheck(e) {
    const id = e.target.id;

    setIsChecked((prevChecked) => !prevChecked);

    setCheckedId((prevId) => {
      if (prevId === Number(id)) {
        return Number(id);
      } else {
        setIsChecked(true);
        return Number(id);
      }
    });
  }

  return (
    <section
      id="pledge-section"
      className="relative bg-white text-left  w-[85%] m-auto py-8 rounded-md shadow-lg transition duration-500 ease-out md:w-3/4 lg:w-3/5 xl:w-1/2"
    >
      <img
        className="absolute top-4 right-8 w-4"
        src="/images/icon-close-modal.svg"
        alt=""
        role="button"
        onClick={() => handleModal("close")}
      />
      <div className="w-[90%] m-auto space-y-2">
        <h2 className="font-bold text-2xl">Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <ul className="space-y-8 mt-8">
        {data.map((item) => {
          return (
            <ModalItem
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              pledge={item.pledge}
              buttonText={item.modalButton}
              remainder={item.remainder}
              handleModal={handleModal}
              handleChange={handleChange}
              newPledge={newPledge}
              isChecked={isChecked}
              checkedId={checkedId}
              handleCheck={handleCheck}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ModalList;
