import { estoque } from "../estoque";

export function updateProduto(id, nome, marca, categoria, preco){
    let index = estoque.findIndex( p => p.id === id);
    
    if (index !== null){
        estoque[index].nome = nome;
        estoque[index].marca = marca;
        estoque[index].categoria = categoria;
        estoque[index].preco = preco;
        
        return true;
    } else{
        return false;
    }
}