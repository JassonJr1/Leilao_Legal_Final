export { default } from "next-auth/middleware";

// Paginas protegidas - Logar para abrir elas
export const config = {
  matcher: ["/usuarios/profile", "/produtos/cadastrar"],
};
