x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "a IA está te ouvindo:";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A Fala Foi Entendida Pela IA desta Maneira:" + content ;
    if(content == "círculo"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Escrevendo Um Círculo" ; 
        drawCircle = "set";
    };
    if(content == "retângulo"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Escrevendo Um Retangulo" ; 
        drawRect = "set";
    };
};
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y ,radius); 
        document.getElementById("status").innerHTML = "Círculo Desenhando" ;
        drawCircle = ""; 
    }
    if(drawRect == "set"){
        rect(x, y , 70, 50); 
        document.getElementById("status").innerHTML = "Retángulo Desenhando" ;
        drawRect = ""; 
    };
};