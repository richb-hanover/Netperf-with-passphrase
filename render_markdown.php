<?php
// Include Parsedown library for Markdown parsing
require_once 'Parsedown.php';

// Function to read file contents
// function readFile($filename) {
//     return file_get_contents($filename);
// }

// Read the Markdown file
$markdown_content = file_get_contents('./index.md');

// Read the passphrase
$passphrase = file_get_contents('./passphrase.txt');

// Replace {passphrase} with the actual passphrase
$markdown_content = str_replace('{passphrase}', $passphrase, $markdown_content);

// Parse Markdown to HTML
$Parsedown = new Parsedown();
$html_content = $Parsedown->text($markdown_content);

// Output the HTML
echo $html_content;
?>
