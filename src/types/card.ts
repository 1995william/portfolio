export interface Icard {
    titulo: string;
    descricao: string;
    page: string;
    repositorio: string;
    linguagens: Array<{
        caminho: string,
        nome: string
    }>
}