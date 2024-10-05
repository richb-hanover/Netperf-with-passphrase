<?php
// Include Parsedown library for Markdown parsing
require_once 'Parsedown.php';

// Function to read file contents
// function readFile($filename) {
//     return file_get_contents($filename);
// }

// Read the HTML template
$html_template = file_get_contents('public/index.html');


// Read the Markdown file
$markdown_content = file_get_contents('./index.md');

// Read the passphrase
$passphrase = file_get_contents('./passphrase.txt');

// Replace {passphrase} with the actual passphrase
$markdown_content = str_replace('{passphrase}', $passphrase, $markdown_content);

// Parse Markdown to HTML
$Parsedown = new Parsedown();
$html_content = $Parsedown->text($markdown_content);

// Plop the $html_content into the $html_template
$html_template = str_replace('{body}', $html_content, $html_template)

// Output the HTML
echo $html_template;
?>
