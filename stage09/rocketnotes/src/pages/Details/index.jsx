import './styles.js';
import { Button } from '../../components/Button/index.jsx';
import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

function Details() {

  const [data, setData] = useState(null)
  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {data &&

        <main>
          <Content>

            <ButtonText
              title="Excluir nota"
              onClick={handleRemove}
            />

            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.urk}
                        </a>

                      </li>
                    ))

                  }
                </Links>
              </Section>
            }

            {
              data.tags &&

              <Section title="Marcadores">

                {data.tags.map(tag => (
                  <Tag title={tag.name} key={String(tag.ig)} />
                ))}

              </Section>

            }

            <Button
              title="Voltar"
              onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container >
  )

}

export default Details;