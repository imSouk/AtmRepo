import MenuButton from "./MenuButton";
import TopMenuItem from "./TopMenuItem";

function TopMenu({ activePage, onNavigate }) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <div className="text-lg font-semibold text-gray-900">
          Gráfica
        </div>

        <nav className="flex items-center gap-8">
          <TopMenuItem
            label="Home"
            page="home"
            onNavigate={onNavigate}
            isActive={activePage === "home"}
          />
          <TopMenuItem
            label="Portfólio"
            page="portfolio"
            onNavigate={onNavigate}
            isActive={activePage === "portfolio"}
          />
          <TopMenuItem
            label="Serviços"
            page="servicos"
            onNavigate={onNavigate}
            isActive={activePage === "servicos"}
          />
          <TopMenuItem
            label="Eventos"
            page="eventos"
            onNavigate={onNavigate}
            isActive={activePage === "eventos"}
          />
          <MenuButton
            label="Orçamento"
            page="contato"
            onNavigate={onNavigate}
          />
        </nav>
      </div>
    </header>
  );
}

export default TopMenu;
