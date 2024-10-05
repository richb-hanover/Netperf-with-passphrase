#!/bin/bash
pkill netserver
passphrase=$(shuf -n 3 /home/netperf/Netperf-with-passphrase/dict.txt | tr '\n' '-' | sed 's/-$//')
echo $passphrase > /home/netperf/Netperf-with-passphrase/passphrase.txt
netserver -Z "$passphrase"
