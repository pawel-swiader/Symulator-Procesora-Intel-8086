allowedChars = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]
var aIdRes;
var chgLetG;



function funkcja(aIdRes, chgLetG){

    var hv = document.getElementById("a"+[chgLetG]+[aIdRes]).value;
    hv = hv.toUpperCase();
    
    if(allowedChars.includes(hv[0])&&allowedChars.includes(hv[1])){
        
        var hvl = hv.length;

        if(hvl==2){
        document.getElementById([chgLetG]+"xv"+[aIdRes]).innerHTML= hv;
        }
        else if(hvl==1) {
        document.getElementById([chgLetG]+"xv"+[aIdRes]).innerHTML= "0"+hv;
        }
        else {
        document.getElementById([chgLetG]+"xv"+[aIdRes]).innerHTML= "00";
        }
    }
}

function clr(){

    var nu=1;
    var le='h';

    while(nu<=4){
        
        
        document.getElementById([le]+"xv"+[nu]).innerHTML= "00";
        document.getElementById("a"+[le]+[nu]).value="";
        
        nu++;
        if(nu==5&&le=='h'){
            nu=1;
            le='l';
        }
    } 
}

function randomize(){

    var nu=1;
    var le='h';

    while(nu<=4){
        
        

            var x=Math.floor(Math.random() * 256);
            x = x.toString(16);

            var xl=x.length;
            if(xl==1){
                x="0"+x;
            }
            document.getElementById([le]+"xv"+[nu]).innerHTML=x;   
        

        nu++;
        if(nu==5&&le=='h'){
            nu=1;
            le='l';
        }
    } 
}


function mov(){
    
    var fb = document.getElementsByName("xradio");
    var fb2= document.getElementsByName("xradio2");
    var fbn;
    var fb2n;
    var fbi=0;
    var fb2i=0;

    while(fbi<fb.length){
        if(fb[fbi].checked){
            fbn=fb[fbi].value;
        }
        fbi++;
    }
    while(fb2i<fb2.length){
        if(fb2[fb2i].checked){
            fb2n=fb2[fb2i].value;
        }
        fb2i++;
    }

    var f11 = fbn.slice(0, 1);
    var f12 = fbn.slice(1, 2);
    var f21 = fb2n.slice(0,1);
    var f22 = fb2n.slice(1,2);   

    if( (f22=="x" && f12!="x")||(f22!="x" && f12=="x")){
        alert("error");
    }
    else{

    
        if(f12=="x"){
            var nnn= document.getElementById("hxv"+[f21]).innerHTML;
            var nnn2 =document.getElementById("lxv"+[f21]).innerHTML;

            document.getElementById("hxv"+[f11]).innerHTML=nnn;
            document.getElementById("lxv"+[f11]).innerHTML=nnn2;

        }else{
            var nnn = document.getElementById([f22]+"xv"+[f21]).innerHTML;
            document.getElementById([f12]+"xv"+[f11]).innerHTML=nnn;

        }      
    
}}


function xchg(){
    
    var fb = document.getElementsByName("xradio");
    var fb2= document.getElementsByName("xradio2");
    var fbn;
    var fb2n;
    var fbi=0;
    var fb2i=0;

    while(fbi<fb.length){
        if(fb[fbi].checked){
            fbn=fb[fbi].value;
        }
        fbi++;
    }
    while(fb2i<fb2.length){
        if(fb2[fb2i].checked){
            fb2n=fb2[fb2i].value;
        }
        fb2i++;
    }

    var f11 = fbn.slice(0, 1);
    var f12 = fbn.slice(1, 2);
    var f21 = fb2n.slice(0,1);
    var f22 = fb2n.slice(1,2);   

    if( (f22=="x" && f12!="x")||(f22!="x" && f12=="x")){
        alert("error");
    }
    else{

    
           
        if(f12=="x"){
            var nnn= document.getElementById("hxv"+[f11]).innerHTML;
            var nnn2 =document.getElementById("lxv"+[f11]).innerHTML;
            var nnn21= document.getElementById("hxv"+[f21]).innerHTML;
            var nnn22 =document.getElementById("lxv"+[f21]).innerHTML; 
            var nnnbf= nnn;
            var nnnbf2= nnn2;
            
            document.getElementById("hxv"+[f11]).innerHTML=nnn21;
            document.getElementById("lxv"+[f11]).innerHTML=nnn22;

            document.getElementById("hxv"+[f21]).innerHTML=nnnbf;
            document.getElementById("lxv"+[f21]).innerHTML=nnnbf2;

        }else{
            
            var nnn = document.getElementById([f12]+"xv"+[f11]).innerHTML;
            var nnnbf = nnn;
            var nnn22 = document.getElementById([f22]+"xv"+[f21]).innerHTML;

            document.getElementById([f12]+"xv"+[f11]).innerHTML=nnn22;
            document.getElementById([f22]+"xv"+[f21]).innerHTML=nnnbf;

        }  
    
}
}

