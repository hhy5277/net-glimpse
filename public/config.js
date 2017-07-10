// If not stated otherwise numbers are in px
var configEther = {
  'canvas': {
    'width': 0, // Will be set dynamically
    'height': 0, // Will be set dynamically
    'margin': 20, // Canvas margin (so nodes keep away from the borders)
    'backgroundColor': 255, // Only shades of gray
  },
  'physics': { // In phsysics are all used as toxiclibs parameters
    'drag': 1.5,
    'nodeRepulsion': 0.012, // Repulsion between two nodes
    'springRestLength': 0.2, // Spring length in rest between two nodes
    'springStrength': 0.1, // Spring strength between two nodes
  },
  'graph': {
    'cleaningIntervall': 2000, // Removing old nodes and edges every x ms
    'cleaningAge': 10000, // After how many ms will a node be removed if it haven't had an incoming package in the meantime
  },
  'edge': {
    'width': 4, // Minmum edge line width
    'weightStep': 0.01, // How much the weight is reduced per frame
    'tickWidth': 4, // Width after a packet was sent 
    'tickWeightMax': 7, // line width = width * weight 
    'tickWeightStep': 0.1, // How much the weight is increased by a tick
    'showText': true,
    'textSize': 12,
    'arrowLength': 30, // Arrow length of each edge
    'arrowWidth': 7, // Arrow width of each node
    'transparency': 150, // Transparancy in resting state
  },
  'node': {
    'width': 20, // Minumum node circle width
    'tickWidth': 40, // Widht after a packet was sent
    'showText': true,
    'textSize': 14,
    'border': 2, // Node border line thickness
    'transparency': 150, // Transparancy in resting state
  }
};

// If not stated otherwise numbers are in px
var configIp = {
  'canvas': {
    'width': 0, // Will be set dynamically
    'height': 0, // Will be set dynamically
    'margin': 20, // Canvas margin (so nodes keep away from the borders)
    'backgroundColor': 255, // Only shades of gray
  },
  'physics': { // In phsysics are all used as toxiclibs parameters
    'drag': 1.5,
    'nodeRepulsion': 0.012, // Repulsion between two nodes
    'springRestLength': 0.2, // Spring length in rest between two nodes
    'springStrength': 0.1, // Spring strength between two nodes
  },
  'graph': {
    'cleaningIntervall': 2000, // Removing old nodes and edges every x ms
    'cleaningAge': 10000, // After how many ms will a node be removed if it haven't had an incoming package in the meantime
  },
  'edge': {
    'width': 4, // Minmum edge line width
    'weightStep': 0.01, // How much the weight is reduced per frame
    'tickWidth': 4, // Width after a packet was sent
    'tickWeightMax': 7, // line width = width * weight 
    'tickWeightStep': 0.1, // How much the weight is increased by a tick
    'showText': true,
    'showUnknownPorts': false, // Special for IP packets: Show user and private ports over 1023
    'textSize': 12,
    'arrowLength': 30, // Arrow length of each edge
    'arrowWidth': 7, // Arrow width of each node
    'transparency': 150 // Transparancy in resting state
  },
  'node': {
    'width': 20, // Minumum node circle width
    'tickWidth': 40, // Widht after a packet was sent
    'showText': true,
    'textSize': 14,
    'border': 2, // Node border line thickness
    'transparency': 150, // Transparancy in resting state
  }
};

