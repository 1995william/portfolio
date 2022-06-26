export interface Icard {
    titulo: string;
    descricao: string,
    linguagens: Array<{
        caminho: string,
        nome: string
    }>
}