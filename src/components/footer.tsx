import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full border-t border-zinc-800 bg-black/80 py-10 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-zinc-400 sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-2 shadow-[8px_8px_20px_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(113,113,122,0.15)]">
            <p className="text-sm font-black tracking-[0.2em] text-zinc-100">
              ALABI
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Estudio Jurídico
            </p>
          </div>
        </Link>
        <div className="space-y-1">
          <p>
            &copy; {currentYear} Estudio Jurídico Dr. Miguel Alabi. Todos los
            derechos reservados.
          </p>
          <p>
            Avenida Salta 1563 · San Miguel de Tucumán ·{" "}
            <a
              href="mailto:alabimiguel@gmail.com"
              className="font-medium text-zinc-200 hover:text-zinc-100"
            >
              alabimiguel@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B543814099177&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-zinc-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
