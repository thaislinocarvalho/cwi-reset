nomeCompleto = "Thais Cristina Lino de Carvalho";
apelido = "Tata";
idade = 35;
dataNascimento = "08/12/1987";
localNascimento = "Brasília/DF";
altura = 1.65;
trabalhando = false;

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecida como " + apelido + "). Tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura +"m de altura e atualmente estou " + (trabalhando ? "empregada" : "desempregada") + "."
document.getElementById("apresenta").innerHTML = apresentacao;
console.log(apresentacao);