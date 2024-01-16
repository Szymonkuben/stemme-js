
// Denne koden er variablene/ value til alle partiene du kan velge å stemme mellom. den tar frem valuen til variablene gjennom local storage. den sjekker i local storagen om det finnes en oppgitt value for elementet der, og hvis det gjør så blir valuen satt til det
let voteCountOption1 = parseInt(localStorage.getItem('voteCountOption1')) || 0;
let voteCountOption2 = parseInt(localStorage.getItem('voteCountOption2')) || 0;
let voteCountOption3 = parseInt(localStorage.getItem('voteCountOption3')) || 0;
let voteCountOption4 = parseInt(localStorage.getItem('voteCountOption4')) || 0;
let voteCountOption5 = parseInt(localStorage.getItem('voteCountOption5')) || 0;
let hasVoted = sessionStorage.getItem('hasVoted') === 'true';


// denne funksjonen lar deg stemme om du ikke har stemmt ennå, men om du har stemt så kommer den ikke til å utføre seg. Det sjekker om du har stemt gjennom session storage, så koden kommer tli å bare utføre seg en gang.
function vote(option) {
    if (!hasVoted) {
        if (option === 'option1') {
            voteCountOption1++;
            sessionStorage.setItem('voteCountOption1', voteCountOption1);
            document.getElementById('voteCountOption1').innerText = voteCountOption1;
        } else if (option === 'option2') {
            voteCountOption2++;
            sessionStorage.setItem('voteCountOption2', voteCountOption2);
            document.getElementById('voteCountOption2').innerText = voteCountOption2;
        } else if (option === 'option3') {
            voteCountOption3++;
            sessionStorage.setItem('voteCountOption3', voteCountOption3);
            document.getElementById('voteCountOption3').innerText = voteCountOption3;
        } else if (option === 'option4') {
            voteCountOption4++;
            sessionStorage.setItem('voteCountOption4', voteCountOption4);
            document.getElementById('voteCountOption4').innerText = voteCountOption4;
        } else if (option === 'option5') {
            voteCountOption5++;
            sessionStorage.setItem('voteCountOption5', voteCountOption5);
            document.getElementById('voteCountOption5').innerText = voteCountOption5;
        }

        hasVoted = true;
        sessionStorage.setItem('hasVoted', 'true');
    } else {
        alert('Stemmen din er gitt, takk for din kontribusjon');
    }
}

// oppdaterer values til html dokumentet mitt gjennom innertext
document.getElementById('voteCountOption1').innerText = voteCountOption1;
document.getElementById('voteCountOption2').innerText = voteCountOption2;
document.getElementById('voteCountOption3').innerText = voteCountOption3;
document.getElementById('voteCountOption4').innerText = voteCountOption4;
document.getElementById('voteCountOption5').innerText = voteCountOption5;

// denne koden er lagd for charten gjennom chart.js, dataen endrer på seg ved at jeg kobler sammen data settet med deres respective navn, som da er voteCountOption1 og videre. da jeg refresher siden kommer charten sin nummer til å endre seg for å ha lik nummer som variablen har etter at jeg endret den ved å trykke på knappen
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Høyre', 'Arbeiderpartiet', 'Senterpartiet', 'Fremskrittspartiet', 'Miljøpartiet de grønne'],
        datasets: [{
            label: 'Antall stemmer',
            data: [voteCountOption1, voteCountOption2, voteCountOption3, voteCountOption4, voteCountOption5],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});