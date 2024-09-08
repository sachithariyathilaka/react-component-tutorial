import {ClassComponent} from "./component/ClassComponent";

/**
 * Main method of the application.
 *
 * @returns {ClassComponent}
 */
function App() {
  let props = {name: 'Sachith Ariyathilaka'};

  // functional component
  // return functionalComponent(props);

  // class component
  return new ClassComponent(props);
}

export default App;
