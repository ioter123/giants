function noEvent() {
    if (event.keyCode == 116) {
        event.keyCode= 2;
        return false;
    }
    else if(event.ctrlKey && (event.keyCode==78 || event.keyCode == 82))
    {
        return false;
    }
}

document.onkeydown = noEvent;

var coord = ['639,544,679,530,686,550,644,565',
'636,545,593,551,593,571,641,565','589,551,589,571,542,565,546,544',
'543,544,538,565,496,549,503,529','645,570,651,593,695,577,687,556',
'641,571,594,576,594,602,647,594','589,577,541,571,536,595,589,601',
'537,570,495,556,488,578,533,593','746,522,721,568,675,590,676,595,740,577,755,566',
'437,511,428,566,441,576,507,595,507,590,466,571','674,491,699,520,715,503,689,462',
'691,459,717,500,744,473,703,437','705,434,747,470,770,435,721,405',
'723,402,771,432,787,396,736,378','737,375,788,392,795,352,753,347',
'729,505,731,522,762,490,749,477','751,475,766,487,791,448,776,439',
'777,435,793,444,810,402,792,397','793,394,810,398,820,353,800,351',
'495,520,468,502,493,463,509,491','492,459,465,500,438,474,479,437',
'478,434,436,471,412,436,461,405','459,402,411,432,396,395,447,378',
'432,475,418,487,392,448,408,439','406,435,390,444,373,402,390,397',
'717,506,683,528,689,548,728,523','730,528,691,554,698,576,743,548',
'500,528,493,549,455,523,465,507','462,505,452,521,419,490,434,476',
'492,554,485,577,439,549,452,528','449,526,436,546,399,508,416,493',
'744,578,754,597,708,639,692,595','687,596,704,642,646,671,636,605',
'632,606,642,673,612,680,607,607','603,608,607,680,575,681,579,609',
'575,609,550,605,541,673,570,680','545,605,536,671,479,642,495,597',
'490,596,474,639,428,596,438,578','754,344,777,302,794,292,796,348',
'801,348,820,350,821,303,801,305','821,298,800,301,794,261,812,255',
'746,546,733,526,766,493,784,509','769,490,786,505,814,461,795,450',
'831,468,797,447,814,404,846,415','848,411,815,399,824,354,855,357',
'855,353,826,350,826,302,853,298','851,294,826,298,817,253,841,246',
'759,593,748,575,759,567,748,549,786,511,804,527','807,524,789,508,817,464,830,472',
'395,391,386,351,429,347,445,375','427,344,386,348,388,292,405,301',
'390,393,372,400,362,353,382,352','381,348,362,349,362,302,381,304',
'414,490,387,505,368,462,387,450','386,447,352,468,336,415,369,404',
'368,400,355,412,328,357,358,354','357,350,328,353,329,298,357,301',
'425,592,378,527,396,512,435,549,423,566,434,575','394,508,376,523,352,471,366,464',
'382,301,362,299,370,255,389,261','357,298,331,295,341,245,366,253',
'387,205,366,249,342,241,364,191','390,257,371,251,391,207,407,216',
'432,179,408,213,393,204,420,166','434,176,422,164,475,118,484,135',
'487,133,478,117,541,90,545,108','416,163,388,201,365,188,397,145',
'419,160,399,142,459,90,473,113','476,112,462,88,509,65,518,92',
'794,258,775,216,791,207,811,251','774,213,750,179,762,167,790,204',
'747,176,717,148,728,132,760,164','714,146,678,124,686,107,724,131',
'675,123,638,109,641,91,683,105','816,249,796,204,818,191,840,241',
'795,201,766,163,785,145,817,188','764,161,730,128,746,106,783,142',
'727,126,689,101,699,75,742,104','685,99,665,92,674,65,696,74',
'661,531,661,513,672,494,684,522','522,533,498,522,510,494,522,513'];

var seat_block = ["중앙탁자석021","중앙탁자석022","중앙탁자석023","중앙탁자석024","중앙탁자석031","중앙탁자석032","중앙탁자석033",
"중앙탁자석034","중앙탁자석041","중앙탁자석044","1루내야필드석111","1루내야필드석112","1루내야필드석113","1루내야필드석114",
"1루내야필드석115","1루내야필드석122","1루내야필드석123","1루내야필드석124","1루내야필드석125","3루내야필드석311","3루내야필드석312",
"3루내야필드석313","3루내야필드석314","3루내야필드석323","3루내야필드석324","응원탁자석121","응원탁자석131","와이드탁자석321",
"와이드탁자석322","와이드탁자석331","와이드탁자석332","중앙상단석051","중앙상단석052","중앙상단석053","중앙상단석054","중앙상단석055",
"중앙상단석056","중앙상단석057","1루내야상단석116","1루내야상단석126","1루내야상단석127","1루내야상단석132","1루내야상단석133",
"1루내야상단석134","1루내야상단석135","1루내야상단석136","1루내야상단석137","1루내야상단석142","1루내야상단석143","3루내야상단석315",
"3루내야상단석316","3루내야상단석325","3루내야상단석326","3루내야상단석333","3루내야상단석334","3루내야상단석335","3루내야상단석336",
"3루내야상단석342","3루내야상단석343","3루단체석327","3루단체석337","로케트배터리존338","외야석721","외야석722","외야석723",
"외야석724","외야석732","외야석733","외야석734","외야석921","외야석922","외야석923","외야석924","외야석925","외야석931","외야석932",
"외야석933","외야석934","외야석935","휠체어석110","휠체어석310"];

var coord2 = ['730,510',
'762,476',
'799,405',
'809,359',
'770,506',
'801,463',
'825,396',
'805,298',
'827,267',
'420,475',
'384,406',
'373,361',
'382,463',
'358,395'
]

var seat_block2 = ["내야탁자석122","내야탁자석123","내야탁자석124","내야탁자석125",
"내야탁자석132","내야탁자석133","내야탁자석135","내야탁자석127","내야탁자석137","내야탁자석323","내야탁자석324","내야탁자석325",
"내야탁자석333","내야탁자석335"]

let tagArea3 = document.getElementById('img_map');

for (var i = 0; i < coord2.length; i++) {

    let new_Tag = document.createElement('area');
    new_Tag.setAttribute('shape','circle');
    new_Tag.setAttribute('coords',coord2[i]+",7");
    new_Tag.setAttribute('alt','seat_coord');
    new_Tag.setAttribute('id',"coords2_"+seat_block2[i]);
    new_Tag.setAttribute('onclick',"func('"+seat_block2[i]+"')");
    tagArea3.appendChild(new_Tag);

};

for (var i = 0; i < coord.length; i++) {

    let new_Tag = document.createElement('area');
    new_Tag.setAttribute('shape','poly');
    new_Tag.setAttribute('coords',coord[i]);
    new_Tag.setAttribute('alt','seat_coord');
    new_Tag.setAttribute('id',"coords_"+seat_block[i]);
    new_Tag.setAttribute('onclick',"func('"+seat_block[i]+"')");
    tagArea3.appendChild(new_Tag);

};
