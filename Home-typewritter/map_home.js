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
title.text = "[bold font-size: 20]African Diaspora 2018 | A story of free and forced migration[/]\n";
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
chart.geodata = am4geodata_worldLow;

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
circle.fillOpacity = 0.7;
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
		/**
		 * ---------------------------------------
		 * This demo was created using amCharts 4.
		 * 
		 * For more information visit:
		 * https://www.amcharts.com/
		 * 
		 * Documentation is available at:
		 * https://www.amcharts.com/docs/v4/
		 * ---------------------------------------
		 */

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create map instance
		var chart = am4core.create("chartdiv", am4maps.MapChart);

		var title = chart.titles.create();
		title.textAlign = "middle";

		var latlong = {
			"AD": {
				"latitude": 42.5,
				"longitude": 1.5
			},
			"AE": {
				"latitude": 24,
				"longitude": 54
			},
			"AF": {
				"latitude": 33,
				"longitude": 65
			},
			"AG": {
				"latitude": 17.05,
				"longitude": -61.8
			},
			"AI": {
				"latitude": 18.25,
				"longitude": -63.1667
			},
			"AL": {
				"latitude": 41,
				"longitude": 20
			},
			"AM": {
				"latitude": 40,
				"longitude": 45
			},
			"AN": {
				"latitude": 12.25,
				"longitude": -68.75
			},
			"AO": {
				"latitude": -12.5,
				"longitude": 18.5
			},
			"AP": {
				"latitude": 35,
				"longitude": 105
			},
			"AQ": {
				"latitude": -90,
				"longitude": 0
			},
			"AR": {
				"latitude": -34,
				"longitude": -64
			},
			"AS": {
				"latitude": -14.3333,
				"longitude": -170
			},
			"AT": {
				"latitude": 47.3333,
				"longitude": 13.3333
			},
			"AU": {
				"latitude": -27,
				"longitude": 133
			},
			"AW": {
				"latitude": 12.5,
				"longitude": -69.9667
			},
			"AZ": {
				"latitude": 40.5,
				"longitude": 47.5
			},
			"BA": {
				"latitude": 44,
				"longitude": 18
			},
			"BB": {
				"latitude": 13.1667,
				"longitude": -59.5333
			},
			"BD": {
				"latitude": 24,
				"longitude": 90
			},
			"BE": {
				"latitude": 50.8333,
				"longitude": 4
			},
			"BF": {
				"latitude": 13,
				"longitude": -2
			},
			"BG": {
				"latitude": 43,
				"longitude": 25
			},
			"BH": {
				"latitude": 26,
				"longitude": 50.55
			},
			"BI": {
				"latitude": -3.5,
				"longitude": 30
			},
			"BJ": {
				"latitude": 9.5,
				"longitude": 2.25
			},
			"BM": {
				"latitude": 32.3333,
				"longitude": -64.75
			},
			"BN": {
				"latitude": 4.5,
				"longitude": 114.6667
			},
			"BO": {
				"latitude": -17,
				"longitude": -65
			},
			"BR": {
				"latitude": -10,
				"longitude": -55
			},
			"BS": {
				"latitude": 24.25,
				"longitude": -76
			},
			"BT": {
				"latitude": 27.5,
				"longitude": 90.5
			},
			"BV": {
				"latitude": -54.4333,
				"longitude": 3.4
			},
			"BW": {
				"latitude": -22,
				"longitude": 24
			},
			"BY": {
				"latitude": 53,
				"longitude": 28
			},
			"BZ": {
				"latitude": 17.25,
				"longitude": -88.75
			},
			"CA": {
				"latitude": 54,
				"longitude": -100
			},
			"CC": {
				"latitude": -12.5,
				"longitude": 96.8333
			},
			"CD": {
				"latitude": 0,
				"longitude": 25
			},
			"CF": {
				"latitude": 7,
				"longitude": 21
			},
			"CG": {
				"latitude": -1,
				"longitude": 15
			},
			"CH": {
				"latitude": 47,
				"longitude": 8
			},
			"CI": {
				"latitude": 8,
				"longitude": -5
			},
			"CK": {
				"latitude": -21.2333,
				"longitude": -159.7667
			},
			"CL": {
				"latitude": -30,
				"longitude": -71
			},
			"CM": {
				"latitude": 6,
				"longitude": 12
			},
			"CN": {
				"latitude": 35,
				"longitude": 105
			},
			"CO": {
				"latitude": 4,
				"longitude": -72
			},
			"CR": {
				"latitude": 10,
				"longitude": -84
			},
			"CU": {
				"latitude": 21.5,
				"longitude": -80
			},
			"CV": {
				"latitude": 16,
				"longitude": -24
			},
			"CX": {
				"latitude": -10.5,
				"longitude": 105.6667
			},
			"CY": {
				"latitude": 35,
				"longitude": 33
			},
			"CZ": {
				"latitude": 49.75,
				"longitude": 15.5
			},
			"DE": {
				"latitude": 51,
				"longitude": 9
			},
			"DJ": {
				"latitude": 11.5,
				"longitude": 43
			},
			"DK": {
				"latitude": 56,
				"longitude": 10
			},
			"DM": {
				"latitude": 15.4167,
				"longitude": -61.3333
			},
			"DO": {
				"latitude": 19,
				"longitude": -70.6667
			},
			"DZ": {
				"latitude": 28,
				"longitude": 3
			},
			"EC": {
				"latitude": -2,
				"longitude": -77.5
			},
			"EE": {
				"latitude": 59,
				"longitude": 26
			},
			"EG": {
				"latitude": 27,
				"longitude": 30
			},
			"EH": {
				"latitude": 24.5,
				"longitude": -13
			},
			"ER": {
				"latitude": 15,
				"longitude": 39
			},
			"ES": {
				"latitude": 40,
				"longitude": -4
			},
			"ET": {
				"latitude": 8,
				"longitude": 38
			},
			"EU": {
				"latitude": 47,
				"longitude": 8
			},
			"FI": {
				"latitude": 62,
				"longitude": 26
			},
			"FJ": {
				"latitude": -18,
				"longitude": 175
			},
			"FK": {
				"latitude": -51.75,
				"longitude": -59
			},
			"FM": {
				"latitude": 6.9167,
				"longitude": 158.25
			},
			"FO": {
				"latitude": 62,
				"longitude": -7
			},
			"FR": {
				"latitude": 46,
				"longitude": 2
			},
			"GA": {
				"latitude": -1,
				"longitude": 11.75
			},
			"GB": {
				"latitude": 54,
				"longitude": -2
			},
			"GD": {
				"latitude": 12.1167,
				"longitude": -61.6667
			},
			"GE": {
				"latitude": 42,
				"longitude": 43.5
			},
			"GF": {
				"latitude": 4,
				"longitude": -53
			},
			"GH": {
				"latitude": 8,
				"longitude": -2
			},
			"GI": {
				"latitude": 36.1833,
				"longitude": -5.3667
			},
			"GL": {
				"latitude": 72,
				"longitude": -40
			},
			"GM": {
				"latitude": 13.4667,
				"longitude": -16.5667
			},
			"GN": {
				"latitude": 11,
				"longitude": -10
			},
			"GP": {
				"latitude": 16.25,
				"longitude": -61.5833
			},
			"GQ": {
				"latitude": 2,
				"longitude": 10
			},
			"GR": {
				"latitude": 39,
				"longitude": 22
			},
			"GS": {
				"latitude": -54.5,
				"longitude": -37
			},
			"GT": {
				"latitude": 15.5,
				"longitude": -90.25
			},
			"GU": {
				"latitude": 13.4667,
				"longitude": 144.7833
			},
			"GW": {
				"latitude": 12,
				"longitude": -15
			},
			"GY": {
				"latitude": 5,
				"longitude": -59
			},
			"HK": {
				"latitude": 22.25,
				"longitude": 114.1667
			},
			"HM": {
				"latitude": -53.1,
				"longitude": 72.5167
			},
			"HN": {
				"latitude": 15,
				"longitude": -86.5
			},
			"HR": {
				"latitude": 45.1667,
				"longitude": 15.5
			},
			"HT": {
				"latitude": 19,
				"longitude": -72.4167
			},
			"HU": {
				"latitude": 47,
				"longitude": 20
			},
			"ID": {
				"latitude": -5,
				"longitude": 120
			},
			"IE": {
				"latitude": 53,
				"longitude": -8
			},
			"IL": {
				"latitude": 31.5,
				"longitude": 34.75
			},
			"IN": {
				"latitude": 20,
				"longitude": 77
			},
			"IO": {
				"latitude": -6,
				"longitude": 71.5
			},
			"IQ": {
				"latitude": 33,
				"longitude": 44
			},
			"IR": {
				"latitude": 32,
				"longitude": 53
			},
			"IS": {
				"latitude": 65,
				"longitude": -18
			},
			"IT": {
				"latitude": 42.8333,
				"longitude": 12.8333
			},
			"JM": {
				"latitude": 18.25,
				"longitude": -77.5
			},
			"JO": {
				"latitude": 31,
				"longitude": 36
			},
			"JP": {
				"latitude": 36,
				"longitude": 138
			},
			"KE": {
				"latitude": 1,
				"longitude": 38
			},
			"KG": {
				"latitude": 41,
				"longitude": 75
			},
			"KH": {
				"latitude": 13,
				"longitude": 105
			},
			"KI": {
				"latitude": 1.4167,
				"longitude": 173
			},
			"KM": {
				"latitude": -12.1667,
				"longitude": 44.25
			},
			"KN": {
				"latitude": 17.3333,
				"longitude": -62.75
			},
			"KP": {
				"latitude": 40,
				"longitude": 127
			},
			"KR": {
				"latitude": 37,
				"longitude": 127.5
			},
			"KW": {
				"latitude": 29.3375,
				"longitude": 47.6581
			},
			"KY": {
				"latitude": 19.5,
				"longitude": -80.5
			},
			"KZ": {
				"latitude": 48,
				"longitude": 68
			},
			"LA": {
				"latitude": 18,
				"longitude": 105
			},
			"LB": {
				"latitude": 33.8333,
				"longitude": 35.8333
			},
			"LC": {
				"latitude": 13.8833,
				"longitude": -61.1333
			},
			"LI": {
				"latitude": 47.1667,
				"longitude": 9.5333
			},
			"LK": {
				"latitude": 7,
				"longitude": 81
			},
			"LR": {
				"latitude": 6.5,
				"longitude": -9.5
			},
			"LS": {
				"latitude": -29.5,
				"longitude": 28.5
			},
			"LT": {
				"latitude": 55,
				"longitude": 24
			},
			"LU": {
				"latitude": 49.75,
				"longitude": 6
			},
			"LV": {
				"latitude": 57,
				"longitude": 25
			},
			"LY": {
				"latitude": 25,
				"longitude": 17
			},
			"MA": {
				"latitude": 32,
				"longitude": -5
			},
			"MC": {
				"latitude": 43.7333,
				"longitude": 7.4
			},
			"MD": {
				"latitude": 47,
				"longitude": 29
			},
			"ME": {
				"latitude": 42.5,
				"longitude": 19.4
			},
			"MG": {
				"latitude": -20,
				"longitude": 47
			},
			"MH": {
				"latitude": 9,
				"longitude": 168
			},
			"MK": {
				"latitude": 41.8333,
				"longitude": 22
			},
			"ML": {
				"latitude": 17,
				"longitude": -4
			},
			"MM": {
				"latitude": 22,
				"longitude": 98
			},
			"MN": {
				"latitude": 46,
				"longitude": 105
			},
			"MO": {
				"latitude": 22.1667,
				"longitude": 113.55
			},
			"MP": {
				"latitude": 15.2,
				"longitude": 145.75
			},
			"MQ": {
				"latitude": 14.6667,
				"longitude": -61
			},
			"MR": {
				"latitude": 20,
				"longitude": -12
			},
			"MS": {
				"latitude": 16.75,
				"longitude": -62.2
			},
			"MT": {
				"latitude": 35.8333,
				"longitude": 14.5833
			},
			"MU": {
				"latitude": -20.2833,
				"longitude": 57.55
			},
			"MV": {
				"latitude": 3.25,
				"longitude": 73
			},
			"MW": {
				"latitude": -13.5,
				"longitude": 34
			},
			"MX": {
				"latitude": 23,
				"longitude": -102
			},
			"MY": {
				"latitude": 2.5,
				"longitude": 112.5
			},
			"MZ": {
				"latitude": -18.25,
				"longitude": 35
			},
			"NA": {
				"latitude": -22,
				"longitude": 17
			},
			"NC": {
				"latitude": -21.5,
				"longitude": 165.5
			},
			"NE": {
				"latitude": 16,
				"longitude": 8
			},
			"NF": {
				"latitude": -29.0333,
				"longitude": 167.95
			},
			"NG": {
				"latitude": 10,
				"longitude": 8
			},
			"NI": {
				"latitude": 13,
				"longitude": -85
			},
			"NL": {
				"latitude": 52.5,
				"longitude": 5.75
			},
			"NO": {
				"latitude": 62,
				"longitude": 10
			},
			"NP": {
				"latitude": 28,
				"longitude": 84
			},
			"NR": {
				"latitude": -0.5333,
				"longitude": 166.9167
			},
			"NU": {
				"latitude": -19.0333,
				"longitude": -169.8667
			},
			"NZ": {
				"latitude": -41,
				"longitude": 174
			},
			"OM": {
				"latitude": 21,
				"longitude": 57
			},
			"PA": {
				"latitude": 9,
				"longitude": -80
			},
			"PE": {
				"latitude": -10,
				"longitude": -76
			},
			"PF": {
				"latitude": -15,
				"longitude": -140
			},
			"PG": {
				"latitude": -6,
				"longitude": 147
			},
			"PH": {
				"latitude": 13,
				"longitude": 122
			},
			"PK": {
				"latitude": 30,
				"longitude": 70
			},
			"PL": {
				"latitude": 52,
				"longitude": 20
			},
			"PM": {
				"latitude": 46.8333,
				"longitude": -56.3333
			},
			"PR": {
				"latitude": 18.25,
				"longitude": -66.5
			},
			"PS": {
				"latitude": 32,
				"longitude": 35.25
			},
			"PT": {
				"latitude": 39.5,
				"longitude": -8
			},
			"PW": {
				"latitude": 7.5,
				"longitude": 134.5
			},
			"PY": {
				"latitude": -23,
				"longitude": -58
			},
			"QA": {
				"latitude": 25.5,
				"longitude": 51.25
			},
			"RE": {
				"latitude": -21.1,
				"longitude": 55.6
			},
			"RO": {
				"latitude": 46,
				"longitude": 25
			},
			"RS": {
				"latitude": 44,
				"longitude": 21
			},
			"RU": {
				"latitude": 60,
				"longitude": 100
			},
			"RW": {
				"latitude": -2,
				"longitude": 30
			},
			"SA": {
				"latitude": 25,
				"longitude": 45
			},
			"SB": {
				"latitude": -8,
				"longitude": 159
			},
			"SC": {
				"latitude": -4.5833,
				"longitude": 55.6667
			},
			"SD": {
				"latitude": 15,
				"longitude": 30
			},
			"SE": {
				"latitude": 62,
				"longitude": 15
			},
			"SG": {
				"latitude": 1.3667,
				"longitude": 103.8
			},
			"SH": {
				"latitude": -15.9333,
				"longitude": -5.7
			},
			"SI": {
				"latitude": 46,
				"longitude": 15
			},
			"SJ": {
				"latitude": 78,
				"longitude": 20
			},
			"SK": {
				"latitude": 48.6667,
				"longitude": 19.5
			},
			"SL": {
				"latitude": 8.5,
				"longitude": -11.5
			},
			"SM": {
				"latitude": 43.7667,
				"longitude": 12.4167
			},
			"SN": {
				"latitude": 14,
				"longitude": -14
			},
			"SO": {
				"latitude": 10,
				"longitude": 49
			},
			"SR": {
				"latitude": 4,
				"longitude": -56
			},
			"ST": {
				"latitude": 1,
				"longitude": 7
			},
			"SV": {
				"latitude": 13.8333,
				"longitude": -88.9167
			},
			"SY": {
				"latitude": 35,
				"longitude": 38
			},
			"SZ": {
				"latitude": -26.5,
				"longitude": 31.5
			},
			"TC": {
				"latitude": 21.75,
				"longitude": -71.5833
			},
			"TD": {
				"latitude": 15,
				"longitude": 19
			},
			"TF": {
				"latitude": -43,
				"longitude": 67
			},
			"TG": {
				"latitude": 8,
				"longitude": 1.1667
			},
			"TH": {
				"latitude": 15,
				"longitude": 100
			},
			"TJ": {
				"latitude": 39,
				"longitude": 71
			},
			"TK": {
				"latitude": -9,
				"longitude": -172
			},
			"TM": {
				"latitude": 40,
				"longitude": 60
			},
			"TN": {
				"latitude": 34,
				"longitude": 9
			},
			"TO": {
				"latitude": -20,
				"longitude": -175
			},
			"TR": {
				"latitude": 39,
				"longitude": 35
			},
			"TT": {
				"latitude": 11,
				"longitude": -61
			},
			"TV": {
				"latitude": -8,
				"longitude": 178
			},
			"TW": {
				"latitude": 23.5,
				"longitude": 121
			},
			"TZ": {
				"latitude": -6,
				"longitude": 35
			},
			"UA": {
				"latitude": 49,
				"longitude": 32
			},
			"UG": {
				"latitude": 1,
				"longitude": 32
			},
			"UM": {
				"latitude": 19.2833,
				"longitude": 166.6
			},
			"US": {
				"latitude": 38,
				"longitude": -97
			},
			"UY": {
				"latitude": -33,
				"longitude": -56
			},
			"UZ": {
				"latitude": 41,
				"longitude": 64
			},
			"VA": {
				"latitude": 41.9,
				"longitude": 12.45
			},
			"VC": {
				"latitude": 13.25,
				"longitude": -61.2
			},
			"VE": {
				"latitude": 8,
				"longitude": -66
			},
			"VG": {
				"latitude": 18.5,
				"longitude": -64.5
			},
			"VI": {
				"latitude": 18.3333,
				"longitude": -64.8333
			},
			"VN": {
				"latitude": 16,
				"longitude": 106
			},
			"VU": {
				"latitude": -16,
				"longitude": 167
			},
			"WF": {
				"latitude": -13.3,
				"longitude": -176.2
			},
			"WS": {
				"latitude": -13.5833,
				"longitude": -172.3333
			},
			"YE": {
				"latitude": 15,
				"longitude": 48
			},
			"YT": {
				"latitude": -12.8333,
				"longitude": 45.1667
			},
			"ZA": {
				"latitude": -29,
				"longitude": 24
			},
			"ZM": {
				"latitude": -15,
				"longitude": 30
			},
			"ZW": {
				"latitude": -20,
				"longitude": 30
			}
		};

		var mapData = [{
				"id": "AF",
				"name": "Afghanistan",
				"value": 32358260,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "AL",
				"name": "Albania",
				"value": 3215988,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DZ",
				"name": "Algeria",
				"value": 35980193,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "AO",
				"name": "Angola",
				"value": 19618432,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "AR",
				"name": "Argentina",
				"value": 40764561,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "AM",
				"name": "Armenia",
				"value": 3100236,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AU",
				"name": "Australia",
				"value": 22605732,
				"color": "#8aabb0"
			},
			{
				"id": "AT",
				"name": "Austria",
				"value": 8413429,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AZ",
				"name": "Azerbaijan",
				"value": 9306023,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BH",
				"name": "Bahrain",
				"value": 1323535,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BD",
				"name": "Bangladesh",
				"value": 150493658,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BY",
				"name": "Belarus",
				"value": 9559441,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BE",
				"name": "Belgium",
				"value": 10754056,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BJ",
				"name": "Benin",
				"value": 9099922,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BT",
				"name": "Bhutan",
				"value": 738267,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BO",
				"name": "Bolivia",
				"value": 10088108,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "BA",
				"name": "Bosnia and Herzegovina",
				"value": 3752228,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BW",
				"name": "Botswana",
				"value": 2030738,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BR",
				"name": "Brazil",
				"value": 196655014,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "BN",
				"name": "Brunei",
				"value": 405938,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BG",
				"name": "Bulgaria",
				"value": 7446135,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BF",
				"name": "Burkina Faso",
				"value": 16967845,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BI",
				"name": "Burundi",
				"value": 8575172,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "KH",
				"name": "Cambodia",
				"value": 14305183,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "CM",
				"name": "Cameroon",
				"value": 20030362,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CA",
				"name": "Canada",
				"value": 34349561,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CV",
				"name": "Cape Verde",
				"value": 500585,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CF",
				"name": "Central African Rep.",
				"value": 4486837,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TD",
				"name": "Chad",
				"value": 11525496,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CL",
				"name": "Chile",
				"value": 17269525,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "CN",
				"name": "China",
				"value": 1347565324,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "CO",
				"name": "Colombia",
				"value": 46927125,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "KM",
				"name": "Comoros",
				"value": 753943,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CD",
				"name": "Congo, Dem. Rep.",
				"value": 67757577,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CG",
				"name": "Congo, Rep.",
				"value": 4139748,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CR",
				"name": "Costa Rica",
				"value": 4726575,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CI",
				"name": "Cote d'Ivoire",
				"value": 20152894,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "HR",
				"name": "Croatia",
				"value": 4395560,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CU",
				"name": "Cuba",
				"value": 11253665,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CY",
				"name": "Cyprus",
				"value": 1116564,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CZ",
				"name": "Czech Rep.",
				"value": 10534293,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DK",
				"name": "Denmark",
				"value": 5572594,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DJ",
				"name": "Djibouti",
				"value": 905564,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "DO",
				"name": "Dominican Rep.",
				"value": 10056181,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "EC",
				"name": "Ecuador",
				"value": 14666055,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "EG",
				"name": "Egypt",
				"value": 82536770,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SV",
				"name": "El Salvador",
				"value": 6227491,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "GQ",
				"name": "Equatorial Guinea",
				"value": 720213,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ER",
				"name": "Eritrea",
				"value": 5415280,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "EE",
				"name": "Estonia",
				"value": 1340537,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "ET",
				"name": "Ethiopia",
				"value": 84734262,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "FJ",
				"name": "Fiji",
				"value": 868406,
				"color": "#8aabb0"
			},
			{
				"id": "FI",
				"name": "Finland",
				"value": 5384770,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "FR",
				"name": "France",
				"value": 63125894,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GA",
				"name": "Gabon",
				"value": 1534262,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GM",
				"name": "Gambia",
				"value": 1776103,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GE",
				"name": "Georgia",
				"value": 4329026,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DE",
				"name": "Germany",
				"value": 82162512,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GH",
				"name": "Ghana",
				"value": 24965816,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GR",
				"name": "Greece",
				"value": 11390031,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GT",
				"name": "Guatemala",
				"value": 14757316,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "GN",
				"name": "Guinea",
				"value": 10221808,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GW",
				"name": "Guinea-Bissau",
				"value": 1547061,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GY",
				"name": "Guyana",
				"value": 756040,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "HT",
				"name": "Haiti",
				"value": 10123787,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "HN",
				"name": "Honduras",
				"value": 7754687,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "HK",
				"name": "Hong Kong, China",
				"value": 7122187,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "HU",
				"name": "Hungary",
				"value": 9966116,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IS",
				"name": "Iceland",
				"value": 324366,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IN",
				"name": "India",
				"value": 1241491960,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ID",
				"name": "Indonesia",
				"value": 242325638,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IR",
				"name": "Iran",
				"value": 74798599,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IQ",
				"name": "Iraq",
				"value": 32664942,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IE",
				"name": "Ireland",
				"value": 4525802,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IL",
				"name": "Israel",
				"value": 7562194,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IT",
				"name": "Italy",
				"value": 60788694,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "JM",
				"name": "Jamaica",
				"value": 2751273,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "JP",
				"name": "Japan",
				"value": 126497241,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "JO",
				"name": "Jordan",
				"value": 6330169,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KZ",
				"name": "Kazakhstan",
				"value": 16206750,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KE",
				"name": "Kenya",
				"value": 41609728,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "KP",
				"name": "Korea, Dem. Rep.",
				"value": 24451285,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KR",
				"name": "Korea, Rep.",
				"value": 48391343,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KW",
				"name": "Kuwait",
				"value": 2818042,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KG",
				"name": "Kyrgyzstan",
				"value": 5392580,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LA",
				"name": "Laos",
				"value": 6288037,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LV",
				"name": "Latvia",
				"value": 2243142,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LB",
				"name": "Lebanon",
				"value": 4259405,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LS",
				"name": "Lesotho",
				"value": 2193843,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LR",
				"name": "Liberia",
				"value": 4128572,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LY",
				"name": "Libya",
				"value": 6422772,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LT",
				"name": "Lithuania",
				"value": 3307481,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LU",
				"name": "Luxembourg",
				"value": 515941,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MK",
				"name": "Macedonia, FYR",
				"value": 2063893,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MG",
				"name": "Madagascar",
				"value": 21315135,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MW",
				"name": "Malawi",
				"value": 15380888,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MY",
				"name": "Malaysia",
				"value": 28859154,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ML",
				"name": "Mali",
				"value": 15839538,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MR",
				"name": "Mauritania",
				"value": 3541540,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MU",
				"name": "Mauritius",
				"value": 1306593,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MX",
				"name": "Mexico",
				"value": 114793341,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "MD",
				"name": "Moldova",
				"value": 3544864,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MN",
				"name": "Mongolia",
				"value": 2800114,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ME",
				"name": "Montenegro",
				"value": 632261,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MA",
				"name": "Morocco",
				"value": 32272974,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MZ",
				"name": "Mozambique",
				"value": 23929708,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MM",
				"name": "Myanmar",
				"value": 48336763,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "NA",
				"name": "Namibia",
				"value": 2324004,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NP",
				"name": "Nepal",
				"value": 30485798,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "NL",
				"name": "Netherlands",
				"value": 16664746,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "NZ",
				"name": "New Zealand",
				"value": 4414509,
				"color": "#8aabb0"
			},
			{
				"id": "NI",
				"name": "Nicaragua",
				"value": 5869859,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "NE",
				"name": "Niger",
				"value": 16068994,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NG",
				"name": "Nigeria",
				"value": 162470737,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NO",
				"name": "Norway",
				"value": 4924848,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "OM",
				"name": "Oman",
				"value": 2846145,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PK",
				"name": "Pakistan",
				"value": 176745364,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PA",
				"name": "Panama",
				"value": 3571185,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "PG",
				"name": "Papua New Guinea",
				"value": 7013829,
				"color": "#8aabb0"
			},
			{
				"id": "PY",
				"name": "Paraguay",
				"value": 6568290,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PE",
				"name": "Peru",
				"value": 29399817,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PH",
				"name": "Philippines",
				"value": 94852030,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PL",
				"name": "Poland",
				"value": 38298949,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "PT",
				"name": "Portugal",
				"value": 10689663,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "PR",
				"name": "Puerto Rico",
				"value": 3745526,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "QA",
				"name": "Qatar",
				"value": 1870041,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "RO",
				"name": "Romania",
				"value": 21436495,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "RU",
				"name": "Russia",
				"value": 142835555,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "RW",
				"name": "Rwanda",
				"value": 10942950,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SA",
				"name": "Saudi Arabia",
				"value": 28082541,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SN",
				"name": "Senegal",
				"value": 12767556,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "RS",
				"name": "Serbia",
				"value": 9853969,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SL",
				"name": "Sierra Leone",
				"value": 5997486,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SG",
				"name": "Singapore",
				"value": 5187933,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SK",
				"name": "Slovak Republic",
				"value": 5471502,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SI",
				"name": "Slovenia",
				"value": 2035012,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SB",
				"name": "Solomon Islands",
				"value": 552267,
				"color": "#8aabb0"
			},
			{
				"id": "SO",
				"name": "Somalia",
				"value": 9556873,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ZA",
				"name": "South Africa",
				"value": 50459978,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ES",
				"name": "Spain",
				"value": 46454895,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LK",
				"name": "Sri Lanka",
				"value": 21045394,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SD",
				"name": "Sudan",
				"value": 34735288,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SR",
				"name": "Suriname",
				"value": 529419,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "SZ",
				"name": "Swaziland",
				"value": 1203330,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SE",
				"name": "Sweden",
				"value": 9440747,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CH",
				"name": "Switzerland",
				"value": 7701690,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SY",
				"name": "Syria",
				"value": 20766037,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TW",
				"name": "Taiwan",
				"value": 23072000,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TJ",
				"name": "Tajikistan",
				"value": 6976958,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TZ",
				"name": "Tanzania",
				"value": 46218486,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TH",
				"name": "Thailand",
				"value": 69518555,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TG",
				"name": "Togo",
				"value": 6154813,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TT",
				"name": "Trinidad and Tobago",
				"value": 1346350,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "TN",
				"name": "Tunisia",
				"value": 10594057,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TR",
				"name": "Turkey",
				"value": 73639596,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "TM",
				"name": "Turkmenistan",
				"value": 5105301,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "UG",
				"name": "Uganda",
				"value": 34509205,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "UA",
				"name": "Ukraine",
				"value": 45190180,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AE",
				"name": "United Arab Emirates",
				"value": 7890924,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "GB",
				"name": "United Kingdom",
				"value": 62417431,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "US",
				"name": "United States",
				"value": 313085380,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "UY",
				"name": "Uruguay",
				"value": 3380008,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "UZ",
				"name": "Uzbekistan",
				"value": 27760267,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "VE",
				"name": "Venezuela",
				"value": 29436891,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PS",
				"name": "West Bank and Gaza",
				"value": 4152369,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "VN",
				"name": "Vietnam",
				"value": 88791996,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "YE",
				"name": "Yemen, Rep.",
				"value": 24799880,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ZM",
				"name": "Zambia",
				"value": 13474959,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ZW",
				"name": "Zimbabwe",
				"value": 12754378,
				"color": chart.colors.getIndex(2)
			}
		];

		// Add lat/long information to data
		for (var i = 0; i < mapData.length; i++) {
			mapData[i].latitude = latlong[mapData[i].id].latitude;
			mapData[i].longitude = latlong[mapData[i].id].longitude;
		}

		// Set map definition
		chart.geodata = am4geodata_worldLow;

		// Set projection
		chart.projection = new am4maps.projections.Miller();

		// Create map polygon series
		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
		polygonSeries.exclude = ["AQ"];
		polygonSeries.useGeodata = true;

		var imageSeries = chart.series.push(new am4maps.MapImageSeries());
		imageSeries.data = mapData;
		imageSeries.dataFields.value = "value";

		var imageTemplate = imageSeries.mapImages.template;
		imageTemplate.propertyFields.latitude = "latitude";
		imageTemplate.propertyFields.longitude = "longitude";
		imageTemplate.nonScaling = true

		var circle = imageTemplate.createChild(am4core.Circle);
		circle.fillOpacity = 0.3;
		circle.propertyFields.fill = "color";
		circle.propertyFields.stroke = "color";
		circle.propertyFields.strokeWidth = 30;
		circle.tooltipText = "{name}: [bold]{value}[/]";

		imageSeries.heatRules.push({
			"target": circle,
			"property": "radius",
			"min": 4,
			"max": 30,
			"dataField": "value"
		})
