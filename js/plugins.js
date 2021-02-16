/*global $, document,  */

/* TIGI Hair Reborn */

$(document).ready(function () {
	'use strict';
	
	$('.dropdown-toggle').on('click', function () {
		$('.dropdown-menu').slideToggle(500);
	});
	
	

});


//******************* lax effect **********************
window.onload = function () {
	'use strict';
	lax.setup(); // init

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	}

	window.requestAnimationFrame(updateLax);
	
}



