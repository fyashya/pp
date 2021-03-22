'use strict';

let first = document.querySelector('.first-promo');
let second = document.querySelector('.second-promo');
let third = document.querySelector('.third-promo');
let btns = document.querySelectorAll('.promo__btn');

function accor(){
	btns[0].onclick = function(){
		btns[0].classList.toggle('active');
		first.classList.toggle('seen');
		btns[1].classList.remove('active');
		second.classList.remove('seen');
		btns[2].classList.remove('active');
		third.classList.remove('seen');
	}
	btns[1].onclick = function(){
		btns[0].classList.remove('active');
		first.classList.remove('seen');
		btns[1].classList.toggle('active');
		second.classList.toggle('seen');
		btns[2].classList.remove('active');
		third.classList.remove('seen');
	}
	btns[2].onclick = function(){
		btns[0].classList.remove('active');
		first.classList.remove('seen');
		btns[1].classList.remove('active');
		second.classList.remove('seen');
		btns[2].classList.toggle('active');
		third.classList.toggle('seen');
	}

}

function slider(){
	let left_arrow = document.querySelector('.res__left-arrow');
	let right_arrow = document.querySelector('.res__right__arrow');
	let containers = document.querySelectorAll('.res__slider-container');
	let dots = document.querySelectorAll('.res__dot');
	let now = 0;
	right_arrow.onclick = function(){
		containers[now].style.display = 'none';
		dots[now].classList.remove('act');
		now = now + 1;
		
		if(now >= containers.length){
			now = 0;
		}
		containers[now].style.display = 'flex';
		dots[now].classList.add('act');
	};
	
	left_arrow.onclick = function(){
		containers[now].style.display = 'none';
		dots[now].classList.remove('act');
		now = now - 1;
		
		if(now < 0){
			now = 2;
		}
		containers[now].style.display = 'flex';
		dots[now].classList.add('act');
	};
}
function comments(){
	let sliderArr = document.querySelectorAll('.test__slider-item');
	let left_arrow = document.querySelector('.test__arrow-left');
	let right_arrow = document.querySelector('.test__arrow-right');

	sliderArr[0].style.display = "block";
	let now = 0;

	right_arrow.onclick = function(){
		sliderArr[now].style.display = 'none';
		now = now + 1;
		
		if(now >= sliderArr.length){
			now = 0;
		}
		sliderArr[now].style.display = 'block';
		
	};
	
	left_arrow.onclick = function(){
		sliderArr[now].style.display = 'none';
		
		now = now - 1;
		
		if(now < 0){
			now = 2;
		}
		sliderArr[now].style.display = 'block';
	}
}
function tab(){
	let tabsArr = document.querySelectorAll('.tabs__tab');
	let tabs_outerArr = document.querySelectorAll('.tabs__outer');
	let tabs_innerArr = document.querySelectorAll('.tabs__inner');
	let arrow = document.querySelectorAll('.tabs__arrow');
	let text = document.querySelectorAll('.tabs__str');
	for(let i = 0; i < tabs_outerArr.length; i++){
		tabs_outerArr[i].onclick = () => {
			tabs_innerArr.forEach(function(){
				for(let x = 0; x < tabs_innerArr.length; x++){
					tabs_innerArr[x].classList.remove('active');
				}
			});
			arrow.forEach(function(){
				for(let x = 0; x < arrow.length; x++){
					arrow[x].classList.remove('top');
				}
			});
			text.forEach(function(){
				for(let x = 0; x < text.length; x++){
					text[x].classList.remove('on');
				}
			});

			tabs_innerArr[i].classList.add('active');
			arrow[i].classList.add('top');
			text[i].classList.add('on');
		};
	}
}

tab();
comments();
slider();
accor();