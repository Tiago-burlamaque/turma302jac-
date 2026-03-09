import { toast } from "react-toastify";
import {api} from "./api.js"

/**  
 * Busca lista de alunos no back-end.  
 * O back retorna: { message: string, data: aluno[] }  
 * Aqui devolvemos APENAS o array (data).  
 */  
export async function getalunos() {  
    const response = await api.post("/aluno/login");  
    if (response.status === 200) { 
        toast.success("Aluno logado.") 
        return response.data?.data ?? [];  
    }  
    return [];  
}  
  
/**  
 * Adiciona um aluno (POST /aluno)  
 * Espera receber { nome, descricao, valor }  
 */  
export async function adicionaraluno(aluno) {  
    const response = await api.post("/aluno/registro", aluno);  
    
    // back retorna 201 quando cria  
    if (response.status === 201) {  
        toast.success("aluno Adicionado.")
        return true;  
    }  
    return false;  
}  
  
/**  
 * Edita um aluno (PATCH /aluno/:id)  
 */  
export async function editaraluno(id, aluno) {  
    const response = await api.patch(`/aluno/${id}`, aluno);  
    
    if (response.status === 200) {  
        toast.success("aluno Atualizado.")
        return true;  
    }  
    return false;  
}  
  
/**  
 * Exclui um aluno (DELETE /aluno/:id)  
 */  
export async function excluiraluno(id) {  
    const response = await api.delete(`/aluno/${id}`);  
    
    if (response.status === 200) {  
        return true;  
    }  
    return false;  
}