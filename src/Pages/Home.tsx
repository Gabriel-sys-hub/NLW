import { useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react';

import illustrationImg from '../Assets/images/ilu.svg'
import logoImg from '../Assets/images/Vector.svg';
import googleIconImg from '../Assets/images/google-icon.svg';

import { database } from '../Services/firebase';

import { Button } from '../Components/Button';
import { useAuth } from '../Hooks/useAuth';
import { useTheme } from '../Hooks/useTheme';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const { theme, toggleTheme } = useTheme();

  console.log(toggleTheme)

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${ roomCode }`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth" className={ theme }>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ logoImg } alt="Letmeask" />
          <button onClick={ handleCreateRoom } className="create-room">
            <img src={ googleIconImg } alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={ handleJoinRoom }>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={ roomCode }
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          <label className="switch">
            <input onClick={ toggleTheme } type="checkbox" />
            <span className="slider round"></span>
            { theme }
          </label>
          </form>
        </div>
      </main>
    </div>
  )
}