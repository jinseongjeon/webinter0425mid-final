(() => {
    const audio1 = document.querySelector(".audio1");
    const audio2 = document.querySelector(".audio2");
    const ghost1 = document.querySelector(".ghost-2-box");
    const ghost2touch = document.querySelector(".ghost-touch");
    const ghost2 = document.querySelector(".ghost-3");
    const ghost1HAHA = document.querySelector(".ghost-2-talk");
    const fullZizizik = document.querySelector(".full-zizizik");
    const fullZizizikDiv = document.querySelector(".full-zizizik-div")
    const radioBtn = document.querySelector(".section-4-contents-1-item-text-button");
    const weaponBtn = document.querySelector(".section-4-contents-2-item-text-button");
    const weaponBox = document.querySelector(".section-4-contents-2-item-image");
    const missileBtn = document.querySelector(".section-4-contents-3-item-text-button");
    const missile = document.querySelector(".section-4-contents-3");
    const boom = document.querySelector(".boom");
    const yt1 = document.querySelector(".full_youtube_1");
    const yt2 = document.querySelector(".full_youtube_2");
    const yt3 = document.querySelector(".full_youtube_3");
    const cancel1 = document.querySelector(".cancel_1");
    const cancel2 = document.querySelector(".cancel_2");
    const cancel3 = document.querySelector(".cancel_3");
    const tanjiro = document.querySelector(".section-5-contents-2-left");
    const tirano = document.querySelector(".section-5-contents-2-center");
    const mac = document.querySelector(".section-5-contents-2-right");
    const sp1 = document.querySelector(".specialist_youtube_1");
    const sp2 = document.querySelector(".specialist_youtube_2");
    const sp3 = document.querySelector(".specialist_youtube_3");

    const hyo1 = document.querySelector(".audio3");
    const hyo2 = document.querySelector(".audio4");
    const hyo3 = document.querySelector(".audio5");
    const hyo4 = document.querySelector(".audio6");
    const rec1 = document.querySelector(".section-3-rec-1")
    const rec2 = document.querySelector(".section-3-rec-2")
    const rec3 = document.querySelector(".section-3-rec-3")
    const rec4 = document.querySelector(".section-3-rec-4")
    const rec1hover = document.querySelector(".section-3-rec-1-rec-1")
    const rec2hover = document.querySelector(".section-3-rec-2-rec-1")
    const rec3hover = document.querySelector(".section-3-rec-3-rec-1")
    const rec4hover = document.querySelector(".section-3-rec-4-rec-1")


    rec1.onmouseover = function(){
        hyo1.play();
    };
    rec1.onmouseleave = function(){
        hyo1.pause();
        hyo1.currentTime = 0.4;
    };
    rec2.onmouseover = function(){
        hyo2.play();
    };
    rec2.onmouseleave = function(){
        hyo2.pause();
        hyo2.currentTime = 0;
    };
    rec3.onmouseover = function(){
        hyo3.play();
    };
    rec3.onmouseleave = function(){
        hyo3.pause();
        hyo3.currentTime = 0;
    };
    rec4.onmouseover = function(){
        hyo4.play();
    };
    rec4.onmouseleave = function(){
        hyo4.pause();
        hyo4.currentTime = 0;
    };

    hyo1.volume = 0.3;
    hyo2.volume = 0.3;
    hyo4.volume = 0.3;

    tanjiro.onclick = function(){
        yt1.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    tirano.onclick = function(){
        yt2.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    mac.onclick = function(){
        yt3.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    cancel1.onclick = function(){
        yt1.style.display = "none";
        document.body.style.overflow = "visible";
        sp1.src ="#"
        setTimeout(
            function(){
                sp1.src = "https://www.youtube.com/embed/2uUSQnKvPMs";
            },100
        );
        document.body.style.overflowX = "hidden";
    };
    cancel2.onclick = function(){
        yt2.style.display = "none";
        document.body.style.overflow = "visible";
        sp2.src ="#"
        setTimeout(
            function(){
                sp2.src = "https://www.youtube.com/embed/i4KjAh16ytg";
            },100
        );
        document.body.style.overflowX = "hidden";
    };
    cancel3.onclick = function(){
        yt3.style.display = "none";
        document.body.style.overflow = "visible";
        sp3.src ="#"
        setTimeout(
            function(){
                sp3.src = "https://www.youtube.com/embed/p_o1xMoiObo";
            },100
        );
        document.body.style.overflowX = "hidden";
    };

    audio1.volume = 0.2;
    audio1.loop= true;

    audio2.volume = 0.2;
    audio2.duration = 3000;

    ghost1.onclick = function(){
        audio1.play();
        ghost1HAHA.src = "img/talk2.png";
        radioBtn.innerText = "사용하기";
        radioBtn.style.backgroundColor = "#D81E1E";
    };

    function goZizizik(){
        fullZizizik.style.display = "block";
        setTimeout(
            function(){
                fullZizizik.style.display = "none";
            },500
        )
    };

    setInterval(goZizizik, 12000);

    radioBtn.onclick = function(){
        if(audio1.currentTime !== 0){
            setTimeout(function(){
                audio1.pause();
            },4000);
            ghost1HAHA.src = "img/talk1.png";
            audio2.play();
            setTimeout(function(){
                audio1.currentTime =0;
            },4000);
            radioBtn.innerText = "사용중";
            setTimeout(function(){
                radioBtn.innerText = "사용완료";
                radioBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
            },16219.425);
        }else{}
    };

    weaponBtn.onclick = function(){
        if(weaponBtn.innerText === "장착하기"){
            document.body.style.cursor = "url(img/cursor.png),auto";
            weaponBtn.innerText = "해제하기";
            weaponBox.style.backgroundImage="url(img/item_bat_none.png)";
        }else if(weaponBtn.innerText === "해제하기"){
            document.body.style.cursor = "auto";
            weaponBtn.innerText = "장착하기";
            weaponBox.style.backgroundImage="url(img/item_bat.png)";
        }
    };

    ghost2touch.onclick = function(){
        if(weaponBtn.innerText === "해제하기"){
            ghost2.src = "img/hitghost.png";
            ghost2.style.width = "16.8rem"
            ghost2.style.height = "21.2rem"
            setTimeout(
                function(){
                    ghost2.src = "img/2-귀신.svg";
                    ghost2.style.width = "14rem"
                    ghost2.style.height = "15rem"
                },100
            )
        }else{}
    };

    missileBtn.onclick = function(){
        boom.style.display = "block";
        setTimeout(
            function(){
                boom.style.display = "none";
            },9000
        );
        fullZizizikDiv.removeChild(fullZizizik);
        missileBtn.innerText = "발사완료";
        missileBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
        setTimeout(
            function(){
                alert("Solution-Code-22003 : 중간중간 화면이 지직거리는 현상을 해결했습니다.");
            },9500
        );
    }
})();
