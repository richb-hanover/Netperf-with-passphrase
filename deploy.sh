#! /bin/sh

# Script to deploy the Netperf-with-passphrase files
# It's a hassle to pull from github.com and then 
# get all the files into the right place.

# Just use this script:
# Log into deploy account, then use this script

cd Netperf-with-passphrase
git pull
sudo cp -r * /home/netperf/Netperf-with-passphrase/
sudo php /home/netperf/Netperf-with-passphrase/update_passphrase.sh