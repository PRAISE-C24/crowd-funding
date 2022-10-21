import Intro from "./IntroSection";
import Stat from "./StatSection";
import About from "./AboutSection";
import Modal from "./ModalSection";
import { useStoreActions, useStoreState } from "easy-peasy";

function Main() {
  // Getting all the states and actions from the Store

  //data and set data state
  const data = useStoreState((state) => state.data);
  const setData = useStoreActions((action) => action.setData);

  //setting state for toggle modal
  const setToggleModal = useStoreActions((action) => action.setToggleModal);

  //active state and set active modal state
  const activeModal = useStoreState((state) => state.activeModal);
  const setActiveModal = useStoreActions((action) => action.setActiveModal);

  //setting state for current fund
  const setCurrentFund = useStoreActions((action) => action.setCurrentFund);

  //setting state for current backers
  const setCurrentBackers = useStoreActions(
    (action) => action.setCurrentBackers
  );

  //current pledge and set current pledge state
  const currentPledge = useStoreState((state) => state.currentPledge);
  const setCurrentPledge = useStoreActions((action) => action.setCurrentPledge);

  //new pledge and set new pledge state
  const newPledge = useStoreState((state) => state.newPledge);
  const setNewPledge = useStoreActions((action) => action.setNewPledge);

  //current id and set current id state
  const currentId = useStoreState((state) => state.currentId);
  const setCurrentId = useStoreActions((action) => action.setCurrentId);

  function handleChange(e) {
    const newInput = e.target.value;
    setNewPledge(newInput);

    const newId = e.target.id;
    setCurrentId(newId);

    const pledge = e.target.placeholder;
    setCurrentPledge(pledge);
  }

  function evaluatePledge() {
    if (Number(newPledge) >= Number(currentPledge) && newPledge !== "") {
      handleSubmit();
      setActiveModal("Continue");
    } else {
      setModal("wrong pledge");
    }
  }

  function handleSubmit() {
    setCurrentFund(Number(newPledge));
    setCurrentBackers();

    let newData = data.map((item) => {
      return item.id === Number(currentId) && item.remainder !== "none"
        ? { ...item, remainder: item.remainder - 1 }
        : item;
    });

    setData(newData);
    updateStock(newData);
    setNewPledge("");
  }

  function updateStock(stock) {
    setData(
      stock.map((item) => {
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
      setToggleModal();
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
      <Stat />
      <About handleModal={handleModal} />
      <Modal handleModal={handleModal} handleChange={handleChange} />
    </main>
  );
}

export default Main;
