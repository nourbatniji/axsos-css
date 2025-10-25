var likesCount = document.getElementById("likesCount")
var searchInput = document.getElementById("search-input")
var slides = document.getElementsByClassName("slide")
var count = 0;
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)   
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

function search() {
    alert(searchInput.value);
}

function likesCounter() {
    count++
    likesCount.innerHTML = count
}

function removeButton(el) {
    el.remove()
}
