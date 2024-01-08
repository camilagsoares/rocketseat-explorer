import './styles.js';
import { Button } from '../../components/Button/index.jsx';
import { Container } from './styles'
import { Header } from '../../components/Header/index.jsx';

function Details() {

  return (
    <Container>
      <Header />
      <Button title="Voltar" />
    </Container>
  )

}

export default Details;