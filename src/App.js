import {Provider} from 'react-redux';
import store from "./AppState/store";
import ScreenTodo from "./Screens/ScreenTodo";


function App() {
  return (
      <Provider store={store}>
        <div>
            <ScreenTodo/>
        </div>
      </Provider>
  );
}

export default App;
