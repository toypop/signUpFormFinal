window.onload = function carico(){
    console.log("dentroOnload");
    // let popup;
    // let pP;
    // let whiteFrame;
    // let firstName=document.getElementById("firstName");
    // let lastName=document.getElementById("lastName");
    // let email=document.getElementById("email");
    // let password=document.getElementById("password");
    // if (firstName.value!="" && lastName.value!="" && email.value!="" && password.value!="") 
    //     div= document.createElement("div");
    //     pP=document.createElement("p");
    //     pP.textContent="Registrazione completata con successo";
    //     div.appendChild(pP);
    //     div.setAttribute("class","popup");
    //     document.body.appendChild(div);
}

function azione()
{
    console.log("dentroAzione");
    let popup;
    let pP;
    let whiteFrame;
    let firstName=document.getElementById("firstName");
    let lastName=document.getElementById("lastName");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    if (firstName.value!="" && lastName.value!="" && email.value!="" && password.value!="") 
    {
        div= document.createElement("div");
        pP=document.createElement("p");
        pP.textContent="Registrazione completata con successo";
        div.appendChild(pP);
        div.setAttribute("class","popup");
        document.body.appendChild(div);
    }
    else 
    {
        div= document.createElement("div");
        pP=document.createElement("p");

        if (firstName.value=='')
            pP.textContent="Inserire nome.  "
        if (lastName.value=='')
            pP.textContent+="Inserire cognome.  "
        if (email.value=='')
            pP.textContent+="Inserire email.  "
        if (password.value=='')
            pP.textContent+="Inserire password.  "

        div.appendChild(pP);
        div.setAttribute("class","popup");
        document.body.appendChild(div);

    }




}