import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nomeProduto, descricao, valorDeMercado } = (await req.json()) as {
      nomeProduto: string;
      descricao: string;
      valorDeMercado: number;
    };

    const produto = await prisma.produto.create({
      data: {
        nomeProduto,
        descricao,
        valorDeMercado,
      },
    });
    console.log("aqui")
    return NextResponse.json({
      produto: {
        name: nomeProduto,
        description: descricao,
        price:  valorDeMercado,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Erro ao cadastrar o produto. Tente novamente.",
      }),
      { status: 500 }
    );
  }
}
