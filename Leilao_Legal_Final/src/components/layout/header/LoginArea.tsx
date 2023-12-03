"use client";
import Link from "next/link";
import { BsPersonPlus } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import MenuUsuario from "./MenuUsuario";

export default function LoginArea() {
  return (
    <>
      <div className="flex gap-2">
        <Link href="/usuarios/cadastrar">
          <div className="flex flex-col py-2 px-6 justify-center items-center hover:bg-gray-50 rounded-lg">
            <BsPersonPlus />
            <p>CADASTRAR-SE</p>
          </div>
        </Link>
        <Link href="/usuarios/login">
          <div className="flex flex-col py-2 px-6 justify-center items-center hover:bg-gray-50 rounded-lg">
            <FiUser />
            <p>ENTRAR</p>
          </div>
        </Link>
      </div>

      <div className="flex gap-2">
        <Link href="/produtos/cadastrar">
          <div className="flex flex-col py-2 px-6 justify-center items-center hover:bg-gray-50 rounded-lg">
            {/* Pode substituir o ícone abaixo por outro de sua escolha */}
            <BsPersonPlus />
            <p>CADASTRAR PRODUTO</p>
          </div>
        </Link>
      </div>

      {/* Adicione o bloco de código relacionado ao usuário logado se necessário */}
      {/* {user && (
        <div className="flex gap-2 items-center">
          <MenuUsuario user={user} />
          {/* <button onClick={() => signOut()}>
            <div className="flex flex-col py-2 px-2 justify-center items-center hover:bg-gray-50 rounded-lg">
              <FiLogOut />
              <p>SAIR</p>
            </div>
          </button> 
        </div>
      )} */}
    </>
  );
}

