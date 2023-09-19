import React, { useState } from "react";
import { set } from "react-hook-form";
import { Link, Navigate, json } from "react-router-dom";

const Syllabus = () => {
  const [list, setList] = useState(null);
  const [nav, setNav] = useState(false);
  const syllabus = [
    {
      title: "Know your pc -",
      des: [
        "Install and configure PC system unit components and peripheral devices.",
        "Install , configure , and troubleshoot display , multimedia devices , storage devices , and internal system components.",
        "Explain network infrastructure concepts.",
        "Implement client virtualization.",
        " Support and troubleshoot laptops , mobile devices and print devices.",
      ],
      subH: null,
    },
    {
      title: "CompTIA Network+",
      des: [
        "Networking fundamentals.",
        "Explain basic networking concepts including network services , physical connections , topologies and architecture , and cloud connectivity.",
        "Network implimentations.",
        "Routing technologies , networking devices ,ethernet solutions wireless.",
        "Network operations.",
        "Monitor and optimize networks to ensure business continuity.",
        "Network security concepts and network attacks in order to harden networks troubleshoot common cable , connectivity and software issues related to networking.",
      ],
      subH: null,
    },
    {
      title: "MCSA Microsoft Windows Server 2016",
      des: [
        "Install Windows Servers in Host and Compute Environments",
        "Implement Storage Solutions, Hyper-V, Windows Containers & High Availability.",
        "Maintain and Monitor Server Environments.",
        "Implement DNS, DHCP and IPAM, Network Connectivity & Remote Access Solutions.",
        "Implement Core and Distributed Network Solutions.",
        "Implement an Advanced Network Infrastructure.",
        "Install, Configure, Manage and Maintain Active Directory Domain Services (AD DS) Create and Manage Group Policy.",
        "Implement AD CS and Identity Federation and Access Solutions",
      ],
      subH: null,
    },
    {
      title: "RedHat Linux",
      des: [
        "Handling files, directories, command-line Create simple shell scripts.",
        "Operate running systems.",
        "environments, and documentation.",
        "Configure local storage using partitions and logical volumes.",
        "Create and configure file systems and file system attributes.",
        "Deploy, configure, and maintain systems, including software installation, update, & core services.",
        "Manage users and groups.",
        "Manage security, including basic firewall and SELinux configuration Perform basic container management.",
      ],
      subH: null,
    },
    {
      title: "Cisco CCNA",
      des: null,
      subH: {
        NETWORK_FUNDAMENTALS: [
          "Network component.",
          "Network topology architectures , Physical interface and cabling.",
          "Network topology architectures , Physical interface and cabling.",
          "IPv4 addressing, subnetting , IPv6 addressing and prefix.",
          "IPv6 address , Virtualization fundamentals.",
          "Wireless principles , Switching concepts.",
        ],
        NETWORK_ACCESS: [
          "VLANS & interswitch connectivity L2 discovery protocols (CDP and LLDP).",
          "EtherChannel , STP & RSTP.",
          "Wireless Architectures and AP , AP and WLC management , Wireless LAN configuration.",
        ],
        IP_CONNECTIVITY: [
          "Components of routing table , Router forwarding decision , Configure and verify static routing",
          "Configure and verify single area OSPFV2 , First hop redundancy protocol.",
          "IP SERVICES.",
          "NAT/PAT NTP client and server mode , DHCP and DNS role in network , SNMP in network operations.",
          "Syslog features , DHCP client and relay , Forwarding PHB for QoS , Remote access using SSH.",
          "TFTP/FTP.",
        ],
        SECURITY_FUNDAMENTALS: [
          "Security concepts , Security program elements , Device access control using local passwords.",
          "Security password policies elements.",
          "Remote access and site-to-site VPNs , ACL , Layer 2 security features, AAA Wireless security protocols WLAN using WPA2 PSK.",
        ],
        AUTOMATION_AND_PROGRAMMABILITY: [
          "Automation impact on network mgmt. Traditional vs controller-based networking.",
          "Controller-based and SD architectures.",
          "Control plane and data plane , North-bound and south-bound APIs.",
          "DNA Center enabled device mgmt. Characteristics of REST-based APIs Puppet, Chef, and Ansible capabilities Interpret JSON encoded data.",
        ],
      },
    },
    {
      title: "Cisco CCNP",
      des: null,
      subH: {
        ARCHITECTURE: [
          "Design principles used in an enterprise network Principles of SD-WAN & SDA solution Design principles of a WLAN deployment Concepts of wired and wireless Qo5 On-prem and cloud infrastructure deployments.",
          "Hardware vs software switching.",
        ],
        VIRTUALIZATION: [
          "Virtualization technologies , data path virtualization technologies , network virtualization concepts.",
        ],
        INFRASTRUCTURE: [
          "Wireless-L1 concepts, AP modes, antennas.",
          "AP discovery L2 & L3 roaming, TS WLAN L2-Trunking, EtherChannel, RSTP, MST.",
          "NTP, NAT/PAT, HSRP, VRRP, Multicast , L3-EIGRP, OSPF, BGP.",
        ],
        NETWORK_ASSURANCE: [
          "Debugs, trace route, ping, SNMP, and syslog Syslog for remote logging",
          "NetFlow and Flexible NetFlow",
          "SPAN/RSPAN/ERSPAN, IPSLA NETCONF and RESTCONF Cisco DNA Center workflows",
        ],
        SECURITY: [
          "Device access control.",
          "Infrastructure security features (ACLS, COPP) Wireless security features (EAP, WebAuth, PSK).",
          "REST API security.",
          "Network security design Threat defense, Endpoint security, Next-generation firewall.",
        ],
        AUTOMATION: [
          "Basic Python components and scripts.",
          "Construct valid JSON encoded file.",
          "High-level principles and benefits of YANG.",
          "APIs for Cisco DNA Center and vManage.",
          "Interpret REST API in payload using DNA Center and RESTCONF Construct EEM applet to automate configuration.",
          "Agent vs. agentless orchestration tools",
        ],
      },
    },
  ];

  const toReadyLists = (values) => {
    setList(values);
  };

  return (
    <div>
      {nav && <Navigate to={"/contact"} />}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-12 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          {/* <div className=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              1. Know your pc -
            </h2>
            <p className="mb-4 font-light px-6 max-sm:px-4">
              <ul>
                <li>
                  Install and configure PC system unit components and peripheral
                  devices.
                </li>
                <li>
                  Install , configure , and troubleshoot display , multimedia
                  devices , storage devices , and internal system components.{" "}
                </li>
                <li>Explain network infrastructure concepts.</li>
                <li>Implement client virtualization</li>
                <li>
                  Support and troubleshoot laptops , mobile devices and print
                  devices.
                </li>
              </ul>
              <button
                type="button"
                className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setNav(true)}
              >
                Register Now
              </button>
            </p>
          </div>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              2. CompTIA Network+
            </h2>
            <p className="mb-4 font-light px-6 max-sm:px-4">
              <ul>
                <li>Networking fundamentals</li>
                <li>
                  Explain basic networking concepts including network services ,
                  physical connections , topologies and architecture , and cloud
                  connectivity.
                </li>
                <li>Network implimentations</li>
                <li>
                  Routing technologies , networking devices ,ethernet solutions
                  wireless.
                </li>
                <li>Network operations.</li>
                <li>
                  Monitor and optimize networks to ensure business continuity.
                </li>
                <li>
                  Network security concepts and network attacks in order to
                  harden networks troubleshoot common cable , connectivity and
                  software issues related to networking.
                </li>
              </ul>
              <button
                type="button"
                className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setNav(true)}
              >
                Register Now
              </button>
            </p>
          </div>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              3. MCSA Microsoft Windows Server 2016
            </h2>
            <p className="mb-4 font-light px-6 max-sm:px-4">
              <ul>
                <li>
                  Install Windows Servers in Host and Compute Environments.
                </li>
                <li>
                  Implement Storage Solutions, Hyper-V, Windows Containers &
                  High Availability.
                </li>
                <li>Maintain and Monitor Server Environments.</li>
                <li>
                  Implement DNS, DHCP and IPAM, Network Connectivity & Remote
                  Access Solutions.
                </li>
                <li>Implement Core and Distributed Network Solutions</li>
                <li>Implement an Advanced Network Infrastructure</li>
                <li>
                  Install, Configure, Manage and Maintain Active Directory
                  Domain Services (AD DS) Create and Manage Group Policy.
                </li>
                <li>
                  Implement AD CS and Identity Federation and Access Solutions.
                </li>
              </ul>
              <button
                type="button"
                className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setNav(true)}
              >
                Register Now
              </button>
            </p>
          </div>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              4. RedHat Linux
            </h2>
            <p className="mb-4 font-light px-6 max-sm:px-4">
              <ul>
                <li>
                  Handling files, directories, command-line Create simple shell
                  scripts.
                </li>
                <li>Operate running systems.</li>
                <li>environments, and documentation.</li>
                <li>
                  Configure local storage using partitions and logical volumes.
                </li>
                <li>
                  Create and configure file systems and file system attributes.
                </li>
                <li>
                  Deploy, configure, and maintain systems, including software
                  installation, update, & core services.
                </li>
                <li>Manage users and groups.</li>
                <li>
                  Manage security, including basic firewall and SELinux
                  configuration Perform basic container management.
                </li>
              </ul>
              <button
                type="button"
                className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setNav(true)}
              >
                Register Now
              </button>
            </p>
          </div> */}
          {syllabus.map((item, index) => (
            <div
              key={index}
              className="text-gray-500 sm:text-lg dark:text-gray-400"
            >
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                {index + 1}. {item.title}
              </h2>
              <p className="mb-4 font-light px-6 max-sm:px-4">
                <ul>
                  {item.des === null? (
                    <>
                      {item.subH &&
                        Object.entries(item.subH).map(([key, value], index) => (
                          <ul key={index}>
                            <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                              {key}
                            </h3>
                            {JSON.stringify(value)
                              .replace("[", "")
                              .replace("]", "")
                              .split('",')
                              .map((el, subIndex) => (
                                <li key={subIndex}>{el.slice(1, -1)}</li>
                              ))}
                          </ul>
                        ))}
                    </>
                  ) : (
                    <ul>
                      {item.des.map((el, index)=>{return <li key={index} >{el}</li>})}
                    </ul>
                  )}
                </ul>
                <button
                  type="button"
                  className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setNav(true)}
                >
                  Register Now
                </button>
              </p>
            </div>
          ))}
          {/* <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              6. Cisco CCNP
            </h2>
            <p className="mb-4 font-light px-6 max-sm:px-4">
              <ul>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  ARCHITECTURE{" "}
                </h3>
                <li>
                  Design principles used in an enterprise network Principles of
                  SD-WAN & SDA solution Design principles of a WLAN deployment
                  Concepts of wired and wireless Qo5 On-prem and cloud
                  infrastructure deployments.
                </li>
                <li>Hardware vs software switching.</li>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  VIRTUALIZATION{" "}
                </h3>
                <li>
                  Virtualization technologies , data path virtualization
                  technologies , network virtualization concepts
                </li>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  INFRASTRUCTURE{" "}
                </h3>
                <li>Wireless-L1 concepts, AP modes, antennas.</li>
                <li>
                  AP discovery L2 & L3 roaming, TS WLAN L2-Trunking,
                  EtherChannel, RSTP, MST.
                </li>
                <li>
                  NTP, NAT/PAT, HSRP, VRRP, Multicast , L3-EIGRP, OSPF, BGP.
                </li>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  NETWORK ASSURANCE
                </h3>
                <li>
                  Debugs, trace route, ping, SNMP, and syslog Syslog for remote
                  logging.
                </li>
                <li>NetFlow and Flexible NetFlow.</li>
                <li>
                  SPAN/RSPAN/ERSPAN, IPSLA NETCONF and RESTCONF Cisco DNA Center
                  workflows.
                </li>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  SECURITY
                </h3>
                <li>Device access control.</li>
                <li>
                  Infrastructure security features (ACLS, COPP) Wireless
                  security features (EAP, WebAuth, PSK).
                </li>
                <li>REST API security</li>
                <li>
                  Network security design Threat defense, Endpoint security,
                  Next-generation firewall
                </li>
                <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  AUTOMATION
                </h3>
                <li>Basic Python components and scripts.</li>
                <li>Construct valid JSON encoded file.</li>
                <li>High-level principles and benefits of YANG.</li>
                <li>APIs for Cisco DNA Center and vManage.</li>
                <li>
                  Interpret REST API in payload using DNA Center and RESTCONF
                  Construct EEM applet to automate configuration.
                </li>
                <li>Agent vs. agentless orchestration tools</li>
              </ul>
              <button
                type="button"
                className="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setNav(true)}
              >
                Register Now
              </button>
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
