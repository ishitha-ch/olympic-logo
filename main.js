canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="gray";
ctx.lineWidth=2;
ctx.rect(200,200,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(310,270,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(410,270,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(510,270,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=4;
ctx.arc(360,320,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(460,320,40,0,2*Math.PI);
ctx.stroke();