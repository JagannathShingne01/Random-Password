const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWZ"
const lowerSet = "abcdefghijklmopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

//selecter
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("Upper-case")
const lowerInput = document.getElementById("Lower-case")
const numberInput = document.getElementById("Numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)] //it will create random number of givendataset
}

const getPassword = (password = "") => {        //it will call random pass from checked dataSet
    if(upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) { //if pass is less than totalchar then its call recursively more data from get passDataSet
        return getPassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value)
}

getPassword();

document.getElementById("btn").addEventListener (
    "click",
    function(){
        getPassword();
    }    
)


//truncate(trim the pass length as per inputNumber given by user= totalChar)
function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }

}
