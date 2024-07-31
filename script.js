saveBtn=document.getElementById("submit");
fontcolor=document.getElementById("fontcolor");
fontsize=document.getElementById("fontsize");
saveBtn.addEventListener("click",save);


document.addEventListener("DOMContentLoaded",()=>{
    if(document.cookie){
     let ele =document.cookie.split(';')
     ele.forEach(e=>{
        value=e.trim().split('=');
        if(value[0]=='fontcolor'){
            fontcolor.value=value[1];
        }
        else if(value[0]=='fontsize'){
            fontsize.value=value[1];
        }
     })  
    }
    

})
function save(e){
    e.preventDefault();
    const expires = new Date();
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
            const expiresStr = `expires=${expires.toUTCString()}`;
            document.cookie = `fontcolor=${fontcolor.value}; ${expiresStr}; path=/`;
            document.cookie = `fontsize=${fontsize.value}; ${expiresStr}; path=/`;

}