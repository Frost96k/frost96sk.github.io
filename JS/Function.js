function showTab(tab){
    document.getElementById("tab-1").style.display="none";
    document.getElementById("tab-2").style.display="none";
    document.getElementById("tab-3").style.display="none";
    document.getElementById("tab-"+tab).style.display="block";
    if(tab==1){
        document.getElementById("me").classList.add("active");
        document.getElementById("handshake").classList.remove("active");
        document.getElementById("head").classList.remove("active");

    }else if(tab==2){
        document.getElementById("me").classList.remove("active");
        document.getElementById("handshake").classList.add("active");
        document.getElementById("head").classList.remove("active");
    }else{
        document.getElementById("me").classList.remove("active");
        document.getElementById("handshake").classList.remove("active");
        document.getElementById("head").classList.add("active");
    }

}
