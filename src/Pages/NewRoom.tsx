import illustrationIMG from '../Assets/images/illustration.svg';
import logoImg from '../Assets/images/logo.svg'
import '../Styles/auth.scss';

import { Button } from '../Components/Button';

import { Link } from 'react-router-dom';

import { useAuth } from '../Hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();
  
  return (
    <div id="page-auth">
      <aside>
        <img src={ illustrationIMG } alt="" />
        <strong> Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas de sua audiência em tempo real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ logoImg } alt="" />
        <h2> Criar uma nova sala </h2>
        <form>
          <input
            type="text"
            placeholder="Digite o codigo da sala"
          />
          <Button type="submit">
            Criar sala
          </Button>
        </form>
        <p>
          Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
        </p>
        </div>
      </main>
    </div>
  )
}