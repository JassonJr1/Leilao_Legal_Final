import Image from "next/image";
import LogoImg from "@/assets/imgs/logo-leilao-legal.png";

export default function Logo() {
  return (
    <div className="w-[177px] h-[76px]">
      <a href="/" className="flex items-center">
        <Image
          src={LogoImg}
          alt="Logo Legal Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
        />
      </a>
    </div>
  );
}
