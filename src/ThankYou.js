import Button from "./Buttons";

function Thanks({ handleModal }) {
  return (
    <section
      id="appreciation-section"
      className=" bg-white text-left  w-[85%] m-auto py-8 rounded-xl shadow-lg md:w-[70%] lg:w-1/2 xl:w-2/5"
    >
      <div className=" text-center leading-8 w-[90%] m-auto flex flex-col items-center justify-center gap-8">
        <img src="/images/icon-check.svg" alt="" />
        <div>
          <h2 className="text-xl font-bold p-2 md:text-2xl ">
            Thanks for your support!
          </h2>

          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </div>
        <div className="w-28 md:w-24 ">
          <Button buttonText="Got it!" handleModal={handleModal} />
        </div>
      </div>
    </section>
  );
}
export default Thanks;
