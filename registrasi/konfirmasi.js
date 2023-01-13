let namaUser = document.getElementById("username").value;
let alamatEmail = document.getElementById("email_ID").value 

let sandi = document.getElementById("kunci");
let tanyaSandi = document.getElementById("konfirmasiKunci");


function lihatSandi(){
    
    if(sandi.type === "password"){
        sandi.type = "text";
        tanyaSandi.type = "text";
    }
    else{
        sandi.type = "password";
        tanyaSandi.type = "password";
    }
}

function lanjut(){
    var next = document.getElementById("nextPage");
    //
    if((sandi.value == tanyaSandi.value)&&(namaUser != " ")&&(alamatEmail != " "))
    {alert("Hello");
    location.href="../homepage/iniHomepage.html";
    }

    else if(sandi.value != tanyaSandi.value){
        alert(" Kata Sandi Mu kok beda? coba dinget2 dulu");
        
    }
    else{alert("Anda ngawur");}

}