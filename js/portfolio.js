var slideIndex = 1;
var myTimer;
var slideshow;

window.addEventListener("load", function(){
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, 4000);
})

function plusSlides(n){
  clearInterval(myTimer);
  if(n < 0){
    showSlides(slideIndex -= 1);
  } else{
    showSlides(slideIndex += 1);
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n+2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
  }
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 if(n > slides.length){slideIndex = 1}
 if(n < 1){slideIndex = slide.length}
 for (i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
}

for(i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

//modal script
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("projectimg");
var modalImg = document.getElementById("projectimg");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



