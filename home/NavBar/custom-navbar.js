const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
	if (this.matchMedia("(min-width: 768px)").matches) {
		$dropdown.hover(
			function () {
				const $this = $(this);
				$this.addClass(showClass);
				$this.find($dropdownToggle).attr("aria-expanded", "true");
				$this.find($dropdownMenu).addClass(showClass);
			},
			function () {
				const $this = $(this);
				$this.removeClass(showClass);
				$this.find($dropdownToggle).attr("aria-expanded", "false");
				$this.find($dropdownMenu).removeClass(showClass);
			}
		);
	} else {
		$dropdown.off("mouseenter mouseleave");
	}
});


////


/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}



/**/


$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}