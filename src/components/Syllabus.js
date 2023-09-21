import React, { useState } from "react";
import { set } from "react-hook-form";
import { Link, Navigate, json } from "react-router-dom";

export const syllabus = [
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
    code: 1
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
    code:2
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
    code:3
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
    code:4
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
    code:5
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
    code:6
  },
  {
    title: "CCST",
    des: null,
    subH: {
      Essential_Security_Principles: [
        "'Define essential security principles",
        "Vulnerabilities, threats, exploits, and risks; attack vectors; hardening; defense-in-depth; confidentiality, integrity, and availability (CIA); types of attackers; reasons for attacks; code of ethics.",
        "'Explain common threats and vulnerabilities",
        "Malware, ransomware, denial of service, botnets, social engineering attacks (tailgating, spear phishing, phishing, vishing, smishing, etc.), physical attacks, man in the middle, IoT vulnerabilities, insider threats, Advanced Persistent Threat (APT).",
        "'Explain access management principles",
        "Authentication, authorization, and accounting (AAA); RADIUS; multifactor authentication (MFA); password policies.",
        "'Explain encryption methods and applications",
        "Types of encryption, hashing, certificates, public key infrastructure (PKI); strong vs. weak encryption algorithms; states of data and appropriate encryption (data in transit, data at rest, data in use); protocols that use encryption.",
      ],
      Basic_Network_Security_Concepts: [
        "'Describe TCP/IP protocol vulnerabilities",
        "Describe TCP/IP protocol vulnerabilities.",
        "Explain how network addresses impact network security.",
        "IPv4 and IPv6 addresses, MAC addresses, network segmentation, CIDR notation, NAT, public vs. private networks.",
        "'Describe network infrastructure and technologies",
        "Network security architecture, DMZ, virtualization, cloud, honeypot, proxy server, IDS, IPS.",
        "'Set up a secure wireless SoHo network",
        "MAC address filtering, encryption standards and protocols, SSID.",
        "'Implement secure access technologies",
        "'ACL, firewall, VPN, NAC",
      ],
      Endpoint_Security_Concepts: [
        "'Describe operating system security concepts",
        "Windows, macOS, and Linux; security features, including Windows Defender and host-based firewalls; CLI and PowerShell; file and directory permissions; privilege escalation.",
        "'Demonstrate familiarity with appropriate endpoint tools that gather security assessment information",
        "netstat, nslookup, tcpdump.",
        "'Verify that endpoint systems meet security policies and standards",
        "Hardware inventory (asset management), software inventory, program deployment, data backups, regulatory compliance (PCI DSS, HIPAA, GDPR), BYOD (device management, data encryption, app distribution, configuration management).",
        "'Implement software and hardware updates",
        "Windows Update, application updates, device drivers, firmware, patching.",
        "'Interpret system logs",
        "Event Viewer, audit logs, system and application logs, syslog, identification of anomalies.",
        "'Demonstrate familiarity with malware removal",
        "Scanning systems, reviewing scan logs, malware remediation.",
      ],
      Vulnerability_Assessment_and_Risk_management: [
        "'Explain vulnerability management",
        "Vulnerability identification, management, and mitigation; active and passive reconnaissance; testing (port scanning, automation).",
        "'Use threat intelligence techniques to identify potential network vulnerabilities",
        "Uses and limitations of vulnerability databases; industry-standard tools used to assess vulnerabilities and make recommendations, policies, and reports; Common Vulnerabilities and Exposures (CVEs), cybersecurity reports, cybersecurity news, subscription services, and collective intelligence; ad hoc and automated threat intelligence; the importance of updating documentation and other forms of communication proactively before, during, and after cybersecurity incidents; how to secure, share and update documentation.",
        "'Explain risk management",
        "Vulnerability vs. risk, ranking risks, approaches to risk management, risk mitigation strategies, levels of risk (low, medium, high, extremely high), risks associated with specific types of data and data classifications, security assessments of IT systems (information security, change management, computer operations, information assurance).",
        "'Explain the importance of disaster recovery and business continuity planning",
        "Natural and human-caused disasters, features of disaster recovery plans (DRP) and business continuity plans (BCP), backup, disaster recovery controls (detective, preventive, and corrective).",
      ],
      Incident_Handling: [
        "'Monitor security events and know when escalation is required",
        "Role of SIEM and SOAR, monitoring network data to identify security incidents (packet captures, various log file entries, etc.), identifying suspicious events as they occur.",
        "'Explain digital forensics and attack attribution processes",
        "Cyber Kill Chain, MITRE ATT&CK Matrix, and Diamond Model; Tactics, Techniques, and Procedures (TTP); sources of evidence (artifacts); evidence handling (preserving digital evidence, chain of custody).",
        "'Explain the impact of compliance frameworks on incident handling",
        "Compliance frameworks (GDPR, HIPAA, PCI-DSS, FERPA, FISMA), reporting and notification requirements.",
        "'Describe the elements of cybersecurity incident response",
        "Policy, plan, and procedure elements; incident response lifecycle stages (NIST Special Publication 800-61 sections 2.3, 3.1-3.4.",
      ],
    },
    code:7
  },
  {
    title: "AWS",
    des: [
      "The exam has the following content domains and weightings:",
      "Domain 1: Cloud Concepts (24% of scored content)",
      "Domain 2: Security and Compliance (30% of scored content)",
      "Domain 3: Cloud Technology and Services (34% of scored content)",
      "Domain 4: Billing, Pricing, and Support (12% of scored content)",
    ],
    subH: {
      Cloud_Concepts: [
        "'Define the benefits of the AWS Cloud.",
        "'Knowledge of:",
        "Value proposition of the AWS Cloud Skills in.",
        "Understanding the economies of scale (for example, cost savings).",
        "Understanding the economies of scale (for example, cost savings).",
        "Understanding the advantages of high availability, elasticity, and agility Identify design principles of the AWS Cloud.",
        "'Knowledge of:",
        "AWS Well-Architected Framework Skills in",
        "Understanding the pillars of the Well-Architected Framework (for example, operational excellence, security, reliability, performance efficiency, cost optimization, sustainability).",
        "Identifying differences between the pillars of the Well-Architected Framework.",
        "Understand the benefits of and strategies for migration to the AWS Cloud.",
        "'Knowledge of:",
        "Cloud adoption strategies.",
        "Resources to support the cloud migration journey.",
        "'Skills in",
        "Understanding the benefits of the AWS Cloud Adoption Framework (AWS CAF) (for example, reduced business risk; improved environmental, social, and governance (ESG) performance; increased revenue; increased operational efficiency).",
        "Identifying appropriate migration strategies (for example, database replication, use of AWS Snowball).",
        "Understand concepts of cloud economics.",
        "'Knowledge of:",
        "Aspects of cloud economics.",
        "Cost savings of moving to the cloud Skills in:",
        "Understanding the role of fixed costs compared with variable costs.",
        "Understanding costs that are associated with on-premises environments.",
        "Understanding the differences between licensing strategies (for example, Bring Your Own License [BYOL] model compared with included licenses).",
        "Understanding the concept of rightsizing.",
        "Identifying benefits of automation (for example, provisioning and configuration management with AWS CloudFormation).",
        "Identifying managed AWS services (for example, Amazon RDS, Amazon Elastic Container Service [Amazon ECS], Amazon Elastic Kubernetes Service [Amazon EKS], Amazon DynamoDB) Domain 2: Security and Compliance.",
        "Understand the AWS shared responsibility model.",
        "'Knowledge of:",
        "AWS shared responsibility model Skills in:",
        "Recognizing the components of the AWS shared responsibility model.",
        "Describing the customer’s responsibilities on AWS.",
        "Describing AWS responsibilities.",
        "Describing responsibilities that the customer and AWS share.",
        "Describing how AWS responsibilities and customer responsibilities can shift, depending on the service used (for example, Amazon RDS, AWS Lambda, Amazon EC2).",
      ],
      Understand_AWS_Cloud_security_governance_and_compliance_concepts: [
        "'Knowledge of:",
        "AWS compliance and governance concepts.",
        "Benefits of cloud security (for example, encryption)",
        "Where to capture and locate logs that are associated with cloud security",
        "'Skills in: ",
        "Identifying where to find AWS compliance information (for example, AWS Artifact).",
        "Understanding compliance needs among geographic locations or industries (for example, AWS Compliance).",
        "Describing how customers secure resources on AWS (for example, Amazon Inspector, AWS Security Hub, Amazon GuardDuty, AWS Shield).",
        "Identifying different encryption options (for example, encryption in transit, encryption at rest)",
        "Recognizing services that aid in governance and compliance (for example, monitoring with Amazon CloudWatch; auditing with AWS CloudTrail, AWS Audit Manager, and AWS Config; reporting with access reports) .",
        "Recognizing compliance requirements that vary among AWS services Identify AWS access management capabilities.",
        "'Knowledge of:",
        " Identity and access management (for example, AWS Identity and Access Management [IAM]).",
        "Importance of protecting the AWS root user account.",
        "Principle of least privilege.",
        "AWS IAM Identity Center (AWS Single Sign-On).",
        "'Skills in: ",
        "Understanding access keys, password policies, and credential storage (for example, AWS Secrets Manager, AWS Systems Manager).",
        "Identifying authentication methods in AWS (for example, multi-factor authentication [MFA], IAM Identity Center, cross-account IAM roles).",
        "Defining groups, users, custom policies, and managed policies in compliance with the principle of least privilege.",
        "Identifying tasks that only the account root user can perform.",
        "Understanding which methods can achieve root user protection",
        "Understanding the types of identity management (for example, federated).",
        "'Identify components and resources for security.",
        "'Knowledge of:",
        "Security capabilities that AWS provides.",
        "Security-related documentation that AWS provides",
        "'Skills in:",
        "Describing AWS security features and services (for example, security groups, network ACLs, AWS WAF).",
        "Understanding that third-party security products are available from AWS Marketplace.",
        "Identifying where AWS security information is available (for example, AWS Knowledge Center, AWS Security Center, AWS Security Blog.",
        "Understanding the use of AWS services for identifying security issues (for example, AWS Trusted Advisor) Domain 3: Cloud Technology and Services.",
        "'Define methods of deploying and operating in the AWS Cloud.",
        "'Knowledge of:",
        "Different ways of provisioning and operating in the AWS Cloud.",
        "Different ways to access AWS services.",
        "Types of cloud deployment models.",
        "Connectivity options.",
        "'Skills in: ",
        "Deciding between options such as programmatic access (for example, APIs, SDKs, CLI), the AWS Management Console, and infrastructure as code (IaC).",
        "Evaluating requirements to determine whether to use one-time operations or repeatable processes.",
        "Identifying different deployment models (for example, cloud, hybrid, onpremises).",
        "Identifying connectivity options (for example, AWS VPN, AWS Direct Connect, public internet) Define the AWS global infrastructure. Knowledge of:",
        "AWS Regions, Availability Zones, and edge locations.",
        "High availability.",
        "Use of multiple Regions.",
        "Benefits of edge locations.",
        "AWS Wavelength Zones and AWS Local Zones.",
        "'Skills in:",
        "Describing relationships among Regions, Availability Zones, and edge locations ",
        "Describing relationships among Regions, Availability Zones, and edge locations ",
        "Describing how to achieve high availability by using multiple Availability Zones ",
        "Recognizing that Availability Zones do not share single points of failure ",
        "Describing when to use multiple Regions (for example, disaster recovery, business continuity, low latency for end users, data sovereignty) ",
        "Describing at a high level the benefits of edge locations (for example, Amazon CloudFront, AWS Global Accelerator)",
        "'Identify AWS compute services.",
        "'Knowledge of:",
        "AWS compute services",
        "ills in: ",
        "Recognizing the appropriate use of different EC2 instance types (for example, compute optimized, storage optimized) ",
        "Recognizing the appropriate use of different container options (for example, Amazon ECS, Amazon EKS) ",
        "Recognizing the appropriate use of different serverless compute options (for example, AWS Fargate, Lambda) • Recognizing that auto scaling provides elasticity ",
        "Identifying the purposes of load balancers",
        "entify AWS database services. ",
        "owledge of: ",
        "AWS database services ",
        "Database migration Skills in: ",
        "Deciding when to use EC2 hosted databases or AWS managed databases ",
        "Identifying relational databases (for example, Amazon RDS, Amazon Aurora) ",
        "Identifying NoSQL databases (for example, DynamoDB) ",
        "Identifying memory-based databases ",
        "Identifying database migration tools (for example AWS Database Migration Service [AWS DMS], AWS Schema Conversion Tool [AWS SCT])",
        "'Identify AWS network services.",
        "'Knowledge of:",
        "AWS network services Skills in: ",
        "Identifying the components of a VPC (for example, subnets, gateways) ",
        "Understanding security in a VPC (for example, network ACLs, security groups) ",
        "Understanding the purpose of Amazon Route 53 ",
        "Identifying edge services (for example, CloudFront, Global Accelerator) ",
        "Identifying network connectivity options to AWS (for example AWS VPN, Direct Connect)",
        "'Identify AWS storage services.",
        "'Knowledge of:",
        "AWS storage services Skills in: ",
        "Identifying the uses for object storage ",
        "Recognizing the differences in Amazon S3 storage classes ",
        "Identifying block storage solutions (for example, Amazon Elastic Block Store [Amazon EBS], instance store) ",
        "Identifying file services (for example, Amazon Elastic File System [Amazon EFS], Amazon FSx) ",
        "Identifying cached file systems (for example, AWS Storage Gateway) ",
        "Understanding use cases for lifecycle policies ",
        "Understanding use cases for AWS Backup ",
        "entify AWS artificial intelligence and machine learning (AI/ML) services and analytics services. Knowledge of: ",
        "AWS AI/ML services ",
        "AWS analytics services",
        "'Skills in: ",
        "Understanding the different AI/ML services and the tasks that they accomplish (for example, Amazon SageMaker, Amazon Lex, Amazon Kendra) ",
        "Identifying the services for data analytics (for example, Amazon Athena, Amazon Kinesis, AWS Glue, Amazon QuickSight)",
        "'Identify services from other in-scope AWS service categories.",
        "'Knowledge of:",
        "Application integration services of Amazon EventBridge, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) ",
        "Business application services of Amazon Connect and Amazon Simple Email Service (Amazon SES) ",
        "Customer engagement services of AWS Activate for Startups, AWS IQ, AWS Managed Services (AMS), and AWS Support ",
        "Developer tool services and capabilities of AWS AppConfig, AWS Cloud9, AWS CloudShell, AWS CodeArtifact, AWS CodeBuild, AWS CodeCommit, AWS CodeDeploy, AWS CodePipeline, AWS CodeStar, and AWS X-Ray ",
        "End-user computing services of Amazon AppStream 2.0, Amazon WorkSpaces, and Amazon WorkSpaces Web ",
        "Frontend web and mobile services of AWS Amplify and AWS AppSync ",
        "IoT services of AWS IoT Core and AWS IoT Greengrass Skills in: ",
        "Choosing the appropriate service to deliver messages and to send alerts and notifications ",
        "Choosing the appropriate service to meet business application needs ",
        "Choosing the appropriate service for AWS customer support ",
        "Choosing the appropriate option for business support assistance",
        "Identifying the tools to develop, deploy, and troubleshoot applications ",
        "Identifying the services that can present the output of virtual machines(VMs) on end-user machines ",
        "Identifying the services that can create and deploy frontend and mobile services ",
        "Identifying the services that manage IoT devices",
        "'Billing, Pricing, and Support.",
        "Compare AWS pricing models.",
        "'Knowledge of:",
        "Compute purchasing options (for example, On-Demand Instances, Reserved Instances, Spot Instances, Savings Plans, Dedicated Hosts, Dedicated Instances, Capacity Reservations) ",
        "Data transfer charges ",
        "Storage options and tiers ",
        "'Skills in: ",
        "Identifying and comparing when to use various compute purchasing options ",
        "Describing Reserved Instance flexibility ",
        "Describing Reserved Instance behavior in AWS Organizations ",
        "Understanding incoming data transfer costs and outgoing data transfer costs (for example, from one Region to another Region, within the same Region) ",
        "Understanding different pricing options for various storage options and tiers ",
        "Understand resources for billing, budget, and cost management. ",
        "'Knowledge of: ",
        "Billing support and information ",
        "Pricing information for AWS services ",
        "AWS Organizations ",
        "AWS cost allocation tags",
        "'Skills in: ",
        "Understanding the appropriate uses and capabilities of AWS Budgets, AWS Cost Explorer, and AWS Billing Conductor ",
        "Understanding the appropriate uses and capabilities of AWS Pricing Calculator ",
        "Understanding AWS Organizations consolidated billing and allocation of costs ",
        "Understanding various types of cost allocation tags and their relation to billing reports (for example, AWS Cost and Usage Report)",
        "'Identify AWS technical resources and AWS Support options.",
        "'Knowledge of: ",
        "Resources and documentation available on official AWS websites ",
        "AWS Support plans ",
        "Role of the AWS Partner Network, including independent software vendors and system integrators ",
        "AWS Support Center Skills in: ",
        "Locating AWS whitepapers, blogs, and documentation on official AWS websites ",
        "Identifying and locating AWS technical resources (for example AWS Prescriptive Guidance, AWS Knowledge Center, AWS re:Post) ",
        "Identifying AWS Support options for AWS customers (for example, customer service and communities, AWS Developer Support, AWS Business Support, AWS Enterprise On-Ramp Support, AWS Enterprise Support) ",
        "Identifying the role of Trusted Advisor, AWS Health Dashboard, and the AWS Health API to help manage and monitor environments for cost optimization ",
        "Identifying the role of the AWS Trust and Safety team to report abuse of AWS resources ",
        "Understanding the role of AWS Partners (for example AWS Marketplace, independent software vendors, system integrators)",
        "Identifying the benefits of being an AWS Partner (for example, partner training and certification, partner events, partner volume discounts) ",
        "Identifying the key services that AWS Marketplace offers (for example, cost management, governance and entitlement) ",
        "Identifying technical assistance options available at AWS (for example, AWS Professional Services, AWS Solutions Architects)",
      ],
    },
    code:8
  },
];
const Syllabus = () => {
  const [list, setList] = useState(null);
  const [nav, setNav] = useState(false);

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
                  {item.des?.map((el, index) => {
                    return <li key={index}>{el}</li>;
                  })}
                  {item.subH !== null ? (
                    <>
                      {item.subH &&
                        Object.entries(item.subH).map(([key, value], index) => (
                          <ul key={index}>
                            <h3 className="my-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                              {key.replaceAll("_", " ")}
                            </h3>
                            {JSON.stringify(value)
                              .replace("[", "")
                              .replace("]", "")
                              .split('",')
                              .map((el, subIndex) =>{return el.at(1) === "'"? <li key={subIndex} className="text-md font-medium text-white" ><strong>{el.slice(2)}</strong></li> : <li key={subIndex} >{el.slice(1, -1)}</li>}
                              )}
                          </ul>
                        ))}
                    </>
                  ) : null}
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
