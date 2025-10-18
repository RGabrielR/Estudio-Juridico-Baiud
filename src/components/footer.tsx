import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full border-t border-slate-200 bg-white/85 py-10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-slate-600 sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Estudio Jurídico Baiud"
            width={160}
            height={60}
            className="h-auto w-40 object-contain"
          />
        </Link>
        <div className="space-y-1">
          <p>
            &copy; {currentYear} Estudio Jurídico Lidia Cristina Baiud. Todos los
            derechos reservados.
          </p>
          <p>
            Ramírez de Velazco 672 · San Salvador de Jujuy ·{" "}
            <a
              href="mailto:baiudlidiacristina@gmail.com"
              className="font-medium text-slate-900 hover:text-amber-500"
            >
              baiudlidiacristina@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <a
            href="https://www.facebook.com/profile.php?id=100089098967597"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-amber-500"
          >
            Facebook
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-amber-500"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
