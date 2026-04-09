import { estoque } from "../estoque";

let id = 0;

export function resetId() {
    id = 0;
}
export function saveProduto(nome, marca, categoria, preco, quantidade){
    let Produto = {id, nome, marca, categoria, preco, quantidade}
    id += 1;
    estoque.push(Produto);
}