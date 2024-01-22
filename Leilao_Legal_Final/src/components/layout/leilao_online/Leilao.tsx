"use client";
import { Button } from "flowbite-react";
import { Card} from "flowbite-react";
import Image from "next/image";

export default function LeilaoOnline() {
  return (
    <div className="py-2 mx-auto max-w-screen-xl">
      <div className="py-1 px-4 mb-3 bg-[#5709BC] text-white uppercase font-bold border-b-4 border-b-[#EC00FF]">
        <h1>Leilões Online</h1>
      </div>
      <div className="mt-8 pt-24 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
        {Array(3)
          .fill(1)
          .map((item, index) => (
            <Card key={item + index} className="bg-white z-10 shadow-sm">
              <div className="flex flex-col pb-10">
                <div className="mb-2 flex justify-center">
                  <Image
                    src="/nexus.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
                  Caneca Nexus
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  00:00:00
                </span>
                <p className="text-center mt-4">
                  Lançamento do momento!!! Mande seus lances
                </p>
              </div>
            </Card>
          ))}
      </div>
      <div className="flex justify-center py-2 mt-2">
        <Button className="bg-[var(--primary-button-color)]">
          <p>Ver Todos</p>
        </Button>
      </div>
    </div>
  );
}

