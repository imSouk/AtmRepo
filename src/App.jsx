import { useState } from "react";
import TopMenu from "./components/TopMenu/TopMenu";

import Home from "./components/TopMenu/Pages/Home/Home";
import Portfolio from "./components/TopMenu/Pages/Portfolio"; 
import Servicos from "./components/TopMenu/Pages/Servicos";
import Eventos from "./components/TopMenu/Pages/Eventos";
import Contato from "./components/TopMenu/Pages/Contato";

const pagesMap = {
  home: Home,
  portfolio: Portfolio,
  servicos: Servicos,
  eventos: Eventos,
  contato: Contato,
};

function App() {
  const [activePage, setActivePage] = useState("home");

  const PageComponent = pagesMap[activePage] || Home;

  return (
    <>
      <TopMenu
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <PageComponent />
      </main>
    </>
  );
}

export default App;
