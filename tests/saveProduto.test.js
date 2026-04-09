import { saveProduto } from "../controllers/saveProduto";
import { estoque } from "../estoque";
import { resetId } from "../controllers/saveProduto";

beforeEach(() => {
    estoque.length = 0;
    resetId();
});

describe("saveProduto", () => {

    beforeEach(() => {
        // limpa o estoque antes de cada teste
        estoque.length = 0;
    });

    test("deve adicionar um produto ao estoque", () => {
        saveProduto("Arroz", "Tio João", "Alimento", 20, 5);

        expect(estoque.length).toBe(1);
    });

    test("deve salvar os dados corretamente", () => {
        saveProduto("Feijão", "Camil", "Alimento", 10, 3);

        expect(estoque[0]).toMatchObject({
            nome: "Feijão",
            marca: "Camil",
            categoria: "Alimento",
            preco: 10,
            quantidade: 3
        });
    });

    test("deve incrementar o id automaticamente", () => {
        saveProduto("Leite", "Piracanjuba", "Bebida", 5, 10);
        saveProduto("Café", "3 Corações", "Bebida", 15, 2);

        expect(estoque[0].id).toBe(0);
        expect(estoque[1].id).toBe(1);
    });

    test("deve adicionar múltiplos produtos ao estoque", () => {
        saveProduto("Açúcar", "União", "Alimento", 4, 8);
        saveProduto("Sal", "Cisne", "Alimento", 2, 6);

        expect(estoque.length).toBe(2);
    });

});