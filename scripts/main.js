"use strict";$(document).ready(function(){$(window).on("load",function(){"#app"==window.location.hash&&$(".navbar-fixed, .page-footer").hide()}),$(".pushpin-nav").pushpin({top:48}),$(".button-collapse").sideNav({menuWidth:240}),$(window).scroll(function(){$(this).scrollTop()>100?$("#scrollup").fadeIn(100):$("#scrollup").fadeOut(300)}),$("#scrollup").click(function(){$("body,html").animate({scrollTop:0},500)})});