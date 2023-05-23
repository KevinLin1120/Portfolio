// Intersection observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        // show
        if(entry.isIntersecting && entry.target.className.match("hidden-works")){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('hidden-works-show');
            entry.target.classList.remove('hidden-works-hidden');

        }
        // hidden
        else if(entry.target.className.match("hidden-works")){
            entry.target.classList.add('hidden');
            entry.target.classList.add('hidden-works-hidden');
            entry.target.classList.remove('hidden-works-show');
        }
    });
});

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

// Selected works show up
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach
// })
const hiddenWorks = document.querySelectorAll('.hidden-works');
hiddenWorks.forEach(element => {
    observer.observe(element);
});