var etherTypeConfig = {
  "IPv4": {
    "color": [255, 0, 0],
    "name": "IPv4",
    "desc": "IPv4"
  },
  "IPv6": {
    "color": [0, 255, 0],
    "name": "IPv6",
    "desc": "IPv6"
  },
  "ARP": {
    "color": [00, 255, 255],
    "name": "ARP",
    "desc": "ARP"
  },
  "RARP": {
    "color": [0, 0, 255],
    "name": "RARP",
    "desc": "RARP"
  },
  "PPP": {
    "color": [255, 255, 0],
    "name": "PPP",
    "desc": "PPP"
  },
  "PPPoE Discovery Stage": {
    "color": [255, 255, 0],
    "name": "PPPoE Discovery",
    "desc": "PPPoE Discovery Stage"
  },
  "PPPoE Session Stage": {
    "color": [255, 255, 0],
    "name": "PPPoE Session",
    "desc": "PPPoE Session Stage"
  },
  "MPLS": {
    "color": [255, 100, 0],
    "name": "MPLS",
    "desc": "MPLS"
  },
  "IEEE 802.1Q VLAN-tagged frames": {
    "color": [255, 0, 255],
    "name": "VLAN",
    "desc": "IEEE 802.1Q VLAN-tagged frames"
  },
  "Appletalk": {
    "color": [50, 160, 10],
    "name": "Appletalk",
    "desc": "Appletalk"
  },
  "unknown": {
    "color": [0, 0, 0],
    "name": "unknown",
    "desc": "unknown"
  }
};

