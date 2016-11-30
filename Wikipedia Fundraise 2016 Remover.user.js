// ==UserScript==
// @name         Wikipedia Fundraise 2016 Remover
// @namespace    wikipedia.fundraise.2016.boku
// @version      0.1
// @description  Wikipedia Fundraise 2016 Remover Userscript
// @author       BoKu
// @include      *wikipedia.org/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    function DoIt(){
        /* hide the banner, and remove the extra space which was added for it */
        mw.centralNotice.hideBanner();
        $('#B1617_112923_en6C_dsk_p2_sm_txt_dd1').hide();
        $('#mw-panel').css('top', '160px');
        $('#mw-head').css('top', '0px');
        $('#mw-page-base').css('margin-top', '0');
    }
    window.setTimeout(DoIt,1000);
})();
