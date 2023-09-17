import React from "react";
import acnp from "../media/acnp.jpg";
import ccna from "../media/CCNA _ CCNP _ CCST.png";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import './css/home.css'

const CoursesAndTraining = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const ytPlaylist = [
    {
      name: "ccna",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
    {
      name: "ccn2",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
    {
      name: "ccn3",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
  ];

  return (
    <div>
      {modalACNP({ open, setOpen, cancelButtonRef })}
      <div className="">
        <div className="py-14 flex justify-center items-center">
          <h1 className=" text-4xl max-sm:text-2xl max-sm:py-2 text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
            Our Courses and Training
          </h1>
        </div>
        <div className="max-w-7xl">
          <div className="b" >
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 place-items-center mx-8 ">
              <Link onClick={() => setOpen(true)}>
                <img
                  className="rounded-lg border border-orange-500 p-0 shadow-lg cursor-pointer"
                  src={acnp}
                  alt="acnp"
                />
              </Link>
              <Link to={"/courses"}>
                <img
                  className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg"
                  src={ccna}
                  alt="ccna"
                />
              </Link>
            </div>
          </div>

          <div className="mt-16 mb-6 flex justify-center items-center">
            <h1 className=" text-4xl max-sm:text-2xl max-sm:py-2 text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
              STUDY MATRIAL AND RECORDED CLASSES
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 mx-10 my-10 max-md:grid-cols-1 place-items-center">
            <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0" >
            <iframe
              className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg w-full aspect-video"
              src="https://www.youtube.com/embed/videoseries?si=vur6F-mj_wPahjOV&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO"
              ></iframe>
              </div>
              <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0" >
            <iframe
              className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg w-full aspect-video"
              src="https://www.youtube.com/embed/videoseries?si=d6cF1JPr_0AkvP-y&amp;list=PLA3rKuTKDmOkHJn6AL9HGNSnmvpK0mMkk"
              ></iframe>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function modalACNP({ open, setOpen, cancelButtonRef }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-extrabold leading-6 text-gray-900"
                      >
                        ACNP Syllabus
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="">
                          <h2 className="px-0 py-4 font-semibold">
                            Know your pc -
                          </h2>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>
                                Install and configure PC system unit components
                                and peripheral devices.
                              </li>
                              <li>
                                Install , configure , and troubleshoot display ,
                                multimedia devices , storage devices , and
                                internal system components.{" "}
                              </li>
                              <li>Explain network infrastructure concepts.</li>
                              <li>Implement client virtualization</li>
                              <li>
                                Support and troubleshoot laptops , mobile
                                devices and print devices.
                              </li>
                            </ul>
                          </p>
                          <h2 className="px-0 py-4 font-semibold">
                            CompTIA Network+{" "}
                          </h2>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>Networking fundamentals</li>
                              <li>
                                Explain basic networking concepts including
                                network services , physical connections ,
                                topologies and architecture , and cloud
                                connectivity.
                              </li>
                              <li>Network implimentations</li>
                              <li>
                                Routing technologies , networking devices
                                ,ethernet solutions wireless.
                              </li>
                              <li>Network operations.</li>
                              <li>
                                Monitor and optimize networks to ensure business
                                continuity.
                              </li>
                              <li>
                                Network security concepts and network attacks in
                                order to harden networks troubleshoot common
                                cable , connectivity and software issues related
                                to networking.
                              </li>
                            </ul>
                          </p>
                          <h2 className="px-0 py-4 font-semibold">
                            MCSA Microsoft Windows Server 2016{" "}
                          </h2>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <li>
                                Install Windows Servers in Host and Compute
                                Environments.
                              </li>
                              <li>
                                Implement Storage Solutions, Hyper-V, Windows
                                Containers & High Availability.
                              </li>
                              <li>Maintain and Monitor Server Environments.</li>
                              <li>
                                Implement DNS, DHCP and IPAM, Network
                                Connectivity & Remote Access Solutions.
                              </li>
                              <li>
                                Implement Core and Distributed Network Solutions
                              </li>
                              <li>
                                Implement an Advanced Network Infrastructure
                              </li>
                              <li>
                                Install, Configure, Manage and Maintain Active
                                Directory Domain Services (AD DS) Create and
                                Manage Group Policy.
                              </li>
                              <li>
                                Implement AD CS and Identity Federation and
                                Access Solutions.
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                RedHat Linux
                              </h3>
                              <ul>
                                <li>
                                  Handling files, directories, command-line
                                  Create simple shell scripts.
                                </li>
                                <li>Operate running systems.</li>
                                <li>environments, and documentation.</li>
                                <li>
                                  Configure local storage using partitions and
                                  logical volumes.
                                </li>
                                <li>
                                  Create and configure file systems and file
                                  system attributes.
                                </li>
                                <li>
                                  Deploy, configure, and maintain systems,
                                  including software installation, update, &
                                  core services.
                                </li>
                                <li>Manage users and groups.</li>
                                <li>
                                  Manage security, including basic firewall and
                                  SELinux configuration Perform basic container
                                  management.
                                </li>
                              </ul>
                            </ul>
                          </p>
                          <h2 className="px-0 py-4 font-semibold">
                            Cisco CCNA{" "}
                          </h2>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <h3 className="px-0 py-2 text-black font-medium">
                                NETWORK FUNDAMENTALS{" "}
                              </h3>
                              <li>Network component.</li>
                              <li>
                                Network topology architectures , Physical
                                interface and cabling.
                              </li>
                              <li>
                                Identify interface and cable , Compare TCP to
                                UDP.
                              </li>
                              <li>
                                IPv4 addressing, subnetting , IPv6 addressing
                                and prefix.
                              </li>
                              <li>
                                IPv6 address , Virtualization fundamentals.
                              </li>
                              <li>Wireless principles , Switching concepts.</li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                NETWORK ACCESS{" "}
                              </h3>
                              <li>
                                VLANS & interswitch connectivity L2 discovery
                                protocols (CDP and LLDP).
                              </li>
                              <li>EtherChannel , STP & RSTP.</li>
                              <li>
                                Wireless Architectures and AP , AP and WLC
                                management , Wireless LAN configuration.
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                IP CONNECTIVITY
                              </h3>
                              <li>
                                Components of routing table , Router forwarding
                                decision , Configure and verify static routing.
                              </li>
                              <li>
                                Configure and verify single area OSPFV2 , First
                                hop redundancy protocol.
                              </li>
                              <li>IP SERVICES.</li>
                              <li>
                                NAT/PAT NTP client and server mode , DHCP and
                                DNS role in network , SNMP in network
                                operations.
                              </li>
                              <li>
                                Syslog features , DHCP client and relay ,
                                Forwarding PHB for QoS , Remote access using
                                SSH.
                              </li>
                              <li>TFTP/FTP.</li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                SECURITY FUNDAMENTALS{" "}
                              </h3>
                              <li>
                                Security concepts , Security program elements ,
                                Device access control using local passwords .
                              </li>
                              <li>Security password policies elements.</li>
                              <li>
                                Remote access and site-to-site VPNs , ACL ,
                                Layer 2 security features, AAA Wireless security
                                protocols WLAN using WPA2 PSK.
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                AUTOMATION AND PROGRAMMABILITY
                              </h3>
                              <li>
                                Automation impact on network mgmt. Traditional
                                vs controller-based networking.
                              </li>
                              <li>Controller-based and SD architectures.</li>
                              <li>
                                Control plane and data plane , North-bound and
                                south-bound APIs.
                              </li>
                              <li>
                                DNA Center enabled device mgmt. Characteristics
                                of REST-based APIs Puppet, Chef, and Ansible
                                capabilities Interpret JSON encoded data.
                              </li>
                            </ul>
                          </p>
                          <h2 className="px-0 py-4 font-semibold">
                            Cisco CCNP{" "}
                          </h2>
                          <p className="text-sm text-gray-500">
                            <ul>
                              <h3 className="px-0 py-2 text-black font-medium">
                                ARCHITECTURE{" "}
                              </h3>
                              <li>
                                Design principles used in an enterprise network
                                Principles of SD-WAN & SDA solution Design
                                principles of a WLAN deployment Concepts of
                                wired and wireless Qo5 On-prem and cloud
                                infrastructure deployments.
                              </li>
                              <li>Hardware vs software switching.</li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                VIRTUALIZATION{" "}
                              </h3>
                              <li>
                                Virtualization technologies , data path
                                virtualization technologies , network
                                virtualization concepts
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                INFRASTRUCTURE{" "}
                              </h3>
                              <li>Wireless-L1 concepts, AP modes, antennas.</li>
                              <li>
                                AP discovery L2 & L3 roaming, TS WLAN
                                L2-Trunking, EtherChannel, RSTP, MST.
                              </li>
                              <li>
                                NTP, NAT/PAT, HSRP, VRRP, Multicast , L3-EIGRP,
                                OSPF, BGP.
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                NETWORK ASSURANCE
                              </h3>
                              <li>
                                Debugs, trace route, ping, SNMP, and syslog
                                Syslog for remote logging.
                              </li>
                              <li>NetFlow and Flexible NetFlow.</li>
                              <li>
                                SPAN/RSPAN/ERSPAN, IPSLA NETCONF and RESTCONF
                                Cisco DNA Center workflows.
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                SECURITY
                              </h3>
                              <li>Device access control.</li>
                              <li>
                                Infrastructure security features (ACLS, COPP)
                                Wireless security features (EAP, WebAuth, PSK).
                              </li>
                              <li>REST API security</li>
                              <li>
                                Network security design Threat defense, Endpoint
                                security, Next-generation firewall
                              </li>
                              <h3 className="px-0 py-2 text-black font-medium">
                                AUTOMATION
                              </h3>
                              <li>Basic Python components and scripts.</li>
                              <li>Construct valid JSON encoded file.</li>
                              <li>
                                High-level principles and benefits of YANG.
                              </li>
                              <li>APIs for Cisco DNA Center and vManage.</li>
                              <li>
                                Interpret REST API in payload using DNA Center
                                and RESTCONF Construct EEM applet to automate
                                configuration.
                              </li>
                              <li>Agent vs. agentless orchestration tools</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Okay
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CoursesAndTraining;
