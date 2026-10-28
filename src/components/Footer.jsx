function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <div>
            <h2 className="text-xl font-bold text-white">
              Import<span className="text-blue-400">Drive</span>
            </h2>
            <p className="mt-1 text-sm">
              Sua experiência premium começa aqui.
            </p>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} ImportDrive.
            Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
