$(function(){
 	$("#statement").click(function(){
 		var id = "01_asao";
 		var lab = "高山明";
 		var nameJP = "浅尾 鷹也";
 		var nameEN = "Takaya Asao";
 		var worksNum = 2;
 		var filename = ["01.png", "sumbnail.png"];
 		var fileTitle = ["作品01", "作品２"];
 		var almaMater = "九州産業大学芸術学部デザイン学科卒"; 
 		var link = "https://vimeo.com/user15242827";

		$("#modals-wrapper").append(
			'<div class="artist-modal" id="' 
			+ id + '_modal">\n<div class="first-column">\n<div class="modal-lab">'
			+ lab + '研究室</div>\n<img src="images/UI/close.png" class="back-button">\n</div>\n<div class="second-column">\n<div class="modal-nameJP">'
			+ nameJP +'</div>\n<div class="modal-nameEN">'
			+ nameEN +'</div>\n</div>');

		for(var i=0; i<worksNum; i++){
			$("#" + id + "_modal").append('<div class="work">\n<img src="artistInfomation/M2/'
				+ id + '/' +filename[i] + '" class="work-photo">\n<p class="work-title">'
				+ fileTitle[i] + '</p>\n</div>\n');
		}

		$("#" + id + "_modal").append('<div class="footer-column">\n<p class="alma-mater">'
			+ almaMater + '</p>\n<div class="link">\n<a href="'
			+ link + '">' + link +'</a>\n</div>\n</div>');
	});
});