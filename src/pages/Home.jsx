import { Link } from 'react-router'

function Home() {
  return (
    <main className="bg-gray-950 text-white">

      {/* Apresentação principal */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">

        <div>
          <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
            Locação de veículos premium
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Dirija o
            <span className="text-blue-400"> extraordinário.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
            Descubra uma seleção exclusiva de carros importados.
            Performance, conforto e sofisticação para tornar
            cada viagem uma experiência única.
          </p>

          <Link
            to="/carros"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Explorar veículos
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
            alt="Carro esportivo de luxo"
            className="h-80 w-full object-cover lg:h-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />

          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-blue-400">
              ImportDrive
            </p>
            <p className="mt-1 text-xl font-bold">
              Sua próxima experiência começa aqui.
            </p>
          </div>
        </div>

      </section>

      {/* Diferenciais */}
      <section className="border-t border-white/10 bg-gray-900/50 py-16">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-3xl font-bold">
            Por que escolher a ImportDrive?
          </h2>

          <p className="mt-3 text-center text-gray-400">
            Uma nova forma de viver a experiência de dirigir.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-blue-400">
                Frota exclusiva
              </h3>
              <p className="mt-3 text-gray-400">
                Veículos importados selecionados para quem
                busca desempenho e sofisticação.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-blue-400">
                Conforto e estilo
              </h3>
              <p className="mt-3 text-gray-400">
                Aproveite cada trajeto com tecnologia,
                elegância e máximo conforto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-blue-400">
                Experiência premium
              </h3>
              <p className="mt-3 text-gray-400">
                Encontre o carro ideal para ocasiões
                especiais ou viagens inesquecíveis.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
