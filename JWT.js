var url = window.location.href;
var queryString = window.location.search.substring(1);
var jwtToken = queryString.split('Token:')[1];

try{
var jwtObject=parseJwt(jwtToken);
var isTrue =false;

for(var valid in jwtObject){
if(jwtObject.hasOwnProperty(valid))
	if(jwtObject.valid===true){
   		isTrue = true;
   		break;
 	}
}

if(isTrue===true){
	document.write("Valid Token");
}else{
	document.write("Invalid Token");
	}
}
catch(e){
	document.write("Incorrect token");
	}

function parseJwt (jwtToken) {
       return JSON.parse(window.atob(jwtToken.split('.')[1])); //parsing base64Url

};

