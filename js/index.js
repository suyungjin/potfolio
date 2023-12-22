$('#wrap').fullpage({
    navigation:false,
    menu: 'myMenu',
    anchors: ['1','2','3','4','5','6','7'],
    continuousVertical: false,
	continuousHorizontal: false,
    autoScrolling: false                                                                                                                                                                                    
});

let pos = 0;

$(window).scroll(function(){
    if(this.scrollY > 20){
        $("#remote").fadeIn();
    }
    else{
      $("#remote").fadeOut();
    }

    var pos = $(window).scrollTop();
    if(pos < 937){
        $('#gnb li').removeClass('scroll');
    }else if(937 <= pos && pos < 1874){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(0).addClass('scroll');
    }else if(1874 <= pos && pos < 2811){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(1).addClass('scroll');
    }else if(2811 <= pos && pos < 3748){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(2).addClass('scroll');
    }else if(3748 <= pos && pos < 4737){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(3).addClass('scroll');
    }else if(4737 <= pos && pos < 5674){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(4).addClass('scroll');
    }else if(5674 <= pos){
        $('#gnb li').removeClass('scroll');
        $('#gnb li').eq(5).addClass('scroll');
    }

  });

// 보정 모달

// 포토샵 및 일러스트
$("#container").twentytwenty(
);
$("#container2").twentytwenty(
    );
$("#container3").twentytwenty(
    );
$("#container4").twentytwenty(
    );
// <자격증 슬라이드>

var btn = document.querySelectorAll('#slide .btn');

var psts = 0; 

btn.item(0).addEventListener('click',function(){
    clearInterval(state);
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);

 var tg = document.querySelector('#certi');
 var tg2 = document.querySelectorAll('#certi dt, #certi dd');

    tg.style.left = '-100%';
    tg.style.transition = "all 0s";

    setTimeout(function(){
        tg.appendChild(tg2.item(0));
        tg.style.left="0%";
        tg.style.transition = "all 0s";
    },1000);
});

btn.item(1).addEventListener('click',function(){
    clearInterval(state);
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
 var tg = document.querySelector('#certi');
 var tg2 = document.querySelectorAll('#certi dt, #certi dd');

    tg.insertBefore(tg2.item(tg2.length-1),tg2.item(0));
    tg.style.left="100%";
    setTimeout(function(){
        tg.style.left='0%';
        tg.style.transition = 'all 0s';
    },1000);
},);

var state=setInterval(()=>{
 var tg = document.querySelector('#certi');
 var tg2 = document.querySelectorAll('#certi dt, #certi dd');

    tg.style.left = '100%';
    tg.style.transition = "all 0s";
    setTimeout(function(){
        tg.appendChild(tg2.item(0));
        tg.style.left="0%";
    },1000);
},5000);

btn.item(2).addEventListener('click',function(){

    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);

    clearInterval(state);

    state = setInterval(()=>{

 var tg = document.querySelector('#certi');
 var tg2 = document.querySelectorAll('#certi dt, #certi dd');

    tg.style.left = '-100%';
    setTimeout(function(){
        tg.appendChild(tg2.item(0));
        tg.style.left="0%";
    },1000);
},5000);
});

var imges = document.querySelectorAll('#certi img'),
    photoboxes = document.querySelector('#photoboxes-overlay'),
    photoboxImges = photoboxes.querySelector('img'),
    skill = document.querySelectorAll('#skill img');

for(var i=0;i <imges.length;i++){
    imges[i].addEventListener('click',function(){
        var imgNewSrc = this.getAttribute('data-photoboxes');
        console.log(imgNewSrc);
        photoboxImges.setAttribute('src',imgNewSrc);
        photoboxes.classList.add('visible');
    });
}
photoboxes.addEventListener('click',function(){
    this.classList.remove('visible');
});

skill.item(0).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(5).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(1).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(4).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(2).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(3).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(3).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(1).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(4).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(1).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(5).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(4).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(6).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(2).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(7).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(2).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(8).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(0).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });

skill.item(9).addEventListener('click',function(){
        photoboxImges.setAttribute('src',imges.item(0).getAttribute('data-photoboxes'));
        photoboxes.classList.add('visible');
    });
//  포트폴리오 기획
var imges2 = document.querySelectorAll('#web .image div'),
    photoboxes2 = document.querySelector('#photoboxes2-overlay'),
    photoboxImges2 = photoboxes2.querySelector('img');

for(var i=0;i <imges2.length;i++){
    imges2[i].addEventListener('click',function(){
        var imgNewSrc = this.getAttribute('data-photoboxes2');
        console.log(imgNewSrc);
        photoboxImges2.setAttribute('src',imgNewSrc);
        photoboxes2.classList.add('visible');
    });
}
photoboxes2.addEventListener('click',function(){
    this.classList.remove('visible');
});
// 영상 버튼
var vid = $('#vid li'),
psts = 0;

$('#vidbtn .btnv1').click(function(){
    vid.eq(0).fadeIn(1000);
    vid.eq(0).css({'display':'block','transition':'none'});
    vid.eq(1).css({'display':'none'});
    vid.eq(2).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
$('#vidbtn .btnv2').click(function(){
    vid.eq(1).fadeIn(1000);
    vid.eq(1).css({'display':'block','transition':'none'});
    vid.eq(2).css({'display':'none'});
    vid.eq(0).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
$('#vidbtn .btnv3').click(function(){
    vid.eq(2).fadeIn(1000);
    vid.eq(2).css({'display':'block','transition':'none'});
    vid.eq(1).css({'display':'none'});
    vid.eq(0).css({'display':'none'});
    if(psts ==1){return false;}
    psts = 1;

    setTimeout(function(){psts=0;},500);
});
// 포토 모달

var img = document.querySelectorAll('.photo img'),
    photobox = document.querySelector('#photobox-overlay'),
    photoboxImg = photobox.querySelector('img');

for(var i=0;i <img.length;i++){
    img[i].addEventListener('click',function(){
        var imgNewSrc = this.getAttribute('data-photobox');
        console.log(imgNewSrc);
        photoboxImg.setAttribute('src',imgNewSrc);
        photobox.classList.add('visible');
    });
}
photobox.addEventListener('click',function(){
    this.classList.remove('visible');
});
// 3d 모션

VanillaTilt.init(document.querySelector(".multi2"), {
    max: 25,
    speed: 400
});
// 메뉴
$('#gnb #bar').click(function(){
    $('#gnb ul').toggle('active').css({'right':'0%'});
});
// 리사이즈
$(window).resize(function(){
    var w = window.innerWidth;
    if(w > 1200){
        $('#gnb ul').css({'display':'flex','flex-direction':'row'});
    }else{
        $('#gnb ul').css({'display':'flex','flex-direction':'column','right':'-100%'});
    }
});