// Grabbing All The Messages
let messages = document.querySelectorAll(".message");
let messageArr = Array.from(messages);

console.log(messageArr);
// Grabbing Message Div
let messageDiv = document.querySelector(".messages");



// Grabbing Button To Post New Messages
let postButton = document.getElementById("post");
// Grabbing Input Value To Post New Messages
let input = document.getElementById("input");

// Grabbing The Clear Button
let btn = document.getElementById('clear-button');

// header creation
const header = document.createElement("header");

// header content creation
let h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
h1.style.textAlign = "center";
let tagline = document.createElement("p");
tagline.textContent = "Ray wrote the JavaScript"
tagline.style.textAlign = "center";
tagline.style.fontWeight = "bold";

// Adding content to the header
header.appendChild(h1);
header.appendChild(tagline);

// Adding header to the DOM
document.body.prepend(header);


// looping through and changing messages 
for ( let i = 0; i < messageArr.length; i++ ) {
    if ( i % 2 === 0 ) {
        messageArr[i].textContent = "Happy, happy, joy, joy!";
    } else {
        messageArr[i].textContent = "I love the positive energy!";
    }
}

// function to clear messages
function clear() {
    messageArr.forEach( message => {
        message.textContent = "" 
        message.style.backgroundColor = "white";
    })
}
// event listener on button to execute clear function
btn.addEventListener("click", clear);


// Silver - Themes Color Change Logic!
let dropDown = document.getElementById("theme-drop-down");

dropDown.addEventListener("change", ()=> {
    if (dropDown.value === "theme-two") {
        for ( let i = 0; i < messageArr.length; i++ ) {
            if ( i % 2 === 0 ) {
                messageArr[i].style.backgroundColor = "red";
            } else {
                 messageArr[i].style.backgroundColor = "black";
                 messageArr[i].style.color = "white";
            }
        }
    } else if (dropDown.value === "theme-one") {
        for ( let i = 0; i < messageArr.length; i++ ) {
            if ( i % 2 === 0 ) {
                messageArr[i].style.backgroundColor = "burlywood";
            } else {
                 messageArr[i].style.backgroundColor = "lightblue";
                 messageArr[i].style.color = "black";
            }
        }
    }
})



// Gold add more messages using form
let newMessage = false;
let form = document.message;
console.log(form)

form.addEventListener("submit", function(event){
    event.preventDefault()

    
    if ( newMessage === false && dropDown.value === "theme-one") {
        newMessage = true;
        let newDiv = document.createElement('div');
        newDiv.textContent = input.value;
        newDiv.classList.add("message", "left");
        messageDiv.append(newDiv);  
        messageArr.push(newDiv);
        console.log(messageArr);
    } else if ( newMessage === true && dropDown.value === "theme-one" ) {
        newMessage = false;
        let newDiv = document.createElement('div');
        newDiv.textContent = input.value;
        newDiv.classList.add("message", "right");
        messageDiv.append(newDiv);  
        messageArr.push(newDiv);
    } else if ( newMessage === false && dropDown.value === "theme-two" ) {
        newMessage = true;
        let newDiv = document.createElement('div');
        newDiv.textContent = input.value;
        newDiv.classList.add("message", "red");
        messageDiv.append(newDiv);  
        messageArr.push(newDiv);
    } else if ( newMessage === true && dropDown.value === "theme-two" ) {
        newMessage = false;
        let newDiv = document.createElement('div');
        newDiv.textContent = input.value;
        newDiv.classList.add("message", "black");
        messageDiv.append(newDiv); 
        messageArr.push(newDiv);
    }
    input.value = "";

})



 


