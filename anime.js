var url="https://animechan.vercel.app/api/random"

async function getUserData() {
  try {
    let resp = await fetch(url);
    let result = await resp.json();
    console.log(result);

    let tb=document.createElement("tbody");
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerHTML=result.anime;
    let td2=document.createElement("td");
    td2.innerHTML=result.character;
    let td3=document.createElement("td");
    td3.innerHTML=result.quote;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tb.append(tr);
    document.getElementById("myTable").appendChild(tb)
  } catch (error) {
    console.log(error);
  }
}

getUserData();