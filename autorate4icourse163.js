// JavaScript source code
// ==UserScript==
// @name         AutoRate4iCourse163
// @namespace    http://github.com/ducksoft
// @version      0.1
// @description  网易云课堂自动评作业
// @author       DuckSoft
// @match        http://www.icourse163.org/learn/*
// @match        http://www.icourse163.org/spoc/learn/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    $(function () {
        var mScore;
        $("#courseLearn-inner-box").each(function () {
            $(this).bind("dblclick", function () {
                // choose highest score
                Array.prototype.slice.call(document.getElementsByClassName("s")).forEach(function (e) {
                    mScore = 0;
                    Array.prototype.slice.call(e.getElementsByClassName("j-select")).forEach(function (e1) {
                        mScore = e1.value;
                    });
                    Array.prototype.slice.call(e.getElementsByClassName("j-select")).forEach(function (e1) {
                        if (e1.value == mScore) {
                            e1.checked = true;
                        }
                    });
                });
                // send rubbish comment
                Array.prototype.slice.call(document.getElementsByTagName("textarea")).forEach(function (e) {
                    e.value = "666";
                });
                // auto-post
                document.getElementsByClassName("j-submitbtn")[0].click();
            });
        });
    });
})();
