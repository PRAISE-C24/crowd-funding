import { createStore, action } from "easy-peasy";
import Data from "./data.json";

export default createStore({
  //state from header section
  toggleMenu: false,
  setToggleMenu: action((state, payload) => {
    state.toggleMenu = !state.toggleMenu;
  }),

  //states from main section
  data: Data,
  setData: action((state, payload) => {
    state.data = payload;
  }),

  toggleModal: "false",
  setToggleModal: action((state) => {
    state.toggleModal = !state.toggleModal;
  }),

  activeModal: "",
  setActiveModal: action((state, payload) => {
    state.activeModal = payload;
  }),

  newPledge: "",
  setNewPledge: action((state, payload) => {
    state.newPledge = payload;
  }),

  currentFund: 89000,
  setCurrentFund: action((state, payload) => {
    state.currentFund = state.currentFund + payload;
  }),

  currentBackers: 5007,
  setCurrentBackers: action((state) => {
    state.currentBackers = state.currentBackers + 1;
  }),

  currentPledge: "",
  setCurrentPledge: action((state, payload) => {
    state.currentPledge = payload;
  }),

  currentId: "",
  setCurrentId: action((state, payload) => {
    state.currentId = payload;
  }),

  //states from modal list
  isChecked: false,
  setIsChecked: action((state, payload) => {
    state.isChecked = payload === true ? payload : !state.isChecked;
  }),

  checkedId: 0,
  setCheckedId: action((state, payload) => {
    state.checkedId = payload;
  }),

  //state from intro section
  bookMarked: false,
  setBookMarked: action((state) => {
    state.bookMarked = !state.bookMarked;
  }),

  //state from stat section
  fundPercent: 0,
  setFundPercent: action((state, percent) => {
    state.fundPercent = percent;
  }),
});
