function func_delete_code(parent_ele) {
	//var list = parent_ele.childNodes;
	var ele = document.getElementById("new_code");
	parent_ele.removeChild(ele);
}


function func_create_new_code(parent_ele , /*optional*/ div_list , display) {
	var new_code = document.createElement("div"); 
	
	  new_code.id = "new_code";  
   	new_code.style["float"] = "left";
   	new_code.style["width"] = "440px";
   	new_code.style["height"] = "400px";

      if(display == false){
         new_code.style["display"] = "none";
      }

   	new_code.style["font-family"] = "Consolas, Monaco, Bitstream Vera Sans Mono, Courier New, sans-serif";

   	parent_ele.insertBefore(new_code);  

   	//create new div and space_div
  
      //type: comments keyword string normal
   	//create_space(new_code);
      //create_placeholder(new_code);  
//1
   	var str = "  /*Forgive me for needing you in my life";
   	var type = "comments";
   	create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  *So I write some code to express thoughts in my deep heart";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  */";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
//2
      create_placeholder(new_code);  
      str = "Girl u = ";
      type = "normal";
      create_line(new_code, str, div_list, type);
      str = "new";
      type = "keyword";
      create_line(new_code, str, div_list, type);
      str = " Girl(";
      type = "normal";
      create_line(new_code, str, div_list, type);
      str = "\"HanZhang\"";
      type = "string";
      create_line(new_code, str, div_list, type);
      str = ");";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);
//3
      create_placeholder(new_code);  
      str = "Boy  i = ";
      type = "normal";
      create_line(new_code, str, div_list, type);
      str = "new";
      type = "keyword";
      create_line(new_code, str, div_list, type);
      str = " Boy(";
      type = "normal";
      create_line(new_code, str, div_list, type);
      str = "\"WuHao\"";
      type = "string";
      create_line(new_code, str, div_list, type);
      str = ");";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);

//4
      str = "  // they got a glance at Jul 25, 2014 ";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//5
      str = "  // since then,I miss you everyday";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//6
      create_placeholder(new_code);
      str = "for";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      str = "(time <= Meet_You ; time++ )";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      str = "i.missing(u)";
      type = "normal";
      create_br(new_code);
//
      create_space(new_code);
      str = "        i.miss(u);";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);  

//
      create_space(new_code);
      str = " /*";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
//12
      create_space(new_code);
      str = "  * Sep 30, 2014 I told you I love you.";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//13
      create_space(new_code);
      str = "  * you said that you won't be so easy to accept me";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  * So I keep waiting and I have confidence that you will";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  */";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  i.wait(u);";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_space(new_code);
      str = "  //And take care of u and our love";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//15
      create_placeholder(new_code);
      str = " i.takeCareOf(u);";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

//18
      create_placeholder(new_code);
      str = " while";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      str = "(true){";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
// 
      str = "     //I think it is a important decision for you";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
      str = "     //and you should think it over";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      str = "     isHesitate = u.thinkOver();";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);
      
      str = "   }";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);       

      create_placeholder(new_code);
      str = "/*";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);  

//29
      create_placeholder(new_code);
      str = " *In my dream , after a romantic wedding, ";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_placeholder(new_code);
      str = " *we will live happily ever after";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);

      create_placeholder(new_code);
      str = " */";
      type = "comments";
      create_line(new_code, str, div_list, type); 
      create_br(new_code);
//
      create_placeholder(new_code);
      str = " i";
      type = "string";
      create_line(new_code, str, div_list, type); 
      str = ".";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      str = "marry(";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      str = "u";
      type = "string";
      create_line(new_code, str, div_list, type); 
      str = ");";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);

//30
      create_placeholder(new_code);
      str = " i";
      type = "string";
      create_line(new_code, str, div_list, type); 
      str = ".";
      type = "keyword";
      create_line(new_code, str, div_list, type); 
      str = "liveHappilyWith(";
      type = "normal";
      create_line(new_code, str, div_list, type); 
      str = "u";
      type = "string";
      create_line(new_code, str, div_list, type); 
      str = ");";
      type = "normal";
      create_line(new_code, str, div_list, type);
      create_br(new_code);
}

function create_line(parent_ele, str_line, /*optional*/ div_list, type){

   	for (var i=0; i<str_line.length ; i++) {

   		str = str_line.substring(i , i+1);
   		
   		//space
   		if(str == " "){
   			create_space(new_code)
   		}
   		else{		
   			div_id = div_list.length;
   			div_list[div_id] = create_div(parent_ele, type , str , div_id);   	
   		}
	};

}

function create_br(parent_ele){
	var div_text = document.createElement("br"); 
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  

}

function create_space(parent_ele){
	var div_text = document.createElement("div"); 
   	//text
   	div_text.innerHTML = "&nbsp";
   	//div_text.style["margin-left"] = "7px";
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  
}

function create_placeholder(parent_ele){
	var div_text = document.createElement("div"); 
   	//div_text.style["margin-left"] = "15px";
   	div_text.innerHTML = "&nbsp&nbsp";
   	div_text.style["float"] = "left"
   	parent_ele.appendChild(div_text);  
}

function create_div(parent_ele , type , str , div_id){
	var div_text = document.createElement("div"); 
   	//text
   	//div_text.type = "text";
   	//div_text.innerHTML = "t";  
   	div_text.id = div_id;  
   	//div_text.style["font-weight"] = "bold"
   	//div_text.style["height"] = "100px"
   	//div_text.style["width"] = "100px"

//style

      div_text.style["position"] = "relative";

   	if(type == "keyword"){
		div_text.style["color"] = "#FF0000";
		div_text.style["font-weight"] = "bold";
   	}
   	else if(type == "comments"){
   		div_text.style["color"] = "#3f7f5f";
   	}
   	else if(type == "string"){
		div_text.style["color"] = "#2a36ff";
   	}
      else{}//normal

   	div_text.style["float"] = "left"
   	div_text.innerHTML = str;

	   parent_ele.appendChild(div_text);  

      return div_text;
}

function code_fly(ele_id ,left , top , speed){

   var div=$("#"+ele_id);  

   var relativeOffsetLeft=$("#"+ele_id).offset().left;
   var relativeOffsetTop=$("#"+ele_id).offset().top;

   var relativeOffset_Left_Content=$("#content").offset().left;
   var relativeOffset_Top_Content=$("#content").offset().top;

    div.animate(
      {
         left:left - relativeOffsetLeft + relativeOffset_Left_Content,
         top: top - relativeOffsetTop + relativeOffset_Top_Content
         //left:left,
         //top: top 
      },speed);
    //ele.animate({fontSize:'3em'},"slow");

}


