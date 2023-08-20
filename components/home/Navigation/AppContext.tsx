"use client";

import { type } from "os";
import { Dispatch, SetStateAction, createContext } from "react";

type State = {
  displayNavigation: boolean;
};
type AppContextProps = {
  State: State;
  setState: Dispatch<SetStateAction<State>>;
};

const AppContext = createContext<AppContextProps>(null!);
