/* ****************************** ResponsiveHeight Plugin ******************************
  
	When starting my work with responsive web design difficulties encountered in working 
	with the Height property when using CSS sprites. This plugin calculates the height 
	of an element relative to its width.
	
	Expression:
	
	Coefficient Height = Height Layout / Width Layout
	Height = Current Width * Coefficient Height
	
	Coefficinet Height is a HRELATION attribute of the element
	
	Author			:	Marcelo Kubart
	Contatct		:	kubartm@gmail.com
	Develop Date	:	2013-07-02
*/
(function($){
	$.fn.responsiveheight = function(){
		this.each(function(){
			var target = this;
			var Hrelative = $(target).width() * $(target).attr('hrelation');
			$(target).css({'height' : parseInt(Hrelative)});
					
			$(window).resize(function(){
				Hrelativa = $(target).width() * $(target).attr('hrelation');
				$(target).css({'height' : parseInt(Hrelativa)});
			});
		});
	};
})(jQuery);
