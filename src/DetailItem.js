import Button from "./Buttons";

function DetailItem({
  title,
  text,
  pledge,
  buttonText,
  remainder,
  handleModal,
}) {
  return (
    <li
      style={{ display: pledge === "1" && "none" }}
      className="about-ul-item relative border-2 border-darkGray rounded-md leading-8 p-8 space-y-8 hover:border-moderateCyan"
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <span className=" md:absolute right-8 top-0 text-moderateCyan ">
        Pledge ${pledge} or more
      </span>

      <p>{text}</p>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p>
          <span className="text-4xl font-bold">{remainder} </span>left
        </p>

        <div className="w-[200px]">
          <Button buttonText={buttonText} handleModal={handleModal} />
        </div>
      </div>
    </li>
  );
}

export default DetailItem;
