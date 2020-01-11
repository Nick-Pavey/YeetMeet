

function searchUsername() {
    var result; 
    var username = document.getElementById('Usernametxt').value;
    var PlayerRequest = "https://r6tab.com/api/search.php?platform=uplay&search=" + username;
    var Request = new XMLHttpRequest;
    var users = [];
    Request.onload = function () {
        console.log(PlayerRequest);
        result = JSON.parse(Request.responseText);
        console.log(result.results);
        console.log(result.results[0])
        for (i in result.results) {
            for (j in result.results[i]) {
                var userinfo = [];
                userinfo.push("Name: "+ result.results[i].p_name);
                userinfo.push("  Level: "+ result.results[i].p_level);
                userinfo.push("  MMR: "+ result.results[i].p_currentmmr);
                userinfo.push("  Id: "+ result.results[i].p_id);
            }
            users.push(userinfo + "<br>");  
          }
        document.getElementById("searchtxt").innerHTML = users.toString().split(",").join(" ");
    }
    Request.open("GET", PlayerRequest);
    Request.send();
}

function getUserPID() {
    var result; 
    var userpid = document.getElementById('Userpidtxt').value;
    var PlayerRequest = "https://r6tab.com/api/player.php?p_id=" + userpid;
    var Request = new XMLHttpRequest;
    var users = [];
    Request.onload = function () {
        console.log(PlayerRequest);
        result = JSON.parse(Request.responseText);
        console.log(result);
            users.push("PlayerFound: "+ result.playerfound + "<br>"); 
            users.push("Visitors: "+ result.p_visitors + "<br>"); 
            users.push("AccountName: "+ result.p_name); 
        document.getElementById("accounttxt").innerHTML = users.toString().split(",").join(" ");
    }
    Request.open("GET", PlayerRequest);
    Request.send();  
}

function runSearches(){
    var numofsearches = document.getElementById('numofsearches').value;
    console.log(numofsearches);
    for (i = 0; i < numofsearches; i++) {
        getUserPID();
    }
    function startnew() {
    document.getElementById("newgamemodal").hidden = false;
    }
}




