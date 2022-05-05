function formsubmit(f){

    var md = document.getElementById("game_date").value;

    if (md == ''){
        alert("경기를 선택해주세요!");
        return;
    };

    f.submit();
};

function btn_select_1(){
    document.getElementById("btn_1").style.backgroundColor = '#777777';
    document.getElementById("btn_2").style.backgroundColor = '#ffffff';
    document.getElementById("btn_3").style.backgroundColor = '#ffffff';
    document.getElementById("btn_4").style.backgroundColor = '#ffffff';
    document.getElementById("btn_5").style.backgroundColor = '#ffffff';
    document.getElementById("btn_6").style.backgroundColor = '#ffffff';
    var md = document.getElementById("date_1").value;
    document.getElementById("game_date").value = md;
};

function btn_select_2(){
    document.getElementById("btn_1").style.backgroundColor = '#ffffff';
    document.getElementById("btn_2").style.backgroundColor = '#777777';
    document.getElementById("btn_3").style.backgroundColor = '#ffffff';
    document.getElementById("btn_4").style.backgroundColor = '#ffffff';
    document.getElementById("btn_5").style.backgroundColor = '#ffffff';
    document.getElementById("btn_6").style.backgroundColor = '#ffffff';
    var md = document.getElementById("date_2").value;
    document.getElementById("game_date").value = md;
};

function btn_select_3(){
    document.getElementById("btn_1").style.backgroundColor = '#ffffff';
    document.getElementById("btn_2").style.backgroundColor = '#ffffff';
    document.getElementById("btn_3").style.backgroundColor = '#777777';
    document.getElementById("btn_4").style.backgroundColor = '#ffffff';
    document.getElementById("btn_5").style.backgroundColor = '#ffffff';
    document.getElementById("btn_6").style.backgroundColor = '#ffffff';
    var md = document.getElementById("date_3").value;
    document.getElementById("game_date").value = md;
};

function btn_select_4(){
    document.getElementById("btn_1").style.backgroundColor = '#ffffff';
    document.getElementById("btn_2").style.backgroundColor = '#ffffff';
    document.getElementById("btn_3").style.backgroundColor = '#ffffff';
    document.getElementById("btn_4").style.backgroundColor = '#777777';
    document.getElementById("btn_5").style.backgroundColor = '#ffffff';
    document.getElementById("btn_6").style.backgroundColor = '#ffffff';
    var md = document.getElementById("date_4").value;
    document.getElementById("game_date").value = md;
};

function btn_select_5(){
    document.getElementById("btn_1").style.backgroundColor = '#ffffff';
    document.getElementById("btn_2").style.backgroundColor = '#ffffff';
    document.getElementById("btn_3").style.backgroundColor = '#ffffff';
    document.getElementById("btn_4").style.backgroundColor = '#ffffff';
    document.getElementById("btn_5").style.backgroundColor = '#777777';
    document.getElementById("btn_6").style.backgroundColor = '#ffffff';
    var md = document.getElementById("date_5").value;
    document.getElementById("game_date").value = md;
};

function btn_select_6(){
    document.getElementById("btn_1").style.backgroundColor = '#ffffff';
    document.getElementById("btn_2").style.backgroundColor = '#ffffff';
    document.getElementById("btn_3").style.backgroundColor = '#ffffff';
    document.getElementById("btn_4").style.backgroundColor = '#ffffff';
    document.getElementById("btn_5").style.backgroundColor = '#ffffff';
    document.getElementById("btn_6").style.backgroundColor = '#777777';
    var md = document.getElementById("date_6").value;
    document.getElementById("game_date").value = md;
};

