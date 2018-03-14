function control(){

    let res = "3";
    let choice = document.querySelectorAll('input[type=radio]')
    let showres = document.querySelector('.response');
    showres.style.textAlign="center";
    showres.style.width="100%";
    let txt;
    
    for (var i = 0, length = choice.length; i < length; i++){
        if (choice[i].checked){
  // Chercher l'élement checké
    
            switch(choice[i].value){
               
                case "3" :
                txt = document.createTextNode('Bravo chenapan');
                showres.style.color="green";
                showres.appendChild(txt);
            
                break;

                default :
                txt = document.createTextNode('Mauvaise réponse saligaud');
                showres.style.color="red";
                showres.appendChild(txt);


                break;
            }
        }
}

}