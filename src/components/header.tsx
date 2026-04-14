"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";

import LanguageToggle from "@/components/languageToggle";
import { siteCopy } from "@/i18n/siteCopy";
import { useLanguage } from "@/providers/LanguageProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const copy = siteCopy[language];

  const menuItems: { title: string; href: string }[] = [
    { title: copy.header.menu.about, href: "#About" },
    { title: copy.header.menu.values, href: "#Values" },
    { title: copy.header.menu.services, href: "#Services" },
    { title: copy.header.menu.articles, href: "/articles" },
    { title: copy.header.menu.contact, href: "#Contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? copy.header.closeMenu : copy.header.openMenu}
          className="text-zinc-200 md:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 shadow-[8px_8px_20px_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(113,113,122,0.15)]">
              <Image
                src="/logo.png"
                alt="Dr. Miguel Alabi logo"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-xl object-contain"
                priority
              />
              <div>
                <p className="text-sm font-black tracking-[0.12em] text-zinc-100">
                  Alabi Miguel
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  {copy.header.brandSubtitle}
                </p>
              </div>
            </div>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <LanguageToggle label={copy.header.languageLabel} />
        </NavbarItem>
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <NavbarItem>
            <Button
              as={Link}
              href="https://api.whatsapp.com/send/?phone=%2B543814099177&text&type=phone_number&app_absent=0"
              variant="light"
              isIconOnly
              target="_blank"
              startContent={
                <FaWhatsapp
                  size={40}
                  className="rounded-full border border-zinc-700 bg-zinc-900/80 p-2 text-zinc-200 transition hover:bg-black"
                />
              }
            />
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-10 backdrop-blur-xl">
        <div className="mb-6">
          <LanguageToggle label={copy.header.languageLabel} />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link className="w-full text-zinc-200" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
