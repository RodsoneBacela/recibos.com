import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight">Recibos<span className="text-neutral-400">.com</span></h1>
      </header>

      <section className="text-center py-32 px-6">
        <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
          Crie recibos<br />com design profissional
        </h2>
        <p className="text-lg text-neutral-500 max-w-xl mx-auto mb-10">
          Uma ferramenta elegante e eficiente para gerar recibos em PDF. Sem complicações, direto ao ponto.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-black text-white text-base font-medium px-6 py-3 hover:bg-neutral-800 transition"
        >
          Começar agora
        </Link>
      </section>

      <section className="py-24 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-8">
            Rápido. Simples. Gratuito.
          </h3>
          <p className="text-neutral-500 text-lg">
            Recibos.com é ideal para freelancers, prestadores de serviço e pequenos negócios que querem agilidade sem abrir mão de profissionalismo.
          </p>
        </div>
      </section>

      <footer className="text-center py-8 text-neutral-400 text-sm border-t">
        © {new Date().getFullYear()} Recibos.com
      </footer>
    </main>
  );
}
