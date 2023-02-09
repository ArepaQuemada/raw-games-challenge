<?php

if (!isset($_GET['id'])){
    echo("The id was not defined");
    die();
}
if (!isset($_GET['operator'])){
    echo("The operator was not defined");
    die();
}
if (!isset($_GET['language'])){
    echo("The language was not defined");
    die();
}
if (!isset($_GET['currency'])){
    echo("The currency was not defined");
    die();
}
if (!isset($_GET['token'])){
    echo("The token was not defined");
    die();
}