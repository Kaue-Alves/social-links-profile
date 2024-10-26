import Container from "./components/Container";
import BoxLink from "./components/containerLink/components/BoxLink";
import ContainerLinks from "./components/containerLink/ContainerLinks";
import Perfil from "./components/Perfil";

export default function App() {
    return (
        <main className="w-screen min-h-screen p-5 bg-cinza-900 flex items-center justify-center">
            <Container>
                <Perfil />
                <ContainerLinks>
                    <BoxLink titulo="GitHub" link="#" />
                    <BoxLink titulo="Frontend Mentor" link="#" />
                    <BoxLink titulo="LinkedIn" link="#" />
                    <BoxLink titulo="Twitter" link="#" />
                    <BoxLink titulo="Instagram" link="#" />
                    
                </ContainerLinks>
            </Container>
        </main>
    );
}
