import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

export function Header() {


    const { signOut } = useAuth()

    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/camilagsoares.png" alt="Foto do Usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Camila Soares</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}