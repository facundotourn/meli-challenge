import React, { useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

type ContextProps = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const Context = React.createContext<Partial<ContextProps>>({});

type LoaderContextProviderProps = {
  children: React.ReactNode;
};

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  const [progress, setProgress] = useState<number>(0);

  return (
    <Context.Provider value={{ progress, setProgress }}>
      <LoadingBar
        color="#fff"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {children}
    </Context.Provider>
  );
}

export function useLoader() {
  return useContext(Context);
}

export default Context;
