let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
[
    '"Quote 1" - Me',
    '"Quote 2" - Me',
    '"Quote 3" - Me',
    '"Quote 4" - Me',
    '"Quote 5" - Me',
];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;

})

