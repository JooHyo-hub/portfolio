//--슬릭 플러그인
$(document).ready(function(){
    function initializeSlick() {
        if (!$('.artwork_list_inner_box').hasClass('slick-initialized')) {
            $('.artwork_list_inner_box').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        }
    }

    function checkViewportWidth() {
        if ($(window).outerWidth() <= 850) {
            if ($('.artwork_list_inner_box').hasClass('slick-initialized')) {
                $('.artwork_list_inner_box').slick('unslick'); // slick 멈추기
            }
        } else {
            initializeSlick(); // slick 실행하기
        }
    }

    // 초기 체크 및 리사이즈 이벤트 핸들러
    checkViewportWidth();
    $(window).on('resize', checkViewportWidth);
});

//-- 슬라이드 플러그인
$(document).ready(function(){
    AOS.init();
});

//--프로그레스바 스크롤 이벤트
$(document).scroll(function (e) {
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);

    $(".progress-bar").css("width", scrollPercent + "%");
    // $(".percent").text(roundScroll); //퍼센트 숫자
});

//--헤더 스크롤 및 클릭 이벤트
$(document).ready(function (){
    // 각 요소 노드 저장
    let $about_sect = $('.about_section');
    let $portfolio_sect = $('.portfolio_section');
    let $contact_sect = $('.contact_wrap');
    let $menu = $('.head_inner_box li');

    // 스크롤 이벤트
    $(window).scroll(function(){
        
        let $headerBottom = $('header').offset().top + $('header').outerHeight(); // 헤더의 바닥 위치
        let $aboutTop = $about_sect.offset().top;   // 각 섹션의 탑 위치 저장
        let $portfolioTop = $portfolio_sect.offset().top;
        let $contactTop = $contact_sect.offset().top;

        // 헤더 타이틀 텍스트 이벤트
        let $scrollTop = $(window).scrollTop();

        if ($scrollTop > 800) { 
            $('.name').fadeIn();
        } else {
            $('.name').fadeOut().css('display', 'none');
        }

        // 헤더 리스트 컬러 이벤트
        $menu.removeClass('focusolor'); // 초기화

        // 실행
        if ($headerBottom < $aboutTop) {
            $menu.eq(0).addClass('focusolor');
        } else if ($headerBottom >= $aboutTop && $headerBottom < $portfolioTop) {
            $menu.eq(1).addClass('focusolor');
        } else if ($headerBottom >= $portfolioTop && $headerBottom < $contactTop) {
            $menu.eq(2).addClass('focusolor');
        } else if ($headerBottom >= $contactTop) {  //반응형, 조건문 추가 필요!!
            $menu.eq(3).addClass('focusolor');
        }
    });

    // 클릭 이벤트
    $menu.on('click', function() {
        // 클릭한 메뉴의 인덱스
        let $index = $menu.index(this); 
        
        // 각 섹션의 탑 위치 저장
        let $homeTop  = $('.main_banner_wrap').offset().top;
        let $aboutTop = $about_sect.offset().top;
        let $portfolioTop = $portfolio_sect.offset().top;
        let $contactTop = $contact_sect.offset().top;

        $menu.removeClass('focusolor'); // 초기화

        // 실행
        if ($index === 0) {
            $('html, body').animate({
                scrollTop: $homeTop 
            }, 500);

        } else if ($index === 1) {
            $('html, body').animate({
                scrollTop: $aboutTop 
            }, 500);

        } else if ($index === 2) {
            $('html, body').animate({
                scrollTop: $portfolioTop 
            }, 500);

        } else if ($index === 3) {
            $('html, body').animate({
                scrollTop: $contactTop
            }, 500);
        }
    });
});
    
    
//--배너 타이핑 효과
$(document).ready(function () {
    const txtWrap = document.querySelector('.typing');
    const txtString = 'WEB PUBLISHER UX•UI DESIGN';
    const txtSpeed = 100;
    const txtDelay = 2000;
    let txtIndex = 0;
    let typeCotrol = true;

    function typingEvent(){
        if(typeCotrol === true){  // true일 경우 타이핑 진행, false일 경우 타이핑 중지
            let txtNow = txtString[txtIndex++];
            txtWrap.innerHTML += txtNow === "\n" ? "<br>": txtNow;
            if(txtIndex >= txtString.length){  // 문자열 index와 문자열 length를 비교해 문자열 마지막을 판별
                txtIndex = 0;  // 문자 입력을 다 하면 index를 0으로 초기화
                typeCotrol = false;  // 입력 완료시 typeControl을 false로 바꿔 입력 막기
            }
        }else{
            // typeControl이 false일 경우
            clearInterval(setTyping);  // setInterval 제거 (타이핑 멈춤)
            setTimeout(function(){
                txtWrap.innerHTML = '';
                typeCotrol = true;
                setTyping = setInterval(typingEvent, txtSpeed);  // txtDelay만큼 시간 후 재 입력
            }, txtDelay)
        }
    }

    let setTyping = setInterval(typingEvent, txtSpeed);  // setInterval을 통한 텍스트 입력
});

