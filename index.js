let adviceBtn = document.getElementById("advice-btn");
let adviceText = document.getElementsByClassName("advise-text")[0];
let adviceId = document.getElementsByClassName("id")[0];
let id = 1;

adviceBtn.addEventListener("click", getAdvice);

async function getAdvice() {
    try{
        let responce = await fetch(`https://api.adviceslip.com/advice/${id}`);
        let advice = await responce.json();
        let { id: adviceId, advice: adviceContent } = advice.slip;
        console.log(advice, adviceContent, id);
        renderAdvice(adviceId, adviceContent);
        id++;
    }catch{

    }
  
}

function renderAdvice(id, adviceContent) {
  adviceText.innerHTML = adviceContent;
  adviceId.innerHTML = id;
}
