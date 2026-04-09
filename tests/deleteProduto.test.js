import { deleteProduto } from "../controllers/deleteProduto.js";
import { saveProduto } from "../controllers/saveProduto.js";
import { estoque } from "../estoque.js";

describe("deleteProduto", () => {

    beforeEach(() => {
        estoque.length = 0;
    });

    test("deve remover produto pelo id", () => {
        saveProduto("Produto", "Marca", "Cat", 10, 5);

        const id = estoque[0].id;

        deleteProduto(id);

        expect(estoque.length).toBe(0);
    });

    test("deve diminuir o tamanho do estoque", () => {
        saveProduto("P1", "M", "C", 1, 1);
        saveProduto("P2", "M", "C", 2, 2);

        deleteProduto(estoque[0].id);

        expect(estoque.length).toBe(1);
    });

    test("não deve remover id inexistente", () => {
        saveProduto("Produto", "Marca", "Cat", 10, 5);

        deleteProduto(999);

        expect(estoque.length).toBe(1);
    });

});