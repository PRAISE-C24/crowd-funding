import DetailItem from "./DetailItem";
import { useStoreState } from "easy-peasy";

function About({ handleModal }) {
  const data = useStoreState((state) => state.data);

  return (
    <article
      id="about-section"
      className="bg-white text-left w-[85%] m-auto py-12 rounded-md shadow-lg md:w-3/4 lg:w-3/5 xl:w-1/2"
    >
      <section
        id="about"
        className="w-[90%] m-auto leading-8 flex flex-col gap-10"
      >
        <h2 className="text-2xl font-bold">About this project</h2>
        <p>
          The MasterCraft Bamboo Monitor raiser is a sturdy and stylish platform
          that elevates your screen to a more comfortable view height. Placing
          your monitor at eye view level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra space below your computer to allow notepads, pens and USB sticks
          to be stored under the stand.
        </p>
        <ul id="details" className=" m-auto flex flex-col gap-8">
          {data.map((item) => {
            return (
              <DetailItem key={item.id} item={item} handleModal={handleModal} />
            );
          })}
        </ul>
      </section>
    </article>
  );
}

export default About;
