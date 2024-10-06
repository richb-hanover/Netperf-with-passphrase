#!/bin/bash
pkill netserver
passphrase=$(shuf -n 3 ./dict.txt | tr '\n' '-' | sed 's/-$//')
echo $passphrase > ./passphrase.txt
netserver -Z "$passphrase"
