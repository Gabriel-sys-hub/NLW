import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";
import { Room } from './Pages/Room';
import { NotFound } from './Pages/NotFound';

import { AuthContextProvider } from './Contexts/AuthContext'
import { AdmRoom } from './Pages/AdmRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={ AdmRoom } />
          <Route component={ NotFound } />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;