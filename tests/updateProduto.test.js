import { updateProduto } from "../controllers/updateProduto.js";
import { saveProduto } from "../controllers/saveProduto.js";
import { estoque } from "../estoque.js";

describe("updateProduto", () => {

    beforeEach(() => {
        estoque.length = 0;
    });

    test("deve atualizar dados do produto", () => {
        saveProduto("Arroz", "Marca", "Cat", 10, 5);

        const id = estoque[0].id;

        updateProduto(id, "Arroz Novo", "NovaMarca", "NovaCat", 20);

        expect(estoque[0]).toMatchObject({
            nome: "Arroz Novo",
            marca: "NovaMarca",
            categoria: "NovaCat",
            preco: 20
        });
    });

    test("não deve alterar quantidade", () => {
        saveProduto("Arroz", "Marca", "Cat", 10, 5);

        const id = estoque[0].id;

        updateProduto(id, "Novo", "M", "C", 20);

        expect(estoque[0].quantidade).toBe(5);
    });

});