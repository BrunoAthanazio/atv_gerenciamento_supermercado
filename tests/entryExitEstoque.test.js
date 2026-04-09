import { entryExitEstoque } from "../controllers/entryExitEstoque.js";
import { saveProduto } from "../controllers/saveProduto.js";
import { estoque } from "../estoque.js";

describe("entryExitEstoque", () => {

    beforeEach(() => {
        estoque.length = 0;
    });

    test("deve adicionar quantidade (entrada)", () => {
        saveProduto("Produto", "Marca", "Cat", 10, 5);

        entryExitEstoque(estoque[0].id, 3);

        expect(estoque[0].quantidade).toBe(8);
    });

    test("deve subtrair quantidade (saída)", () => {
        saveProduto("Produto", "Marca", "Cat", 10, 5);

        entryExitEstoque(estoque[0].id, -2);

        expect(estoque[0].quantidade).toBe(3);
    });

    test("não deve permitir estoque negativo", () => {
        saveProduto("Produto", "Marca", "Cat", 10, 5);

        const resultado = entryExitEstoque(estoque[0].id, -10);

        expect(resultado).toBe(false);
        expect(estoque[0].quantidade).toBe(5);
    });

});