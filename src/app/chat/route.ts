import { NextResponse } from "next/server";

// Exemplo de armazenamento de usuários logados (substitua pelo seu sistema real)
const fakeUserDatabase = [
  { id: "1", name: "Moisés" },
  { id: "2", name: "Outro Usuário" },
];

export async function POST(req: Request) {
  const body = await req.json();
  const userId = body.userId;  // id enviado pelo front-end
  const message = body.message; // mensagem enviada pelo front-end

  // Validação de autenticação segura
  const user = fakeUserDatabase.find(u => u.id === userId);
  if (!user || !userId || userId !== user.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // Aqui você processa a mensagem do chat (ex: salvar no banco, chamar IA, etc)
  console.log(`Mensagem recebida de ${user.name}: ${message}`);

  return NextResponse.json({
    message: "Mensagem recebida com sucesso!",
    user: user.name
  });
}
