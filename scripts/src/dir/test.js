/**
 * @module dir/test
 * @author Viacheslav Lotsmanov
 */

define(['jquery'], function ($) {
$(function domReady() {
    alert('Module "dir/test"\nH1 text: ' + $('h1').text());
}); // domReady
}); // define
