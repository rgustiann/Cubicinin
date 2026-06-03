import { Monitor } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20Website%20Sekolah%20Gratis";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Bawa Sekolah Anda ke Era Digital{" "}
              <span className="text-blue-700">Tanpa Biaya Ratusan Juta</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
              Dapatkan website sekolah profesional secara{" "}
              <strong className="text-blue-700">GRATIS</strong>. Anda hanya
              perlu berinvestasi pada biaya pemeliharaan server tahunan. Cepat,
              elegan, dan terima beres.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                Klaim Website Gratis Sekarang
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                <div className="flex items-center gap-1.5 border-b border-gray-100 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-gray-400">
                    smkn1-prestasi.sch.id
                  </span>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-50">
                  <Monitor className="h-16 w-16 text-blue-200 sm:h-24 sm:w-24" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border border-blue-100 bg-blue-50/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
