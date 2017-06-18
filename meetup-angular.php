<?php
/**
 * @author Alefe Souza <contact@alefesouza.com>
 */

// Problema de Access-Control-Allow-Origin caso chame a API do Meetup a partir do localhost em Node.js
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$meetup = $_GET['meetup'];

$events = file_get_contents('http://api.meetup.com/'.$meetup.'/events?status=past');

// Revertendo ordem para os mais recentes aparecerem primeiro
$array = json_decode($events);

$reverse = array_reverse($array);

echo json_encode($reverse);