//--작업 이미지 마우스 호버 이벤트
$(document).ready(function(){
    //해비치
    let $heavichi_PC = $('.haevici_pcImg');
    let $heavichi_MB = $('.haevici_mobileImg');

    $heavichi_PC.hover(function(){
        $(this).css({'top' : '-568%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    $heavichi_MB.hover(function(){
        $(this).css({'top' : '-313%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    //엘르
    let $elle_PC = $('.elle_pcImg');

    $elle_PC.hover(function(){
        $(this).css({'top' : '-625.4%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    //니베아
    let $nivea_PC = $('.nivea_pcImg');
    let $nivea_TB = $('.nivea_tabletImg');
    let $nivea_MB = $('.nivea_mobileImg');

    $nivea_PC.hover(function(){
        $(this).css({'top' : '-436.4%'});
    },function(){
        $(this).css({'top' : '0%'});
    });
    
    $nivea_TB.hover(function(){
        $(this).css({'top' : '-972%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    $nivea_MB.hover(function(){
        $(this).css({'top' : '-521%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    //빽다방
    let $baekdabang_PC = $('.baekdabang_pcImg');

    $baekdabang_PC.hover(function(){
        $(this).css({'top' : '-224%'});
    },function(){
        $(this).css({'top' : '0%'});
    });

    //스타벅스
    let $starbucks_PC = $('.starbucks_pcImg');

    $starbucks_PC.hover(function(){
        $(this).css({'top' : '-328.2%'});
    },function(){
        $(this).css({'top' : '0%'});
    });
});

//--컨셉 설명 모달창
$(document).ready(function(){
    let $conceptBtn = $('.conceptBtn');
    let $conceptModal = $('.concept_modal_wrap');
    let $closeBtn = $('.concept_modal_wrap .closeBtn');
    let $siteModal = $('.site_modal');

    // 컨셉 버튼 클릭 시
    $conceptBtn.click(function() {

        console.log($conceptBtn);

        $conceptModal.fadeIn(300);
        $siteModal.hide();

        if ($(this).is($conceptBtn.eq(0))) { 
            $siteModal.eq(0).fadeIn(300); 

        } else if($(this).is($conceptBtn.eq(1))) {
            $siteModal.eq(1).fadeIn(300); 
        } else{
            $siteModal.eq(2).fadeIn(300); 
        }
    });

    //모달창 닫기 버튼 클릭시
    $closeBtn.click(function() {
        $conceptModal.hide();
        $siteModal.hide();
    });

    let $devicesBtn = $('.devicesBtn > button');

    //모달창 기기 버튼 클릭시
    $devicesBtn.click(function() {
        $conceptModal.hide();
        $siteModal.hide();
    });
    

});

//--모바일 메뉴
$(document).ready(function(){
    let $hambIcon = $('.hamb_icon');
    let $SDmenu_closeBtn = $('.mobile_side_menu .closeIcon');
    let $SideMenu = $('.mobile_side_menu');

    //메뉴 나타나기
    $hambIcon.click(function(){
        $SideMenu.css({
            right : '0',
            opacity : '1'
        });
    });

    //메뉴 숨기기
    $SDmenu_closeBtn.click(function(){
        $SideMenu.css({
            right : '-100%',
            opacity : '0'
        });
    });

});