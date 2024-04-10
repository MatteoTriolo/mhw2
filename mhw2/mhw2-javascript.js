
function visualizza(event)
{
  
    
   const barra=document.querySelector('#barra');
   barra.classList.remove('hidden');
   
}


function nascondi(event)
{
   const barra=document.querySelector('#barra');
   barra.classList.add('hidden');
}




function cambiaSfondo(event)
{
     const sfondoCambiato=event.currentTarget;
     sfondoCambiato.addEventListener('click',ricambiaSfondo);
     sfondoCambiato.removeEventListener('click',cambiaSfondo);
     const sfondoDaCambiare=document.querySelector('#cambia');
     sfondoDaCambiare.src="https://assets2.razerzone.com/images/pnx.assets/9d0a8ebf8b1a2e39e745cdefefe9b83d/razer-easter-campaign-homepage-desktop-2x.webp";


}


function ricambiaSfondo(event)
{
     const sfondoCambiato=event.currentTarget;
     sfondoCambiato.addEventListener('click',cambiaSfondo);
     sfondoCambiato.removeEventListener('click',ricambiaSfondo);
     const sfondoDaCambiare=document.querySelector('#cambia');
     sfondoDaCambiare.src="https://assets2.razerzone.com/images/pnx.assets/9d0a8ebf8b1a2e39e745cdefefe9b83d/razer-black-desert-online-8th-anniversary-collab-homepage-desktop-2x.webp";
     
     
}


function visualizzaCarrello(event)
{

   const cliccato=event.currentTarget;
   cliccato.addEventListener('click',nascondiCarrello);
   cliccato.removeEventListener('click',visualizzaCarrello);
   
   const carrelloDaVisualizzare=document.querySelector('#shop');
   carrelloDaVisualizzare.classList.remove('hidden');

}


function nascondiCarrello(event)
{

   const cliccato=event.currentTarget;
   cliccato.addEventListener('click',visualizzaCarrello);
   cliccato.removeEventListener('click',nascondiCarrello);
   
   const carrelloDaVisualizzare=document.querySelector('#shop');
   carrelloDaVisualizzare.classList.add('hidden');

}

function specifiche(event)
{
       
       const imagine=event.currentTarget;
       const testo=document.createElement('h1');
       testo.textContent='ecco le specifiche:'
       const imagine_creata=document.createElement('img');
       testo.classList.add('specificheTesto');
       imagine_creata.src=imagine.src;
       modale.classList.remove('hidden');
       modale.appendChild(testo);
       modale.appendChild(imagine_creata);
       
       document.body.classList.add('no-scroll');
       aggiungiSpecifiche(event.currentTarget);
      
}

function chiudiSpecifiche(event){
   modale.classList.add('hidden');
   modale.innerHTML='';
   document.body.classList.remove('no-scroll');

}

function aggiungiSpecifiche(user)
{
  
   const index = parseInt(user.dataset.index);
   if(index===1)
   {
      const testo=document.createElement('h1');
      testo.textContent='CUFFIE razor, le migliori cuffie in commercio'
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }

   if(index===2)
   {
      const testo=document.createElement('h1');
      testo.textContent='SEDIE razor, le migliori sedie gaming in commercio'
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }
   
   if(index===3)
   {
      const testo=document.createElement('h1');
      testo.textContent='MOUSE razor, i migliori mouse gaming in commercio:'
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }

   
   if(index===4)
   {
      const testo=document.createElement('h1');
      testo.textContent='SET lampade razor, la migliore atmosfera da gaming'
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }


   if(index===5)
   {
      const testo=document.createElement('h1');
      testo.textContent='TASTIERE razor, le migliori in commercio per giocare '
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }

   if(index===6)
   {
      const testo=document.createElement('h1');
      testo.textContent='PROVA IL SET COMPLETO PER MIGLIORARE LA TUA POSTAZIONE'
      testo.classList.add('testoPersonalizzato');
      modale.appendChild(testo);
   }
}








function appariMenu(event)
{

     const cliccato=event.currentTarget;
     cliccato.addEventListener('click',chiudiMenu);
     cliccato.removeEventListener('click',appariMenu);
     

     const elemento=document.querySelector('#menuAscomparsa');
     elemento.classList.remove('nascondi-tendina');
     document.body.classList.add('no-scroll');
}

function chiudiMenu(event)
{

     const cliccato=event.currentTarget;
     cliccato.addEventListener('click',appariMenu);
     cliccato.removeEventListener('click',chiudiMenu);
     

     const elemento=document.querySelector('#menuAscomparsa');
     elemento.classList.add('nascondi-tendina');
     document.body.classList.remove('no-scroll');


}




const botton=document.querySelector('#u');
botton.addEventListener('click',visualizza);

const barra=document.querySelector('#ab');
barra.addEventListener('click',nascondi);



const cambiaImg= document.querySelector('#cI');
cambiaImg.addEventListener('click',cambiaSfondo);

const carrello=document.querySelector('.kart');
carrello.addEventListener('click',visualizzaCarrello);


const box=document.querySelectorAll('.box img');
for(let i = 0; i < box.length; i++) {
   box[i].addEventListener('click',specifiche);
   
 }



 const modale=document.querySelector('#modal-view');
 modale.addEventListener('click',chiudiSpecifiche);
 
 const menuTendina=document.querySelector('#tentina');
 menuTendina.addEventListener('click',appariMenu);


