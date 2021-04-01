

function searchUsername(){var e,t="https://r6tab.com/api/search.php?platform=uplay&search="+document.getElementById("Usernametxt").value,n=new XMLHttpRequest,s=[];n.onload=function(){for(i in console.log(t),e=JSON.parse(n.responseText),console.log(e.results),console.log(e.results[0]),e.results){for(j in e.results[i]){var o=[];o.push("Name: "+e.results[i].p_name),o.push("  Level: "+e.results[i].p_level),o.push("  MMR: "+e.results[i].p_currentmmr),o.push("  Id: "+e.results[i].p_id)}s.push(o+"<br>")}document.getElementById("searchtxt").innerHTML=s.toString().split(",").join(" ")},n.open("GET",t),n.send()}
function getUserPID(){var e,t="https://tabstats.com/siege/player/test-003212645a/9cdc00b6-905e-4cce-8ac9-f6052bd0a5ca",n=new XMLHttpRequest,s=[];n.onload=function(){console.log(t),e=JSON.parse(n.responseText),console.log(e),s.push("PlayerFound: "+e.playerfound+"<br>"),s.push("Visitors: "+e.p_visitors+"<br>"),s.push("AccountName: "+e.p_name),document.getElementById("accounttxt").innerHTML=s.toString().split(",").join(" ")},n.open("GET",t),n.send()}async function runSearches(){var e=document.getElementById("numofsearches").value,t=document.getElementById("pauseinms").value;for(console.log(e),i=0;i<e;i++)getUserPID(),await sleep(t)}function sleep(e){return new Promise(t=>setTimeout(t,e))}function startnew(){document.getElementById("newgamemodal").hidden=!1}




