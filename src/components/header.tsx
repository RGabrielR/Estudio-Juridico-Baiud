"use client";

import { useState } from "react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { title: string; href: string }[] = [
    { title: "Estudio", href: "#About" },
    { title: "Valores", href: "#Values" },
    { title: "Servicios", href: "#Services" },
    { title: "Artículos", href: "/articles" },
    { title: "Contacto", href: "#Contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="text-zinc-200 md:hidden"
        />
        <Link href="/">
          <NavbarBrand>
            <div className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-2 shadow-[8px_8px_20px_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(113,113,122,0.15)]">
              <p className="text-sm font-black tracking-[0.2em] text-zinc-100">
                ALABI
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Estudio Jurídico
              </p>
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
