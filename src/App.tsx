import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";
import { Room } from './Pages/Room';
import { NotFound } from './Pages/NotFound';

import { AuthContextProvider } from './Contexts/AuthContext'
import { ThemeContextProvider } from './Contexts/ThemeContext';
import { AdmRoom } from './Pages/AdmRoom';
import './Styles/switch.scss'
import './Styles/auth.scss';
import './Styles/room.scss';
import './Styles/room.css';
import './Styles/admin.scss'
import './Styles/admin.css'
import './Styles/question.scss'

function App() {
  return (
    <BrowserRouter basename="/NLW">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdmRoom} />
            <Route component={NotFound} />
          </Switch>
        </AuthContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;