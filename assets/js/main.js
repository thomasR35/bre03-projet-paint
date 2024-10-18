function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    // le code de l'étape 1 se passe ici
    let headerDivs = document.querySelectorAll("header div");
    for (let i=0; i < headerDivs.length && i < palette.length; i++)
        headerDivs[i].style.backgroundColor = palette[i];
}


window.addEventListener("DOMContentLoaded", function(){

    // le code de l'étape 2 se passe ici
    let headerDivs = document.querySelectorAll("header div");
    
    for (let i = 0; i < headerDivs.length; i++) {
        let colorInput = headerDivs[i].querySelector("input[type='color']");

        colorInput.addEventListener("input", function() {
            headerDivs[i].style.backgroundColor = colorInput.value;
        });

        headerDivs[i].addEventListener("click", function() {
            let selectedColor = headerDivs[i].style.backgroundColor;
            sessionStorage.setItem("selectedColor", selectedColor);
        });
    }
    
    
    // le code de l'étape 3 se passe ici
   let mainDivs = document.querySelectorAll("main div div");
   
   for (let i = 0; i < mainDivs.length; i++){
       
       mainDivs[i].addEventListener("click", function(){
           
    let selectedColor = getSelectedColor();
   
       if (selectedColor) {
           
           if (mainDivs[i].style.backgroundColor === selectedColor){
               mainDivs[i].style.backgroundColor = '';
           } else {
               mainDivs[i].style.backgroundColor = selectedColor;
           }
       }    
       })
   }
})