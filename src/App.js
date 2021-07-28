// import logo from './logo.svg';
import React from 'react'
import './App.css';
import ClassCounterOne from './useEffect/ClassCounterOne';
import ClassMouse from './useEffect/ClassMouse';
import HookCounterOne from './useEffect/HookCounterOne';
import HookMouse from './useEffect/HookMouse';
import ClassCounter from './useState/ClassCounter';
import HookCounter from './useState/HookCounter';
import HookCounterFour from './useState/HookCounterFour';
import HookCounterThree from './useState/HookCounterThree';
import HookCounterTow from './useState/HookCounterTow';
import MouseContainer from './useEffect/MouseContainer'
import IntervalClassCounter from './useEffect/IntervalClassCounter';
import IntervalHookCounter from './useEffect/IntervalHookCounter';
import DataFetching from './useEffect/DataFetching';
import ComponentC from  './useContext/ComponentC'
import CounterOne from './useReducer/CounterOne';
import CounterTwo from './useReducer/CounterTwo';
import CounterThree from './useReducer/CounterThree';
import AppContext from './useReducer/useReducer-with-useContext/AppContext';
import DataFetchingOne from './FetchData/DataFetchingOne';
import DataFetchingTow from './FetchData/DataFetchingTow';
import ParentComponent from './useCallback/ParentComponent';
import Counter from './useCallback/useMemo/Counter';
import FocusInput from './useRef/FocusInput';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    
    <div className="App">
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingTow/> */}
      {/* <AppContext/> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'Tarek'}>
        <ChannelContext.Provider value= {'codevolution'} >
        <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/> */}
      {/* <IntervalClassCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      <HookCounterTow/>
    </div>
   
  );
}

export default App;
