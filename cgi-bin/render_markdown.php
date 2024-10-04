<?php
// Include Parsedown library for Markdown parsing
require_once 'Parsedown.php';

// Function to read file contents
function readFile($filename) {
    return file_get_contents($filename);
}

// Read the Markdown file
$markdown_content = readFile('../public_html/index.md');

// Read the passphrase
$passphrase = readFile('../public_html/passphrase');

// Replace {passphrase} with the actual passphrase
$markdown_content = str_replace('{passphrase}', $passphrase, $markdown_content);

// Parse Markdown to HTML
$Parsedown = new Parsedown();
$html_content = $Parsedown->text($markdown_content);

// Output the HTML
echo $html_content;
?>

<!-- # Navigate to your web directory (adjust as needed)
cd /var/www/html

# Download Parsedown
wget https://github.com/erusev/parsedown/raw/master/Parsedown.php

# Set appropriate permissions (adjust as needed)
chmod 644 Parsedown.php

# Optionally, check if the file was downloaded successfully
ls -l Parsedown.php 
-->

<!-- RewriteEngine On
RewriteRule ^index\.html$ render_markdown.php [L]
 -->