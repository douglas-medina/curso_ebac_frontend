class Alunos {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    passouDeAno() {
        if (this.nota >= 7) {
            console.log(`O aluno ${this.nome} recebeu a nota ${this.nota} e foi aprovado.`)
        } 
    }
}

const alunos = [
    new Alunos('Douglas', 7),
    new Alunos('Ana', 5),
    new Alunos('Kleber', 2),
    new Alunos('Julia', 8),
    new Alunos('Gian', 10)
];

console.log("Lista de alunos APROVADOS: ")
for (let i = 0; i < alunos.length; i++) {
    alunos[i].passouDeAno();
}