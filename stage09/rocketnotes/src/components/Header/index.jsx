import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/camilagsoares.png" alt="Foto do Usuário" />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Camila Soares</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}