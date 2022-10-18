import Button from "./Buttons";

function OutOfStock({ handleModal }) {
  return (
    <section
      id="OutOfStock-section"
      className="bg-white text-left  w-[80%] m-auto py-12 md:py-16 rounded-xl shadow-lg transition duration-500 ease-out md:w-[60%] lg:w-1/2 xl:w-2/5"
    >
      <div className=" text-center leading-8 w-[90%] m-auto flex flex-col items-center justify-center gap-8">
        <h2 className="text-xl font-bold p-4 lg:px-8 md:text-2xl ">
          Sorry this Product is Currently Out Of Stock!
        </h2>

        <div className="w-24 ">
          <Button buttonText="Got it!" handleModal={handleModal} />
        </div>
      </div>
    </section>
  );
}
export default OutOfStock;
