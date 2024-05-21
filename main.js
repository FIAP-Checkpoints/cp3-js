function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const dados = []

    

    function recebeEventoForm (e) {
        e.preventDefault();
        const inputNota1 = e.target.querySelector('.notas');
        const inputNota2 = e.target.querySelector('.notas2');

        const nota1 = Number(inputNota1.value);
        const nota2 = Number(inputNota2.value);


        if (!isNaN(inputNota1.value) && !isNaN(inputNota2.value)) {
            dados.push({
                nota: inputNota1.value,
                nota2: inputNota2.value
            });

            const soma = nota1 + nota2;
            const media = soma / 2;

            const aprOrRep = () => {
                const nivel = ['Reprovado', 'Recuperação', 'Aprovado'];
        
                if (media <= 3) return nivel[0];
                if (media <= 6) return nivel[1];
                if (media > 6) return nivel[2];
            }

            console.log(typeof soma);
            console.log(nota1, nota2); // só usei para verificar tipos
            

            resultado.innerHTML += `<p>A nota do aluno foi ${inputNota1.value} e ${inputNota2.value}<br>A média delas foi ${media}</p> <br> E o Aluno está ${aprOrRep()}`;
        } else {
            resultado.innerHTML = `<p>Digite um número para a nota!</p>`;
            setTimeout(() => {
                resultado.innerHTML = ``;
              }, "2000");

        }

    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();