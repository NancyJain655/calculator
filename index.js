const display=document.getElementById("display");
function appendToDisplay(input)
{if (display.value[0]=='+'||display.value[0]=='/'||display.value[0]=='*')
{
    display.value="invalid";
}
else{
    display.value += input;
}
}
function clearDisplay()
{
    display.value="0";
}
function deleteDisplay(){
display.value=display.value.slice(0,-1);
}
function calculate()
{ 
    try{
if(Number.isInteger(eval(display.value)))
    {
      display.value=eval(display.value);
    }
    else{
        display.value=eval(display.value).toFixed(3);
    }
 
    }
    
    catch(error)
{
    display.value="invalid";
}
 
}
