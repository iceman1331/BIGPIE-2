/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * --------------------------------------
*/

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

var title = chart.titles.create();
title.text = "[bold font-size: 20] Diabetes | A global issue[/]\n";
title.textAlign = "middle";

var mapData = [

{ "id":"AF","url":" https://en.wikipedia.org/wiki/Hazaras#/media/File:Group_of_Hazara_Chiefs_(616x510).jpg", "pop":"32,225,560",  "dias":"2,900,000",  "Pc":" 9%", "name":"Afghanistan", "value":29000000, "color": chart.colors.getIndex(0) },
{ "id":"AR", "url":"https://en.wikipedia.org/wiki/Afro-Argentines#/media/File:Afroargentinos.jpg", "pop":"40,117,096",  "dias":"149,493",  "Pc":" 0.0037%", "name":"Argentina", "value":149493,  "color":chart.colors.getIndex(3) },
{ "id":"AU", "url":"https://www.theguardian.com/australia-news/2019/mar/04/the-killing-times-the-massacres-of-aboriginal-people-australia-must-confront", "pop":"25,636,500",  "dias":"798,400",  "Pc":" 3%",  "name":"Australia", "value":798400, "color":"#8aabb0" },
{ "id":"AT", "url":"https://www.youtube.com/watch?v=AFlMTj6eiTs", "pop":"8,356,707",  "dias":"15,000",  "Pc":" 0.00179", "name":"Austria", "value":15000, "color":chart.colors.getIndex(1) },
{ "id":"BD", "url":"https://www.thedailystar.net/star-weekend/perspective/being-black-dhaka-1574449", "pop":"164,700,000",  "dias":"2,000",  "Pc":" 0.00001%", "name":"Bangladesh", "value":2000, "color":chart.colors.getIndex(0) },
{ "id":"BB", "url":"https://www.visitbarbados.org/crop-over-festival", "pop":"281,968",  "dias":"270,853",  "Pc":" 96%", "name":"Barbados", "value":270853, "color":chart.colors.getIndex(1) },
{ "id":"BY", "url":"https://www.youtube.com/watch?v=pmsDbO5LNI4", "pop":"9,640,000",  "dias":"4,500",  "Pc":" 0.05%", "name":"Belarus", "value":4500, "color":chart.colors.getIndex(1) },
{ "id":"BE", "url":"https://www.youtube.com/watch?v=vPJ-QiVqliE", "pop":"10,666,866",  "dias":"300,000",  "Pc":" 2.81%", "name":"Belgium", "value":300000, "color":chart.colors.getIndex(1) },
{ "id":"BZ", "url":"https://www.youtube.com/watch?v=NubllRazJ_o", "pop":"301,270",  "dias":"93,394",  "Pc":" 31.0%", "name":"Belize", "value":93394, "color":chart.colors.getIndex(2) },
{ "id":"BO", "url":"https://www.youtube.com/watch?v=WnDLzdovEJk", "pop":"10,907,778",  "dias":"54,539",  "Pc":" 0.50%", "name":"Bolivia", "value":54539, "color":chart.colors.getIndex(3) },
{ "id":"BR", "url":"https://www.youtube.com/watch?v=bg3cxXWGQn0", "pop":"190,732,694",  "dias":"55,900,000",  "Pc":" 29.31%", "name":"Brazil", "value":55900000, "color":chart.colors.getIndex(3) },
 { "id":"CA", "url":"https://www.bbc.co.uk/news/resources/idt-sh/black_in_canada", "pop":"33,098,932",  "dias":"1,198,540",  "Pc":" 4%", "name":"Canada", "value":1198540, "color":chart.colors.getIndex(4) },
{ "id":"CV", "url":"https://www.youtube.com/watch?v=UUbN5lg8Gbg", "pop":"543,767",  "dias":"304,510",  "Pc":" 4%", "name":"Cape Verde", "value":304510, "color":chart.colors.getIndex(2) },
{ "id":"CL", "url":"https://chiletoday.cl/site/afro-chileans-finally-recognized-as-culture-in-chile/", "pop":"17,094,270",  "dias":"170,943",  "Pc":" 1%", "name":"Chile", "value":170943, "color":chart.colors.getIndex(3) },
{ "id":"CN", "url":"https://edition.cnn.com/2020/04/13/asia/china-guangzhou-african-blacklash-hnk-intl/index.html", "pop":"1,321,851,888",  "dias":"300,000",  "Pc":" 0.001%", "name":"China", "value":300000, "color": chart.colors.getIndex(0) },
{ "id":"CO", "url":"https://www.youtube.com/watch?v=mWBnGl0lo9s", "pop":"45,925,397",  "dias":"4,944,400",  "Pc":" 10.8%", "name":"Colombia", "value":4944400, "color":chart.colors.getIndex(3) },
{ "id":"KM", "url":"https://www.youtube.com/watch?v=QSjgoyQpSrE", "pop":"805,688",  "dias":"808,153",  "Pc":" 95%", "name":"Comoros", "value":808153, "color":chart.colors.getIndex(2) },
{ "id":"CR", "url":"https://kwekudee-tripdownmemorylane.blogspot.com/2012/12/african-descendants-in-costa-rica-afro.html", "pop":"4,195,914",  "dias":"125,877",  "Pc":" 3%", "name":"Costa Rica", "value":125877, "color":chart.colors.getIndex(4) },
{ "id":"CU", "url":"https://www.youtube.com/watch?v=m2bjYRdLoKw", "pop":"11,116,396",  "dias":"1,126,894",  "Pc":" 10.14%", "name":"Cuba", "value":1126894, "color":chart.colors.getIndex(4) },
{ "id":"CY", "url":"https://foreignpolicy.com/2019/06/23/at-europes-edge-unwanted-migrants-are-stranded-in-an-unrecognized-country-nigeria-african-migrants-trnc-turkey-northern-cyprus-ciu-chigozie-obioma/",  "pop":"1,170,000",  "dias":"20,000",  "Pc":" 0.017%", "name":"Cyprus", "value":20000, "color":chart.colors.getIndex(1) },
{ "id":"CZ", "url":"https://english.radio.cz/black-experience-czech-republic-8555649", "pop":"10,649,800",  "dias":"53,249",  "Pc":" 0.005%", "name":"Czech Rep.", "value":53249, "color":chart.colors.getIndex(1) },
{ "id":"DK", "url":"https://www.youtube.com/watch?v=aKoJvq6zeHI", "pop":"5,603,000",  "dias":"25,000",  "Pc":" 0.00446%", "name":"Denmark", "value":25000, "color":chart.colors.getIndex(1) },
{ "id":"DM", "url":"https://kwekudee-tripdownmemorylane.blogspot.com/2013/11/dominica-island-blacks-in-unspoiled.html", "pop":"71,293",  "dias":"61,882",  "Pc":" 87%", "name":"Dominica", "value":61882, "color":chart.colors.getIndex(2) },
{ "id":"DO", "url":"https://images.app.goo.gl/YtQoGbGMXZS7TBb48", "pop":"10,090,000",  "dias":"1,138,471",  "Pc":" 11%", "name":"Dominican Rep.", "value":1138471, "color":chart.colors.getIndex(4) },
{ "id":"EC", "url":"https://images.app.goo.gl/zP8YkwhHzucUewfXA", "pop":"13,927,650",  "dias":"1,180,643",  "Pc":" 4.88%", "name":"Ecuador", "value":680000, "color":chart.colors.getIndex(3) },
{ "id":"SV", "url":"https://www.youtube.com/watch?v=q9l97DJ1b1M", "pop":"7,066,403",  "dias":"3,000",  "Pc":" 0.04%", "name":"El Salvador", "value":3000, "color":chart.colors.getIndex(4) },
{ "id":"FJ", "url":"https://www.youtube.com/watch?v=qS8spKx6TgI", "pop":"903,207",  "dias":"505,795",  "Pc":" 56%", "name":"Fiji", "value":505795, "color":"#8aabb0" },
{ "id":"FI", "url":"https://www.bbc.com/news/world-africa-49543502", "pop":"5,340,783",  "dias":"50,000",  "Pc":" 1%", "name":"Finland", "value":50000, "color":chart.colors.getIndex(1) },
{ "id":"FR", "url":"https://www.youtube.com/watch?v=x4JchfVa_eQ", "pop":"62,752,136", "dias":"3,300,00",  "Pc":" 5%", "name":"France", "value":3300000, "color":chart.colors.getIndex(1) },
{ "id":"GF", "url":"https://www.bbc.co.uk/news/world-europe-39557670", "pop":"199,509",  "dias":"131,676",  "Pc":" 66%", "name":"French Guiana", "value":131676, "color":chart.colors.getIndex(2) },
{ "id":"DE", "url":"https://www.dw.com/en/whats-life-really-like-for-black-people-in-germany/a-53159443", "pop":"82,000,000",  "dias":"817,150",  "Pc":" 1%", "name":"Germany", "value":817150, "color":chart.colors.getIndex(1) },
{ "id":"GR", "url":"https://www.youtube.com/watch?v=2WCOTDpIj0c", "pop":"10,768,477",  "dias":"150,000",  "Pc":" 1.4%", "name":"Greece", "value":150000, "color":chart.colors.getIndex(1) },
{ "id":"GT", "url":"https://www.youtube.com/watch?v=CD1ywfmy_ew", "pop":"13,002,206",  "dias":"100,000",  "Pc":" 0.0076%", "name":"Guatemala", "value":100000, "color":chart.colors.getIndex(4) },
{ "id":"GY", "url":"https://en.wikipedia.org/wiki/Valerie_Amos,_Baroness_Amos", "pop":"770,794",  "dias":"225,860",  "Pc":" 29.3%", "name":"Guyana", "value":225860, "color":chart.colors.getIndex(3) },
{ "id":"HT", "url":"https://en.wikipedia.org/wiki/Toussaint_Louverture", "pop":"10,646,714",  "dias":"10,114,378",  "Pc":" 95%", "name":"Haiti", "value":10114378, "color":chart.colors.getIndex(4) },
{ "id":"HN", "url":"https://kwekudee-tripdownmemorylane.blogspot.com/2012/10/african-descendants-in-honduras-afro.html", "pop":"7,639,327",  "dias":"350,000",  "Pc":" 4.6%", "name":"Honduras", "value":350000, "color":chart.colors.getIndex(4) },
{ "id":"HK", "url":"https://www.quora.com/What-is-life-like-for-black-people-in-Hong-Kong", "pop":"7,200,000",  "dias":"20,000",  "Pc":" 0.0027%",  "name":"Hong Kong, China", "value":20000, "color":chart.colors.getIndex(0) },
{ "id":"HU", "url":"http://hungarianfreepress.com/2017/12/24/arabs-afghans-blacks-and-others/", "pop":"10,198,325",  "dias":"6,500",  "Pc":" 0.07%", "name":"Hungary", "value":6500,  "color":chart.colors.getIndex(1) },
{ "id":"IS", "url":"https://www.youtube.com/watch?v=fhAviCZYu0A", "pop":"364,260",  "dias":"1,500",  "Pc":" 0.0041%", "name":"Iceland", "value":1500, "color":chart.colors.getIndex(1) },
{ "id":"IN", "url":"https://www.youtube.com/watch?v=djuAvmn37ug", "pop":"1,132,446,000",  "dias":"40,000",  "Pc":" 0.00353%", "name":"India", "value":40000, "color":chart.colors.getIndex(0) },
{ "id":"ID", "url":"https://foreignpolicy.com/2020/06/16/black-lives-matter-papua-indonesia/", "pop":"264,000,000",  "dias":"3,460,000",  "Pc":" 1.31%", "name":"Indonesia", "value":3460000, "color":chart.colors.getIndex(0) },
{ "id":"IQ", "url":"https://www.youtube.com/watch?v=H8-JiZlfTyA", "pop":"38,433,600",  "dias":"1,500,000",  "Pc":" 3.9%", "name":"Iraq", "value":1500000, "color":chart.colors.getIndex(0) },
{ "id":"IE", "url":"https://en.wikipedia.org/wiki/Black_people_in_Ireland", "pop":"4,525,281",  "dias":"58,697",  "Pc":" 1.3%", "name":"Ireland", "value":58697, "color":chart.colors.getIndex(1) },
{ "id":"IL", "url":"https://www.aljazeera.com/indepth/opinion/black-lives-matter-israel-180329061234932.html", "pop":"7,411,000",  "dias":"200,000",  "Pc":" 2.7%", "name":"Israel", "value":200000, "color":chart.colors.getIndex(0) },
{ "id":"IT", "url":"https://www.theguardian.com/commentisfree/2018/nov/29/italys-first-black-minister-racist-abuse-discrimination", "pop":"60,795,612",  "dias":"1,096,089",  "Pc":" 1.8%", "name":"Italy", "value":1096089, "color":chart.colors.getIndex(1) },
{ "id":"JM", "url":"https://www.biography.com/activist/marcus-garvey", "pop":"2,471,946",  "dias":"2,276,662", "Pc":" 92.10%", "name":"Jamaica", "value":2276662, "color":chart.colors.getIndex(4) },
{ "id":"JP", "url":"https://www.blackexjp.com", "pop":"127,756,815",  "dias":"10,000",  "Pc":" 0.01%", "name":"Japan", "value":10000, "color": chart.colors.getIndex(0) },
{ "id":"KW", "url":"https://www.africaresource.com/rasta/sesostris-the-great-the-egyptian-hercules/black-arab-kuwaitis-and-white-arabized-kuwaitis/", "pop":"4,631,628",  "dias":"1,389,488",  "Pc":" 30%", "name":"Kuwait", "value":1389488, "color": chart.colors.getIndex(0) },
 { "id":"LB", "url":"https://www.theguardian.com/world/2018/jul/17/activists-angry-after-beirut-deports-assaulted-kenyan", "pop":"6,859,408",  "dias":"100,000",  "Pc":" 0.0145%", "name":"Lebanon", "value":100000, "color": chart.colors.getIndex(0) },
 { "id":"LI", "url":"https://www.pinterest.co.uk/pin/303993043576231120/", "pop":"38,557",  "dias":"2,000",  "Pc":" 0.0518%", "name":"Liechtenstein", "value":2000, "color":chart.colors.getIndex(2) },
  { "id":"LT", "url":"https://humanrights.blogs.sas.ac.uk/2017/03/15/un-decade-for-people-of-african-descent-a-case-of-hidden-afrophobia-in-lithuania/", "pop":"2,794,329",  "dias":"238",  "Pc":" 0.0000851%", "name":"Lithuania", "value":238, "color":chart.colors.getIndex(1) },
{ "id":"MG", "url":"https://www.peacecorps.gov/madagascar/stories/black-madagascar/", "pop":"26,262,313",  "dias":"1,000",  "Pc":" 0.000038%", "name":"Madagascar", "value":1000, "color":chart.colors.getIndex(2) },
{ "id":"MY", "url":"https://originalpeople.org/the-semang-people-of-malaysia/", "pop":"28,334,135",  "dias":"31,904",  "Pc":" 0.0011%", "name":"Malaysia", "value":31904, "color": chart.colors.getIndex(0) },
{ "id":"MV", "url":"https://www.youtube.com/watch?v=JvGLOma4jeQ", "pop":"344,023",  "dias":"300",  "Pc":" 0.00087%", "name":"Maldives", "value":300, "color": chart.colors.getIndex(0) },
{ "id":"MU", "url":"https://en.wikipedia.org/wiki/Mauritian_of_African_origin", "pop":"1,267,185",  "dias":"336,000",  "Pc":" 26.5%", "name":"Mauritius", "value":336000, "color":chart.colors.getIndex(2) },
{ "id":"MX", "url":"https://theculturetrip.com/north-america/mexico/articles/the-untold-history-of-afro-mexicans-mexicos-forgotten-ethnic-group/", "pop":"108,700,891",  "dias":"1,984,210",  "Pc":" 1.83%", "name":"Mexico", "value":1984210, "color":chart.colors.getIndex(4) },
{ "id":"MD", "url":"https://medium.com/this-must-be-the-place/black-art-and-racism-in-a-white-country-9c6e55341520", "pop":"4,036,628",  "dias":"400",  "Pc":" 0.000099%", "name":"Moldova", "value":400, "color":chart.colors.getIndex(1) },
{ "id":"MN", "url":"https://www.theblackexpat.com/black-beautiful-mongolian/", "pop":"3,278,290",  "dias":"3",  "Pc":" 0.00000091%", "name":"Mongolia", "value":3, "color": chart.colors.getIndex(0) },
{ "id":"ME", "url":"https://www.criticatac.ro/lefteast/only-memories-and-emptiness-remain-the-history-of-ulcinjs-afro-albanian-community-in-montenegro/", "pop":"220,000",  "dias":"1",  "Pc":" 0.0000045%", "name":"Montenegro", "value":1, "color":chart.colors.getIndex(1) },
{ "id":"NL", "url":"http://www.blackheritagetours.com/ ", "pop":"16,491,461",  "dias":"700,000",  "Pc":" 4.2%", "name":"Netherlands", "value":700000, "color":chart.colors.getIndex(1) },
{ "id":"NZ", "url":"https://www.tepapa.govt.nz/visit/guided-tours", "pop":"4,794,000",  "dias":"700,000",  "Pc":" 14.6%", "name":"New Zealand", "value":700000, "color":"#8aabb0" },
{ "id":"NI", "url":"https://kwekudee-tripdownmemorylane.blogspot.com/2012/11/african-descendants-in-nicaragua-afro.html", "pop":"5,785,846",  "dias":"520,726",  "Pc":" 8.9%", "name":"Nicaragua", "value":520726, "color":chart.colors.getIndex(4) },
{ "id":"NO", "url":"https://www.youtube.com/watch?v=YY1RmRS-xm0", "pop":"4,858,199",  "dias":"67,000",  "Pc":" 1.38%", "name":"Norway", "value":67000, "color":chart.colors.getIndex(1) },
{ "id":"OM", "url":"https://www.google.com/search?q=afro+omanis&tbm=isch&ved=2ahUKEwj99J2r7qHoAhVO0YUKHe2lA14Q2-cCegQIABAA&oq=afro+omanis&gs_l=img.3..0i24.11064.12730..13517...0.0..0.70.695.11......0....1..gws-wiz-img.xy41FN_w12c&ei=yfFwXr3sOM6ilwTty47wBQ&bih=688&biw=1280&client=firefox-b-d&hl=en-US", "pop":"4,829,473",  "dias":"1,000",  "Pc":" 0.00021%", "name":"Oman", "value":1000, "color":chart.colors.getIndex(0) },  
{ "id":"PK", "url":"https://www.youtube.com/watch?v=qQKEKrKPKnA", "pop":"172,900,000",  "dias":"300,000",  "Pc":" 0.0017%","name":"Pakistan", "value":300000, "color": chart.colors.getIndex(0) },
{ "id":"PS", "url":"https://www.youtube.com/watch?v=aOnL80yhiko", "pop":"13,000,000",  "dias":"450",  "Pc":" 0.000035%", "name":"Palestine, West Bank and Gaza", "value":450, "color":  chart.colors.getIndex(0) }, 
{ "id":"PA", "url":"https://www.youtube.com/watch?v=Fo2sa2TYAWs", "pop":"3,292,693",  "dias":"460,977",  "Pc":" 14%", "name":"Panama", "value":460977, "color":chart.colors.getIndex(4) },
{ "id":"PG", "url":"https://www.youtube.com/watch?v=tXudCQTsF3c", "pop":"8,606,323",  "dias":"7,306,323",  "Pc":" 85%", "name":"Papua New Guinea", "value":7306323, "color":"#8aabb0" },
{ "id":"PY", "url":"https://www.youtube.com/watch?v=LMBBgRJ8dtk", "pop":"6,349,000",  "dias":"222,215",  "Pc":" 4%", "name":"Paraguay", "value":222215, "color":chart.colors.getIndex(3) },
{ "id":"PE", "url":"https://www.youtube.com/watch?v=F8dhBoqDNUA", "pop":"29,496,000",  "dias":"828,841",  "Pc":" 2.81%", "name":"Peru", "value":828841, "color":chart.colors.getIndex(3) },
{ "id":"PH", "url":"https://www.youtube.com/watch?v=dI3P87vU4KA", "pop":"101,981,000",  "dias":"30,000",  "Pc":" 0.000297%", "name":"Philippines", "value":30000, "color": chart.colors.getIndex(0) },
{ "id":"PL", "url":"https://minorityrights.org/poland-sub-saharan-africans-and-the-struggle-for-acceptance/", "pop":"37,980,000",  "dias":"5,700",  "Pc":" 0.02%", "name":"Poland", "value":5700, "color":chart.colors.getIndex(1) },
{ "id":"PT", "url":"https://www.quora.com/Whats-it-like-to-be-black-in-Portugal", "pop":"10,605,870",  "dias":"212,117",  "Pc":" 2%", "name":"Portugal", "value":212117, "color":chart.colors.getIndex(1) },
{ "id":"PR", "url":"https://www.youtube.com/watch?v=5eWfnBQiidU", "pop":"3,725,789",  "dias":"2,421,763",  "Pc":" 65%", "name":"Puerto Rico", "value":2421763, "color":chart.colors.getIndex(4) },
{ "id":"QA", "url":"https://www.youtube.com/watch?v=acguF168gVA", "pop":"2,641,669",  "dias":"258,000",  "Pc":" 9.8%", "name":"Qatar", "value":258000, "color": chart.colors.getIndex(0) },
{ "id":"RU", "url":"https://www.bbc.co.uk/news/av/world-europe-44253936/world-cup-2018-being-black-in-russia", "pop":"141,594,000", "dias":"120,000", "Pc":" 0.00084%", "name":"Russia", "value":120000, "color":chart.colors.getIndex(1) },
{ "id":"LC", "url":"https://www.youtube.com/watch?v=J8l3pigolw4", "pop":"192,185",  "dias":"182,575",  "Pc":" 95%", "name":"Saint Lucia", "value":182575, "color": chart.colors.getIndex(0) },
{ "id":"VC", "url":"https://www.sciencemag.org/news/2019/11/caribbean-excavation-offers-intimate-look-lives-enslaved-africans", "pop":"110,211",  "dias":"93,679",  "Pc":" 85%", "name":"Saint Vincent and the Grenedines", "value":93679, "color": chart.colors.getIndex(0) },
{ "id":"ST","url":"https://www.youtube.com/watch?v=adnuK97LcTY", "pop":"211,028",  "dias":"147,720",  "Pc":" 70%", "name":"Sao Tome and Principe", "value":147720, "color":chart.colors.getIndex(2) },
{ "id":"SA", "url":"https://www.arabnews.com/node/1256666/saudi-arabia", "pop":"33,413,660",  "dias":"3,341,366", "Pc":" 10%", "name":"Saudi Arabia", "value":3341366, "color": chart.colors.getIndex(0) },
{ "id":"SC", "url":"https://www.youtube.com/watch?v=rAjM_o-WYMw", "pop":"95,843",  "dias":"89,133",  "Pc":" 93%", "name":"Seychelles", "value":89133, "color": chart.colors.getIndex(0) },
{ "id":"SG", "url":"https://www.youtube.com/watch?v=nP7S6tbHHKE", "pop":"5,638,700",  "dias":"500",  "Pc":" 0.000089%", "name":"Singapore", "value":500, "color": chart.colors.getIndex(0) },
{ "id":"SK", "url":"https://spectator.sme.sk/c/20008445/african-expats-long-for-safe-streets.html", "pop":"5,450,421",  "dias":"500",  "Pc":" 0.000091736%", "name":"Slovak Republic", "value":500, "color":chart.colors.getIndex(1) },
{ "id":"SI", "url":"http://edition.cnn.com/2010/WORLD/europe/10/26/slovenia.black.mayor/index.html", "pop":"2,094,060",  "dias":"500",  "Pc":" 0.000095%", "name":"Slovenia", "value":200, "color":chart.colors.getIndex(1) },
{ "id":"SB", "url":"https://www.heritage-expeditions.com/destinations/south-pacific-travel/solomon-islands-vanuatu-cruise/", "pop":"681,999",  "dias":"652,857",  "Pc":" 95.7%", "name":"Solomon Islands", "value":652857, "color":"#8aabb0" },
{ "id":"KR", "url":"https://www.afterschoolafrica.com/tag/korean-scholarship/", "pop":"51,709,098",  "dias":"106,592",  "Pc":" 0.0021%", "name":"South Korea", "value":106592, "color": chart.colors.getIndex(0) },
{ "id":"ES", "url":"https://en.wikipedia.org/wiki/Juan_de_Pareja", "pop":"46,064,604",  "dias":"1,045,120",  "Pc":" 2%", "name":"Spain", "value":1045120, "color":chart.colors.getIndex(1) },
{ "id":"LK", "url":"https://www.youtube.com/watch?v=BXvLYV9MZLI", "pop":"21,670,000",  "dias":"2,270,924",  "Pc":" 10.5%", "name":"Sri Lanka", "value":2270924, "color": chart.colors.getIndex(0) },
{ "id":"SR", "url":"https://www.youtube.com/watch?v=ysIlBIyTels", "pop":"475,996",  "dias":"200,406",  "Pc":" 42%", "name":"Suriname", "value":200406, "color":chart.colors.getIndex(3) },
{ "id":"SE", "url":"https://en.wikipedia.org/wiki/Gustav_Badin", "pop":"9,263,872",  "dias":"115,000",  "Pc":" 1.24%", "name":"Sweden", "value":115000, "color":chart.colors.getIndex(1) },
{ "id":"CH", "url":"https://en.wikipedia.org/wiki/African_immigrants_to_Switzerland", "pop":"7,790,000",  "dias":"57,000",  "Pc":" 0.0073%", "name":"Switzerland", "value":57000, "color":chart.colors.getIndex(1) },
{ "id":"SY", "url":"https://en.wikipedia.org/wiki/Black_people_of_Yarmouk_Basin", "pop":"17,070,135",  "dias":"1,027,000",  "Pc":" 6%", "name":"Syria", "value":1027000, "color":chart.colors.getIndex(0) }, 
{ "id":"TW", "url":"https://www.youtube.com/watch?v=cKyJBnJlhWE", "pop":"23,780,452",  "dias":"4,000",  "Pc":" 0.00017%", "name":"Taiwan", "value":4000, "color": chart.colors.getIndex(0) },
{ "id":"TH", "url":"https://www.youtube.com/watch?v=U9RzzptzPNA", "pop":"69,428,453",  "dias":"4,000",  "Pc":" 0.00006%", "name":"Thailand", "value":4000, "color": chart.colors.getIndex(0) }, 
{ "id":"TT", "url":"https://en.wikipedia.org/wiki/Afro-Trinidadians_and_Tobagonians", "pop":"1,215,527",  "dias":"452,536",  "Pc":" 34.2%", "name":"Trinidad and Tobago", "value":452536, "color":chart.colors.getIndex(4) },
{ "id":"TR", "url":"https://www.youtube.com/watch?v=j3JqcDShaNo", "pop":"84,339,067",  "dias":"20,000",  "Pc":" 0.00024%", "name":"Turkey", "value":20000, "color":chart.colors.getIndex(1) },
{ "id":"UA", "url":"https://www.youtube.com/watch?v=WgMgLpB72Iw#action=share", "pop":"45,982,000",  "dias":"14,500",  "Pc":" 0.00032%", "name":"Ukraine", "value":14500, "color":chart.colors.getIndex(1) },
{ "id":"GB", "url":"https://blackculturalarchives.org/", "pop":"66,480,000", "dias":"2,457,579",  "Pc":" 3.7%", "name":"United Kingdom", "value":2457579, "color":chart.colors.getIndex(1) },
{ "id":"US", "url":"https://www.biography.com/media-figure/oprah-winfrey", "pop":"329,964,329",  "dias":"42,020,743",  "Pc":" 12.7%", "name":"United States", "value":42020743, "color":chart.colors.getIndex(4) },
{ "id":"UY", "url":"https://kwekudee-tripdownmemorylane.blogspot.com/2013/05/african-descendants-in-uruguay-afro.html", "pop":"3,494,382",  "dias":"302,460",  "Pc":" 8.7%", "name":"Uruguay", "value":302460, "color":chart.colors.getIndex(3) },
{ "id":"VE", "url":"https://www.youtube.com/watch?v=UbjUc_gHuV0", "pop":"27,227,930",  "dias":"3,156,817",  "Pc":" 11.6%", "name":"Venezuela", "value":3156817, "color":chart.colors.getIndex(3) },
{ "id":"YE", "url":"https://www.alaraby.co.uk/english/society/2016/5/17/the-untouchables-yemens-marginalised-forgotten-in-the-war", "pop":"28,498,683",  "dias":"1,469,000",  "Pc":" 5%", "name":"Yemen Republic", "value":1469000, "color":chart.colors.getIndex(0) },
 ];

// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.nonScalingStroke = true;
polygonSeries.strokeWidth = 0.5;
polygonSeries.calculateVisualCenter = true;


var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.data = mapData;
imageSeries.dataFields.value = "value";
// imageSeries.tooltip.pointerOrientation = "vertical";


var imageTemplate = imageSeries.mapImages.template;
imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
circle.fillOpacity = 0.3;
circle.propertyFields.fill = "color";
circle.tooltipHTML = "<b><span style='font-size:15px;'>{name}</span> <br><b>Population:</b> {pop}<br><b>African Diaspora: </b>{dias}<br><b>Percent:</b>{Pc}";
//<b> for bold
//<br> for new line
//<span> for giving font size for specific word
//you must close the opened tag
//you can write any html/css as you want

imageSeries.heatRules.push({
  "target": circle,
  "property": "radius",
  "min": 4,
  "max": 30,
  "dataField": "value"
})

imageTemplate.adapter.add("latitude", function(latitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLatitude;
   }
   return latitude;
})

imageTemplate.adapter.add("longitude", function(longitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLongitude;
   }
   return longitude;
})

    imageTemplate.events.on("hit", function(ev) {
            var data = ev.target.dataItem.dataContext;
            // console.log(data.url);
            window.open(data.url, '_blank');
 })


/**/
/**/
/**/
/**/
