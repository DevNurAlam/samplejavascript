
// light

function lighton(){
	var light = document.getElementById('light');
	light.style.color="yellow";

	var oninfo = document.getElementById("hello");
	oninfo.innerHTML = "Light is on now";
}
function lightoff(){
	var light = document.getElementById('light');
	light.style.color="#ccc";

	var offinfo = document.getElementById("hello");
	offinfo.innerHTML = "Light is off now";
}
//document.write

var hello = document.getElementById('result').innerHTML = "<h1 id='hello'>Hello Bnagladesh</h1>";

//console

var text = "Lets use console log";

console.log(text);

//student entry

function studnet_entry(){
	// input values
	
	var name = document.getElementById("sname").value;
	var roll = document.getElementById('sroll').value;
	var cls = document.getElementById('sclass').value;
	//row creation 
	
	var tr = document.createElement("tr");

	//column creation
	
	var td_1 = document.createElement("td");
	var td_2 = document.createElement("td");
	var td_3 = document.createElement("td");
	
	// text node 
	
	var a = document.createTextNode(name);
	var b = document.createTextNode(roll);
	var c = document.createTextNode(cls);

	// returning text node to columns 
	
 	td_1.appendChild(a);
 	td_2.appendChild(b);
 	td_3.appendChild(c);

 	// if else condion 
 	
 	if(name ===""){
 		alert("Please fill the name");
 	}else if(roll ===""){
 		alert("Please fill roll");
 	}else{
 		document.getElementById("sresult").appendChild(tr);
 		document.getElementById("sresult").appendChild(td_1);
 		document.getElementById("sresult").appendChild(td_2);
 		document.getElementById("sresult").appendChild(td_3);
 	}
	
	return false;
}