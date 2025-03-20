let loggedin = 0;
let donation = 0;
let invested_amt = 0;
const share = [["wheat.jpeg", "Rice Farms", 200], ["corn.jpg", "Corn Farms", 150], ["apple.jpg", "Apple Farms", 450]];
const myshares = [0, 0, 0];

function checklogin(){
    let u = document.getElementById("logininfoform").elements[0].value;
    let p = document.getElementById("logininfoform").elements[1].value;   
    if (u === ""){
        alert("Invalid User Id");
        return false;
    }
    else if (p === ""){
        alert("Invalid Password");
        return false;
    }
    loggedin = 1;
    let content = "<img style=\"width: 80px; height: 80px;\" src=\"tick.png\">";
    content += "<h1 style=\"margin: 20px; font-weight: bold; font-size: large;\">Successfully Logged In</h1>";
    document.getElementById("form1").innerHTML = content;
    return false;
}
function checkreg(){
    if (loggedin){
        alert("Already Logged in");
        return false;
    }
    let f = document.getElementById("reginfoform");
    let e = f.elements["email"].value;
    if (e === ""){
        alert("Invalid Email");
        return false;
    }
    let u = f.elements["user"].value;
    if (u === ""){
        alert("Invalid User");
        return false;
    }
    let ph = f.elements["phn"].value;
    if (ph < 1000000000 || ph > 9999999999){
        alert("Invalid Phone number");
        return false;
    }
    let p1 = f.elements["pass1"].value;
    let p2 = f.elements["pass2"].value;
    if (p1 != p2 || p1 === ""){
        alert("Invalid Password/Confirm Password");
        return false;
    }
    if (!f.elements["cbox"].checked){
        alert("Please agree to the checkbox");
        return false;
    }
    loggedin = 1;
    let content = "<img style=\"width: 80px; height: 80px;\" src=\"tick.png\">";
    content += "<h1 style=\"margin: 20px; font-weight: bold; font-size: large;\">Successfully Signed Up</h1>";
    document.getElementById("form2").innerHTML = content;
    return false;
}
function openlogin(){
    document.getElementById("logform").style.display = "block";
    document.getElementById("regform").style.display = "none";
    document.getElementById("home").style.opacity = "0.5";
}
function closelogin(){
    document.getElementById("logform").style.display = "none";
    document.getElementById("home").style.opacity = "1";
}
function openreg(){
    document.getElementById("regform").style.display = "block";
    document.getElementById("logform").style.display = "none";
    document.getElementById("home").style.opacity = "0.5";
}
function closereg(){
    document.getElementById("regform").style.display = "none";
    document.getElementById("home").style.opacity = "1";
}
function openhome(){
    location.replace("index.html");
}
function opencontact(n){
    if (n === 1) window.open("https://www.instagram.com/");
    if (n === 2) window.open("https://x.com/?lang=en-in");
    if (n === 3) window.open("https://in.linkedin.com/");
    if (n === 4) window.open("https://web.whatsapp.com/");
}
function openhelp(){
    document.getElementById("fhelp").style.display = "block";
    document.getElementById("home").style.opacity = "0.5";
}
function closehelp(){
    document.getElementById("fhelp").style.display = "none";
    let content = `<form id="dono" action="none" method="post">
                <table style="border-spacing: 40px;"> 
                    <tr>
                        <th>Enter UPI ID :</th>
                        <td><input type="text" id="uiddon"></td>
                    </tr>
                    <tr>
                        <th>Enter Donation Amount:</th>
                        <td><input type="number" id="donate"></td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" class="submit" onclick="return checkdonate()" value="Donate">
                        </td>
                    </tr>
                </table>                
            </form>
            <div class="logo">
                <h2 style="font-size: xx-large;">AgriToken</h2>
            </div>`;
    document.getElementById("farmers").innerHTML = content;
    document.getElementById("home").style.opacity = "1";
}
function opencard(n){
    if (!loggedin){
        alert("Please Signup / Login");
        return;
    }
    if (n === 1){
        document.getElementById("buyit").style.display = "flex";
        document.getElementById("home").style.opacity = "0.5";
    } 
    if (n === 2){
        document.getElementById("sellit").style.display = "flex";
        document.getElementById("home").style.opacity = "0.5";
    } 
    if (n === 3){
        document.getElementById("folio").style.display = "flex";
        document.getElementById("home").style.opacity = "0.5";
    } 
}
function closeit(n){
    if (n === 1){
        document.getElementById("buyit").style.display = "none";
        document.getElementById("home").style.opacity = "1";
    } 
    if (n === 2){
        document.getElementById("sellit").style.display = "none";
        document.getElementById("home").style.opacity = "1";
    } 
    if (n === 3){
        document.getElementById("folio").style.display = "none";
        document.getElementById("home").style.opacity = "1";
    } 
}
function checkdonate(){
    let t = document.getElementById("dono");

    if (t.elements["uiddon"].value === ""){
        alert("UPI Id invalid!");
        return false;
    }
    if (!(t.elements["donate"].value > 100)){
        alert("Donation Amount too low");
        return false;
    }
    donation += Number(t.elements["donate"].value);
    let content2; 
    content2 = `<h3 style="margin-bottom: 0px;" id="curvalue">Total Amount Donated: <h2>Rs.${donation}</h2></h3>`;    
    document.getElementById("donoplace").innerHTML = content2;

    let content = "<img style=\"width: 80px; height: 80px;\" src=\"tick.png\">";
    content += "<h1 style=\"margin: 20px; font-weight: bold; font-size: large;\">Thank You for Donating!</h1>";
    document.getElementById("farmers").innerHTML = content;
    return false;
}
function buyshare(n){
    myshares[n]++;
    invested_amt += share[n][2];
    alert(`Added ${share[n][1]} x1, Total available: ${myshares[n]}`);
    let content;
    content = `<div class="top">
            <h1 style="color: green; margin: 20px;">SELL</h1>
            <button class="cross" onclick="closeit(2)">X</button>
        </div>`;
    let total = 0;
    for(let i = 0; i < myshares.length; i++){
        if (myshares[i] > 0){
            content += `<div class="shares">
            <img src="${share[i][0]}" style="height: 70px; width: 70px;" alt="">
            <h5>${share[i][1]} (AP, India)</h5>
            <h4>Qty. ${myshares[i]}</h4>
            <button class="sell1" onclick="sellshare(${i})">Sell x1</button>
        </div>`;
            total += myshares[i]*share[i][2];
        };
    }
    content +=`<div class="logo">
            <h2 style="font-size: xx-large;">AgriToken</h2>
        </div>`;
    document.getElementById("sellit").innerHTML = content;
    let content2; 
    content2 = `<h3 style="margin-bottom: 0px;" id="curvalue">Current Portfolio Value: <h2>Rs.${total}</h2></h3>
            <h5 style="margin-top: 0px; margin-bottom: 0px;" id="invamt">Invested Amount: <h4 style="margin-top: 0px; ">Rs.${invested_amt}</h4></h5>`;
    
    document.getElementById("placehere").innerHTML = content2;
}
function sellshare(n){
    myshares[n]--;
    let content;
    content = `<div class="top">
            <h1 style="color: green; margin: 20px;">SELL</h1>
            <button class="cross" onclick="closeit(2)">X</button>
        </div>`;
    let count = 0;
    let total = 0;
    for(let i = 0; i < myshares.length; i++){
        if (myshares[i] > 0){
            content += `<div class="shares">
            <img src="${share[i][0]}" style="height: 70px; width: 70px;" alt="">
            <h5>${share[i][1]} (AP, India)</h5>
            <h4>Qty. ${myshares[i]}</h4>
            <button class="sell1" onclick="sellshare(${i})">Sell x1</button>
        </div>`
            count++;
            total += myshares[i]*share[i][2];
        };
    }
    if (!count) content += `<h1 style="color: green;">
            No Shares To Display.
        </h1>`;
    content +=`<div class="logo">
            <h2 style="font-size: xx-large;">AgriToken</h2>
        </div>`;
    document.getElementById("sellit").innerHTML = content;
    let content2; 
    content2 = `<h3 style="margin-bottom: 0px;" id="curvalue">Current Portfolio Value: <h2>Rs.${total}</h2></h3>
            <h5 style="margin-top: 0px; margin-bottom: 0px;" id="invamt">Invested Amount: <h4 style="margin-top: 0px; ">Rs.${invested_amt}</h4></h5>`;
    
    document.getElementById("placehere").innerHTML = content2;
}