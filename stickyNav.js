(function($) {

	$.fn.stickyNav = function(config) {
	
		var $this = this;
	
		var stickyPoint = $this.position().top;
		var stickyHeight = $this.outerHeight(); //returns an integer
		var nextPadding = parseInt($this.next().css('padding-top')); //.css() returns px, need an integer
		var calc = stickyHeight + nextPadding;
		
		$(window).scroll(function(){

			if ($(window).scrollTop() > stickyPoint){
				$this.addClass('fixed').next().css('padding-top',(calc));
			}
			else {
				$this.removeClass('fixed').next().css('padding-top',(nextPadding));
				
			}
		 
		});
	
	};
	
	$(window).on('load', function () {
		
		var target = $('body').data('stickynavtarget')
		$(target).stickyNav();
	});

})(jQuery)