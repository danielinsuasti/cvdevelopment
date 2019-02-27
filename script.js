let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

//console.log(getResume)

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

/*-----Filter divs-----*/
/*Filter divs section   works -> works-header -> works-content -> line-left*/

filterSelection("all");

function filterSelection(c){
    var x, i;
    var x = document.getElementsByClassName("filterFunders");
    if(c == "all") c ="";
    // adicionar la clase "show"(display:block) para los elementos filtrados,
    // y remover la clase "show" de los elementos que no son seleccionados
    for(i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }    
}

//Muestra los elementos filtrados
function w3AddClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1 ){
            element.className += " " + arr2[i];
        }
    }
}

//Oculta los que no son seleccionados.
function w3RemoveClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//Adiciona clases activas al actual conjunto de Works-header

var worksHeaderContainer = document.getElementById("works");
var lis = worksHeaderContainer.getElementsByClassName("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

/*-----END Filter divs-----*/

/*-----Modals 'Funders' Section-----*/

// Get the modal
//var modal = document.getElementById('myModal');
var modal_0 = document.getElementsByClassName('modal')[0];
var modal_1 = document.getElementsByClassName('modal')[1];
var modal_2 = document.getElementsByClassName('modal')[2];

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var img_0 = document.getElementsByClassName('myImg')[0];
var img_1 = document.getElementsByClassName('myImg')[1];
var img_2 = document.getElementsByClassName('myImg')[2];

//var modalImg = document.getElementById("img01");
var modalImg_0 = document.getElementsByClassName("modal-content")[0];
var modalImg_1 = document.getElementsByClassName("modal-content")[1];
var modalImg_2 = document.getElementsByClassName("modal-content")[2];

//var captionText = document.getElementById("caption");
var captionText_0 = document.getElementsByClassName("caption")[0];
var captionText_1 = document.getElementsByClassName("caption")[1];
var captionText_2 = document.getElementsByClassName("caption")[2];

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

img_0.onclick = function(){
  modal_0.style.display = "block";
  modalImg_0.src = this.src;
  captionText_0.innerHTML = this.alt;
}


img_1.onclick = function(){
    modal_1.style.display = "block";
    modalImg_1.src = this.src;
    captionText_1.innerHTML = this.alt;
  }

img_2.onclick = function(){
    modal_2.style.display = "block";
    modalImg_2.src = this.src;
    captionText_2.innerHTML = this.alt;
  }

// Get the <span> element that closes the modal
var span_0 = document.getElementsByClassName("close")[0];
var span_1 = document.getElementsByClassName("close")[1];
var span_2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span_0.onclick = function() { 
  modal_0.style.display = "none";
}


span_1.onclick = function() { 
    modal_1.style.display = "none";
  }


span_2.onclick = function() { 
    modal_2.style.display = "none";
  }





/*-----END Modals 'Funders' Section-----*/
