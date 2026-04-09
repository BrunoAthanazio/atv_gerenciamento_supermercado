import { listProdutos } from "../controllers/listProdutos.js";
import { saveProduto } from "../controllers/saveProduto.js";
import { estoque } from "../estoque.js";

describe("listProdutos", () => {

    beforeEach(() => {
        estoque.length = 0;
    });

    test("deve retornar lista de produtos", () => {
        saveProduto("Arroz", "Marca", "Cat", 10, 2);

        const lista = listProdutos();

        expect(lista.length).toBe(1);
    });

    test("deve retornar vazio quando não houver produtos", () => {
        const lista = listProdutos();

        expect(lista.length).toBe(0);
    });

});