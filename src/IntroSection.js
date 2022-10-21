import Button from "./Buttons";
import { useStoreState, useStoreActions } from "easy-peasy";

function Intro({ handleModal }) {
  //bookmarked state
  const bookMarked = useStoreState((state) => state.bookMarked);
  //bookmarked action
  const setBookMarked = useStoreActions((action) => action.setBookMarked);

  let style = {
    backgroundColor: "#eeee",
    color: "hsl(176 50% 47% )",
  };

  function handleBookMark() {
    setBookMarked();
  }

  return (
    <article
      id="intro-section"
      className="relative bg-white text-center py-12 flex flex-col justify-center items-center gap-y-4 w-[85%] m-auto rounded-md shadow-lg mt-44 md:mt-80   md:w-3/4 lg:w-3/5  lg:mt-44 xl:w-1/2 xl:mt-56 "
    >
      <img
        className="absolute -top-6"
        src="/images/logo-mastercraft.svg"
        alt=""
      />
      <h1 className="text-2xl font-bold mx-4 md:text-3xl">
        MasterCraft Bamboo Monitor Riser
      </h1>
      <p className="mx-2">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain
      </p>

      {/* button section of the intro section */}
      <section className="flex items-center justify-between w-[90%] gap-4 mt-4">
        {/* intro button */}
        <div className="w-[220px]">
          <Button buttonText="Back this project" handleModal={handleModal} />
        </div>

        {/* bookmark button for mobile */}
        <button type="button" className="md:hidden hover:opacity-60">
          {bookMarked ? (
            <img
              onClick={handleBookMark}
              src="/images/icon-bookmarked.svg"
              alt=""
            />
          ) : (
            <img
              onClick={handleBookMark}
              src="/images/icon-bookmark.svg"
              alt=""
            />
          )}
        </button>

        {/* bookmark button for desktop */}
        <button
          onClick={handleBookMark}
          style={bookMarked ? style : null}
          type="button"
          className="hidden text-black bg-darkGray w-[200px] h-[60px] rounded-full text-xl text-center md:flex items-center gap-2 hover:opacity-60"
        >
          {bookMarked ? (
            <img src="/images/icon-bookmarked.svg" alt="" />
          ) : (
            <img src="/images/icon-bookmark.svg" alt="" />
          )}
          Bookmark{bookMarked && "ed"}
        </button>
      </section>
    </article>
  );
}

export default Intro;
