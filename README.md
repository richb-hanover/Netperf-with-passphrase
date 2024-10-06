# README

This server hosts a `neperf` server.
To minimize unnecesary traffic, the `netserver` process uses
a passphrase set with the `-Z` option.

That `passphrase` is created by the _update\_passphrase.sh_ script.
The script stops any `netserver` instances,
generates a new passphrase,
writes that passphrase into _passphrase.txt_,
then restarts with `netserver -Z new-passphrase`

This is the `crontab -e` entry.
It runs at 1 minute after midnight to update the passphrase
and restart the `netserver`

```
1 0 * * * cd /home/netperf/public_html && /bin/bash ./update_passphrase.sh
```

People learn the current passphrase by going to:
[https://netperf.bufferbloat.net](https://netperf.bufferbloat.net).
A PHP script generates the main page by returning the contents of
the _index.md_ file, after substituting the current passphrase
(in _passphrase.txt_) for `{passphrase}` in the .md.

The _update\_passphrase.sh_ script can be run at any time.
It updates the _passphrase.txt_ in the main _/home/netperf/public\_html_ directory
then restarts `netserver -Z $passphrase.txt`

## Configuration

This site runs as a virtual host on atl.richb-hanover.com.
The VirtualHost config file sets the DocumentRoot to _/home/netperf/public\_html_.

To create the site, use Virtualmin to create a new host
Set up Apache, but no DNS, no mail, no MariaDB server.
I turned on AWStats for fun.
Then use Let's Encrypt to request a signed SSL Certificate.

No access permissions were changed after the
initial host configuration in Virtualmin.
The `deploy.sh` script populates the DocumentRoot as needed.

## Testing

Test the page locally using `php -S localhost:8000`

## Deploying

To deploy this site, log in as `deploy`,
`cd Netperf-with-passphrase` and use `sudo sh deploy.sh`.

`deploy.sh` copies the files to the _/home/netperf/public\_html_ directory,
then re-runs the _update\_passphrase.sh_ script from that directory.

