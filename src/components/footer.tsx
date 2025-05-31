import React, { ReactNode } from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa6";

import Logo from "../../public/logo.png";

type ButtonSize = "sm" | "md" | "lg" | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Link href={href} isExternal>
      <Button
        isIconOnly
        startContent={icon}
        size={size}
        className="bg-transparent text-white"
      />
    </Link>
  );
}

interface FooterLinkProps {
  text: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:border-gamtech mx-auto w-full cursor-default items-center justify-center bg-yellow-800 pt-8 shadow-xl md:px-0">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="estudio jurídico baiud"
            width={200}
            height={50}
            className="h-auto w-52 object-contain"
          />
        </Link>

        <p className="px-5 text-center text-sm text-white">
          &copy; {currentYear} Estudio Jurídico Baiud - Todos los derechos
          reservados.
        </p>
      </section>
    </footer>
  );
}
