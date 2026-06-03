export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto flex flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} PendidikanDigital.id. All rights
          reserved.
        </span>
        <a
          href="mailto:halo@pendidikandigital.id"
          className="text-sm text-gray-500 underline underline-offset-2 hover:text-blue-700"
        >
          halo@pendidikandigital.id
        </a>
      </div>
    </footer>
  );
}
