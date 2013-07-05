jquery.responsiveheight
=======================

## About

This plugin calculates height relative to elements on responsive webdesign

When starting my work with responsive web design difficulties encountered in working  with the Height property when 
using CSS sprites. This plugin calculates the height of an element relative to its width.
	
Expression:
	
Coefficient Height = Height Layout / Width Layout
Height = Current Width * Coefficient Height
	
Coefficinet Height is a HRELATION attribute of the element


## Usage

HTML
<pre>
  <div id="div-eg" hrelation="0.56"></div>
</pre>

JavaScript
<pre>
   $(document).ready(function(){
     $('#div-eg').responsiveheight();
   });
</pre>
