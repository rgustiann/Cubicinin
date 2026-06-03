import { Palette, Users, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Desain Premium & Responsif",
    desc: "Tampilan elegan yang menyesuaikan di HP, tablet, maupun desktop. Mencerminkan kredibilitas sekolah Anda.",
  },
  {
    icon: Users,
    title: "Sistem Admin Super Mudah",
    desc: "Guru non-teknis pun bisa mengelola konten dengan mudah. Tinggal klik, tulis, dan publish — tanpa ribet.",
  },
  {
    icon: BadgeCheck,
    title: "Bantuan Pendaftaran Domain .sch.id",
    desc: "Kami uruskan seluruh proses pendaftaran domain .sch.id dari awal hingga aktif. Anda tinggal tanda tangan.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Solusi Cerdas untuk Sekolah Anda
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Kami hadirkan solusi lengkap agar sekolah Anda bisa online tanpa
          pusing urusan teknis.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-sm transition group-hover:scale-105">
                  <Icon className="h-7 w-7" />
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
