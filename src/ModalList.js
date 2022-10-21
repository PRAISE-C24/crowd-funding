import ModalItem from "./ModalItem";
import { useStoreActions, useStoreState } from "easy-peasy";

function ModalList({ handleModal, handleChange }) {
  //data state
  const data = useStoreState((state) => state.data);

  //isChecked action
  const setIsChecked = useStoreActions((action) => action.setIsChecked);

  //checked id action
  const setCheckedId = useStoreActions((action) => action.setCheckedId);

  //checked id state
  const checkedId = useStoreState((state) => state.checkedId);

  function handleCheck(e) {
    const id = e.target.id;

    setIsChecked();

    if (checkedId === Number(id)) {
      setCheckedId(Number(id));
    } else {
      setIsChecked(true);
      setCheckedId(Number(id));
    }
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
              item={item}
              handleModal={handleModal}
              handleChange={handleChange}
              handleCheck={handleCheck}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ModalList;
