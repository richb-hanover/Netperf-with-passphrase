#!/bin/bash
pkill netserver
passphrase=$(shuf -n 3 /home/netperf/public_html/dict.txt | tr '\n' '-' | sed 's/-$//')
echo $passphrase > /home/netperf/public_html/passphrase.txt
netserver -Z "$passphrase"
