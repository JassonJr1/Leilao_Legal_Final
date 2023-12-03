"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function MenuUsuario({ user }: any) {
  return (
    <Navbar fluid rounded>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={user.image ? user.image : "/images/default.png"}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-semibold">{user.name}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <Link href="/usuarios/profile">
            <DropdownItem>Editar Perfil</DropdownItem>
          </Link>
          <Dropdown.Divider />
          <DropdownItem onClick={() => signOut()}>Sair</DropdownItem>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
