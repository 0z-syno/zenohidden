class GMCookie{cookie_name="cookie_game";cookie_permission="cookie_permission";permisstion=false;expires={expires:60,path:'/'};limit=12;init(){if(Cookies.get(this.cookie_permission)){return this;}else{return false;}}
getPermision(){if(Cookies.get(this.cookie_permission)=='true'){return true}else{return false;}}
setPermisstion(permission){return Cookies.set(this.cookie_permission,permission,this.expires);}
write(obj){if(!this.getPermision()){return;}
if(typeof obj!=='object'){return;}
let data_cookie=this.read();let array_cookie=[];if(data_cookie){array_cookie=JSON.parse(data_cookie);let add=true;for(let temp of array_cookie){if(obj.slug==temp.slug||obj.slug==slug_home){add=false;return;}}
if(add){array_cookie.push(obj);}
if(array_cookie.length>this.limit){array_cookie=array_cookie.slice(Math.max(array_cookie.length-this.limit,0))}}else{array_cookie.push(obj);}
let json_cookie=JSON.stringify(array_cookie);Cookies.set(this.cookie_name,json_cookie,this.expires);}
read(cc_name=null){if(!this.getPermision()){return false;}
return Cookies.get(this.cookie_name);}
clear(cookie_name){this.setPermisstion(false);localStorage.clear();if(cookie_name){return Cookies.remove(cookie_name);}else{return Cookies.remove(this.cookie_name);}}
render(data=null,flag=true){if(!this.getPermision()){return;}
if(!data){data=this.read();}
let data_game=JSON.parse(data).reverse();this.html(data_game,flag);}
html(data_recent,flag=true){$(".layer-loading").removeClass('hidden');if(!data_recent){return false;}
let url="/recent.ajax";$.ajax({url:url,type:"POST",data:{data_recent:data_recent},success:function(html){$(".layer-loading").addClass('hidden');$("html, body").animate({scrollTop:0},0);let data_html=JSON.parse(html);$("#game-page").html(data_html.content);changeMetaTag(data_html.metadata,flag);}})}
accpet(){this.permisstion=true;this.setPermisstion(this.permisstion);}
reject(){this.permisstion=false;this.setPermisstion(this.permisstion);}}