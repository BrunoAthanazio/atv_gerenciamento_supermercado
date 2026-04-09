import promptSync from "prompt-sync";
import { deleteProduto, entryExitEstoque, findProdutoByNome, listProdutos, saveProduto, updateProduto} from "./controllers/index";

const prompt = promptSync;

console.log(`
    ======================================
      📦 SISTEMA DE ESTOQUE SUPERMERCADO
    ======================================
    1. Adicionar Novo Produto
    2. Listar Todos os Produtos
    3. Buscar Produto por Nome
    4. Editar Informações de um Produto
    5. Registrar Entrada/Saída de Estoque
    6. Remover Produto
    0. Sair do Sistema
    ======================================
    Escolha uma opção:
    `);