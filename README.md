# README

This web site displays a passphrase that is required for
the `netperf` server on this host.

This site has a PHP script that returns the contents of
the _index.md_ file, substituting the current passphrase
(in _passphrase.txt_) for `{passphrase}` in the .md.

That `passphrase` is created by a cron job that runs at
one minute after midnight.
It stops any `netserver` instances,
generates a new passphrase,
writes that passphrase into _/home/netperf/passphrase.txt_,
then restarts with `netserver -Z new-passphrase`

The cron job that does this is _update\_passphrase.sh_
and it is invoked with this `crontab -e` entry:

```
1 0 * * * /bin/bash /home/netperf/update_passphrase.sh
```
