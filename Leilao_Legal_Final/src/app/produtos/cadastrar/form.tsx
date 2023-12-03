"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", description: "", price: "" });

    try {
      const res = await fetch("/api/produto", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      // Handle successful produto creation (optional)
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "Erro ao cadastrar o produto. Tente novamente.");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputStyle =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Nome do Produto"
          className={inputStyle}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="Descrição"
          className={inputStyle}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="number"
          name="price"
          value={formValues.price}
          onChange={handleChange}
          placeholder="Preço"
          className={inputStyle}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "var(--primary-button-color)"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
      >
        {loading ? "Carregando..." : "Cadastrar Produto"}
      </button>
    </form>
  );
};
