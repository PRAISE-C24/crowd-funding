import { useState } from "react";
import Intro from "./IntroSection";
import Stat from "./StatSection";
import About from "./AboutSection";
import Modal from "./ModalSection";
import Data from "./data.json";

function Main() {
  const [data, setData] = useState(Data);
  const [toggleModal, setToggleModal] = useState("false");
  const [activeModal, setActiveModal] = useState("");
  const [newPledge, setNewPledge] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [currentFund, setCurrentFund] = useState(89000);
  const [currentBackers, setCurrentBackers] = useState(5007);
  const [currentPledge, setCurrentPledge] = useState("");

  function handleChange(e) {
    const newInput = e.target.value;
    setNewPledge(newInput);

    const newId = e.target.id;
    setCurrentId(newId);

    const pledge = e.target.placeholder;
    setCurrentPledge(pledge);
  }

  function evaluatePledge(pledge) {
    if (Number(newPledge) >= Number(currentPledge) && newPledge !== "") {
      handleSubmit();
      setActiveModal("Continue");
    } else {
      setModal("wrong pledge");
    }
  }

  function handleSubmit() {
    setCurrentFund((prevFund) => prevFund + Number(newPledge));
    setCurrentBackers((prevBakers) => prevBakers + 1);

    setData((prevData) =>
      prevData.map((item) => {
        return item.id === Number(currentId) && item.remainder !== "none"
          ? { ...item, remainder: item.remainder - 1 }
          : item;
      })
    );

    setNewPledge("");
    updateData();
  }

  function updateData() {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === Number(currentId)) {
          return item.remainder === 0
            ? {
                ...item,
                mainButton: (item.mainButton = "Out of stock"),
                modalButton: (item.modalButton = "Out of stock"),
              }
            : item;
        } else {
          return item;
        }
      })
    );
  }

  function setModal(active) {
    setActiveModal(active);
    if (active !== "wrong pledge") {
      setToggleModal((prevToggle) => !prevToggle);
    }
  }

  function handleModal(name) {
    if (name === "Got it!") {
      if (activeModal !== "wrong pledge" && activeModal !== "Out of stock") {
        setModal("close");
      } else {
        setActiveModal("main");
        setNewPledge("");
        setCurrentPledge("");
      }
    } else if (name === "Continue") {
      evaluatePledge();
    } else if (name === "Out of stock") {
      activeModal !== "main"
        ? setModal("Out of stock")
        : setActiveModal("Out of stock");
    } else if (name === "close") {
      setModal("close");
    } else {
      setModal("main");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8 mb-20">
      <Intro handleModal={handleModal} />
      <Stat currentFund={currentFund} currentBackers={currentBackers} />
      <About data={data} handleModal={handleModal} />
      <Modal
        data={data}
        handleModal={handleModal}
        toggleModal={toggleModal}
        activeModal={activeModal}
        handleChange={handleChange}
        newPledge={newPledge}
        currentPledge={currentPledge}
      />
    </main>
  );
}

export default Main;
