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
 				["01_osato",		"",		"大里　淳",		"Jun Osato",		"東京藝術大学 美術学部 デザイン科卒",			""],
 				["02_otaki",		"",		"大滝 彩加",		"Ayaka Otaki",		"多摩美術大学 美術学部 絵画学科 油画専攻卒",		"http://otakiayaka.tumblr.com"],
 				["03_oka",			"",		"岡 千穂",		"Chiho Oka",		"東京藝術大学 音楽学部 音楽環境創造科卒",			""],
 				["04_kang",			"",		"姜 賢植",		"Hyeonsik Kang",	"東京藝術大学 音楽学部 音楽環境創造科卒",			""],
 				["05_koga",			"",		"古閑 慶治",		"Keiji Koga",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],
 				["06_kobayashi",	"",		"小林 舞衣",		"Mai Kobayashi",	"東京藝術大学 美術学部 先端芸術表現科卒",			""],
 				["07_shiina",		"",		"椎名 悠香",		"Yuka Shiina",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],	
 				["08_shishikura",	"",		"宍倉 志信",		"Shinobu Shishikura","東京藝術大学 美術学部 油画専攻卒",				""],
 				["09_shimura",		"",		"志村 茉那美",	"Manami Shimura",	"京都造形芸術大学 美術工芸学科 現代美術・写真コース卒",	""],
 				["10_seko",			"",		"瀬古 瑞歩",		"Mizuho Seko",		"日本大学 芸術学部 デザイン学科卒",				""],
 				["11_hirai",		"",		"平井 亨季",		"Koki Hirai",		"東京藝術大学 美術学部 先端芸術表現科卒",			""],
 				["12_hukuhara",		"",		"福原 翼",		"Tsubasa Hukuhara",	"東京藝術大学 美術学部 絵画科 油画専攻卒",		"https://fukuharaot.tumblr.com/"]
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
 				[3,	"prototyping (2017)", "content aware fill (2019)", "mixed (2019)"],
 				[3,	"車窓について (2017)", "坂の多い街 (2018)", "動き・カメラ(2019)"],
 				[3,	"OSX Jingle at Soup (2019)", "Jenga Piece at Leeds International Festival (2019)",	"03_米田が生前愛用したカセット・プレーヤー（米田恵子（1912-1992）の作品と生涯について 内） (2018)"],
 				[3,	"３つの異なるモノからなる構成", "声", "無題"],
 				[3,	"彼女は父を知らない 彼は西成にいる (2019)", "見守られ後遺症 (2016)", "故郷の因果交流電燈 (2017)"],
 				[3,	"ピースオブケイク (2017)", "ピースオブケイク (2017)", "ピースオブケイク (2017)"],
 				[3,	"20歳の旅立ち (2017)", "アイ (2019)",	"カメラカメラ (2016)"],
 				[3,	"食人葬式時間遡行 (2018)",	 "崖下風葬式時間遡行 (2018)", "アポトーシスの祝福 (2019)"],
 				[3,	"Vietnam is here. (2019)",	"-emerge- (2017)",	"昇華-津軽の海より- (2017)"],
 				[3,	"monologues (2018)", "WHOSE IS (2018)",	"ＮＯＩＳＥ (2017)"],
 				[3,	"島に埋められた本の骨 (2019)",	"この星を語る猫の言葉 (2018)",	"猫の欠伸でしかない (2017)"],
 				[3,	"切り返しの部屋 (2018)",	"扇風機 (2019)",	"黄色いママチャリ (2017)"]
 	];

 	var history_M2 =
    [
    //Asao
    "2018<br>"
    +"「声を殺して叫べ」上映<br>"
    +"九州産業大学卒業制作秀作展（福岡アジア美術館）<br><br>"
    +"2017<br>"
    +"「確かな気配」上映<br>"
    +"イメージフォーラムフェスティバル2017（横浜を含む国内５都市）<br>"
    +"ミニキノ国際短編映画祭（インドネシア）<br>"
    +"Now Japan Festival（リトアニア） <br>"

    //usami
    ,"2019<br>"
    +"TOKYO FRONTLINE PHOTO AWARD 2018 入選<br><br>"
    +"2018<br>"
    +"TOKYO FRONTLINE PHOTO AWARD 2017 入選<br><br>"
    +"2017<br>"
    +"THE TOKYO ART BOOK FAIR / 寺田倉庫<br>"
    +"Live Performance / ART MEDIA CENTER｜東京藝術大学芸術情報センター<br>"

    //endo
    ,"2018<br>"
    +"多摩美術大学 統合デザイン学科 卒業制作展 2018<br><br>"
    +"2017<br>"
    +"企画展「妙展」（多摩美術大学芸術祭）<br>"
    +"統合デザイン学科 第１期生 成果展 ”INTEGRATING”　BankArt NYK<br>"

    //oikawa
    ,"2019<br>"
    +"第13回「奏楽堂企画学内公募」最優秀企画『音のいろ、音のかたち　〜現代音楽はスペクタクルの夢をみるか〜』 <br>"
    +"岸井戯曲を上演するinNagoya#1 「本当に大事なことはあなたの目の前では起こらない」<br>"

    //okada
    ,"2018<br>"
    +"東京藝術大学卒業制作展　デザイン賞<br><br>"
    +"2017<br>"
    +"SXSW2017　プロダクトデザイン<br>"
    +"コルベール　2074年夢の世界アワード　ファイナリストコンペティション<br>"

    //kanai
    ,"2019<br>"
    +"第24回学生CGコンテスト アート部門 ナレッジ賞<br>"
    +"ASK?映像祭2019 入選<br>"
    +"MEDIA PRACTICE 18-19｜東京藝術大学元町中華街校舎<br>"
    +"ギンガクノフユ2019 参加 | 岩手県西和賀町<br><br>"
    +"2018<br>"
    +"第23回学生CGコンテスト アート部門 ナレッジ賞<br>"
    +"OPEN STUDIO 2018｜東京藝術大学元町中華街校舎<br><br>"
    +"2017<br>"
    +"北九州デジタルクリエータコンテスト2017 パフォーマンス部門入選<br>"
    +"第22回学生CGコンテスト アート部門 ナレッジ賞<br>"
	+"「ZAF 逗子メディアアートフェスティバル」| 逗子会館<br><br>"
	+"2016<br>"
	+"「筑波大学パフォーマンス2016 ねぞうのへん」| 筑波大学<br>"
	+"「INNOVATION WORLD FESTA 2016」| 筑波大学<br>"
	+"「みなとメディアミュージアム2016」| ひたちなか市那珂湊<br><br>"
	+"2015<br>"
	+"「Art Hack Day 2015」3331α Arts千代田 斎藤精一賞<br>"


    //kobayashit
    ,"2019<br>"
    +"第24回学生CGコンテスト 受賞作品展｜日本科学未来館<br>"
    +"MEDIA PRACTICE 18-19｜東京藝術大学元町中華街校舎<br><br>"
    +"2018<br>"
    +"OPEN STUDIO 2018｜東京藝術大学元町中華街校舎<br>"
    +"個展 チューニング｜No.12 Gallery<br>"
    +"MEC Award 2018 入選作品展｜SKIPシティ 彩の国ビジュアルプラザ 映像ミュージアム<br>"
    +"第23回学生CGコンテスト 受賞作品展｜日本科学未来館<br>"
    +"2018年度 慶應義塾大学SFC 学生有志 合同展示 X-port｜YCC ヨコハマ創造都市センター<br><br>"
    +"2017<br>"
    +"イメージフォーラム ヤング・パースペクティヴ 2017｜イメージフォーラム<br><br>"
    +"2016<br>"
    +"インターネットヤミ市 東京 2016 〜買える力〜｜3331 Arts Chiyoda<br>"
    +"2016年度 武蔵野美術大学芸術祭｜武蔵野美術大学 <br>"

    //shikichi
    ,""
    //shimizu
    ,"2019<br>"
    +"MEDIA PRACTICE 18-19<br><br>"
    +"2018"
    +"OPEN STUDIO 2018<br>"
    +"Film and New Media<br>"
    +"首都大学東京 システムデザイン学部・研究科 インダストリアルアートコース 学域卒業・修了制作展2018<br><br>"
    +"2016<br>"
    +"東京プロジェクションマッピングアワードvol.0 最優秀賞<br>"

    //shin
    ,""

    //maeda
    ,"2017<br>"
    +"「映像は死んだのか」出展　@武蔵野美術大学課外センター<br>"

    //yoshida
    ,"2018<br>"
    +"「MEC Award 2018 入選作品展」SKIPシティ 彩の国ビジュアルプラザ 映像ミュージアム<br><br>"
    +"2016<br>"
    +"ISCA2015 佳作「沈黙。」/ 大阪府 ナレッジキャピタル<br>"

    ];

    var comment_M2 = [
    	//Asao
    	"助けてください"

    	//Usami
    	,"ジェンダーのリサーチをもとに、被写体と鑑賞者の&quot視線&quotの関係を揺さぶるポートレイトや映像を制作する。"
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
 		var history = history_M2[itr];

 		$(".m2").append(
 			'<div class="artist-wrapper" id="'
 			+ id + '">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M2/'
			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<div class="name">\n<p class="nameJP">'
			+ nameJP + '</p>\n<p class="nameEN">'
			+ nameEN +'</p>\n</div>\n<p class="lab">'
			+ lab + '研究室</p>\n<div class="modalButton">More infomation</div>\n</div>\n</div>'
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

		$("#" + id + "_modal").append(
			'<div class="footer-column">\n'
				+'<p class="alma-mater">'+ almaMater + '</p>\n'
				+'<div class="link">\n'
					+'<a href="'+ link + '">' + link +'</a>\n'
				+'</div>\n'
			+'</div>\n'
			
			+'<div class="history"><p>' + history + '</p></div>'

			+'<div class="back-button close-under">Close</div>'

			+'</div>'
			);
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
 			'<div class="artist-wrapper" id="'
 			+ id + '">\n<div class="sumbnail" >\n<img src="artistInfomation/sumbnail/M1/'
			+ id + '/01.jpg">\n</div>\n<div class="infoText">\n<div class="name">\n<p class="nameJP">'
			+ nameJP + '</p>\n<p class="nameEN">'
			+ nameEN +'</p>\n</div>\n<p class="lab">'
			+ lab + '</p>\n<div class="modalButton">More infomation</div>\n</div>\n</div>'
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
			+ link + '">' + link +'</a>\n</div>\n</div>\n</div>');

 	}

	$(".artist-modal").hide();

});