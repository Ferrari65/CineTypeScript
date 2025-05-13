import Banner from "./componentes/Banner";
import { Link } from "./componentes/Banner/Link";

function App() {
  return (
    //utilizando <>para enclapsular o componente
    <>
      <Banner
        src="../public/Logo e Favicon/Ícones/Imagens/Banner.png"
        alt="Banner"
      />
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  );
}

export default App;
