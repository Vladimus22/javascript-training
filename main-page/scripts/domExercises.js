function showText() {
    let element = document.createElement("p"); 
    element.setAttribute("id", "div1");  
    let text = document.createTextNode("Current Duty Place: Fort Kabaty [Close]");

    element.appendChild(text);
    
    let mainDiv = document.getElementById("div");
    mainDiv.appendChild(element);  
    
    addAttribute();
}

function addAttribute() {
    let element = document.getElementById("div1");
    element.setAttribute("onclick", "removeText()");
}

function removeText() {
    let parentElement = document.getElementById("div");
    let childElement = document.getElementById("div1");

    
    parentElement.removeChild(childElement);
}
