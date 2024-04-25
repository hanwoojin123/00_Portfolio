window.addEventListener("load", function(){
	var isMobile = false;

	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
		isMobile = true;
	}
	
	
	// menu
	const $elm_body = document.getElementsByTagName('body')[0];
	const $elm_header = document.getElementsByTagName('header')[0];
	const $btn_menu = document.getElementById('btn_menu');

	$btn_menu.addEventListener('click', function(){
		$elm_header.classList.toggle('on');
		$elm_body.style.overflow = $elm_header.classList.contains("on") ? "hidden" : "auto";
	});
	
	
	// slide
   let visual_Slide_01 = visual_Slide(".about .info_wrap", ".about .img_wrap", 0);

	function visual_Slide(_targetWrapInfo, _targetWrapImg, _intervalTime) {
		const $slide_wrap_info = document.querySelector(_targetWrapInfo);
		const $slides_info = $slide_wrap_info.querySelectorAll(".slides");

		const $slide_wrap_img = document.querySelector(_targetWrapImg);
		const $slides_img = $slide_wrap_img.querySelectorAll(".slides");

		const $btn_prev = document.querySelector(".about button.prev");
		const $btn_next = document.querySelector(".about button.next");

		let cnt_info = 0;
		let cnt_img = 0;
		let si_01 = null;
		let click_Event = true;

		function initializeSlide($slides) {
			for (let i = 0; i < $slides.length; i++) {
				$slides[i].classList.remove("cur", "prev", "next");
				$slides[i].style.visibility = "hidden";
			}
			$slides[cnt_info].style.opacity = 1;
			$slides[cnt_info].style.visibility = "visible";
		}

		function fadeOut(element) {
			let opa_val = 1;
			let timer = setInterval(function () {
				if (!timer) click_Event = true;
				if (opa_val <= 0.1) {
					opa_val = 0;
					element.style.opacity = opa_val;
					element.style.visibility = "hidden";
					clearInterval(timer);
				}
				element.style.opacity = opa_val;
				opa_val -= opa_val * 0.1;
			}, 20);
		}

		function fadeIn(element) {
			let opa_val = 0.1;
			element.style.visibility = "visible";
			let timer = setInterval(function () {
				if (opa_val >= 1) {
					opa_val = 1;
					element.style.opacity = opa_val;
					click_Event = true;
					start_si();
					clearInterval(timer);
				}
				element.style.opacity = opa_val;
				opa_val += opa_val * 0.1;
			}, 20);
		}

		function count_change(_dir) {
			if (!click_Event) return false;
			stop_si();
			click_Event = false;

			cnt_info = (_dir === -1) ? (cnt_info - 1 + $slides_info.length) % $slides_info.length : (cnt_info + 1) % $slides_info.length;
			cnt_img = (_dir === -1) ? (cnt_img - 1 + $slides_img.length) % $slides_img.length : (cnt_img + 1) % $slides_img.length;

			fadeSlide(cnt_info, $slides_info, _dir);
			fadeSlide(cnt_img, $slides_img, _dir);
		}

		function fadeSlide(cnt, $slides, _dir) {
			let prevIndex = (cnt - 1 + $slides.length) % $slides.length;
			let nextIndex = (cnt + 1) % $slides.length;

			if (_dir === -1) {
				fadeOut($slides[nextIndex]);
				fadeIn($slides[cnt]);
			} else {
				fadeOut($slides[prevIndex]);
				fadeIn($slides[cnt]);
			}
		}

		if ($btn_prev) $btn_prev.onclick = () => count_change(-1);
		if ($btn_next) $btn_next.onclick = () => count_change(1);

		function start_si() {
			if (_intervalTime !== 0) {
				if (si_01 != null) clearInterval(si_01);
				si_01 = setInterval(() => count_change(1), _intervalTime);
			}
		}

		function stop_si() {
			if (si_01 != null) clearInterval(si_01);
			si_01 = null;
		}

		initializeSlide($slides_info);
		initializeSlide($slides_img);

		start_si();
	}


	// .text_wrap
	function text_interval_write_02(elm, _duration){

		console.log("dfdk");

		var tar_elm = document.querySelector(elm);
		var tar_elm_child = document.querySelectorAll(elm +" p");
		var arr_words = [];

		for(var i = 0; i < tar_elm_child.length; i++){
			let text = tar_elm_child[i].textContent;
			text = text.split("");
			arr_words[i] = [];
			for(var j = 0; j < text.length; j++){
				arr_words[i][j] = text[j];
			}
		}

		for(var i = 0; i < tar_elm_child.length; i++){
			tar_elm_child[i].replaceChildren();
		}

		setTimeout(text_write, 150);

		let arr_d1_cnt = 0;
		let arr_d2_cnt = 0;
		let text_Cont = "";

		function text_write(){
			if(arr_d1_cnt >= arr_words.length){
				return;
			} 

			text_Cont += arr_words[arr_d1_cnt][arr_d2_cnt];
			tar_elm_child[arr_d1_cnt].textContent = text_Cont;

			if(arr_d2_cnt >= arr_words[arr_d1_cnt].length - 1){
				arr_d1_cnt = arr_d1_cnt + 1;
				arr_d2_cnt = 0;
				text_Cont = "";
			}
			else {
				arr_d2_cnt = arr_d2_cnt + 1;
			}

			let st_01 = setTimeout(text_write, 100);
		}

	}

	text_interval_write_02(".text_wrap");
	

	// time
	function CurrentTime() {
		let now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();

		let ampm = "오전";
		if (hours >= 12) {
			ampm = "오후";
			if (hours > 12) {
				hours -= 12;
			}
		}

		hours = String(hours).padStart(2, "0");
		minutes = String(minutes).padStart(2, "0");

		let currentTime = ampm + " " + hours + " : " + minutes;

		document.getElementById("current_time").textContent = currentTime;
	}

	setInterval(CurrentTime, 60000);

	CurrentTime();
	

	// scroll
	const sections = [
	document.querySelector('.visual'),
	document.querySelector('.about'),
	document.querySelector('.projects'),
	document.querySelector('.art_work'),
	document.querySelector('footer')
	];

	const navLinks = document.querySelectorAll('header nav a');
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('id');
			let targetElement;
			
			if (targetId === 'main') {
				targetElement = document.querySelector('.visual');
			} else if (targetId === 'about') {
				targetElement = document.querySelector('.about');
			} else if (targetId === 'projects') {
				targetElement = document.querySelector('.projects');
			} else if (targetId === 'artwork') {
				targetElement = document.querySelector('.art_work');
			} else if (targetId === 'contact') {
				targetElement = document.querySelector('footer');
			}

			const offsetTop = targetElement.offsetTop + 1;
			window.scrollTo({ top: offsetTop, behavior: 'smooth' });
		});
	});

	window.addEventListener('scroll', () => {
		const scrollPosition = window.scrollY;

		let currentSectionIndex = -1;
		sections.forEach((section, index) => {
			const sectionTop = section.offsetTop;
			if (scrollPosition >= sectionTop - 200) {
				currentSectionIndex = index;
			}
		});

		const curElement = document.getElementById('cur');
		curElement.textContent = (currentSectionIndex < 10 ? '0' : '') + (currentSectionIndex + 1);
	});


	// Dark Mode
	document.querySelector('.btn_dark_mode').addEventListener('click', function() {
		const htmlTag = document.querySelector('html');
		htmlTag.classList.toggle('on');

	});
    
    
    // scroll_fade
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    const targetElements = document.querySelectorAll(".fade");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
    
    
    // header
    setTimeout(function() {
        document.querySelector('header').style.opacity = '1';
        document.querySelector('header').style.transition = '2s';
        document.querySelector('.arrow_circle').style.opacity = '1';
        document.querySelector('.arrow_circle').style.transition = '2s';
    }, 0);


	if(!isMobile){
		
		// .text_wrap > span.sub_text
		setTimeout(function() {
			document.querySelector('.sub_text').style.opacity = '1';
			document.querySelector('.text_wrap .deco').style.opacity = '1';
		}, 4400);

		// mouse event
		const circle = document.getElementById('circle');
		const textWrap = document.querySelector('section.visual > div.inner_wrap > div.text_wrap');
		const imgs = document.querySelectorAll('a > img');

		textWrap.addEventListener('mouseover', () => {
			circle.style.width = '180px';
			circle.style.height = '180px';
		});

		textWrap.addEventListener('mouseleave', () => {
			circle.style.width = '70px';
			circle.style.height = '70px';
		});

		imgs.forEach(img => {
			img.addEventListener('mouseover', () => {
				circle.style.width = '120px';
				circle.style.height = '120px';
				circle.style.mixBlendMode = "none";
				circle.textContent = 'VIEW';
			});

			img.addEventListener('mouseleave', () => {
				circle.style.width = '60px';
				circle.style.height = '60px';
				circle.textContent = '';
			});
		});
				
		document.addEventListener('mousemove', (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			
			circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
		});

		
		// art_work popup
		const artWorkLinks = document.querySelectorAll('section.art_work a');
		const popUp = document.querySelector('.art_work_popup');
		const popUpCloseBtn = popUp.querySelector('.popup_close');
		const artworks = popUp.querySelectorAll('.art_work');

		artWorkLinks.forEach((link, index) => {
			link.addEventListener('click', function(e) {
				e.preventDefault();

				popUp.style.display = 'block';


				artworks[index].style.display = 'block';

				document.body.style.overflow = 'hidden';
			});
		});

		popUpCloseBtn.addEventListener('click', function() {

			popUp.style.display = 'none';

			document.body.style.overflow = 'auto';
		});


		// footer scroll
		$(document).ready(function(){
			$(window).scroll(function(e){
				var e = e ? e : window.event;
				$("#event_type").text(e.type);

				let st_val = $(this).scrollTop();
				let win_height = $(window).height();
				let st_h_val = st_val + win_height;

				let target_offset_top = $("footer").offset().top;
				let move_01;
				let move_02;

				if(st_h_val >= target_offset_top && st_h_val <= target_offset_top + $("footer").outerHeight()) {

					move_01 = (((st_h_val - target_offset_top) / $("footer").outerHeight()) * 47);
					move_02 = (((st_h_val - target_offset_top) / $("footer").outerHeight()) * 35);

					$("div.text_wrap_01").css("left", move_01 +"%");
					$("div.text_wrap_02").css("right", move_01 +"%");
					$("div.text_wrap_03").css("left", move_02 +"%");

				}
				else { 
					console.log("leave target"); 
				}

			});

		});

	}
	else {
		
		if(screen.width >= 768){

			// art_work popup
			const artWorkLinks = document.querySelectorAll('section.art_work a');
			const popUp = document.querySelector('.art_work_popup');
			const popUpCloseBtn = popUp.querySelector('.popup_close');
			const artworks = popUp.querySelectorAll('.art_work');

			artWorkLinks.forEach((link, index) => {
				link.addEventListener('click', function(e) {
					e.preventDefault();

					popUp.style.display = 'block';

					artworks.forEach(artwork => {
						artwork.style.display = 'none';
					});

					artworks[index].style.display = 'block';

					document.body.style.overflow = 'hidden';
				});
			});

			popUpCloseBtn.addEventListener('click', function() {

				popUp.style.display = 'none';

				document.body.style.overflow = 'auto';
			});

		}
		
		else {



		}

	}
	
});