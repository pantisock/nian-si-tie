var $audio = $('#audio');
var $audio1 = $('#audio1');
var $audio2 = $('#audio2');
var $audio3 = $('#audio3');
var $audio4 = $('#audio4');
var $audio5 = $('#audio5');
var $audio6 = $('#audio6');
var $audio7 = $('#audio7');
var $audioPlayer = $('.se');
var $audioPlayer1 = $('#p1');
var $audioPlayer2 = $('#p2');
var $audioPlayer3 = $('#p3');
var $audioPlayer4 = $('#p4');
var $audioPlayer5 = $('#p5');
var $audioPlayer6 = $('#p6');
var $audioPlayer7 = $('#p7');

$audioPlayer.on('mouseenter focus', function () {
  $audio.get(0).play();
});

$audioPlayer.on('mouseleave blur', function () {
  $audio.get(0).pause();
});


$audioPlayer1.on('mouseenter focus', function () {
  $audio1.get(0).play();
});

$audioPlayer1.on('mouseleave blur', function () {
  $audio1.get(0).pause();
});

$audioPlayer2.on('mouseenter focus', function () {
  $audio2.get(0).play();
});

$audioPlayer2.on('mouseleave blur', function () {
  $audio2.get(0).pause();
});

$audioPlayer3.on('mouseenter focus', function () {
  $audio3.get(0).play();
});

$audioPlayer3.on('mouseleave blur', function () {
  $audio3.get(0).pause();
});
$audioPlayer4.on('mouseenter focus', function () {
  $audio4.get(0).play();
});

$audioPlayer4.on('mouseleave blur', function () {
  $audio4.get(0).pause();
});
$audioPlayer5.on('mouseenter focus', function () {
  $audio5.get(0).play();
});

$audioPlayer5.on('mouseleave blur', function () {
  $audio5.get(0).pause();
});
$audioPlayer6.on('mouseenter focus', function () {
  $audio6.get(0).play();
});

$audioPlayer6.on('mouseleave blur', function () {
  $audio6.get(0).pause();
});
$audioPlayer7.on('mouseenter focus', function () {
  $audio7.get(0).play();
});

$audioPlayer7.on('mouseleave blur', function () {
  $audio7.get(0).pause();
});