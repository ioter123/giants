/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */
;( function() {


	'use strict';

	var bodyEl = document.body,
		videoWrap = document.querySelector('.video-wrap'),
		videoEl = videoWrap.querySelector('video'),
		iframeEl = videoWrap.querySelector('iframe'),
		playCtrl = document.querySelector('.action--play'),
		closeCtrl = document.querySelector('.action--close'),
        popupCtrl = document.querySelector('.action--popup');

    let player;
    window.YT.ready(function() {
        player = new window.YT.Player('youtube_video', {});
    });


    function init() {
        initEvents();
    };

	function initEvents() {
	    popupCtrl.addEventListener('click', popup);
		playCtrl.addEventListener('click', play);
		closeCtrl.addEventListener('click', hide);
		videoEl.addEventListener('canplaythrough', allowPlay);
		videoEl.addEventListener('ended', hide);
	};

	function allowPlay() {
		classie.add(bodyEl, 'video-loaded');
	};

	function play() {
		videoEl.currentTime = 0;
		classie.remove(videoWrap, 'video-wrap--hide');
		classie.add(videoWrap, 'video-wrap--show');
		setTimeout(function() {player.playVideo();}, 1000);
	};

	function hide() {
		classie.remove(videoWrap, 'video-wrap--show');
		classie.add(videoWrap, 'video-wrap--hide');
		videoEl.pause();
		player.seekTo(0);
		player.pauseVideo();

	};

	function popup() {
	    window.open('ticket_pop', "", '_blank, width=1000, height=900');
	};



	init();

})();