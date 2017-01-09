(function () {
	console.log('rand_logo.js intiated!');
	var $LOGO = $('.logo-svg');

	svg_logos = [
		'bjarne_logo_1.svg',
		'bjarne_logo_2.svg',
		'bjarne_logo_3.svg',
		'bjarne_logo_4.svg',
		'bjarne_logo_5.svg',
		'bjarne_logo_6.svg',
		'bjarne_logo_7.svg',
		'bjarne_logo_8.svg',
		'bjarne_logo_9.svg',
		'bjarne_logo_10.svg',
		'bjarne_logo_11.svg',
		'bjarne_logo_12.svg',
		'bjarne_logo_13.svg',
		'bjarne_logo_14.svg',
		'bjarne_logo_15.svg',
		'bjarne_logo_16.svg',
		'bjarne_logo_17.svg',
		'bjarne_logo_18.svg',
		'bjarne_logo_19.svg',
		'bjarne_logo_20.svg',
		'bjarne_logo_21.svg',
		'bjarne_logo_22.svg',
		'bjarne_logo_23.svg',
		'bjarne_logo_24.svg',
		'bjarne_logo_25.svg',
		'bjarne_logo_26.svg',
		'bjarne_logo_27.svg',
		'bjarne_logo_28.svg',
		'bjarne_logo_29.svg',
		'bjarne_logo_30.svg',
		'bjarne_logo_31.svg',
		'bjarne_logo_32.svg',
		'bjarne_logo_33.svg',
		'bjarne_logo_34.svg',
		'bjarne_logo_35.svg',
		'bjarne_logo_36.svg',
		'bjarne_logo_37.svg',
		'bjarne_logo_38.svg',
		'bjarne_logo_39.svg',
		'bjarne_logo_40.svg'
	];


	logo_center_styling = [
		'centered-y',
		'centered-x'
	];

	logo_position_styling = [
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
		'top',
		'bottom',
		'left',
		'right',
		'center'
	];

	logo_iso_styling = [
		'',
		'',
		'',
		'',
		'iso-x',
		'iso-x-neg',
		'iso-y',
		'iso-y-neg'
	];

	logo_scale_styling = [
		'scale-x1',
		'scale-x2',
		'scale-x3',
		'scale-x4',
		'scale-x5'
	];

	function create_rand_styling() {
		var rand_logo_styling = logo_styling_attr[Math.floor(Math.random() * logo_styling_attr.length)];
		console.log(rand_logo_styling);
		return rand_logo_styling;
	}

	function multiple_rand_styling() {
		var rand_center_styling   = logo_center_styling[Math.floor(Math.random()    * logo_center_styling.length)];
		var rand_position_styling = logo_position_styling[Math.floor(Math.random()  * logo_position_styling.length)];
		var rand_iso_styling      = logo_iso_styling[Math.floor(Math.random()       * logo_iso_styling.length)];
		var rand_scale_styling    = logo_scale_styling[Math.floor(Math.random()     * logo_scale_styling.length - 1)];
		var rand_iso_scale_styling= '';

		if (rand_iso_styling !== '') {
			$LOGO.addClass(rand_iso_styling);
		} else {
			$LOGO.addClass(rand_scale_styling);
		}

		console.log('rand_center_styling: ' + rand_center_styling + ', rand_position_styling: ' + rand_position_styling + ', rand_iso_styling: ' + rand_iso_styling + ', rand_scale_styling: ' + rand_scale_styling);
		$LOGO.addClass(rand_position_styling + ' ' + rand_center_styling);
	}

	function create_rand_logo() {
		console.log('create_rand_logo');
		var rand_svg_logo = svg_logos[Math.floor(Math.random() * svg_logos.length)];
		console.log(rand_svg_logo);
		return rand_svg_logo;
	}

	var rand_logo = create_rand_logo();
	multiple_rand_styling();
	// console.log($('.logo-svg').css());
	// $('.logo-svg').empty();
	$('.logo-svg').css({'mask': 'url("../../../assets/logos/' + rand_logo + '") no-repeat'});
	$('.logo-svg').css({'-webkit-mask': 'url("../../../assets/logos/' + rand_logo + '") no-repeat'});
	// $('.logo-svg').css({'-webkit-transform': 'rotateX(70deg) perspective(600)'});
	// $('.logo-svg').css({'-webkit-transform-style': 'preserve-3d'});
	// $('.logo-svg').css({'-webkit-mask-size': (5 + Math.floor(Math.random() * 10) + 'em')});

	console.log($('.logo-svg'));
})();