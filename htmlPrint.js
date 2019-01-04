//隱藏
$(".answer-btn").hide();

//顯示
$(".answer").show().css({
	  "padding": "10",
      "background-color": "yellow",
      "font-weight": "bolder"
    } );

//列印
var page = Number($("li.active > a").text());
var html = $(".work-history").html();
var bodyHtml = document.body.innerHTML;
document.body.innerHTML = html;
window.print();
document.body.innerHTML = bodyHtml;

//換業
setInterval(function(){ 
	var nextPage = page + 1;
	window.location.href = "/aaa.html?page="+nextPage
}, 1000);
  



