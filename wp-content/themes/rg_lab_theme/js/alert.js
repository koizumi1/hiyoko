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


function alert_title() {
  var title = document.getElementById("title");
  	var altitle = document.getElementById("alerttitle1");
    if(title){  	 
      if(title.value == ""){
          if(!altitle){
          	var ele = document.createElement("div");
      		ele.id = "alerttitle1";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementById("titlewrap").appendChild(ele);
          }
      }else{
        if(altitle){
          altitle.parentNode.removeChild(altitle);
        }
      }
    }
  alert_count();
}
window.onload = alert_title();

function alert_thumbnail(){
  var thum = document.getElementById("remove-post-thumbnail");
  	var althumb = document.getElementById("alertthumb");
  var img = document.getElementById("postimagediv")
    if(img){  	 
      if(thum){
          if(!althumb){
          	var ele = document.createElement("div");
      		ele.id = "alertthumb";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		img.appendChild(ele);
          }
      }else{
        if(althumb){
          althumb.parentNode.removeChild(althumb);
        }
      }
    }
  alert_count();
}
window.onload = alert_thumbnail();

function alert_content() {
  var con = document.getElementsByClassName("wp-editor-area");
  	var alcon = document.getElementById("alertcontent");
    if(con){  	 
      if(con[0].value == ""){
          if(!alcon){
          	var ele = document.createElement("div");
      		ele.id = "alertcontent";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementById("postdivrich").appendChild(ele);
          }
      }else{
        if(alcon){
          alcon.parentNode.removeChild(alcon);
        }
      }
    }
  alert_count();
}
window.onload = alert_content();



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

jQuery(function alert_category() {
    category = $("#categorychecklist input")
    alcategory = $("#alertcategory")
    if(category){  	 
        for(i=0;i<category.length;i++){   // チェックボックスの数分ループ
            if(category[i].checked){
		        return;
      		}
        }
          if(!alcategory){
          	var ele = document.createElement("div");
      		ele.id = "alertcategory";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		$("#categorychecklist input").appendChild(ele);
          }
      }else{                                                 
        if(alcategory ){
          alcategory.parentNode.removeChild(alcategory);
        }
    } 
  alert_count();
});

window.onload = alert_category();

jQuery(function alert_post_title() {
    var title = $("#titlediv input")
  	var alposttitle = document.getElementById("alertposttitle");
    if(title){  	 
      if(title[1].value.replace(/\s+/g, "").length <=0){
          if(!alposttitle){
          	var ele = document.createElement("div");
      		ele.id = "alertposttitle";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("post_title_hoge")[1].appendChild(ele);
          }
      }else{
        if(alposttitle){
          alposttitle.parentNode.removeChild(alposttitle);
        }
      }
    }
  alert_count();
});
window.onload = alert_post_title();

jQuery(function alert_ifr() {
    var ifr = $("#content_ifr p")
  	var alifr = document.getElementById("alertifr");
    if(ifr){  	 
      if(ifr[1].value.replace(/\s+/g, "").length <=0){
          if(!alifr){
          	var ele = document.createElement("p");
      		ele.id = "alifr";
			var str = document.createTextNode("入力してください");
			ele.appendChild(str);	
      		document.getElementsByClassName("ifr_hoge")[1].appendChild(ele);
          }
      }else{
        if(alifr){
          alifr.parentNode.removeChild(alifr);
        }
      }
    }
  alert_count();
});
window.onload = alert_ifr();







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
  if(document.getElementById("alerttitle1")){
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
  if(document.getElementById("alertcategory")){
    count ++;
  }
  if(document.getElementById("alertposttitle")){
    count ++;
  }
  if(document.getElementById("alifr")){
    count ++;
  }
  if(document.getElementById("alertcontent")){
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
    
  }
}
window.onload = change_space();
