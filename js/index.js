// Change name when hover
let Name = document.getElementById('name');
Name.onmouseover = ()=>{
    Name.innerHTML = "林俊廷";
};
Name.onmouseleave = ()=>{
    Name.innerHTML = "Kevin";
};

// Skills 
let collapseBtns = document.getElementsByClassName('btn-check');
for(let i = 0; i < collapseBtns.length; i++){
    // When click on the btn
    collapseBtns[i].addEventListener('click', ()=>{
        // Turn off other collapse
        let collapses = document.getElementsByClassName('collapse-horizontal');
        for(let j = 0; j < collapses.length; j++){
            if(i != j){
                collapses[j].classList.remove('show');
            }
        };
    });
}

