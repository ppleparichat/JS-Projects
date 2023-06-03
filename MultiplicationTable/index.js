let numPut = document.getElementById('numPut')
let runPut = document.getElementById('runPut')
let output = document.getElementById('output')


function multiplicationTable () {
    let num = Number(numPut.value);
    let outputHtml = '';

    for (i = 1; i <= 12; i++) {
            outputHtml += `<p>
            ${num} x ${i} = ${num * i}
             </p>`
    }
    
output.innerHTML = outputHtml

}
runPut.addEventListener('click', multiplicationTable)