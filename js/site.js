//get the string from the user
function getStr(){
    let inputStr = document.getElementById("inputStr").value;

    let revStr = reverseAString(inputStr);

    displayData(revStr);
}

//Input: String
//Return: String
//Reverse a String
function reverseAString(inputStr){
    let revStr = "";

    for(let i = inputStr.length - 1; i >= 0; i--){
        revStr += inputStr[i];
    }

    return revStr;
}

//Input: String
//Return: None
//Display a reversed string
function displayData(revStr){

    document.getElementById("alertRevStr").innerHTML = `${revStr}`;
    document.getElementById("alertSuccess").classList.remove("invisible");

}