//your JS code here. If required.
const f = document.querySelectorAll("ul li");
for (let index = 0; index < f.length; index++) {
  const element = f[index];
  if(element.id=="level"){
    alert("The level of the element is: "+ element.innerText);
  }
  
} 