var xml = new XMLHttpRequest();
const list = document.querySelector(".list");
const app = document.querySelector(".app");
const button = document.querySelector(".app button");
app.style = `border:1px solid #000;width:100%;height:100vh ;display:flex;flex-direction: column;align-items: center;font-family:cursive;background:#dbdbdb;color:#000;    overflow: auto;`;

xml.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);

    console.log("run");
    list.innerHTML += `
    
      <ul>
     ${json.map(
       (user) =>
         `<li>id is${user.id} name  is ${user.first_name}  ${user.last_name}  email :${user.email}</li>`
     )}
      
      </ul> 


`;
  }
};

xml.open("GET", "uesr.json", true);
xml.send();
function show() {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

button.style =
  "border:none;background:#000;color:#FFF;padding:10px 25px;cursor:pointer;font-family:cursive;font-size:18px; margin-top:10px";
