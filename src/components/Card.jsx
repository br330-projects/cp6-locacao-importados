function Card({ carro }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition hover:border-blue-400/50">

      <img
        src={carro.imagem}
        alt={`${carro.marca} ${carro.modelo}`}
        className="h-52 w-full object-cover"
        loading="lazy"
      />

      <div className="p-5">

        <p className="text-sm font-medium text-blue-400">
          {carro.marca}
        </p>

        <h3 className="mt-1 text-2xl font-bold text-white">
          {carro.modelo}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
          <span className="rounded-lg bg-gray-800 px-3 py-2">
            {carro.cambio}
          </span>

          <span className="rounded-lg bg-gray-800 px-3 py-2">
            {carro.lugares} lugares
          </span>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-sm text-gray-400">
            Diária a partir de
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {carro.diaria.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>

      </div>
    </article>
  )
}

export default Card
