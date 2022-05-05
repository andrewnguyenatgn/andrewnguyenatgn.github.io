//var words = document.getElementById("words");

function bigger()
{
    hello();
    var words = document.getElementById("words");
    words.style.fontSize = "24px";
}

function hello()
{
    alert("Hello, world!");
}

function fancy()
{
    var check = document.getElementById("fancy");
    var words = document.getElementById("words");
    if(check.checked)
    {
        hello();
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDocoration = "underline blink";
    }
    else
    {
        hello();
        words.style.fontweight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
    }
}
function moo()
{
    var words = document.getElementById("words");
    var period = words.value.split(".");
    words.value = period.join ("-Moo.");
}