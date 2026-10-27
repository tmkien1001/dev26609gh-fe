function getData(){
    debugger;
    //lay ten
    let name = document.getElementById("txtname").value;
    //lay gioi tinh
    let gt = document.getElementsByName("gioitinh");
    let gioitinh = "";
    for(let i=0;i<gt.length; i++){
        if(gt[i].checked){
            gioitinh=gt[i].value;
        }
    }
    // lay so thich 
    let st = document.getElementsByName("sothich");
    let sothich =[];
    for(let i=0;i<st.length;i++){
        if(st[i].checked){
            sothich.push(st[i].value);
        }
    }
    console.log("ten:",name);
    console.log("gioi tinh:",gioitinh);
    let sthich = sothich.join(",");
    console.log ("so thich:",sthich);
    
    let strInfor = `<h2> Xin chao,${name} </h2>`;
        strInfor +=`<p> gioi tinh:${gioitinh} </p>`;
        strInfor +=`<p> so thich:${sothich} </p>`;

    document.getElementById("ketqua").innerHTML=strInfor;
    document.getElementById("ketqua").style.display ="block";
    return false;


}
const changeName = () =>{
    document.getElementById("txtname").value="Manh Kien";
    return false;
}