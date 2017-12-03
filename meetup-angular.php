<?php
// Problema de Access-Control-Allow-Origin caso chame a API do Meetup a partir do localhost em Node.js
header('Access-Control-Allow-Origin: *');

header('Content-Type: application/json; charset=utf-8');

$meetup = $_GET['meetup'];

$events = file_get_contents('http://api.meetup.com/'.$meetup.'/events?status=past');

// Revertendo ordem para os mais recentes aparecerem primeiro
$array = json_decode($events);

$reverse = array_reverse($array);

$events = array_map(function($v) {
  preg_match_all('~<img.*?src=["\']+(.*?)["\']+~', $v->description, $urls);
  
  $v->image = $urls[1][0];
  $v->place = $v->venue->name ?: '';
  
  return $v;
}, $reverse);

echo json_encode($events, JSON_PRETTY_PRINT);