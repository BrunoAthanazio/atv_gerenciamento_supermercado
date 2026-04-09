import { estoque } from "../estoque";

export function findProdutoByNome(nome){
    let produto = estoque.find(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
    if(produto === undefined){
        return null;
    }
    
    return produto;
}