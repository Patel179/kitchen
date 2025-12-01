import { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = { isOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(
      state.isOpen ? "The restaurant is open" : "The restaurant is closed"
    );
  }, [state.isOpen]);

  const dishes = [
    "Macaroni and Cheese",
    "Salmon with Potatoes",
    "Grilled Chicken Salad",
    "Tomato Basil Soup",
  ];

  return (
    <div>
      <Header name="Alex's Kitchen" year={2025} />

      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        {state.isOpen ? "Close Restaurant" : "Open Restaurant"}
      </button>

      <p>Status: {state.isOpen ? "Open" : "Closed"}</p>

      <Main dishes={dishes} />
    </div>
  );
}
