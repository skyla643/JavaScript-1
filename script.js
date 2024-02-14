// Variable with descriptive names
var companyName = "Centralize JavaScript Management";
var isEthical = true;
var numberOfClients = 100;

// Function to change text
function changeText() {
    var paragraph = document.querySelector('p');
    paragraph.textContent = "Now the text has been changed!";
    setTimeout(() => {
        history.back();
    }, 1500); // Go back after 1.5 seconds (1500 milliseconds)
}

// Decision making with if-else statement
if (isEthical) {
    console.log(companyName + " is an ethical hacking company.");
} else {
    console.log(companyName + " may not be an ethical hacking company.");
}

// Logical operator (AND) for complex condition evaluation
if (numberOfClients > 50 && isEthical) {
    console.log("The company has a large number of clients and is ethical.");
} else {
    console.log("The company may not have a large number of clients or may not be ethical.");
}
