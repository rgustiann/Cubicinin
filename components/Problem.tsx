import { DollarSign, Monitor, Globe } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Biaya Agensi Mahal",
    desc: "Pembuatan website sekolah di agensi bisa menghabiskan puluhan hingga ratusan juta rupiah — tidak terjangkau untuk banyak sekolah.",
  },
  {
    icon: Monitor,
    title: "Sulit Dikelola Guru",
    desc: "Website yang rumit membuat guru malas mengupdate konten. Akibatnya website jadi usang dan tidak terurus.",
  },
  {
    icon: Globe,
    title: "Bingung Urus Domain .sch.id",
    desc: "Proses pendaftaran domain .sch.id berbelit dan memakan waktu — banyak sekolah menyerah di tengah jalan.",
  },
];

export default function Problem() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Mengapa Banyak Sekolah Kesulitan Memiliki Website?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Kami memahami hambatan yang selama ini menghalangi sekolah
          mendapatkan website impian.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
