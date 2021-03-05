function clr()
{ 
    document.getElementById('result').value=' ';
}

function display(s)
{
    document.getElementById('result').value+=s;
}

function cal()
{
    var x=document.getElementById('result').value;
    y=eval(x)
    document.getElementById('result').value=y;
}