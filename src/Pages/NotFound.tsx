import '../Styles/notFound.scss';
import NotFounds from '../Assets/images/NotFound.svg';

export function NotFound() {
  return (
    <div className="not-found">
      <img src={ NotFounds } alt="not found" />
      <h1>Pagina não encontrada, sentimos muito! :(</h1>
    </div>
  )
}
