    //RESIZING THE IFRAME WITH THE VIEWPORT
    function iframePercent() {

		//Get the width of the current screen size
        var screen = $(window).width();
        var mobilePercent = (56 * screen) / 100;
        var desktopPercent = (35 * screen) / 100;

        if (screen < 992) {
            mobilePercent = parseInt(mobilePercent) + 'px';
            $("#iframe").css('height', mobilePercent);
        }
        else {
            desktopPercent = parseInt(desktopPercent) + 'px';
            $("#iframe").css('height', desktopPercent);
        }

    }

	//call iframePercent function binding with resizing and percentages
    $(document).ready(function () {
        iframePercent();
        $(window).bind('resize', iframePercent);
    });

    //RESIZING IFRAME WITH VIEWPORT END