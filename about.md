# About this site

<h1>About This Site and Server</h1>

<p>This site is a simple Node.js/Express/Handlebars concoction.
It examines the creation date of netserver.debug* files from /tmp, 
then uses the results to populate a Handlebars template. 
Express provides the backend web routing/handling, 
and Node.js makes it all go. Original site built in March 2014.
</p>

<p>Apache2 is running on port 80, and uses a virtual host for netperf.richb-hanover.com 
to proxy to the node process that's listening on port 3000.
</p>
<p>Many thanks to Raymond Camden for his delightful 
<a href="http://code.tutsplus.com/tutorials/introduction-to-express--net-33367">Introduction to Express</a>
tutorial which is the basis of this code.
Get the source to this project from <a href="https://github.com/richb-hanover/netperfmon">Github.com.</a></p>

<h3>About this Server: netperf.richb-hanover.com</h3>

<p>The "bench.sh" script gives a measure of the 
connectivity and horsepower of a Virtual Private Server (VPS).
Thanks to <a href="https://freevps.us">freevps.us</a> for the cool script
at <a href="https://freevps.us/downloads/bench.sh">https://freevps.us/bench.sh</a>
(<a href="http://netperf.richb-hanover.com/other/bench.sh">local archive.</a>)
To use it, simply copy the <small><code>date; wget...</code></small> line below and paste it into
a terminal session on your own netperf server. 
Here are the results from the bench.sh script for netperf.richb-hanover.com:
</p>
<small><pre>
$ date; wget freevps.us/downloads/bench.sh -O - -o /dev/null|bash
Thu Oct 22 08:33:02 EDT 2015
CPU model :  Intel(R) Xeon(R) CPU E3-1240 V2 @ 3.40GHz
Number of cores : 4
CPU frequency :  3399.950 MHz
Total amount of ram : 1024 MB
Total amount of swap : 1024 MB
System uptime :   1 day, 21:38,
Download speed from CacheFly: 85.8MB/s
Download speed from Coloat, Atlanta GA: 50.3MB/s
Download speed from Softlayer, Dallas, TX: 34.3MB/s
Download speed from Linode, Tokyo, JP: 6.39MB/s
Download speed from i3d.net, Rotterdam, NL: 4.74MB/s
Download speed from Leaseweb, Haarlem, NL: 15.2MB/s
Download speed from Softlayer, Singapore: 6.80MB/s
Download speed from Softlayer, Seattle, WA: 10.2MB/s
Download speed from Softlayer, San Jose, CA: 46.1MB/s
Download speed from Softlayer, Washington, DC: 19.4MB/s
I/O speed :  940 MB/s</pre></small>

Rich Brown <br />
<a href="mailto:info@richb-hanover.com">info@richb-hanover.com</a>
