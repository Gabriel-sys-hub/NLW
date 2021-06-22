import { NewRoom } from "./Pages/NewRoom";
import { Home } from './Pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './Contexts/AuthContext';

function App() {
  
  return (
    <Router>
      <Switch>
        <AuthContextProvider>
          <Route path="/" exact component={ Home } />
          <Route path="/rooms/new" component={ NewRoom } />
        </AuthContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
