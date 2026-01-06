import ServiceCard from "./ServiceCard";
import Highlight from "./Highlight";

function Home() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-24 px-6">
      
      {/* HERO */}
      <div className="flex flex-col gap-6 py-24">
        <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Gráfica profissional
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-gray-900">
          Materiais gráficos personalizados para empresas e eventos
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          Produzimos impressos com qualidade, prazo e acabamento profissional
          para quem não pode errar na apresentação.
        </p>

        <div className="pt-4">
          <button className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Solicitar orçamento
          </button>
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Principais serviços
          </h2>
          <p className="max-w-xl text-sm text-gray-600">
            Soluções gráficas para divulgar, fortalecer sua marca e apoiar seus eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Cartões de visita"
            description="Impressão profissional para causar uma boa primeira impressão."
          />
          <ServiceCard
            title="Panfletos e folders"
            description="Divulgação clara e objetiva para produtos e serviços."
          />
          <ServiceCard
            title="Banners e faixas"
            description="Alta visibilidade para pontos de venda e eventos."
          />
          <ServiceCard
            title="Materiais para eventos"
            description="Credenciais, convites, displays e materiais personalizados."
          />
        </div>
      </div>

      {/* DIFERENCIAIS */}
      <div className="grid grid-cols-1 gap-10 border-t border-gray-200 pt-16 lg:grid-cols-3">
        <Highlight
          title="+ Anos de experiência"
          description="Atendendo empresas e eventos com consistência e qualidade."
        />
        <Highlight
          title="Produção própria"
          description="Mais controle sobre acabamento, prazos e resultado final."
        />
        <Highlight
          title="Atendimento direto"
          description="Contato rápido, sem intermediários ou burocracia."
        />
      </div>

      {/* CTA FINAL */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-900">
              Precisa de um orçamento rápido?
            </p>
            <p className="text-sm text-gray-600">
              Fale diretamente conosco e receba uma proposta sem compromisso.
            </p>
          </div>

          <button className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Falar no WhatsApp
          </button>
        </div>
      </div>

    </section>
  );
}

export default Home;
