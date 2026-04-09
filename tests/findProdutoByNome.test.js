import { findProdutoByNome } from "../controllers/findProdutoByNome.js";
import { saveProduto } from "../controllers/saveProduto.js";
import { estoque } from "../estoque.js";

describe("findProdutoByNome", () => {

    beforeEach(() => {
        estoque.length = 0;
    });

    test("deve encontrar produto pelo nome", () => {
        saveProduto("Arroz", "Marca", "Cat", 10, 2);

        const produto = findProdutoByNome("Arroz");

        expect(produto.nome).toBe("Arroz");
    });

    test("deve ignorar maiúsculas/minúsculas", () => {
        saveProduto("Feijão", "Marca", "Cat", 10, 2);

        const produto = findProdutoByNome("feijão");

        expect(produto.nome).toBe("Feijão");
    });

    test("deve retornar null se não encontrar", () => {
        const produto = findProdutoByNome("Inexistente");

        expect(produto).toBeNull();
    });

});