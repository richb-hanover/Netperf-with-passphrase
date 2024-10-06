#! /bin/sh

# Script to deploy the repo files to production
# It's a hassle to pull the repo to the production directory
# Instead, pull to a local directory in `deploy` 
# update the passphrase and restart the netserver,
# then copy the files to /home/netperf/public_html

# Log into deploy account, cd to Netperf-with-passphrase
# then use this script

git pull
sudo sh /home/netperf/public_html/update_passphrase.sh
sudo cp -r * /home/netperf/public_html/
