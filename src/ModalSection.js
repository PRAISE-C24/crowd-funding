import ModalList from "./ModalList";
import Thanks from "./ThankYou";
import OutOfStock from "./OutOfStock";
import WrongInput from "./WrongInput";
import { useStoreState } from "easy-peasy";

function Modal({ handleModal, handleChange, currentPledge }) {
  //toggle modal state
  const toggleModal = useStoreState((state) => state.toggleModal);

  //active modal state
  const activeModal = useStoreState((state) => state.activeModal);

  return (
    <article
      id="Modal-section"
      style={{
        transform: toggleModal ? `translateX(${-100}%)` : `translateX(${0}%)`,
      }}
      className="flex justify-center items-center fixed top-0 left-0  w-full h-full py-24 overflow-auto bg-[#00000067] z-10 transition duration-500 lg:duration-700 ease-out"
    >
      {activeModal === "Out of stock" ? (
        <OutOfStock handleModal={handleModal} />
      ) : activeModal === "wrong pledge" ? (
        <WrongInput handleModal={handleModal} />
      ) : activeModal === "Continue" ? (
        <Thanks handleModal={handleModal} />
      ) : (
        <ModalList handleModal={handleModal} handleChange={handleChange} />
      )}
    </article>
  );
}

export default Modal;
