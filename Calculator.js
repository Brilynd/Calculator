

const numberZero_QS=document.getElementById("zero")
const numberOne_QS=document.getElementById('one')
const numberTwo_QS=document.getElementById('two')
const numberThree_QS=document.getElementById('three')
const numberFour_QS=document.getElementById('four')
const numberFive_QS=document.getElementById('five')
const numberSix_QS=document.getElementById('six')
const numberSeven_QS=document.getElementById('seven')
const numberEight_QS=document.getElementById('eight')
const numberNine_QS=document.getElementById('nine')


const Multiply_QS=document.querySelector('#multiply')
const Add_QS=document.querySelector('#add')
const Subtract_QS=document.querySelector("#subtract")
const Divide_QS=document.querySelector("#divide")
const Enter_QS=document.getElementById('enter')
const CE_QS=document.getElementById('CE')


const inBox_QS=document.getElementById('inBox')
const outBox_QS=document.getElementById('outBox')


var first_Sequence= true;
var isChanged = false;
var isAdding = false;
var isSubtracting = false;
var isDividing = false;
var isMultiplying = false;
var number_One ;
var number_Two;
var sumOfCalc;


//PICK A NUMBER(1)

CE_QS.addEventListener("click",clearCalc)

numberZero_QS.addEventListener("click",function(){
    number_selection(0)})

numberOne_QS.addEventListener("click",function(){
    number_selection(1)})

numberTwo_QS.addEventListener("click",function(){
    number_selection(2)})

numberThree_QS.addEventListener("click",function(){
    number_selection(3)})
    
numberFour_QS.addEventListener("click",function(){
    number_selection(4)})
    
numberFive_QS.addEventListener("click",function(){
    number_selection(5)})

numberSix_QS.addEventListener("click",function(){
    number_selection(6)})
    
numberSeven_QS.addEventListener("click",function(){
    number_selection(7)})
    
numberEight_QS.addEventListener("click",function(){
    number_selection(8)})
    
numberNine_QS.addEventListener("click",function(){
    number_selection(9)})

    
//CALL A FUNCTION (ADD,MULTIPLY,SUBTRACT,DIVIDE)

Subtract_QS.addEventListener("click",function(){
    calcSetup()
    inBox_QS.textContent+="-"
    isSubtracting= true
})

Add_QS.addEventListener("click",function(){
    calcSetup()
    inBox_QS.textContent+="+"
    isAdding= true
})
Multiply_QS.addEventListener("click",function(){
    calcSetup()
    inBox_QS.textContent+="*"
    isMultiplying= true
})
Divide_QS.addEventListener("click",function(){
    calcSetup()
    inBox_QS.textContent+="/"
    isDividing= true
})

document.addEventListener("keyup",(event)=>{
    var keyName=event.key
    console.log(keyName)
    if(keyName=="1"){
        number_selection(1)
    }
    if(keyName=="2"){
        number_selection(2)
    }
    if(keyName=="3"){
        number_selection(3)
    }
    if(keyName=="4"){
        number_selection(4)
    }
    if(keyName=="5"){
        number_selection(5)
    }
    if(keyName=="6"){
        number_selection(6)
    }
    if(keyName=="7"){
        number_selection(7)
    }
    if(keyName=="8"){
        number_selection(8)
    }
    if(keyName=="9"){
        number_selection(9)
    }
    if(keyName=="0"){
        number_selection(0)
    }
    if(keyName=="*"){
        calcSetup()
        inBox_QS.textContent+="*"
        isMultiplying= true
    }
    if(keyName=="/"){
        calcSetup()
        inBox_QS.textContent+="/"
        isDividing= true
    }
    if(keyName=="+"){
        calcSetup()
        inBox_QS.textContent+="+"
        isAdding= true
    }
    if(keyName=="-"){
        calcSetup()
        inBox_QS.textContent+="-"
        isSubtracting= true
    }
    if(keyName=="Enter"){
        if(isChanged==true){
            number_Two=readContext()
         }
        numOneToInt=parseInt(number_One)
        numTwoToInt=parseInt(number_Two)
    
        if(isAdding==true){
            sumOfCalc=numOneToInt+numTwoToInt
        }
        if (isSubtracting==true){
            sumOfCalc=numOneToInt-(numTwoToInt)
        }
        if(isDividing==true){
            sumOfCalc=numOneToInt/numTwoToInt
        }
        if(isMultiplying==true){
            sumOfCalc=numOneToInt*numTwoToInt
        }
        isChanged=false
        number_One=sumOfCalc
        outBox_QS.textContent=sumOfCalc
        inBox_QS.textContent=sumOfCalc
    }
})


Enter_QS.addEventListener("click",function(){
    if(isChanged==true){
        number_Two=readContext()
     }
    numOneToInt=parseInt(number_One)
    numTwoToInt=parseInt(number_Two)

    if(isAdding==true){
        sumOfCalc=numOneToInt+numTwoToInt
    }
    if (isSubtracting==true){
        sumOfCalc=numOneToInt-(numTwoToInt)
    }
    if(isDividing==true){
        sumOfCalc=numOneToInt/numTwoToInt
    }
    if(isMultiplying==true){
        sumOfCalc=numOneToInt*numTwoToInt
    }
    isChanged=false
    number_One=sumOfCalc
    outBox_QS.textContent=sumOfCalc
    inBox_QS.textContent=sumOfCalc
})


    function number_selection(num) {
        inBox_QS.textContent+=num
        outBox_QS.textContent+=num
    }

    function clearCalc(){
        first_Sequence=true
        isChanged=true
        inBox_QS.textContent=""
        outBox_QS.textContent=""
        number_Two=0
        number_One=0
    }

    function readContext(){
         return (outBox_QS.textContent)
    }
    function calcSetup(){
        resetMode()
        if(first_Sequence==true){
            number_One=readContext()
        }
        outBox_QS.textContent=" "
        isChanged=true
    }

    function resetMode(){
        isChanged=false
        isSubtracting=false
        isAdding=false
        isDividing=false
        isMultiplying=false
    }

