// function([string1, string2, ...], 
// target id, [color1, color2, ...])
consoleText(["Hi!", "I'm Kevin"], 'text', ['tomato', 'lightblue']);

function consoleText(words, id, colors){
    if(colors === undefined) colors = ['#fff'];

    let underscoreVisible = true;
    let con = document.getElementById('console');
    
    // Console underscore blink
    window.setInterval(function(){
        if(underscoreVisible === true){
            con.className = 'console-underscore hidden';
            underscoreVisible = false;
        }
        else{
            con.className = 'console-underscore';
            underscoreVisible = true;
        }
    }, 400);
}