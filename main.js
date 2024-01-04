const form= document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeUsuario = document.getElementById('nome-usuario')
    const numeroTel = document.getElementById('numero-tel')

    let linha = '<tr>';
    linha += `<td> ${nomeUsuario.value}</td>`;
    linha += `<td> ${numeroTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})