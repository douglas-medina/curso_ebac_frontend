// Funções
function multiplicador(valor1: number, valor2: number): number {
    return valor1 * valor2;
}

function dizOla(nome: string): string {
    return "Olá " + nome;
}

// Chamando as funções
const multiplicacao1 = multiplicador(2, 5);
console.log(multiplicacao1);

const saudacaoUser = dizOla('Douglas');
console.log(saudacaoUser);