var a, b, c, Discriminat, x1, x2, xo, yo, ey, ylesszer, ymorezer;
//a=document.getElementById("a").value;
//b=document.getElementById("b").value;
//c=document.getElementById("c").value;
function zeros() {
Discriminat=Math.pow(b, 2)-(4*a*c);
if (Discriminat<0) {console.log("Точек пересечения с осью Oy нет")} else
	{
	x1=(-b+Math.sqrt(Discriminat))/2*a;
	x2=(-b-Math.sqrt(Discriminat))/2*a;
	}
if (x1==undefined) {document.getElementById("fzer").innerHTML="Точки пересечения с осью Oy отсутствуют"} else {
document.getElementById("fzer").innerHTML="Точки пересечения с осью Oy: " + x1 + " " + x2};
};

function finalPoint() {
xo = -(b/(2*a));
yo = a*Math.pow(xo, 2) + b*xo + c;
document.getElementById("versh").innerHTML="Координаты вершины функции: x="+xo+" y="+yo;
}


//свойства
function properties() {
document.getElementById("1").innerHTML="D(y)=|R";
if (a<0) {ey="(-∞;" + yo + "]"} else 
{ey="[" + yo + "; ∞)"};
document.getElementById("2").innerHTML="E(y)=" + ey;

if (x1==undefined) {document.getElementById("3").innerHTML="y не может быть равен 0"} else {
document.getElementById("3").innerHTML="y=0 при след. значениях x: " + x1 + " и " + x2;}

if (a<0) {
document.getElementById("35").innerHTML="Ветви направлены вверх."
} else {
document.getElementById("35").innerHTML="Ветви направлены вниз."
}

	
	if (a>0) {ylesszer="[" + x1 +";" + x2 + "]";
			 ymorezer="(-∞;" + Math.min(x1, x2) + "] и [" +  Math.max(x1, x2) + "; ∞)"} else 
			
             {
				ymorezer="[" + x1 +";" + x2 + "]";
				ylesszer="(-∞;" +  Math.min(x1, x2) + "] и [" + Math.max(x1, x2) + "; ∞)";
             }

                        if (x1==undefined) {
						ymorezer="любом знач. x";
						ylesszer="не может быть"
                        }

document.getElementById("4").innerHTML="Y<0 " + ylesszer + ". Y>0 при " + ymorezer;

};

function total() {
a=Number(document.getElementById("a").value);
b=Number(document.getElementById("b").value);
c=Number(document.getElementById("c").value);
zeros();
finalPoint();
properties();
}
