
//参数：
/*
请求方式：method
请求地址：url
请求参数：sendData
成功时的回调函数：success
失败时的回调函数：fail
是否异步：isAsnc;
返回的数据格式:dataType (text,JSON);
   */
 
 
 
   
 /*
 ajax1702({
	method:"get",
	url:"http://localhost/web1702/checkUser.php",
	sendData:"userName=",
	isAsnc:true,
	dataType:"String"
 })
 */
/*
function ajax1702(obj){
	let xhr = new XMLHttpRequest();

	
	let urlAndSendData = "";//拼接open函数的第二个参数；
	
	if(defaultObj.method.toLowerCase()=="get"  && defaultObj.sendData!=""){		
		urlAndSendData += "?"+defaultObj.sendData;
	}else{
		urlAndSendData = obj.url;
	}
	
	xhr.open(obj.method,urlAndSendData,obj.isAsnc);
	
	//3、设置回调函数
	xhr.onreadystatechange  =function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				if(obj.dataType.toLowerCase()=="string"){
					obj.success(xhr.responseText);
					return;
				}else if(obj.dataType.toLowerCase()=="json"){
					obj.success(JSON.parse(xhr.responseText));
					return;
				}		
			}else{
				obj.fail();
			}
		}
	}
	
	if(ojb.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(obj.sendData);
	}else{
		xhr.send();
	}
}
 */
 /*
  ajax1702({
	method:"post",
	url:"http://localhost/web1702/checkUser.php",
	sendData:"userName=",
	isAsnc:true,
	dataType:"String"
 })
*/
function ajax1702(obj){
	//默认值；
	let defaultObj = {
		method:"get",
		url:"#",
		sendData:"",
		success:null,
		fail:null,
		isAsnc:true,
		dataType:"json"
	};
	
	for(let key in obj){//循环的json对象的属性。每循环一次，key就是obj的每一个键名
		defaultObj[key] = obj[key];//defaultdefaultObj.method = defaultObj.method; <==>defaultObj["method"] = obj["method"];
	}


	let xhr = new XMLHttpRequest();

	//2、设置请求参数
	let urlAndSendData = defaultObj.url;
	if(defaultObj.method.toUpperCase()=="GET"  && defaultObj.sendData!=""){		
		urlAndSendData += "?"+defaultObj.sendData;
	}
	
	xhr.open(defaultObj.method,urlAndSendData,defaultObj.isAsnc);
	
	//3、设置回调函数
	xhr.onreadystatechange  =function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				if(defaultObj.dataType.toUpperCase()=="TEXT"){
					if(defaultObj.success!=null){
						defaultObj.success(xhr.responseText);
						return;
					}else{
						xhr.responseText;
						return;
					}
					
				}else if(defaultObj.dataType.toUpperCase()=="JSON"){
					if(defaultObj.success!=null){
						defaultObj.success(JSON.parse(xhr.responseText));
						return;
					}else{
						JSON.parse(xhr.responseText)
						return;
					}				
				}		
			}else{
				defaultObj.fail();
			}
		}
	}
	
	if(defaultObj.method.toUpperCase()=="POST"){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.sendData);
	}else{
		xhr.send();
	}
	
}