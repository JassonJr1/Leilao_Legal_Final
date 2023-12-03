import DefaultCarousel from "@/components/layout/Carousel";
import Depoimentos from "@/components/layout/depoimentos/Depoimentos";
import LeilaoOnline from "@/components/layout/leilao_online/Leilao";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col w-[80%] m-auto">
        <section className="h-80">
          <DefaultCarousel />
        </section>
        <section>
          <LeilaoOnline />
        </section>
      </main>
      <section className="flex w-full">
        <Depoimentos />
      </section>
    </div>
  );
}
