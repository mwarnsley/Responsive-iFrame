    //RESIZING THE IFRAME WITH THE VIEWPORT
    function iframePercent() {

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

    $(document).ready(function () {
        iframePercent();
        $(window).bind('resize', iframePercent);
    });

    //RESIZING IFRAME WITH VIEWPORT END