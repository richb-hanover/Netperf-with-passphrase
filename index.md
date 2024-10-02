# Welcome to netperf.bufferbloat.net

**netperf** is a network performance measurement tool 
     ([github.com/HewlettPackard/netperf/](https://github.com/HewlettPackard/netperf/blob/master/README)</a>).
     It relies on two programs running on separate computers:

* a **netserver** that listens for commands from ... 
* a **netperf client** that sends those commands at the user's direction.

This server is a **netserver**.
The **netperf client** tells the netserver to send or receive streams of data
between the two devices and then measures the data transfer rates between them.

This server is only available to those who use the passphrase - see below.

> ## Abuse Policy
> 
> **Bandwidth for the netperf-x.bufferbloat.net servers
> is donated by individuals
> who pay their own money to support the servers. 
> These servers are not sponsored by any deep-pockets company,
> so please use deliberately.**
> This server is open to individuals for occasional network performance tests 
> and network researchers who need a stable system for testing network protocols and implementations.
> Use the passphrase below with the `-Z` option of `netperf`
>
> **Today's passphrase is:** {{passphrase}} 
>
> We reserve the right to block access if we detect sustained over-use.
> If you would like to use this server frequently, please contact us through the [About page](about).

## Recent netserver activity
This server hosts a **netserver** that is publicly accessible. 
It's open to anyone to use, so it may be heavily loaded from time to time.
It also has limited bandwidth to certain parts of the Internet 
(see the [About page](about) for details.)
This page shows the current and recent load.

The stats below show the netserver process activity, summarized from the creation dates of the 'netserver.debug*' files in /tmp.

