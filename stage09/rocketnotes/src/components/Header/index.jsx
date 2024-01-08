import { Container, Profile } from "./styles";

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
        </Container>
    );
}