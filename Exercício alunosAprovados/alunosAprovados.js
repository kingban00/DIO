const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados (arr, media){
    let aprovados = []
   
    for (let c = 0; c < arr.length; c++){
        const { nome, nota } = arr[c]
        
        if(nota >= media)
            aprovados.push(nome)
    }
    console.log(aprovados)
}

alunosAprovados(alunos, 6)

