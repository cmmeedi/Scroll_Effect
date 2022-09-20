

//STORY TIME

//This is a function called `Observer` which can 'observe' multiple entries at the same time.  What the heck does that mean????  I don't really know but for short it means that whatever element is in view on the window is the 'observed' element
const observer = new IntersectionObserver((entries) => {
    //Right here iterates over each element that is observed
    entries.forEach((entry) => {
        //then the console sees it
        console.log(entry)
        if(entry.isIntersecting) {
            //and the class is switched to the `show` class(since it's already assigned to the hidden class)
            entry.target.classList.add('show');
        } else{
            //now if the element goes out of view then the `show` class is removed from it
            entry.target.classList.remove('show');
        }
    });
});

//if you're keeping up with me in Colts lessons then this shouldn't need explaining but let's get into it for funsies

//This is the `hidden` class elements being assigned to the `hiddenElements` variable using "querySelectorAll" which selects everything that contains an attribute called `hidden`
const hiddenElements = document.querySelectorAll('.hidden');

//This is telling the observer what to observe specifically and to apply the conditions made above to it
hiddenElements.forEach((el) => observer.observe(el));