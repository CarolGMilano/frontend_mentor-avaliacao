let btnSubmit = document.querySelector('#btn__submit');
let btnNumero = document.querySelectorAll('.btn__avaliacao');

let avaliacao = document.querySelector('#numero');

    function removerClasse() {
        btnNumero.forEach(num => {
            num.classList.remove('avaliacaoSelecionada');
        });
    }

        btnNumero.forEach(num => {
            num.addEventListener('click', function () {
                removerClasse();
                num.classList.add('avaliacaoSelecionada');
                avaliacao.innerHTML = num.textContent;
            });
        });

        btnSubmit.addEventListener('click', function () {     
            let cardFrente = document.querySelector('.cardFrente');
            let cardVerso = document.querySelector('.cardVerso');

                if (avaliacao.innerHTML == '') {
                    alert(`Ops... You didn't select a rating. Please, select one of the five ratings and try again.`);
                } else {
                    cardVerso.classList.remove('esconder');
                    cardFrente.classList.add('esconder');
                }
        });

