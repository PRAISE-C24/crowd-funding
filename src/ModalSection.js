import ModalList from "./ModalList";
import Thanks from "./ThankYou";
import OutOfStock from "./OutOfStock";
import WrongInput from "./WrongInput";

function Modal({
  handleModal,
  toggleModal,
  newPledge,
  handleChange,
  activeModal,
  data,
  currentPledge,
}) {
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
        <WrongInput handleModal={handleModal} currentPledge={currentPledge} />
      ) : activeModal === "Continue" ? (
        <Thanks handleModal={handleModal} />
      ) : (
        <ModalList
          handleModal={handleModal}
          handleChange={handleChange}
          newPledge={newPledge}
          data={data}
        />
      )}
    </article>
  );
}

export default Modal;
