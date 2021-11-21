import React, { createContext, Dispatch, useReducer } from 'react';

type ActionProps = {
  type: string;
  date: number;
};

interface IDate {
  date: number;
}

const initialDate = {
  date: 1635980400000,
};

const DateContext = createContext<{
  state: IDate;
  dispatch: Dispatch<ActionProps>;
}>({ state: initialDate, dispatch: () => null });

const DateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer((state: IDate, action: ActionProps) => {
    switch (action.type) {
      case 'UPDATE_TIMESTAMP':
        return {
          ...state,
          date: action.date,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }, initialDate);

  return <DateContext.Provider value={{ state, dispatch }}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
