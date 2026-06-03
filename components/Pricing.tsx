import { Check, X } from "lucide-react";

const items = [
  { label: "Biaya Desain & Pembuatan Web", value: "Rp 0", free: true },
  { label: "Biaya Jasa Input Konten Awal", value: "Rp 0", free: true },
  {
    label: "Sewa Server & Perpanjangan Domain",
    value: "Rp 750.000 / Tahun",
    free: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Transparansi Biaya Kami
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Tidak ada biaya tersembunyi. Hanya satu biaya tahunan yang
          transparan.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-blue-700 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">
              Rincian Biaya
            </h3>
          </div>

          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between px-6 py-4 sm:px-8"
              >
                <div className="flex items-center gap-3">
                  {item.free ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                      <X className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {item.label}
                  </span>
                </div>
                <span
                  className={`ml-4 whitespace-nowrap text-sm font-semibold sm:text-base ${
                    item.free ? "text-green-600" : "text-blue-700"
                  }`}
                >
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
