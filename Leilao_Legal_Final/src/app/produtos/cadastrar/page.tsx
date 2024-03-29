import { ProductForm } from "./form";

export default function ProductPage() {
  return (
    <section className="bg-ct-blue-600 pt-14 pb-4">
      <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">
            CADASTRO DE PRODUTO
          </h1>
        </div>
        <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
          <ProductForm />
        </div>
      </div>
    </section>
  );
}
