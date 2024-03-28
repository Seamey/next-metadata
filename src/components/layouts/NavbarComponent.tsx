"use client";
import React from "react";
import {Navbar,NavbarBrand, NavbarContent,NavbarItem,Button} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menu from "./Menu";

export default function NavbarComponent() {
  const pathname = usePathname();
  if (pathname.includes("/dashboard")) return null;
  else
    return (
      <Navbar className="bg-blue-200">
        <NavbarBrand>
          <Image width={40} className="mr-4 rounded-full" height={40} src={"/assets/pic.jpg"} alt={""} />
          <p className="font-bold text-inherit">MOCHI</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
         
          {
              menu.map((menu,index)=>(
                <NavbarItem key={index}>
            <Link
                
              color="foreground"
              href={menu.path}
              className={`${pathname === menu.path && "font-bold text-blue-800"}`}
            >
              {menu.title}
            </Link>
            </NavbarItem>
            
              ))
              } 
 
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/dashboard" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}
