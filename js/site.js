//Get the string 
//controller function
function getSstring() {

    // document.getElementById("alert").classList.add("invisible");
 
    let userString = document.getElementById("userInput").value;

    let inputTag=document.getElementById("userInput");

    let reverse = reverseString(userString);//declared a function into a variable 

    

    displayString(reverse);
    submit(inputTag);
}

//Reverse the string 
//logic function
function reverseString(userString) {
    let reverse = ''; //string or array to store reversed string  

    for (let index = userString.length - 1; index >= 0; index--) {
        reverse += userString[index];
    }
    return reverse;

}
//Submittion button
function submit(inputTag){
    console.log(inputTag);

    inputTag.addEventListener("keyup", function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            displayString(reverseString(inputTag.value));
        }       
    });
        

}

//Display the reversed string to the user//view function
function displayString(reverse) {
    console.log(reverse);

    document.getElementById("msg").innerHTML = `Your string reversed is: ${reverse}`; //Template literals 
    document.getElementById("alert").classList.remove("invisible");

}

