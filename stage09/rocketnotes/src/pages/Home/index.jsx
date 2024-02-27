import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note"
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Home() {

    const [tags, setTags] = useState([])
    const [search, setSearch] = useState("")
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])

    const { user } = useAuth();
    const navigate = useNavigate()

    function handleTagSelected(tagName) {

        if (tagName === "all") {
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)

        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }


    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {

        async function fetchTags() {
            const response = await api.get(`/tags/${user.id}`)
            setTags(response.data)
        }

        fetchTags()
    }, [])


    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?user_id=${user.id}&title=${search}&tags=${tagsSelected}`);
            setNotes(response.data.notesWithTags);
        }

        fetchNotes()
    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>
                    RocketNotes
                </h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos"
                        onClick={() => handleTagSelected("all")}
                        $isactive={tagsSelected.length === 0}
                    />

                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>

                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />

                        </li>
                    ))

                }

            </Menu>

            <Search>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {notes && notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                    ))

                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}