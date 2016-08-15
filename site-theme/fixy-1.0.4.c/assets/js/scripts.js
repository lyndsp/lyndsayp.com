/**
 * Main JS file for Fixy behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

		//
		// FitVids
		//
        jQuery('.post').fitVids();

        //
        // Menu Opener
        //
        if ( $( '.main-nav' ) ) {

        	$('.main-nav').before( '<a class="open-menu" href="#" title="Open Menu">Open Menu<span></span><span></span><span></span></a>' );

        	$( '.main-nav' ).hide();
        	$( '.open-menu' ).on( 'click' , function (e) {
        		e.preventDefault();
        		$( '.main-nav' ).slideToggle();
        	});

        }

    });

}(jQuery));
