#!/bin/bash
pkill netserver
passphrase=$(shuf -n 3 /home/netperf/dict | tr '\n' '-' | sed 's/-$//')
echo $passphrase > /home/netperf/passphrase.txt
netserver -Z "$passphrase"