var ipPacketConfig = {
  "7": {
    "name": "Echo",
    "desc": "Echo - port 7, UDP or TCP",
    "color": [255, 0, 0]
  },
  "13": {
    "name": "Daytime",
    "desc": "Daytime - port 13, UDP or TCP",
    "color": [255, 0, 0]
  },
  "20": {
    "name": "FTP",
    "desc": "FTP data - port 20, TCP",
    "color": [255, 128, 0]
  },
  "21": {
    "name": "FTP",
    "desc": "FTP control - port 21, TCP",
    "color": [255, 128, 0]
  },
  "22": {
    "name": "SSH",
    "desc": "SSH - port 22, TCP",
    "color": [255, 255, 0]
  },
  "23": {
    "name": "telnet",
    "desc": "telnet - port 23, TCP",
    "color": [0, 191, 255]
  },
  "25": {
    "name": "SMTP",
    "desc": "SMTP (Simple Mail Transfer Protocol) - port 25, TCP",
    "color": [128, 255, 0]
  },
  "42": {
    "name": "Host Name Server",
    "desc": "Host Name Server - port 42, UDP or TCP",
    "color": [255, 0, 0]
  },
  "43": {
    "name": "Whois",
    "desc": "Whois - port 43, TCP",
    "color": [255, 0, 0]
  },
  "53": {
    "name": "DNS",
    "desc": "DNS (Domain Name Server) - port 53, UDP or TCP",
    "color": [0, 255, 191]
  },
  "67": {
    "name": "DHCP",
    "desc": "DHCP / Bootstrap Server - port 67, UDP (or TCP)",
    "color": [255, 0, 212]
  },
  "68": {
    "name": "DHCP",
    "desc": "DHCP / Bootstrap Client - port 68, UDP (or TCP)",
    "color": [255, 0, 212]
  },
  "69": {
    "name": "TFTP",
    "desc": "TFTP (Trivial File Transfer Protocol) - port 69, UDP",
    "color": [255, 128, 0]
  },
  "70": {
    "name": "Gopher",
    "desc": "Gopher - port 70, TCP",
    "color": [255, 0, 0]
  },
  "80": {
    "name": "HTTP",
    "desc": "HTTP - port 80, TCP",
    "color": [64, 64, 255]
  },
  "88": {
    "name": "Kerberos",
    "desc": "Kerberos - port 88, UDP or TCP",
    "color": [66, 244, 215]
  },
  "109": {
    "name": "POP v2",
    "desc": "POP v2 - port 109, TCP",
    "color": [25, 0, 255]
  },
  "110": {
    "name": "POP",
    "desc": "POP v3 - port 110, TCP",
    "color": [25, 0, 255]
  },
  "113": {
    "name": "Authentication Sevice",
    "desc": "Authentication Sevice - port 113, TCP",
    "color": [170, 0, 255]
  },
  "123": {
    "name": "NTP",
    "desc": "NTP (Network Time Protocol) - port 123, UDP",
    "color": [255, 0, 255]
  },
  "137": {
    "name": "NetBIOS",
    "desc": "NetBIOS - port 137, UDP or TCP",
    "color": [93, 0, 255]
  },
  "138": {
    "name": "NetBIOS",
    "desc": "NetBIOS - port 138, UDP or TCP",
    "color": [93, 0, 255]
  },
  "139": {
    "name": "NetBIOS",
    "desc": "NetBIOS - port 139, UDP or TCP",
    "color": [93, 0, 255]
  },
  "143": {
    "name": "IMAP",
    "desc": "IMAP (Internet Message Access Protocol) - port 143, TCP",
    "color": [150, 0, 20]
  },
  "161": {
    "name": "SNMP",
    "desc": "SNMP (Simple Network Management Protocol) - port 161, UDP or TCP",
    "color": [25, 0, 255]
  },
  "162": {
    "name": "SNMP",
    "desc": "SNMP (Simple Network Management Protocol) - port 162, UDP or TCP",
    "color": [25, 0, 255]
  },
  ["194"]: {
    "name": "IRC",
    "desc": "IRC (Internet Relay Chat) - port 194, TCP",
    "color": [0, 55, 255]
  },
  "213": {
    "name": "IPX over IP",
    "desc": "IPX over IP - port 213, UDP",
    "color": [255, 0, 0]
  },
  "389": {
    "name": "LDAP",
    "desc": "LDAP (Lightweight Directory Access Protocol) - port 389, UDP or TCP",
    "color": [0, 135, 255]
  },
  "443": {
    "name": "HTTPS",
    "desc": "HTTPS - port 443, TCP",
    "color": [0, 0, 200]
  },
  "445": {
    "name": "CIFS",
    "desc": "Microsoft CIFS - port 445, UDP or TCP",
    "color": [128, 244, 215]
  },
  "464": {
    "name": "Kerberos",
    "desc": "Kerberos (v5) - port 464, UDP or TCP",
    "color": [66, 244, 215]
  },
  "500": {
    "name": "IPSec",
    "desc": "IPSec (Internet Key Exchange) - port 500, UDP",
    "color": [255, 0, 0]
  },
  "525": {
    "name": "Timeserver",
    "desc": "Timeserver - port 525, UDP",
    "color": [255, 0, 0]
  },
  "530": {
    "name": "RPC",
    "desc": "RPC (Remote Procedure Call) - port 530, UDP or TCP",
    "color": [0, 169, 255]
  },
  "531": {
    "name": "IRC chat",
    "desc": "IRC chat - port 531, TCP",
    "color": [0, 55, 255]
  },
  "546": {
    "name": "DHCPv6",
    "desc": "DHCPv6 client - port 546, UDP",
    "color": [255, 0, 212]
  },
  "547": {
    "name": "DHCPv6",
    "desc": "DHCPv6 server - port 547, UDP",
    "color": [255, 0, 212]
  },
  "636": {
    "name": "LDAPS",
    "desc": "LDAPS (Lightweight Directory Access Protocol over TLS/SSL) - port 636, UDP or TCP",
    "color": [0, 135, 255]
  },
  "989": {
    "name": "FTPS",
    "desc": "FTPS (FTP over TLS/SSL) control - port 989, TCP",
    "color": [255, 128, 0]
  },
  "990": {
    "name": "FTPS",
    "desc": "FTPS (FTP over TLS/SSL) data - port 990, TCP",
    "color": [255, 128, 0]
  },
  "1194": {
    "name": "OpenVPN",
    "desc": "OpenVPN - port 1194, UDP or TCP",
    "color": [255, 255, 0]
  },
  "1433": {
    "name": "Microsoft SQL",
    "desc": "Microsoft SQL - port 1433, UDP or TCP",
    "color": [0, 255, 0]
  },
  "1434": {
    "name": "Microsoft SQL",
    "desc": "Microsoft SQL - port 1434, UDP or TCP",
    "color": [0, 255, 0]
  },
  "2483": {
    "name": "Oracle DB",
    "desc": "Oracle DB - port 2483, UDP or TCP",
    "color": [0, 255, 0]
  },
  "2484": {
    "name": "Oracle DB",
    "desc": "Oracle DB - port 2484, UDP or TCP",
    "color": [0, 255, 0]
  },
  "3074": {
    "name": "XBOX Live",
    "desc": "XBOX Live - port 3074, UDP or TCP",
    "color": [255, 0, 0]
  },
  "3306": {
    "name": "MySQL",
    "desc": "MySQL - port 3306, UDP or TCP",
    "color": [0, 255, 0]
  },
  "5000": {
    "name": "UPnP",
    "desc": "UPnP - port 5000, UDP or TCP",
    "color": [66, 244, 215]
  },
  "5222": {
    "name": "XMPP/Jabber",
    "desc": "XMPP/Jabber - port 5222, UDP or TCP",
    "color": [0, 55, 255]
  },
  "5223": {
    "name": "XMPP/Jabber",
    "desc": "XMPP/Jabber - port 5223, UDP or TCP",
    "color": [0, 55, 255]
  },
  "5432": {
    "name": "PostgreSQL",
    "desc": "PostgreSQL - port 5432, UDP or TCP",
    "color": [0, 255, 0]
  },
  "5500": {
    "name": "VNC Server",
    "desc": "VNC Server - port 5500, UDP or TCP",
    "color": [255, 0, 0]
  },
  "5800": {
    "name": "VNC over HTTP",
    "desc": "VNC over HTTP - port 5800, UDP or TCP",
    "color": [255, 0, 0]
  },
  "6000": {
    "name": "X11",
    "desc": "X11 - port 6000, UDP or TCP",
    "color": [255, 255, 0]
  },
  "6001": {
    "name": "X11",
    "desc": "X11 - port 6001, UDP or TCP",
    "color": [255, 255, 0]
  },
  "6665": {
    "name": "IRC",
    "desc": "IRC - port 6665, UDP or TCP",
    "color": [0, 55, 255]
  },
  "6666": {
    "name": "IRC",
    "desc": "IRC - port 6666, UDP or TCP",
    "color": [0, 55, 255]
  },
  "6667": {
    "name": "IRC",
    "desc": "IRC - port 6667, UDP or TCP",
    "color": [0, 55, 255]
  },
  "6668": {
    "name": "IRC",
    "desc": "IRC - port 6668, UDP or TCP",
    "color": [0, 55, 255]
  },
  "6669": {
    "name": "IRC",
    "desc": "IRC - port 6669, UDP or TCP",
    "color": [0, 55, 255]
  },
  "6679": {
    "name": "IRC over SSL",
    "desc": "IRC over SSL - port 6679, UDP or TCP",
    "color": [0, 55, 255]
  },
  "8080": {
    "name": "HTTP Proxy",
    "desc": "HTTP Proxy (non standard) - port 8080, TCP",
    "color": [64, 64, 255]
  },
  "8443": {
    "name": "HTTPS Proxy",
    "desc": "HTTPS (non standard) - port 8443, TCP",
    "color": [0, 0, 200]
  },
  "9000": {
    "name": "9000",
    "desc": "HTTP (Play Framework) - port 9000, TCP",
    "color": [64, 64, 255]
  },
  "9443": {
    "name": "9443",
    "desc": "HTTPS (Play Framework) - port 9443, TCP",
    "color": [0, 0, 200]
  },
  "9800": {
    "name": "WebDAV",
    "desc": "WebDAV - port 9800, TCP",
    "color": [66, 244, 215]
  },
  "unknown": {
    "name": "unknown",
    "desc": "unknown",
    "color": [0, 0, 0]
  }
};