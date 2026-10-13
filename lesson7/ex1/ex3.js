let score = 8;
if(score>=8){
    console.log("Hoc sinh gioi");
} else if(score >=5){
    console.log("hoc sinh kha");
} else{
    console.log("hoc sinh tbinh");
}

let username = "admin";
let password = "123456";

if(username === "admin"){
    if( password === "123456"){
        console.log("dang nhap thanh cong");
    }else{
        console.log("sai mat khau");
    }
}else{
    console.log("sai ten tai khoan");
}