$(function(){
 	var info_M2 = [
 				["01_asao",		"高山明",	"浅尾 鷹也",		"Takaya Asao",		"九州産業大学芸術学部デザイン学科卒",			"https://twitter.com/sotky_a"],
 				["02_usami",	"桂英史",	"宇佐美 奈緒",	"Nao Usami",		"東京藝術大学 美術学部 デザイン科卒",			"http://naousami.com"],
 				["03_endo",		"佐藤雅彦",	"遠藤 紘也",		"Hiroya Endo",		"東京造形大学 造形学部 デザイン学科 映画専攻卒",	"https://natsumioikawa.tumblr.com/"],
 				["04_oikawa",	"高山明",	"及川 菜摘",		"Natsumi Oikawa",	"多摩美術大学 美術学部 統合デザイン学科卒",		"http://hiroya-endo.net/"],
 				["05_okada",	"桂英史",	"岡田 直己",		"Naoki Okada",		"東京藝術大学 美術学部 デザイン科卒",			"http://bat-headache-ouchouchouch.tumblr.com/"],
 				["06_kanai",	"佐藤雅彦",	"金井 啓太",		"Keita Kanai",		"筑波大学 情報学群卒",							"https://volkhov.tumblr.com/"],
 				["07_kobayashi","桐山孝司",	"小林 颯",		"Hayate Kobayashi",	"慶應義塾大学 環境情報学部 環境情報学科卒",		"https://vimeo.com/user15242827"],	
 				["08_shikichi",	"高山明",	"敷地 理",		"Osamu Shikichi",	"武蔵野美術大学 造形学部 彫刻学科卒",			"https://mumumubrothers.wixsite.com/osamu-shikichi"],
 				["09_shimizu",	"桐山孝司",	"清水 愛恵",		"Manae Shimizu",	"首都大学東京 システムデザイン学部 インダストリアルアートコース卒",	"http://manaepf-tokyo.com"],
 				["10_shimizu",	"桐山孝司",	"清水 潤",		"Mitsuru Shimizu",	"東京藝術大学 美術学部 先端芸術表現科卒",			""],
 				["11_shin",		"畠山直哉",	"申 晛湜",		"Hyunsik Shin",		"早稲田大学 文化構想学部 表象・メディア論系卒",	""],
 				["12_maeda",	"桂英史",	"前田 博雅",		"Hiromasa Maeda",	"武蔵野美術大学 造形学部 映像学科卒",			""],
 				["13_li",		"高山明",	"李 和晋",		"Lee Hwajin",		"東京工芸大学芸術学部写真学科卒",				""],
 				["14_yoshida",	"畠山直哉",	"吉田 真也",		"Shiniya Yoshida",	"秋田公立美術大学 美術学部 ビジュアルアーツ専攻卒",""]
 			];

 	var info_M1 = [
 				["01_osato",		"",		"大里　淳",		"Jun Osato",		"九州産業大学芸術学部デザイン学科卒",			"https://twitter.com/sotky_a"],
 				["02_otaki",		"",		"大滝 彩加",		"Ayaka Otaki",		"東京藝術大学 美術学部 デザイン科卒",			"http://naousami.com"],
 				["03_oka",			"",		"岡 千穂",		"Chiho Oka",		"東京造形大学 造形学部 デザイン学科 映画専攻卒",	"https://natsumioikawa.tumblr.com/"],
 				["04_kang",			"",		"姜 賢植",		"Hyeonsik Kang",	"多摩美術大学 美術学部 統合デザイン学科卒",		"http://hiroya-endo.net/"],
 				["05_koga",			"",		"古閑 慶治",		"Keiji Koga",		"東京藝術大学 美術学部 デザイン科卒",			"http://bat-headache-ouchouchouch.tumblr.com/"],
 				["06_kobayashi",	"",		"小林 舞衣",		"Mai Kobayashi",		"筑波大学 情報学群卒",							"https://volkhov.tumblr.com/"],
 				["07_shiina",		"",		"椎名 悠香",		"Yuka Shiina",	"慶應義塾大学 環境情報学部 環境情報学科卒",		"https://vimeo.com/user15242827"],	
 				["08_shishikura",	"",		"宍倉 志信",		"Shinobu Shishikura",	"武蔵野美術大学 造形学部 彫刻学科卒",			"https://mumumubrothers.wixsite.com/osamu-shikichi"],
 				["09_shimura",		"",		"志村 茉那美",	"Manami Shimura",	"首都大学東京 システムデザイン学部 インダストリアルアートコース卒",	"http://manaepf-tokyo.com"],
 				["10_seko",			"",		"瀬古 瑞歩",		"Mizuho Seko",	"東京藝術大学 美術学部 先端芸術表現科卒",			""],
 				["11_hirai",		"",		"平井 亨季",		"Koki Hirai",		"早稲田大学 文化構想学部 表象・メディア論系卒",	""],
 				["12_hukuhara",		"",		"福原 翼",		"Tsubasa Hukuhara",	"武蔵野美術大学 造形学部 映像学科卒",			""]
 			];

 	var works_M2 = [
 				[1,	"00001",	"00002",	"00003"],/*浅尾*/
 				[3,	"家族団欒 (2019)","家族団欒 (2019)","家族団欒 (2019)"],
 				[3,	"00001",	"00002",	"00003"],
 				[1,	"00001",	"00002",	"00003"],/*及川*/
 				[3,	"funnyface (2018)","Gorgon (2017)","ReverseObject (2019)"],
 				[1,	"00001",	"00002",	"00003"],/*金井*/
 				[2,	"眠るための装置 (2019)","パウンドケーキと佐藤先生 (2018)","00003"],
 				[3,	"long long life, complicated (2016)","small yard_(iii) glasses (2017)","happy ice-cream (2019)"],
 				[3,	"複製との対峙 (2018)","InfluRed (2018)","InterFerence World (2018)"],
 				[3,	"ポリティカル・インコレクトネス (2017)",	"ピンクのマップ (2013)",	"紅茶を入れてください (2015)"],
 				[1,	"","00002","00003"],
 				[3,	"Every Day Goes On Silently (2019)","遠く、ながれて、ずっと (2018)","The Pasts in the Future (2017)"],
 				[2,	"Saudade (2019)","Saudage (2019)","00003"],
 				[2,	"渚にて (2018)","夜は隠す (2019)","00003"],
 	];


 	var works_M1 = [
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 				[3,	"00001",	"00002",	"00003"],
 	];



 	for(var itr=0; itr<14; itr++){
 		var id = info_M2[itr][0];
 		var lab = info_M2[itr][1];
 		var nameJP = info_M2[itr][2];
		var nameEN = info_M2[itr][3];
 		var worksNum = works_M2[itr][0];
 		var filename = ["01.jpg", "02.jpg", "03.jpg"];
 		var fileTitle = [works_M2[itr][1], works_M2[itr][2], works_M2[itr][3]];
 		var almaMater = info_M2[itr][4]; 
 		var link = info_M2[itr][5];

 		$(".m2").append(
 			'<div class="artist-wrapper">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M2/'
			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<p class="lab">'
			+ lab + '研究室</p>\n<div class="name">\n<p class="nameJP">'
			+ nameJP + '</p>\n<p class="nameEN">'
			+ nameEN +'</p>\n</div>\n<div class="modalButton" id="'
			+ id + '">More infomation</div>\n</div>\n</div>'
		);

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
	}


 	for(var itr=0; itr<12; itr++){
 		var id = info_M1[itr][0];
 		var lab = info_M1[itr][1];
 		var nameJP = info_M1[itr][2];
		var nameEN = info_M1[itr][3];
 		var worksNum = works_M1[itr][0];
 		var filename = ["01.jpg", "02.jpg", "03.jpg"];
 		var fileTitle = [works_M1[itr][1], works_M1[itr][2], works_M1[itr][3]];
 		var almaMater = info_M1[itr][4]; 
 		var link = info_M1[itr][5];


 		$(".m1").append(
 			'<div class="artist-wrapper">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M1/'
			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<p class="lab">'
			+ lab + '</p>\n<div class="name">\n<p class="nameJP">'
			+ nameJP + '</p>\n<p class="nameEN">'
			+ nameEN +'</p>\n</div>\n<div class="modalButton" id="'
			+ id + '">More infomation</div>\n</div>\n</div>'
		);

		$("#modals-wrapper").append(
			'<div class="artist-modal" id="' 
			+ id + '_modal">\n<div class="first-column">\n<div class="modal-lab">'
			+ lab + '</div>\n<img src="images/UI/close.png" class="back-button">\n</div>\n<div class="second-column">\n<div class="modal-nameJP">'
			+ nameJP +'</div>\n<div class="modal-nameEN">'
			+ nameEN +'</div>\n</div>');

		for(var i=0; i<worksNum; i++){
			$("#" + id + "_modal").append('<div class="work">\n<img src="artistInfomation/M1/'
				+ id + '/' +filename[i] + '" class="work-photo">\n<p class="work-title">'
				+ fileTitle[i] + '</p>\n</div>\n');
		}

		$("#" + id + "_modal").append('<div class="footer-column">\n<p class="alma-mater">'
			+ almaMater + '</p>\n<div class="link">\n<a href="'
			+ link + '">' + link +'</a>\n</div>\n</div>');

 	}

	$(".artist-modal").hide();

});