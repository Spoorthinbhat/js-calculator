
var display='';
function calc(val)
{
    if(val.value==="AC")
    {
        display="";
    }
    else if(val.value==='=')
    {
        display=eval(display);
    }
    else{
    display=display+val.value;
    }
    document.getElementById("text").value=display;
}