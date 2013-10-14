function alert_google() {
    var goo = document.getElementsByClassName("google_link");
  	var algoo = document.getElementById("alertgoogle");
    if(goo){  	 
      if(goo[1].value.replace(/\s+/g, "") == ""){
          if(!algoo){
          	var ele = document.createElement("div");
      		ele.id = "alertgoogle";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("google_hoge")[1].appendChild(ele);
          }
      }else{
        if(algoo){
          algoo.parentNode.removeChild(algoo);
        }
      }
    }
  alert_count();
}
window.onload = alert_google();


function alert_amazon() {
    var ama = document.getElementsByClassName("amazon_link");
  	var alama = document.getElementById("alertamazon");
    if(ama){  	 
      if(ama[1].value.replace(/\s+/g, "").match(/r0488-22/)){
          if(!alama){
          	var ele = document.createElement("div");
      		ele.id = "alertamazon";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("amazon_hoge")[1].appendChild(ele);
          }
      }else{
        if(alama){
          alama.parentNode.removeChild(alama);
        }
      }
    }
  alert_count();
}
window.onload = alert_amazon();


function alert_tw() {
    var tw = document.getElementsByClassName("tw_link");
  	var altw = document.getElementById("alerttw");
    if(tw){  	 
      if(tw[1].value.replace(/\s+/g, "").match(/realglobeInc/)){
          if(!altw){
          	var ele = document.createElement("div");
      		ele.id = "alerttw";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("tw_hoge")[1].appendChild(ele);
          }
      }else{
        if(altw){
          altw.parentNode.removeChild(altw);
        }
      }
    }
  alert_count();
}
window.onload = alert_tw();


function alert_fb() {
    var fb = document.getElementsByClassName("fb_link");
  	var alfb = document.getElementById("alertfb");
    if(fb){  	 
      if(fb[1].value.replace(/\s+/g, "").match(/realglobe/)){
          if(!alfb){
          	var ele = document.createElement("div");
      		ele.id = "alertfb";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("fb_hoge")[1].appendChild(ele);
          }
      }else{
        if(alfb){
          alfb.parentNode.removeChild(alfb);
        }
      }
    }
  alert_count();
}
window.onload = alert_fb();

function alert_seo(){
  var textarea = document.getElementsByClassName("aioseop_textarea_type")
  if(textarea){
    if(textarea.length == 8){
      var title = document.dofollow.aiosp_home_title;
      var des = document.dofollow.aiosp_home_description;
      var key = document.dofollow.aiosp_home_keywords;
      var altitle = document.getElementById("alerttitle");
      var aldes = document.getElementById("alertdes");
      var alkey = document.getElementById("alertkey");
      if(!title.value){
        if(!altitle){
	        var ele = document.createElement("div");
    	  	ele.id = "alerttitle"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[4].appendChild(ele);
        }
      }else{
        if(altitle){
          altitle.parentNode.removeChild(altitle);
        }
      }
      
      if(!des.value){
        if(!aldes){
	        var ele = document.createElement("div");
    	  	ele.id = "alertdes"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[5].appendChild(ele);
        }
      }else{
        if(aldes){
          aldes.parentNode.removeChild(aldes);
        }
      }
      
      if(!key.value){
        if(!alkey){
	        var ele = document.createElement("div");
    	  	ele.id = "alertkey"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[6].appendChild(ele);
        }
      }else{
        if(alkey){
          alkey.parentNode.removeChild(alkey);
        }
      }
    }
    
    if(textarea.length == 1){
      var title = document.post.aiosp_title;
      var des = document.post.aiosp_description;
      var key = document.post.aiosp_keywords;
      var altitle = document.getElementById("alerttitle");
      var aldes = document.getElementById("alertdes");
      var alkey = document.getElementById("alertkey");
      
      if(!title.value){
        if(!altitle){
	        var ele = document.createElement("div");
    	  	ele.id = "alerttitle"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[1].appendChild(ele);
        }
      }else{
        if(altitle){
          altitle.parentNode.removeChild(altitle);
        }
      }
      
      if(!des.value){
        if(!aldes){
	        var ele = document.createElement("div");
    	  	ele.id = "alertdes"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[2].appendChild(ele);
        }
      }else{
        if(aldes){
          aldes.parentNode.removeChild(aldes);
        }
      }
      
      if(!key.value){
        if(!alkey){
	        var ele = document.createElement("div");
    	  	ele.id = "alertkey"
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("aioseop_option_label")[3].appendChild(ele);
        }
      }else{
        if(alkey){
          alkey.parentNode.removeChild(alkey);
        }
      }
      
    }
  }
  alert_count();
}
window.onload = alert_seo();

function alert_count() {
  var count = 0;
  if(document.getElementById("alertgoogle")){
    count ++;
  }
  if(document.getElementById("alertamazon")){
    count ++;
  }
  if(document.getElementById("alerttw")){
    count ++;
  }
  if(document.getElementById("alertfb")){
    count ++;
  }
  if(document.getElementById("alerttitle")){
    count ++;
  }
  if(document.getElementById("alertdes")){
    count ++;
  }
  if(document.getElementById("alertkey")){
    count ++;
  }
  var alcount = document.getElementById("alertcount");
  if(alcount){
     alcount.parentNode.removeChild(alcount);
  }
  if(count != 0){
     var textarea = document.getElementsByClassName("aioseop_textarea_type")
     
     if(textarea){
       if(textarea.length == 1){
         var ele = document.createElement("div");
    	  	ele.id = "alertcount"
			var str = document.createTextNode(count);
			ele.appendChild(str);	
      		document.getElementsByClassName("current")[1].appendChild(ele);
 
       }
     }

  }
}
function change_space(){
  var widget = document.getElementById("hiyoko-widgets-edit");
  if(widget){
    height = document.getElementById("hiyoko-custom").clientHeight + 1000 + "px";
    widget.style.marginTop = height;
    console.log("oahgohgaohgohgoaih");
    
  }
}
window.onload = change_space();
