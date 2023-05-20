// function([string1, string2, ...], target id, [color1, color2, ...])
consoleText(["Hello!", "I'm Kevin", "Love web programming"], 'text', ['tomato', 'lightblue', 'sandybrown']);

function consoleText(words, id, colors){
    if(colors === undefined) colors = ['#fff'];

    // For underscore
    let underscoreVisible = true;
    let con = document.getElementById('console');
    
    // For text
    let waiting = false
    let letterCount = 1;
    let textDirection = 1;
    let text = document.getElementById(id);
    // Setting init text color
    text.setAttribute('style', 'color:' + colors[0])

    // Text animation
    window.setInterval(function(){
        // When all string decrease finished
        // Wait and ready to show next string
        if(letterCount === 0 && waiting === false){
            waiting = true;
            // Show none
            text.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(()=>{
                // Get the first color
                let usedColor = colors.shift();
                // Put the first color to the end of the array
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);

                textDirection = 1;
                text.setAttribute('style', 'color: ' + colors[0])
                letterCount += textDirection;
                waiting = false;
            }, 1000);
        }
        // When all string show finished 
        // Wait and ready to decrease the text
        else if(letterCount === words[0].length + 1 && waiting === false){
            waiting = true;
            window.setTimeout(() => {
                textDirection = -1;
                letterCount += textDirection;
                waiting = false;
            }, 1000);
        }
        // When not start or end of the animation
        // Adding or Decreasing texts
        else if(waiting === false){
            // Replace the text content
            text.innerHTML = words[0].substring(0, letterCount);
            // LetterCount add or decrease
            letterCount += textDirection;
        }
    }, 120);

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