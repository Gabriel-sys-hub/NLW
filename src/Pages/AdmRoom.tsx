// import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import deleteImg from '../Assets/images/delete.svg'
import logoImg from '../Assets/images/Vector.svg';

import { Button } from '../Components/Button';
import { Question } from '../Components/Question';
import { RoomCode } from '../Components/RoomCode';

import { useRoom } from '../Hooks/useRoom';

import '../Styles/room.scss';
import '../Styles/admin.scss'
import '../Styles/question.scss'
import { database } from '../Services/firebase';

type RoomParams = {
  id: string;
}

export function AdmRoom() {
  // const { user } = useAuth();
  // const [newQuestion, setNewQuestion] = useState('');
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoImg } alt="Letmeask" />
          <div className="flex">
          <RoomCode code={ roomId } />
          <Button isOutLined onClick={ handleEndRoom }>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
        </div>
        <div className="question-list">
          { questions.map((question) => ( 
            <Question
              key={ question.id }
              author={ question.author }
              content={ question.content }
            >
              <button
                type="button"
                onClick={ () => handleDeleteQuestion(question.id) }
              >
                <img src={ deleteImg } alt="Remover pergunta"/>
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}