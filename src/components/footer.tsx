"use client";

import Image from "next/image";
import Link from "next/link";

import { siteCopy } from "@/i18n/siteCopy";
import { useLanguage } from "@/providers/LanguageProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const copy = siteCopy[language];

  return (
    <footer className="mt-20 w-full border-t border-zinc-800 bg-black/80 py-10 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-zinc-400 sm:flex-row sm:text-left">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 shadow-[8px_8px_20px_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(113,113,122,0.15)]">
            <Image
              src="/logo.png"
              alt="Dr. Miguel Alabi logo"
              width={88}
              height={88}
              className="h-[88px] w-[88px] rounded-xl object-contain"
            />
            <div>
              <p className="text-sm font-black tracking-[0.12em] text-zinc-100">
                Alabi Miguel
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {copy.footer.brandSubtitle}
              </p>
            </div>
          </div>
        </Link>
        <div className="space-y-1">
          <p>
            &copy; {currentYear} {copy.footer.rights}
          </p>
          <p>
            {copy.footer.address} ·{" "}
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
            {copy.footer.whatsapp}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
