import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css"; // eslint-disable-line no-unused-vars
//postCSS 입니다. CSS는 셀렉터(클래스네임,아이디네임) 값이
//겹치지 않게 사용하는게 일반적인데 postCSS를 사용함으로써 moduling을 할수 있습니다.
//즉 각 컴포넌트마다 독립적으로 css효과를 줄수있기 때문에 협업시 이름이 겹칠 걱정을 할 필요가 없어집니다.
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Create from "./components/create/create";
import Login from "./components/login/login";
import Join from "./components/join/join";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
