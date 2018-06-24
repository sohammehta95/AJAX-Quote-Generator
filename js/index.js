var url = 'https://talaikis.com/api/quotes/random/ '
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");
var display = document.querySelector("#quote");
var authdisplay = document.querySelector("#auth");

xhrbtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var result = JSON.parse(XHR.responseText);
      display.innerText = result.quote;
      authdisplay.innerText = "--" + result.author;
    }
  }
  XHR.open("GET", url);
  XHR.send();
});


fetchbtn.addEventListener("click", function(){
  fetch(url)
  .then(function(req){
    req.json().then(function(data){
      display.innerText = data.quote;
      authdisplay.innerText = "--" + data.author;
    })
  })
  .catch(function(){
    alert("ERROR!")
  })
});



$('#jquery').click(function(){
  $.getJSON(url)
  .done(function(data){
    $('#quote').text(data.quote);
    $('#auth').text("--" + data.author);
  });
});


axiosbtn.addEventListener("click",function(){
  axios.get(url)
  .then(function(res){
    console.log(res);
    display.innerText = res.data.quote;
    authdisplay.innerText = "--" + res.data.author;
  })
  .catch(function(){
    alert("ERROR!");
  })
});