import Button from "./Buttons";

function WrongInput({ handleModal, currentPledge }) {
  return (
    <section
      id="WrongPledge-section"
      className="bg-white text-left  w-[85%] m-auto py-16 rounded-xl shadow-lg transition duration-500 ease-out md:w-[70%] lg:w-1/2 xl:w-2/5"
    >
      <div className=" text-center leading-8 w-[90%] m-auto flex flex-col items-center justify-center gap-8">
        {currentPledge !== "" ? (
          <h2 className="text-xl font-bold py-2 md:px-8 md:text-2xl ">
            Sorry! pledge have to be ${currentPledge} or more for this reward.
          </h2>
        ) : (
          <h2 className="text-xl font-bold p-2 md:text-2xl ">
            Sorry pledge can not be Empty!
          </h2>
        )}

        <div className="w-24">
          <Button buttonText="Got it!" handleModal={handleModal} />
        </div>
      </div>
    </section>
  );
}
export default WrongInput;
