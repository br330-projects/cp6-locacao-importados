import Card from '../components/Card'

const carros = [
  {
    id: 1,
    marca: 'BMW',
    modelo: 'M5 Competition',
    cambio: 'Automático',
    lugares: 5,
    diaria: 1850,
    imagem: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 2,
    marca: 'Porsche',
    modelo: 'Panamera Turbo',
    cambio: 'Automático',
    lugares: 4,
    diaria: 3200,
    imagem: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 3,
    marca: 'Audi',
    modelo: 'R8',
    cambio: 'Automático',
    lugares: 2,
    diaria: 2900,
    imagem: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 4,
    marca: 'Mercedes-Benz',
    modelo: 'AMG GT',
    cambio: 'Automático',
    lugares: 2,
    diaria: 2700,
    imagem: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 5,
    marca: 'Ferrari',
    modelo: 'LaFerrari',
    cambio: 'Automático',
    lugares: 2,
    diaria: 6500,
    imagem: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 6,
    marca: 'Lamborghini',
    modelo: 'Huracán',
    cambio: 'Automático',
    lugares: 2,
    diaria: 7200,
    imagem: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=85'
  }
]

function Carros() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <div className="mb-12">
        <span className="text-sm font-semibold text-blue-400">
          NOSSA FROTA
        </span>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Nossos Carros
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Explore nossa seleção de veículos importados
          e escolha o modelo ideal para sua próxima experiência.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {carros.length} veículos disponíveis no catálogo
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Valores ilustrativos sujeitos a alterações.
        Imagens meramente ilustrativas.
      </p>

    </main>
  )
}

export default Carros
