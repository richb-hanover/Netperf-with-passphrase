#!/bin/bash
pkill netserver
adj=$(shuf -n 1 ./adjectives.txt)
noun=$(shuf -n 1 ./nouns.txt)
passphrase="$adj-$noun"
echo $passphrase > ./passphrase.txt
netserver -Z "$passphrase"
