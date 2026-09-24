# IT Infrastructure Career Market Intelligence Report
### Networking · Network Automation · Cloud · DevOps · Platform · SRE — Germany, Gulf, Egypt, USA, Canada

**Research date:** 24 September 2026
**Scope:** Non-AI infrastructure careers. Cybersecurity is included only for comparison.
**Reader profile:** IT/CS bachelor's holder at CCNA level, interested in Python/network automation and AWS, targeting Germany and the Gulf, and willing to study seriously.

---

## How to read this report: evidence labels

Every quantitative claim carries one of these tags:

| Tag | Meaning |
|---|---|
| **[D]** | Current official or administrative data (BLS, Bundesagentur für Arbeit, government portals) |
| **[H]** | Historical data (earlier periods, used for trend) |
| **[F]** | Forecast or projection (BLS projections, Gartner predictions) |
| **[S]** | Employer or practitioner survey (Bitkom, CNCF, ISC2) |
| **[J]** | Job-posting evidence (Indeed postings sampled for this report, Indeed Hiring Lab indices) |
| **[$]** | Salary estimate from a salary aggregator (Glassdoor, StepStone, Levels.fyi, etc.): self-reported, not audited |
| **[A]** | My own analytical conclusion or triangulated estimate, not a measured fact |
| **UNVERIFIED / INSUFFICIENT DATA** | I could not confirm it from a reliable source |

**Method limitations. Read these before trusting any number:**
1. My web fetch access to several primary sites (bls.gov, bitkom.org, arbeitsagentur.de) was **blocked by the research environment's network proxy**. For those sources I used the official pages' **search-index extracts**, not the full pages. Figures are quoted exactly as indexed. Verify the headline numbers directly before making high-stakes decisions.
2. Job-posting analysis: I sampled **~66 live Indeed postings** (Germany, UAE, Saudi Arabia, Egypt, US-remote) through Indeed's job-search API on 24 Sep 2026 and read about 10 in full. **That is below the 50–100 postings per region you asked for.** Treat Part 7 as qualitative evidence plus a few pattern observations, not a statistical sample. LinkedIn, StepStone and Bayt could not be queried programmatically.
3. Gulf and Egypt salary data comes almost entirely from self-reported aggregators, which have known data-quality problems (documented in Parts 9 and 10).
4. Exchange rates used (September 2026): **1 EUR ≈ 1.14 USD** (EUR/USD 1.1379 on 24 Sep 2026, Trading Economics); **1 USD = 3.6725 AED** (peg); **1 USD = 3.75 SAR** (peg); **1 USD ≈ 51.5 EGP** (Wise range for mid-Sep 2026 was 0.01914–0.01947 USD per EGP). CAD amounts are **not** converted because I did not verify a September 2026 CAD rate.

---

## 1. Executive Summary

**The ten findings that matter most:**

1. **Infrastructure hiring is in a trough, not a collapse.** In the US, Indeed's "IT Infrastructure, Operations & Support" postings stood **35.2% below the February 2020 baseline** as of 23 Jan 2026 **[J]**. In Germany, Bitkom counted **~109,000 open IT positions in 2025, down from the 149,000 peak in 2023** **[S]**. Demand still exists, but employers are far pickier, and **entry-level roles have been hit hardest**.

2. **Traditional network/system administration is shrinking slowly in headcount but not in importance.** BLS projects network and computer systems administrators to decline **4% (2025–35)** with **~13,400 openings per year** from replacement. BLS names the causes explicitly: DevOps absorbing tasks, Network-as-a-Service outsourcing, and automation **[F]**. Over the same period **computer network architects grow +8%** **[F]**. The value is moving *up* the stack (design, automation, architecture) and *away from* manual CLI operations.

3. **Cloud remains the growth engine.** Global cloud infrastructure spending reached **$143.4B in Q2 2026**. Shares: AWS 28%, Microsoft 20%, Google 15% (Google's highest on record) **[D, Synergy Research]**. Kubernetes production use reached **82%** of container users in the 2025 CNCF survey **[S]**.

4. **"Junior Cloud Engineer" is largely a myth as a first job, with exceptions.** Most cloud postings sampled required **2–5+ years** in cloud *or system administration* **[J]**. The genuine graduate-entry cloud roles I found came from **consultancies with trainee programmes** (e.g., Reply Germany's "Junior Cloud Engineer – Absolvent:innen willkommen"). Those require **very good German plus English** **[J]**.

5. **The most realistic bridge into cloud is through an adjacent operations job** (NOC, sysadmin, network ops, IT support at an MSP, cloud support), followed by an internal or lateral move after 1–3 years **[A]**. Networking knowledge is a genuine differentiator for cloud networking, hybrid connectivity and security. It is *not* sufficient alone: Linux, one scripting language, Terraform and one cloud are the minimum.

6. **Network automation is a skill set, not a job market.** A search for the exact title "Network Automation Engineer" across Germany returned **zero** exact-title matches in my sample **[J]**. Automation skills show up *inside* Network Engineer, Cloud Infrastructure, DevOps and Platform postings. Cisco itself renamed DevNet to **CCNA/CCNP/CCIE Automation** on 3 Feb 2026, which signals that automation is being folded into mainstream networking **[D]**.

7. **Germany is the best long-term immigration bet but the hardest junior market for non-German speakers.** The EU Blue Card threshold for IT in 2026 is **€45,934.20** (reduced) against a standard **€50,700** **[D]**, which is well below typical infrastructure salaries. But most junior and mid-level *infrastructure* postings sampled required **fluent German (C1)**, a driving licence, or on-site/on-call duty **[J]**. English-only roles cluster in DevOps/platform jobs at product companies and in Berlin and Munich.

8. **The Gulf pays well net of tax, but nationalisation is real and explicit.** Postings carry "Saudi National" tags **[J]**. UAE firms with 50+ staff must raise skilled Emirati headcount by **2% per year** **[D, MOHRE]**. Saudi engineering professions must reach **30% Saudi nationals by 30 June 2026** **[D, HRSD/Fragomen]**. Gulf employers mostly hire **experienced** expats. Junior foreigners without regional experience face the steepest barrier of any region studied **[A]**.

9. **Egypt is a cheap place to buy experience and an expensive place to stay.** Local cloud and DevOps pay (Glassdoor median ≈ **EGP 18,500/month ≈ $360**) is roughly 1/10th of Gulf and 1/15th of German levels **[$]**. The rational play is 1–3 years of local enterprise experience (banks, telecoms, MSPs, outsourcers like DXC) followed by remote contracts, Gulf, or Germany **[A]**.

10. **No single "best" path.** For your profile (CCNA plus Python plus AWS interest plus Germany/Gulf), the highest expected-value path is **Network Engineering → Cloud Network/Infrastructure Engineer → Platform/Cloud Architect**. That path keeps your networking investment and moves into the growth zone. Pure networking has a lower ceiling. Pure DevOps/Platform has a higher ceiling but a steeper software-engineering barrier **[A]**. See Part 27.

---

## 2. IT Infrastructure Career Map

### 2.1 The stack

```
                         ┌──────────────────────────────────────────┐
                         │  Infrastructure / Cloud / Enterprise      │  10+ yrs
                         │  Architect · Principal SRE · Eng Manager  │
                         └──────────────────────────────────────────┘
                                      ▲                 ▲
          ┌───────────────────────────┴─┐           ┌───┴─────────────────────────┐
          │ Platform Engineer / SRE      │◄─────────►│ Cloud Architect / Solutions │  6–10 yrs
          │ (build internal platforms,   │           │ Architect (design, pre-sales│
          │ reliability, K8s, IaC)       │           │ governance, landing zones)  │
          └──────────────────────────────┘           └─────────────────────────────┘
                       ▲                                           ▲
          ┌────────────┴───────────┐     ┌─────────────────────────┴──────┐
          │ DevOps Engineer        │◄───►│ Cloud Engineer / Cloud Infra   │  3–6 yrs
          │ (CI/CD, containers,    │     │ Cloud Network Engineer         │
          │ IaC, release)          │     │ Cloud Security Engineer        │
          └────────────────────────┘     └────────────────────────────────┘
                       ▲                                  ▲
   ┌───────────────────┴────┐   ┌─────────────────────────┴──┐   ┌──────────────────────┐
   │ Linux/Windows SysAdmin │   │ Network Engineer (L2/L3,    │   │ Network Automation   │  1–5 yrs
   │                        │   │ BGP, firewalls, DC, WAN)    │◄─►│ (Python/Ansible/API) │
   └────────────────────────┘   └─────────────────────────────┘   └──────────────────────┘
                ▲                            ▲
   ┌────────────┴─────────┐     ┌────────────┴─────────────┐   ┌─────────────────────┐
   │ IT Support / Helpdesk│     │ NOC Engineer / Network   │   │ Cloud Support Eng.  │  0–2 yrs
   │ MSP technician       │     │ Administrator            │   │ (AWS/MS/partner)    │
   └──────────────────────┘     └──────────────────────────┘   └─────────────────────┘
```

### 2.2 Role-by-role comparison

| Role | Daily work | Core technologies | Typical environment | Entry barrier | Ceiling (role) | Skill transferability |
|---|---|---|---|---|---|---|
| **NOC Engineer** | Watch dashboards, triage alarms, open/escalate tickets, run first-line fixes, shift work | SNMP/NMS (SolarWinds, PRTG, Zabbix), ticketing, basic routing/switching, runbooks | Telcos, ISPs, MSPs, banks, outsourcers | **Low**; CCNA-level often enough **[J]** | Low as a role; it is a stepping stone | Medium: incident discipline transfers, depth does not |
| **Network Administrator** | Keep campus/branch network running: VLANs, user moves/adds/changes, Wi-Fi, firewall rules, patching | Cisco/Aruba/Fortinet/Extreme, AD/DNS/DHCP | SMEs, public sector, hospitals, schools | Low–medium | Medium | Medium |
| **Network Engineer** | Design and implement L2/L3, routing policy, WAN, DC fabrics, firewalls/VPN, troubleshoot complex outages, change planning | OSPF/BGP, MPLS, EVPN/VXLAN, SD-WAN, NGFW, load balancers | Enterprises, integrators, ISPs, DCs | Medium; usually 2–5 yrs **[J]** | Network Architect | High for cloud networking |
| **Network Operations Engineer** | NOC++: owns changes, maintenance windows, capacity, on-call | As above plus automation scripts | ISPs, hyperscalers, CDNs | Medium | Senior NetOps/NetDevOps | High |
| **Network Automation Engineer** (NetDevOps) | Write code to configure/validate networks, source of truth, CI for network changes | Python, Netmiko/NAPALM/Nornir, Ansible, NETCONF/RESTCONF/YANG, Git, NetBox, Terraform | Large enterprises, ISPs, hyperscalers, banks | Medium–high; needs networking *and* coding | Network/Infra Architect, Platform | Very high |
| **Cloud Network Engineer** | VPC/VNet design, hybrid connectivity (VPN, Direct Connect/ExpressRoute), Transit Gateway/Virtual WAN, DNS, firewalls in cloud, segmentation | AWS/Azure networking, BGP, Terraform, NVA firewalls | Enterprises in migration, banks, consultancies | Medium–high; wants on-prem networking **plus** cloud | Cloud/Network Architect | Very high |
| **Cloud Engineer** | Build/operate cloud resources, IaC, IAM, monitoring, cost, migrations | AWS/Azure/GCP, Terraform, Linux, scripting, CI/CD | Everywhere | Medium–high; "2–5 yrs cloud **or sysadmin**" is typical **[J]** | Cloud Architect | Very high |
| **DevOps Engineer** | CI/CD pipelines, containers, IaC, release automation, dev support | GitHub Actions/GitLab/Jenkins, Docker, K8s, Terraform, Helm, Python/Go | Product/software companies | High; closer to software engineering | Platform/SRE/Architect | Very high |
| **Platform Engineer** | Build an internal developer platform (IDP): paved roads, self-service infra, golden paths | K8s, Terraform/Crossplane, Backstage, GitOps (Argo/Flux), service mesh | Mid/large software orgs | High; usually 3+ yrs DevOps/SRE | Principal/Staff, Architect | Very high |
| **SRE** | Reliability engineering: SLOs, error budgets, incident management, capacity, toil automation | Observability stacks (Prometheus/Grafana/OTel), K8s, coding (Go/Python) | Tech companies, fintech, large platforms | High; strong coding plus systems | Principal SRE, Eng Manager | Very high |
| **Infrastructure Architect** | Set standards, reference architectures, vendor selection, governance, landing zones, hybrid strategy | Cross-domain | Enterprises, consultancies | Very high; 8–12+ yrs | Enterprise/Chief Architect, CTO track | N/A |

### 2.3 Where roles overlap in practice

- **NOC vs Network Operations Engineer:** often the same team. "NOC" jobs lean on monitoring and escalation, while "NetOps" jobs own changes. In Egypt and the Gulf, "NOC Engineer" postings often ask for full CCNA/CCNP-level configuration skills (e.g., the Cairo posting sampled lists Cisco ISE, FortiGate, WLC, Catalyst 9300/9500, STP/RSTP/MST) **[J]**.
- **Cloud Engineer vs DevOps Engineer:** employers use the titles interchangeably. The Dubai "Cloud Engineer/Specialist" posting sampled asked for Terraform, CI/CD, Docker/K8s, Python/Bash, *and* Linux/Windows admin **[J]**.
- **Platform vs SRE vs DevOps:** Platform builds the paved road, SRE guards reliability on it, and DevOps is the broader practice. Gartner **forecasts** 80% of large software engineering organisations would have platform teams by 2026, up from 45% in 2022 **[F]**. That forecast is widely cited, but I found no measured confirmation of it.
- **Network Engineer vs Cloud Network Engineer:** same fundamentals (routing, BGP, DNS, segmentation, firewalls). The cloud role replaces vendor CLI with provider APIs and Terraform.

---

## 3. Traditional Networking

### 3.1 Skill-by-skill market value (analytical, based on postings sampled and vendor direction) [A]

| Area | Still highly valued? | Notes |
|---|---|---|
| TCP/IP, subnetting, DNS, DHCP | **Essential everywhere** | Foundational for cloud; DNS is a top cause of cloud incidents |
| Switching, VLANs, STP | Required, commoditised | Expected at junior level; little salary premium |
| OSPF | Required | Enterprise campus/WAN |
| **BGP** | **High value** | Used in ISPs, DC fabrics (EVPN), SD-WAN, and cloud hybrid connectivity (Direct Connect/ExpressRoute use BGP). Explicitly requested in the German cloud-infra posting sampled (BGP, SDN, nftables) **[J]** |
| MPLS | Declining in enterprise, stable in ISP/telco | SD-WAN is replacing enterprise MPLS; carriers still run it |
| VPN (IPsec, SSL) | High value | Site-to-cloud VPN is a daily cloud-network task |
| **Firewalls (NGFW)** | **High value** | FortiGate/Palo Alto/Check Point; a bridge to security and cloud security |
| Load balancing (F5, cloud ALB/NLB) | High value | Bridges to application delivery and cloud |
| Wireless | Stable, niche | Campus/enterprise; limited cloud transfer |
| Network monitoring | Stable | Moving to observability (telemetry, streaming, OTel) |
| Linux networking (iproute2, nftables, namespaces) | **Rising** | Underpins containers/K8s networking |
| Windows networking (AD-integrated DNS/DHCP) | Stable | Enterprise and MSP work |
| Data center networking (EVPN/VXLAN, leaf-spine) | **High value** | DC build-out (including AI DC demand) keeps this strong, with the growth coming from infrastructure rather than AI jobs |
| Enterprise networking | Stable, most jobs | Largest volume, lower ceiling |
| ISP networking | Stable, specialised | BGP/MPLS/segment routing depth pays |

### 3.2 Growing, stable, shrinking, or transforming?

**Evidence:**
- BLS: network & computer systems administrators **−4% (2025–35)**, ~13,400 openings/yr, all from replacement. BLS attributes the decline to DevOps absorbing tasks, **Network-as-a-Service outsourcing**, and automation of routine tasks **[F]**.
- BLS: computer network architects **+8% (2025–35)**, ~9,600 openings/yr, median **$134,050** (May 2025) **[F][D]**.
- BLS edition note: an earlier edition (2024–34) showed **−3%** for administrators. The newer 2025–35 edition shows **−4%**. The direction is consistent.
- Germany: an Indeed search for "Junior Network Engineer" returned real, current junior network roles (Berlin, Düsseldorf, Senden) **[J]**. Network hiring for juniors exists, but mostly at integrators and MSPs, and requires German.

**Conclusion [A]: traditional networking is *being transformed*, not dying.**
- **Shrinking:** manual moves/adds/changes, pure monitoring, and single-vendor CLI jobs in SMEs (outsourced to MSPs or NaaS).
- **Stable:** enterprise network engineering, ISP engineering, and firewall/security networking.
- **Growing:** network architecture, DC fabrics, cloud/hybrid networking, network automation, and SASE/SD-WAN integration.
- The **Relaxdays** posting (Germany, June 2026) is illustrative. The company is leaving VMware, building its own OpenStack cloud, and wants BGP, SDN and nftables expertise alongside SaltStack/Ansible/Terraform. It also mentions using AI agents for routine provisioning and firewall management **[J]**. That is the new "network engineer" job description.

---

## 4. Network Automation

### 4.1 Toolchain and what employers actually ask for

| Tool/Concept | Role in practice | Labour-market signal |
|---|---|---|
| Python | Glue language for all automation | Requested in most DevOps/cloud postings sampled **[J]** |
| Netmiko | SSH screen-scraping for legacy CLI devices | Common in brownfield enterprises; entry-level automation |
| NAPALM / Nornir | Multi-vendor abstraction / concurrency framework | Mid-level NetDevOps |
| **Ansible** | Declarative config push, most common network automation tool | Appears in DevOps and cloud postings sampled (Liebherr, BlackStone eIT) **[J]** |
| **Terraform** | IaC for cloud *and* some network platforms | Appears in nearly every cloud posting sampled **[J]** |
| REST APIs | Controllers (DNA Center/Catalyst Center, Meraki, SD-WAN, firewalls) | Core skill |
| Git + CI/CD | Version control and pipeline testing of network changes | Distinguishes "scripts" from "engineering" |
| YANG / NETCONF / RESTCONF | Model-driven programmability | Valued at ISPs/large enterprises; less in SMEs |
| Source of truth (NetBox) | Inventory/intent data driving automation | Strong signal of maturity |
| Cisco DevNet → **CCNA Automation (200-901 CCNAAUTO)** | Renamed 3 Feb 2026; exam content "largely unchanged" **[D]** | The certification is now positioned as a mainstream CCNA track |

### 4.2 Is it a better career path than manual configuration?
**Yes, in career value. No, as a standalone entry point [A].**
- Manual configuration is the part of networking that BLS explicitly flags as being automated or outsourced **[F]**.
- But automation roles need you to *already* understand what you are automating. Almost no one is hired as a junior "network automation engineer" with zero network operations experience. The German title search returned zero exact matches **[J]**. The title appears mainly at large ISPs, hyperscalers, banks and some US employers.
- **Real job titles** that carry network automation work: *Network Engineer (Automation)*, *Network Development Engineer* (AWS, CrowdStrike: "Network Development Engineer, IT Cloud & Infrastructure", US remote, **$116k–$209k** **[J]**), *NetDevOps Engineer*, *Network Reliability Engineer*, *Infrastructure Automation Engineer*, *Cloud Infrastructure Engineer*, *Network Software Engineer*, *Workload Automation Engineer* (a different job: batch schedulers like Control-M, seen at Schwarz Digits **[J]**; do not confuse the two).

### 4.3 Progression [A]
| Level | Typical yrs | What you do | Proof expected |
|---|---|---|---|
| Junior | 0–2 in networking | Network engineer who writes Netmiko/Ansible scripts for backups, audits, and bulk changes | GitHub repo; scripts used at work |
| Mid | 2–5 | Builds automation pipelines: Git + CI + pre/post-checks, NetBox as source of truth, API integrations | Production automation, reduced change failures |
| Senior | 5–8 | Designs the automation platform, model-driven (YANG) configs, closed-loop validation, mentors | Architecture ownership |
| Lead/Architect | 8+ | Network architecture strategy; intent-based networking; merges with Platform/SRE | Org-level impact |

---

## 5. Cloud Computing

### 5.1 Market structure (current data)

| Metric | Value | Source/Tag |
|---|---|---|
| Global cloud infrastructure services spend, Q2 2026 | **$143.4B** | Synergy Research **[D]** |
| AWS share Q2 2026 (Q2 2025) | **28%** (30%) | Synergy **[D]** |
| Microsoft share | **20%** (20%) | Synergy **[D]** |
| Google share | **15%** (13%): record high | Synergy **[D]** |
| Big Three combined | **63%** | Synergy **[D]** |
| YoY growth: AWS ~37%, Azure ~43%, GCP ~82% | **UNVERIFIED**: from secondary summaries of Synergy, not confirmed at source | secondary |
| Kubernetes in production (container users) | **82%** (2025), 80% (2024), 66% (2023) | CNCF Annual Survey **[S]** |

### 5.2 AWS: the service areas that matter for employability [A]
| Domain | Services | What employers test |
|---|---|---|
| Networking | **VPC**, subnets, route tables, IGW/NAT, security groups vs NACLs, **Transit Gateway**, VPC peering, PrivateLink, **Route 53**, Direct Connect, Site-to-Site VPN | Can you design a multi-AZ, multi-account network with private connectivity? |
| Identity | **IAM** (roles, policies, least privilege), Organizations/SCPs, IAM Identity Center | Can you explain why a role is better than keys? |
| Compute | **EC2**, Auto Scaling, **Lambda**, **ECS**/Fargate, **EKS** | Right tool for the workload |
| Storage/DB | **S3** (policies, lifecycle, encryption), EBS, EFS, **RDS**/Aurora | Backups, DR, encryption |
| Ops | **CloudWatch**, CloudTrail, Config, Systems Manager | Monitoring, audit, patching |
| IaC | **CloudFormation**, **Terraform** (preferred in multi-cloud employers), CDK | Real, modular IaC in Git |
| Security | KMS, Secrets Manager, GuardDuty, Security Hub, WAF | Guardrails, not just features |

Note: the AWS SysOps Administrator exam was renamed **AWS Certified CloudOps Engineer – Associate (SOA-C03)** from **30 Sep 2025**. **Containers are now in scope**, with more multi-account/multi-Region and IaC emphasis **[D]**.

### 5.3 Microsoft Azure [A]
| Domain | Services |
|---|---|
| Networking | **Virtual Networks**, NSGs, Azure Firewall, **Virtual WAN**, **ExpressRoute**, VPN Gateway, Private Endpoints, Azure DNS, Front Door/App Gateway |
| Identity | **Microsoft Entra ID** (formerly Azure AD), RBAC, Conditional Access, Managed Identities |
| Compute | Virtual Machines, VM Scale Sets, **AKS**, App Service, Azure Virtual Desktop |
| Storage | Storage accounts, Blob, Files, SQL (incl. SQL on VMs) |
| Ops | **Azure Monitor**, Log Analytics, Defender for Cloud, Policy |
| DevOps/IaC | **Azure DevOps**, GitHub Actions, **Terraform**, Bicep |

**Why Azure matters for you:** German Mittelstand, public sector and energy companies are heavily Microsoft-centric. The Essen "Cloud Engineer – Azure Infrastruktur & Automatisierung" posting (Sep 2026) asked for Azure VMs, SQL VMs, Virtual Desktop, **Terraform**, **Azure DevOps/GitHub Actions**, *mehrjährige* (multi-year) Azure experience and *very good German* **[J]**. In Germany and the Gulf enterprise/government sector, Azure is at least as relevant as AWS **[A]**.

### 5.4 Google Cloud
- Share climbed to **15%** in Q2 2026, a record **[D]**. Strong in data/analytics, digital natives and retail, and in Saudi Arabia (Google Cloud Dammam region).
- **Employment demand [A]:** clearly third in job volume in every market sampled. Across my ~66 postings, GCP appeared only as "AWS, Azure **or** GCP" alternatives, never as the sole requirement. **Learn GCP only if a target employer uses it.**

### 5.5 Alibaba Cloud: relevance by region
| Region | Relevance | Evidence |
|---|---|---|
| **Saudi Arabia** | **Real but niche** | Operated via **SCCC (Saudi Cloud Computing Co.)**, a JV of Alibaba Cloud, stc and partners; data centres in Riyadh; initial capital SAR 894M (~$238M) **[D, Arab News/Business Wire]**. Relevant for stc-ecosystem and government-adjacent workloads |
| **UAE / wider Gulf** | Low–moderate | Alibaba has had a Dubai presence, but hiring demand is dominated by Azure/AWS/Oracle/G42/Core42. **INSUFFICIENT DATA** on job volume |
| **Europe (incl. Germany)** | **Very low** | Frankfurt region exists; zero Alibaba requirements in any German posting sampled **[J]** |
| **Asia (China, SE Asia)** | **High** | Market leader in China; strong in SE Asia |
| **Egypt** | Low | No postings sampled requiring Alibaba |

**Verdict [A]:** do not invest in Alibaba Cloud unless you target stc/SCCC-linked employers in KSA or plan to work in China/SE Asia. Cloud concepts transfer, so if you know AWS well you can pick it up on the job.

---

## 6. AWS vs Azure vs GCP vs Alibaba: decision table [A]

| Criterion | AWS | Azure | GCP | Alibaba |
|---|---|---|---|---|
| Global share (Q2 2026) | 28% | 20% | 15% | Not in the top 3 globally |
| Germany enterprise demand | High (product cos, startups, auto) | **Very high** (Mittelstand, public, energy, Microsoft shops) | Low–medium | Negligible |
| Gulf demand | High | **Very high** (government, banks; local Azure regions in UAE/Qatar) | Medium (KSA Dammam region) | Niche (KSA via SCCC) |
| Egypt demand | Medium | Medium–high (banks, telcos) | Low | Negligible |
| US demand | **Highest** | High | Medium | Negligible |
| Best first cloud for a network engineer | ✅ **Best learning resources and docs, strongest networking certification ladder (ANS-C01)** | ✅ Best if targeting German/Gulf enterprise | Secondary | No |

**Recommendation [A]:** go deep on **AWS** (your stated interest, and the largest market). Then add **Azure to AZ-104 level** within the first 12–18 months, because your Germany/Gulf targets are Azure-heavy.

---

## 7. Cloud Careers: job families

Salary ranges below are summarised. Country-specific data with sources is in Parts 8–13.

| Role | What they actually do | Technologies | Typical experience asked | Certifications seen/valued | Entry difficulty | Demand [A] | Next step |
|---|---|---|---|---|---|---|---|
| **Cloud Support Engineer** | Customer tickets on cloud issues (networking, IAM, compute); reproduce and troubleshoot | One cloud, Linux, networking, scripting | 0–2 yrs; grads accepted at AWS/MS/partners | Cloud Practitioner / AZ-900 (weak), SAA / AZ-104 (good) | **Medium**: most realistic "cloud-titled" first job | Medium; concentrated in hubs (Dublin, Cairo, Cape Town, Bangalore, etc.) | Cloud Engineer, TAM |
| **Cloud Operations Engineer** | Run cloud estates: monitoring, patching, backups, incidents, cost | CloudWatch/Azure Monitor, ITSM, scripting | 1–3 yrs ops | SOA-C03 / AZ-104 | Medium | Medium (MSPs, outsourcers) | Cloud Engineer |
| **Cloud Engineer** | Build infrastructure as code, landing zones, migrations | Terraform, AWS/Azure, Linux, CI/CD | **2–5+ yrs** "cloud or system administration" **[J]** | SAA, AZ-104, Terraform Associate | **High** for true juniors | High | Senior Cloud / Architect |
| **Cloud Infrastructure Engineer** | Similar to Cloud Engineer; often includes private cloud (OpenStack/VMware), hybrid | + OpenStack, virtualisation, networking | 2–5 yrs | RHCSA, SAA/AZ-104 | High | Medium–high (VMware exits, sovereign cloud in EU **[A]**) | Architect |
| **Cloud Network Engineer** | VPC/VNet design, hybrid connectivity, segmentation, DNS, cloud firewalls | BGP, Transit GW/vWAN, Terraform, NVAs | 3–5 yrs networking + cloud | CCNP, AWS ANS-C01, AZ-700 | High, but **your most natural entry** | Medium volume, high value | Network/Cloud Architect |
| **Cloud Security Engineer** | IAM, guardrails, posture management, detection in cloud | CSPM, KMS, SCPs, SIEM | 3–5 yrs security or cloud | Security+ (entry), AWS Security Specialty, AZ-500 | High | High (US example: $110k–$150k, Philadelphia, Sep 2026 **[J]**) | Security Architect |
| **DevOps Engineer** | Pipelines, containers, release automation | GitHub Actions/GitLab, Docker, K8s, Helm, Terraform, Python/Go | 2–5 yrs; B.Sc. CS common **[J]** | CKA, Terraform | High | High but volatile | Platform/SRE |
| **Platform Engineer** | Internal developer platform | K8s, GitOps, Backstage, Terraform/Crossplane | 3–6 yrs | CKA/CKAD | Very high | Growing (Gartner forecast) **[F]** | Staff/Principal |
| **SRE** | Reliability, SLOs, incident management, toil automation | Observability, K8s, coding | 3–6 yrs; strong coding | Rarely cert-driven | Very high | Stable–high in tech | Principal SRE |
| **Cloud Architect** | Design, governance, landing zones, reviews | Multi-domain | 6–10 yrs | SAP-C02, AZ-305 | Very high | High | Enterprise Architect |
| **Solutions Architect** | Pre-sales/partner design, customer-facing | Broad cloud plus business | 5–10 yrs (vendors hire some grads into associate programmes) | SAA→SAP, AZ-305 | Very high | Medium | Principal SA |

---

## 8. Entry-Level Reality (first-job analysis from postings)

### 8.1 What the sampled postings showed (Indeed, 24 Sep 2026, n≈66 listed, ~10 read in full) [J]

| Posting | Country | Title says | Real requirement | Language | Classification |
|---|---|---|---|---|---|
| Reply (Köln + 7 cities) | DE | "Junior Cloud Engineer – Absolvent:innen willkommen" | Completed CS/WI/Eng degree; first cloud exposure from internships, **uni or personal projects**; IaC interest; certs "a plus" | **Very good German and English** | ✅ **True 0–2 yr** (consultancy trainee model) |
| Instaffo / CMS IT-Consulting (Berlin) | DE | "(Junior) Network Engineer" | Fachinformatiker SI or comparable; LAN/WLAN, Linux, VMware; Extreme/Aruba ideally; **24×7 on-call rotation; driving licence required**; German work permit | **German C1** | ✅ True junior, but gated by language and licence |
| YER Group for energy client (Essen) | DE | "Cloud Engineer – Azure Infrastruktur" | *Mehrjährige* (multi-year) Azure ops; solid Terraform; CI/CD | Very good German | ❌ Mid-level |
| Liebherr Digital (Ulm) | DE | "DevOps Engineer" | B.Sc./M.Sc. CS; K8s/Docker/Helm; Ansible+Terraform; GitHub Actions; network/crypto protocols; Python/Go/Rust | **English fluent** (no German stated) | ❌ Mid-level; **English-only example** |
| Relaxdays (Halle/Leipzig) | DE | "Cloud Infrastructure Engineer (OpenStack & Automation)" | Strong Debian Linux; SaltStack/Ansible/Terraform; BGP/SDN/nftables; willingness to learn OpenStack | German posting | ⚠️ Mid, but "learn with us" |
| Airbus D&S (Immenstaad) | DE | "Junior IT Infrastructure: Hardware & Virtualisation Engineer" | Details not read | — | Likely junior; defence (security clearance/citizenship constraints are common, **UNVERIFIED** for this posting) |
| BlackStone eIT (Dubai) | UAE | "Cloud Engineer/Specialist" | Bachelor's; **2–5+ yrs cloud or sysadmin**; AWS/Azure/GCP; Terraform/Ansible; Docker/K8s; CI/CD; Python/Bash/PowerShell | English | ❌ "Cloud Engineer" = mid |
| MASTER-WORKS / SOOR (Riyadh) | KSA | "Cloud & Infrastructure Engineer" | **Minimum 5 yrs**; IIS, Windows Server, SQL Server, WAF, load balancing; client site | English | ❌ Senior-ish; "cloud" is actually Windows hosting |
| DeepSource Technologies (Riyadh) | KSA | "NOC Support Services Engineer – **(Saudi National)**" | — | — | 🚫 Closed to expats by title |
| Roots Mgmt Consultants (Cairo) | EG | "NOC Engineer" | Cisco ISE (TACACS+, 802.1X), FortiGate, WLC, Catalyst 9x00; STP/RSTP/MST; implementation plans | English | ⚠️ "NOC" title, CCNP-level scope |
| CrowdStrike (US remote) | US | "Network Development Engineer, IT Cloud & Infrastructure" | — | — | $116k–$209k; mid-senior |
| US "Junior Cloud Engineer" remote search | US | — | **Zero** results were actually junior cloud roles; returned security, SRE, contract and "AI trainer" gigs | — | Evidence that junior remote cloud is scarce |

### 8.2 How employers really define "junior" [A, from postings plus recruiter practice]

| Signal in posting | What it really means |
|---|---|
| "Absolvent:innen willkommen", "Graduate programme", "Trainee", "Associate" | **True 0–2 yrs.** Structured onboarding. Competitive, and often needs the local language |
| "(Junior)" in brackets | Flexible level: **1–3 yrs** preferred, strong grads considered |
| "Junior" + list of 8+ tools (Terraform, K8s, Helm, CI/CD, AWS+Azure, Python, Go…) | **Mis-labelled mid-level.** Budget is junior, expectations are 2–3 yrs |
| "2–5+ years in cloud **or system administration**" | They will accept **sysadmin/network ops experience** as the base. This is your bridge |
| "Mehrjährige Erfahrung" | 3+ years |
| On-call (Rufbereitschaft), driving licence, customer site | Integrator/MSP ops role: accessible to juniors, but a lifestyle and language filter |

### 8.3 Hard truths [A]
- **Postings that genuinely accept 0 years of cloud experience** in Germany are mostly **consultancy trainee roles** (Reply, Accenture, Capgemini, adesso, Materna, etc., based on the Reply example sampled plus the known consultancy model). They require German.
- **English-only junior infrastructure roles in Germany are rare.** English-only roles appear mostly at DevOps/platform level in product companies (Liebherr Digital, Berlin scale-ups).
- In the Gulf, "Cloud Engineer" postings sampled required 2–5+ years. Juniors are hired mostly via **local system integrators/MSPs** or as **nationals**.
- **Certifications alone did not appear as sufficient** anywhere. Reply lists certs as "a plus" and asks for *projects* **[J]**.

---

## 9. Germany (deep dive)

### 9.1 Macro demand
| Indicator | Value | Tag |
|---|---|---|
| Open IT positions (all sectors) 2025 | **~109,000** | Bitkom survey of 855 companies, fieldwork KW20–27 2025 **[S]** |
| Peak (2023) | 149,000 | **[H]** |
| Reported 2026 update of "79,000" open positions | **UNVERIFIED**: a secondary site reports it; I could not access the source | — |
| Companies' main response to shortage | Upskilling programmes (31%) | Bitkom **[S]** |
| Software-dev share of postings | Germany and France are the exceptions where it has *not* been rising | Indeed Hiring Lab **[J]** |
| Macro context | Weak economy, hiring restraint, some IT job cuts | Bitkom **[S]** |

**Interpretation [A]:** there is still a shortage, but it is a **shortage of experienced, German-speaking specialists**, not of juniors. Bitkom's own framing (economic slowdown causing hiring restraint) fits the posting evidence.

### 9.2 Salary evidence (gross annual, EUR)

**A. Official data: Bundesagentur für Arbeit Entgeltatlas 2025 (full-time employees subject to social insurance, all ages/experience, monthly gross ×12) [D]**

| Occupation (BA classification) | Q1 (25th pct) | **Median** | Q3 (75th pct) | ≈ USD median |
|---|---|---|---|---|
| Netzwerk-Servicetechniker/in: *IT-Netzwerktechnik, komplexe Spezialistentätigkeit* | €54,800 (4,567/mo) | **€71,500** (5,958/mo) | €87,300 (7,275/mo) | ~$81,500 |
| IT-Administrator/in | €53,640 (4,470/mo) | **UNVERIFIED** (not retrieved) | €81,800 (6,817/mo) | — |
| Fachinformatiker/in Systemintegration | €49,200 (4,101/mo) | **€62,300** (5,189/mo) | €80,900 (6,741/mo) | ~$71,000 |
| IT-System-Elektroniker/in | €44,500 | €54,800 | €67,800 | ~$62,500 |

Caveats: the Entgeltatlas does not split by experience; ×12 ignores/averages 13th-month pay; and the data is right-censored at the pension contribution ceiling (**€8,050/month in 2025**), so upper quartiles for senior roles are understated.

**B. Job-board/aggregator estimates (2026) [$]: these disagree with each other**

| Role | Source | Figure | Comment |
|---|---|---|---|
| All employees Germany | StepStone Gehaltsreport 2026 | Median **€53,900** | Benchmark |
| DevOps Engineer | StepStone salary page | Avg **€55,200**; entry ~€50,600; experienced avg ~€77,000 | StepStone "average" appears low vs Entgeltatlas for comparable specialists |
| DevOps Engineer | Secondary blogs (nova-search) | Median **~€78,000**; €45k junior → €120k+ lead | Low-quality source; directionally consistent with Entgeltatlas Q3 |
| Network Engineer | tech-gehalt.de | €52k–€92k, median **€68,000** | Low-quality source but matches Entgeltatlas median (€71.5k) |
| IT-Netzwerkadministrator | Secondary citing StepStone/gehalt.de | €48k–€78k, median ~€58,000 | Consistent with Fachinformatiker SI median (€62.3k) |
| Major metros | Secondary | Hamburg/Munich/Frankfurt pay **+5–15%** vs national | StepStone confirms South (BY, BW) and Hamburg are highest, East lowest |

**Why sources disagree:** StepStone blends job-ad salary ranges and user reports; the Entgeltatlas is administrative payroll data covering all firms and ages; blogs recycle numbers. **Trust the Entgeltatlas for medians and use aggregators only for the junior/senior spread.**

**C. Triangulated Germany bands, gross/yr [A], anchored to Entgeltatlas quartiles plus aggregator spreads. These are estimates.**

| Role | Junior (0–2) | Mid (3–5) | Senior (6–9) | Lead/Architect |
|---|---|---|---|---|
| NOC Engineer | €40–48k | €48–58k | — (moves on) | — |
| Network Administrator | €42–50k | €50–62k | €60–72k | — |
| Network Engineer | €48–56k | €58–72k | €72–88k | €85–105k |
| Cloud Engineer (AWS/Azure) | €50–60k | €62–78k | €78–95k | €95–120k |
| Cloud Network Engineer | €52–60k (rare title) | €65–80k | €80–98k | €95–120k |
| DevOps Engineer | €50–60k | €62–80k | €80–98k | €95–120k+ |
| Platform Engineer / SRE | rare at junior | €70–85k | €85–105k | €105–130k |
| Infrastructure Engineer | €48–56k | €58–75k | €75–90k | €90–115k |

City effect [A]: Munich > Frankfurt ≈ Hamburg ≈ Stuttgart > Düsseldorf ≈ Cologne > Berlin (Berlin pays near the national median for infra but has the most English-speaking tech jobs). **INSUFFICIENT DATA** for reliable city-by-role medians. Entgeltatlas does allow regional filtering, but I could not query it directly.

### 9.3 Technologies most frequently requested (German postings sampled) [J, small sample]
Terraform (IaC) · Azure (≥ AWS in German enterprise postings) · CI/CD (Azure DevOps, GitHub Actions) · Linux (Debian/RHEL) · Kubernetes/Docker/Helm · Ansible/SaltStack · VMware (being *replaced*, which creates OpenStack/Proxmox/cloud migration work) · Networking (BGP, firewalls, LAN/WLAN vendors such as Aruba/Extreme/Cisco/Fortinet).

### 9.4 Language: English-only vs German-required [J + A]
| Path | English-only feasibility in Germany |
|---|---|
| Network Admin / NOC / Network Engineer at integrators and MSPs | **Low**: customer-facing, on-call, on-site. Sampled junior network posting required **German C1** |
| Cloud Engineer (enterprise/Mittelstand/public) | **Low–medium**: sampled Azure role required very good German |
| Consultancy junior cloud programmes | **Low**: Reply required very good German *and* English |
| DevOps / Platform / SRE at product companies & scale-ups | **Medium–high**: Liebherr Digital DevOps required only fluent English |
| Berlin startups / international HQs (Munich, Berlin) | **Highest** |

**Rule of thumb [A]:** the closer the job is to *customers, users and hardware*, the more German it needs. The closer it is to *code and platforms*, the more English works. For long-term progression into lead/architect roles in German companies, **B2–C1 German is effectively required**. Plan for it.

### 9.5 Immigration pathways for non-EU applicants (official rules, 2026)
| Route | Key conditions | Relevance |
|---|---|---|
| **EU Blue Card** (§18g AufenthG) | Recognised degree (anabin **H+** and "entspricht/gleichwertig", or ZAB statement of comparability) + job offer at or above **€50,700** (standard) or **€45,934.20** (shortage occupations incl. IT, and recent graduates within 3 years) **[D, effective 1 Jan 2026]**. Only guaranteed fixed gross pay counts; bonuses/allowances excluded. | **Primary route.** IT salaries clear the reduced threshold even at junior level |
| **Blue Card for IT specialists without a degree** | **≥3 years of relevant professional experience at academic level within the last 7 years** + salary ≥ reduced threshold **[D]** | Backup if degree recognition fails |
| **Skilled worker with academic training** (§18b) | Recognised degree + qualified job; no Blue Card salary floor, but pay must be comparable to Germans | For offers below the Blue Card threshold |
| **Opportunity Card (Chancenkarte)** (§20a) | Recognised degree or ≥2-yr vocational qualification; **German A1 or English B2**; **≥6 points**; proof of funds **€1,091/month (2026) ≈ €13,092/yr**; valid up to 1 year; part-time work ≤20 h/week + 2-week trial jobs allowed **[D, secondary summaries of official rules]** | Job search from inside Germany; **very useful for juniors** because in-person interviews and German-speaking networks matter |
| **Study route** (Master's in Germany) | Admission + funds (blocked account); 18-month post-study job-search permit | Slowest, but the best junior entry: Werkstudent jobs give German experience |
| **Recognition** | Check the anabin database; if the university/degree is not H+, apply to ZAB for a Statement of Comparability | Do this **first**. It determines everything |

Official references: make-it-in-germany.com, the German missions' Blue Card data sheet (germany.info, May 2026), anabin.kmk.org, and the Federal Foreign Office.

---

## 10. Gulf (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman)

### 10.1 Nationalisation policies (what actually constrains foreign juniors)
| Country | Policy | Current rule relevant to IT | Tag |
|---|---|---|---|
| **UAE** | Emiratisation (Nafis) | Firms with **50+ employees**: +**2% skilled Emirati headcount per year** (1% per half-year). Firms with **20–49 employees** in 14 sectors: hire 1 Emirati per year (2024, 2025). Contributions for missed hires, e.g., **AED 108,000 per missing hire** reported collected Jan 2026 | MOHRE **[D]**; penalty figure from secondary **[$→UNVERIFIED at source]** |
| **Saudi Arabia** | Saudization (Nitaqat) | 46 engineering professions: **30% Saudi by 30 June 2026** for firms with ≥5 engineers; min. SAR 8,000/mo for Saudi engineers. Procurement 70%. **Specific % for IT professions: UNVERIFIED.** Postings explicitly tagged "(Saudi National)", e.g., NOC Support Engineer, Riyadh, Aug 2026 | HRSD/Fragomen **[D]**, **[J]** |
| **Qatar** | Qatarization | Target ~20% Qatari nationals in private sector by 2030 (secondary) | **[$]** secondary |
| **Oman** | Omanisation | Sector-specific rates (35%–90%+); expat permit fee incentives and penalties | secondary |
| **Kuwait** | Kuwaitization | Priority to nationals, strongest in public sector; details **INSUFFICIENT DATA** | secondary |
| **Bahrain** | Bahrainization | **INSUFFICIENT DATA** for IT-specific rules | — |

**Effect on foreign juniors [A]:** entry-level ops roles (NOC, helpdesk, junior sysadmin) are exactly the roles most targeted for nationals, because they are trainable. Senior specialist roles (cloud architect, senior DevOps, network architect) remain open to expats because of skill scarcity. **Foreign juniors face the steepest barrier in KSA, then UAE (large firms), then Qatar/Kuwait/Oman.** The UAE private sector and free zones remain the most open.

### 10.2 Salary evidence (monthly, tax-free) [$]: low reliability, read the notes
| Role | Country/City | Level | Figure | Source | Notes |
|---|---|---|---|---|---|
| DevOps Engineer | UAE | Entry (0–2) | **AED 10,000–16,000/mo** (~$2.7–4.4k) | menajobs.me (2026) | Secondary aggregator |
| DevOps Engineer | Dubai | Mid (3–6) | **AED 17,000–24,000/mo** (~$4.6–6.5k) | secondary aggregators | — |
| DevOps Engineer | Abu Dhabi | All | AED 19,000–38,000 (avg 28,500) | jobxdubai | Low-quality source |
| DevOps Engineer | KSA | Entry (0–2) | **SAR 9,000–14,000/mo** (~$2.4–3.7k) | menajobs/secondary | — |
| DevOps Engineer | KSA | Median (permanent) | **SAR 18,000/mo** (~$4.8k) | paymetriclabs | contract ≈ SAR 21k/mo |
| Cloud Engineer | Riyadh | Avg | "SAR 14,542" (P25 5,290 – P75 15,043) | Glassdoor, Sep 2026 | ⚠️ **Data-quality problem:** labelled "per year" but clearly monthly; P25 implausibly low. Do not rely on it |
| Cloud Architect / senior DevOps | KSA | Senior | SAR 28,000–50,000+/mo | secondary | Directional only |
| Hays GCC Salary Guide 2026 | GCC | ~400 roles | **Exists, but figures not retrieved: UNVERIFIED** | hays.ae | Check it directly: the most credible Gulf source |
| Market trend | UAE | DevOps/cloud pay up 12–15% (claimed) | secondary | **UNVERIFIED** |

**Triangulated Gulf bands, monthly base, tax-free [A], estimates for expats with relevant experience; allowances (housing, transport) vary widely:**
| Role | Junior (0–2) | Mid (3–5) | Senior (6–9) | Lead/Architect |
|---|---|---|---|---|
| NOC Engineer | AED 6–10k / SAR 6–10k | AED 10–15k | — | — |
| Network Engineer | AED 9–14k | AED 14–22k | AED 22–32k | AED 32–45k+ |
| Cloud Engineer / Cloud Network | AED 10–16k | AED 17–26k | AED 26–38k | AED 38–55k+ |
| DevOps / Platform | AED 10–16k | AED 17–26k | AED 26–40k | AED 40–55k+ |
| Network Automation | Rare title; priced as Network Engineer +10–20% **[A]** | | | |

Saudi figures are broadly similar in SAR, at roughly 2–10% more in Riyadh for scarce senior skills **[A, UNVERIFIED]**.

### 10.3 Other Gulf hiring realities [A, partially J]
- **Language:** English is the working language in tech. Arabic is a plus for government, customer-facing and KSA public-sector work.
- **Degree:** a bachelor's is standard in postings (both Gulf postings read in full required one) **[J]**. Degree attestation (home-country MOFA and embassy) is needed for work visas, particularly in KSA and Kuwait.
- **Local experience:** "GCC experience preferred" is common. The strongest route is through **system integrators and MSPs** (who sponsor visas and place staff at client sites) or through **multinationals transferring** staff.
- **Visa sponsorship:** Gulf employers sponsor as a matter of course. There is no points system. The barrier is *getting an offer*, not the visa.
- **Where foreign juniors realistically fail:** applying cold from abroad with no experience to "Cloud Engineer" roles that ask for 2–5 years; entry-level NOC/helpdesk in KSA (nationalised); government/semi-government roles.

---

## 11. Egypt

### 11.1 Salary evidence (Glassdoor, Sep 2026) [$]
| Role | Location | Avg | P25 | P75 | Sample | ≈ USD/mo (avg) | ≈ EUR/mo (avg) |
|---|---|---|---|---|---|---|---|
| Network Engineer | Egypt | **EGP 8,575** | 5,479 | 12,500 | 365 salaries | ~$167 | ~€146 |
| Cloud Engineer | Egypt | **EGP 18,500** | 12,271 | 30,015 | n/a | ~$359 | ~€315 |
| DevOps Engineer | Cairo | **EGP 18,667** | 13,000 | 27,958 | n/a | ~$362 | ~€318 |

⚠️ **Data-quality notes:**
1. Glassdoor labels these figures "per year". They are almost certainly **monthly** (EGP 8,575/yr ≈ $170/yr is impossible for an engineer). I have treated them as monthly.
2. Sources disagree sharply on DevOps: PayScale ≈ **EGP 121,356/yr** (≈ EGP 10k/mo), while Paylab shows **EGP 19,200–75,389/month**. The spread reflects *local employer* vs *international/remote employer* pay. Egypt has a two-tier market.
3. Figures lag inflation. EGP devaluations (2023–24) mean older self-reports understate current offers.

### 11.2 Triangulated Egypt bands (monthly gross, EGP) [A], estimates
| Role | Entry (0–1) | 1–3 yrs | 3–5 yrs | Senior (5+) | Remote-for-foreign-employer (mid) |
|---|---|---|---|---|---|
| NOC Engineer | 7–12k | 10–18k | — | — | Rare |
| Network Engineer | 8–14k | 12–25k | 20–40k | 35–70k+ | $1.5–3.5k/mo (contract) **[A, UNVERIFIED]** |
| Cloud Engineer | 12–20k | 18–35k | 30–60k | 50–100k+ | $2–4.5k/mo **[A, UNVERIFIED]** |
| DevOps | 12–20k | 18–35k | 30–65k | 55–120k+ | $2–5k/mo **[A, UNVERIFIED]** |

### 11.3 Market structure and where experience comes from [J + A]
- **Employers sampled in Cairo:** DXC Technology (Network Lead, UC), Honeywell (Systems Engineer), **Egyptian Banks Company** ("Team Leader, IT Automation (NOC Excellence)", evidence that even Egyptian NOCs are building automation teams), FlairsTech (Senior DevOps, an outsourcing firm serving foreign clients), and recruiters (Roots) for integrators **[J]**.
- **Best experience sources:** telecom operators and their vendors (Vodafone, Orange, e&, WE, Ericsson/Nokia/Huawei partners), banks and bank-service companies, global delivery centres (DXC, IBM, Valeo, Siemens, etc.), cloud-support hubs, and MSP/integrators. *Specific current hiring by named firms beyond the sample is UNVERIFIED.*
- **IT Support → Cloud transition in Egypt:** realistic through (a) global delivery centres that run AWS/Azure for foreign clients, (b) cloud-support centres, (c) outsourcing/staff-augmentation firms.

### 11.4 Is Egypt a good place to build experience before Germany/Gulf? [A]
**Yes, with conditions:**
- ✅ Cost of living lets you study at scale. Experience at multinationals, banks and telecoms is recognised by Gulf and German employers. The Arabic-speaking market is directly transferable to the Gulf. Egyptian engineers are a large, established Gulf workforce.
- ⚠️ Pick employers whose **stack and processes are international** (ITIL, change management, AWS/Azure, Terraform). Two years at a small shop doing manual config is worth far less than two years at a bank or GDC.
- ❌ Staying long-term on local pay is financially irrational compared with remote/Gulf/Germany options once you have 2–3 years of experience.

---

## 12. USA

### 12.1 Official data (BLS OOH; wages May 2025, projections 2025–35) [D][F]
| BLS occupation | Median wage | Projection 2025–35 | Openings/yr | Maps to |
|---|---|---|---|---|
| Computer User Support Specialists | **$61,860** | −3% (support specialists overall) | 48,700 (all support) | Helpdesk/IT support |
| Network & Computer Systems Administrators | **$99,130** | **−4%** | 13,400 | Network/sys admin, NOC-adjacent |
| Computer Network Architects | **$134,050** | **+8%** | 9,600 | Senior network/cloud network/architect |
| Information Security Analysts | **$129,180** | **+21%** | 14,100 | Security (comparison) |
| Software Developers, QA & Testers | Devs n/a here; QA **$104,300** | **+10%** | 106,100 | DevOps/SRE/Platform largely fall here or in "Computer Occupations, All Other" |

**Important:** BLS has **no dedicated SOC code** for Cloud Engineer, DevOps, Platform Engineer or SRE. They are split across software developers, network architects, sysadmins, and "computer occupations, all other." **Do not read the network-architect wage as "cloud engineer pay."**

### 12.2 Market data (non-official) [$][J]
| Item | Figure | Source |
|---|---|---|
| SRE median total compensation (US) | **$201,450** | Levels.fyi (updated 20 Sep 2026); self-reported, skewed to big tech |
| Company examples, SRE median TC | Google ~$301k; Microsoft ~$193k | Levels.fyi |
| US posting: Cloud Security Engineer, Philadelphia | $110k–$150k | Indeed, Sep 2026 |
| US posting: Cloud Engineer (storage/virtualisation), remote | $120k–$145k | Indeed, Jun 2026 |
| US posting: SRE, Hanscom AFB | $100k–$125k | Indeed, Aug 2026 |
| US posting: DevOps (contract), Wayne PA | $107k–$151k | Indeed, Aug 2026 |
| US posting: Network Development Engineer (CrowdStrike) | $116k–$209k | Indeed, Sep 2026 |
| Tech postings vs pre-pandemic | IT Infra/Ops/Support **−35.2%**; software dev **−27.5%** | Indeed Hiring Lab (Jan 2026) **[J]** |

**Outlook [A]:** the highest salaries in the world for this field, the weakest junior market in a decade, and immigration for non-residents is largely **H-1B lottery-dependent**. It is not a realistic *first* target for your profile.

---

## 13. Canada

| Item | Evidence | Tag |
|---|---|---|
| Network Administrator (NOC 22220) wages | Usually **CAD 21–55/hour** nationally (Job Bank) | **[D]** |
| Regional example | Northwest region (BC): CAD 26.46–49.24/h | **[D]** |
| Median wages for Cloud/DevOps | **INSUFFICIENT DATA** from official sources; Job Bank has no cloud-specific NOC code (falls under 21222 Information systems specialists / 21231 Software engineers / 22220) | — |
| Express Entry 2026 | STEM category revised: **19 occupations removed, 6 added**, focus shifted away from IT-heavy roles toward engineering/technical; minimum category experience raised from 6 months to **1 year** from 18 Feb 2026 | IRCC via Fragomen **[D]** |
| STEM draws in 2026 | Secondary sources claim **no STEM-specific draws** in 2026 so far | **UNVERIFIED** |

**Assessment [A]:** Canada has become **less favourable** for IT immigrants in 2025–26. Category-based selection de-prioritised IT, and the tech job market mirrors the US slowdown at lower salaries. Keep it as a secondary option, not a primary plan.

---

## 14. Salary Comparison (standardised)

**Methodology:** base salary, gross; Germany annual EUR; Gulf monthly AED (UAE) tax-free; Egypt monthly EGP; US annual USD. Figures marked [A] are my triangulated estimates from the sources in Parts 8–13; others are sourced. **Date: September 2026.** USD conversions use the rates stated in the header. Do not compare across countries without adjusting for tax (Germany ~35–45% effective deductions for single earners at these levels **[A]**; Gulf 0% personal income tax) and cost of living.

### 14.1 Germany (EUR/yr gross) and USD equivalent [A unless noted]
| Career | Entry | Mid | Senior | Architect/Lead | Demand | Entry difficulty | Remote | Intl mobility | Main certs | Core tech |
|---|---|---|---|---|---|---|---|---|---|---|
| Network Engineer | €48–56k ($55–64k) | €58–72k | €72–88k | €85–105k ($97–120k) | Medium, stable | Medium (German!) | Low–med | High | CCNA→CCNP | Routing/switching, FW, SD-WAN |
| Network Automation Eng. | Rare as junior | €65–80k | €80–95k | €95–115k | Low volume, high value | High | Medium | High | CCNA Automation, CCNP | Python, Ansible, NetBox, APIs |
| Cloud Engineer | €50–60k | €62–78k | €78–95k | €95–120k ($108–137k) | High | High | Med–high | Very high | SAA, AZ-104, Terraform | AWS/Azure, Terraform, Linux |
| Cloud Network Engineer | €52–60k | €65–80k | €80–98k | €95–120k | Medium | High | Medium | Very high | CCNP + ANS-C01 / AZ-700 | VPC/VNet, BGP, Transit/vWAN |
| AWS Engineer | ≈ Cloud Eng. | | | | High (product cos) | High | Med–high | Very high | SAA→SAP | AWS stack |
| Azure Engineer | ≈ Cloud Eng. | | | | **Very high (enterprise/public)** | High | Medium | High | AZ-104→AZ-305 | Azure, Entra ID, Terraform/Bicep |
| DevOps Engineer | €50–60k | €62–80k | €80–98k | €95–120k+ | High | High | High | Very high | CKA, Terraform | CI/CD, K8s, IaC, Python/Go |
| Platform Engineer | Rare | €70–85k | €85–105k | €105–130k | Growing | Very high | High | Very high | CKA/CKAD | K8s, GitOps, IDP |
| SRE | Rare | €70–85k | €85–105k | €105–130k | Medium–high | Very high | High | Very high | — | Observability, K8s, coding |
| Infrastructure Engineer | €48–56k | €58–75k | €75–90k | €90–115k | Medium | Medium | Medium | High | RHCSA, VMware/Cloud | Virtualisation, Linux/Win, storage |
| Cybersecurity Engineer | €50–60k | €62–80k | €80–100k | €100–130k | High | High | Medium | High | Security+, CISSP later | SIEM, IAM, network security |

Anchor data: Entgeltatlas 2025 IT network specialist median **€71.5k**, Q3 €87.3k; Fachinformatiker SI median €62.3k **[D]**.

### 14.2 Cross-country snapshot: mid-level Cloud/DevOps Engineer (3–5 yrs), base
| Country | Local | ≈ USD/yr | Evidence quality |
|---|---|---|---|
| USA | $110–150k | $110–150k | Postings **[J]** + BLS context: good |
| Germany | €62–80k | $71–91k | Entgeltatlas-anchored **[A]**: good |
| UAE | AED 17–26k/mo | $56–85k (tax-free) | Aggregators **[$]**: weak |
| Saudi Arabia | SAR 15–25k/mo | $48–80k (tax-free) | Aggregators **[$]**: weak |
| Egypt (local employer) | EGP 30–60k/mo | $7–14k | Glassdoor-anchored **[$]**: weak |
| Egypt (remote foreign employer) | $2–5k/mo | $24–60k | **[A] UNVERIFIED** |
| Canada | **INSUFFICIENT DATA** | — | — |

---

## 15. Career Progression (realistic, not guaranteed)

Timelines assume continuous employment in relevant roles and deliberate upskilling. Many people plateau at mid-level. Salary columns use the Germany bands from Part 14 **[A]**.

### 15.1 Networking track
| Stage | Yrs (cumulative) | Responsibilities | Skills to add | Certs | DE salary |
|---|---|---|---|---|---|
| NOC / Network Admin | 0–2 | Monitoring, tickets, basic changes | CCNA depth, Linux, Python basics | CCNA | €40–50k |
| Junior Network Engineer | 1–3 | Implement changes, branch/campus builds | OSPF/BGP, firewalls, VPN | CCNA (+ vendor: Fortinet NSE4 / Aruba) | €48–56k |
| Network Engineer | 3–6 | Own designs for sites/DC, complex troubleshooting | BGP depth, EVPN/VXLAN, SD-WAN, automation | CCNP Enterprise | €58–72k |
| Senior Network Engineer | 6–10 | Architecture input, standards, mentoring, escalation | Automation pipelines, cloud connectivity | CCNP + specialist / CCIE (optional) | €72–88k |
| Network Architect | 9–14 | End-to-end network strategy, vendor selection | Cloud networking, security architecture | CCIE/CCDE optional | €85–105k |
| Infrastructure Architect / Manager | 12+ | Cross-domain | Business, budgeting | — | €95–120k+ |

### 15.2 Cloud track
| Stage | Yrs | Responsibilities | Skills | Certs | DE salary |
|---|---|---|---|---|---|
| IT/NOC/Sys/Network entry | 0–2 | Operations | Linux, networking, scripting | CCNA / RHCSA | €40–55k |
| Cloud Support / Cloud Ops | 1–3 | Ticket-driven cloud ops, monitoring, IAM fixes | One cloud, IaC basics | SAA or AZ-104 | €48–58k |
| Junior Cloud Engineer | 2–4 | Build via Terraform under review | Terraform modules, CI/CD, containers | + Terraform Associate | €50–60k |
| Cloud Engineer | 3–6 | Own landing-zone components, migrations | Multi-account, networking, security, cost | SOA-C03 / AZ-700 / ANS-C01 | €62–78k |
| Senior Cloud Engineer | 5–9 | Lead designs, standards, reviews | K8s, policy-as-code, DR | SAP-C02 / AZ-305 | €78–95k |
| Cloud Architect or Platform Engineer | 7–12 | Architecture/governance or internal platform | Enterprise architecture, FinOps | SAP / AZ-305 | €95–120k |

### 15.3 DevOps track
| Stage | Yrs | Responsibilities | Skills | Certs | DE salary |
|---|---|---|---|---|---|
| Linux/Sys/Cloud | 0–3 | Operations and scripting | Bash/Python, Git | RHCSA | €45–55k |
| Junior DevOps | 2–4 | Maintain pipelines, containerise apps | Docker, CI/CD, Terraform | Terraform Associate | €50–60k |
| DevOps Engineer | 3–6 | Own delivery pipelines, K8s deploys | K8s, Helm, GitOps, observability | CKA | €62–80k |
| Senior DevOps | 5–9 | Architecture of delivery, reliability | Go/Python depth, security | CKA/CKS | €80–98k |
| Platform / SRE | 6–10 | Internal platform, SLOs | IDP design, SRE practices | — | €85–105k |
| Architect / Lead | 9+ | Org-wide platform strategy, people leadership | — | — | €105–130k |

---

## 16. Certifications: labour-market value

Ratings are my analysis based on how postings sampled treated certifications (as "a plus", not a requirement) and on vendor positioning **[A]**. Certification names are verified where noted.

| Certification | Gets first interview? | Proves knowledge? | Mainly useful after experience? | Commonly requested? | ROI for you | Notes |
|---|---|---|---|---|---|---|
| **CCNA (200-301)** | ✅ Yes for NOC/network roles | ✅ Solid fundamentals | No | ✅ Very common in network/NOC postings (esp. Egypt/Gulf) | **High** | Finish it |
| **CCNP Enterprise** | ✅ for mid roles | ✅ Strong | Partly (most valuable with 2+ yrs) | ✅ Mid-level network roles | **High** (year 2–3) | Do core (ENCOR) first |
| **CCNA Automation** (ex-DevNet Associate, 200-901 CCNAAUTO; renamed 3 Feb 2026 **[D]**) | ⚠️ Moderate | ✅ Covers Python/APIs/Git basics | No | Rarely by name | **Medium**: good *structured* path; projects matter more | The new name helps HR recognition |
| AWS Cloud Practitioner | ❌ Weak | ❌ Shallow | No | Rarely | **Low**: skip if going for SAA | |
| **AWS Solutions Architect – Associate (SAA-C03)** | ✅ Yes, the most recognised cloud cert | ✅ Broad | No | ✅ Most cited AWS cert in cloud postings (industry pattern **[A]**) | **High** | First cloud cert |
| **AWS CloudOps Engineer – Associate (SOA-C03)** (ex-SysOps, renamed 30 Sep 2025 **[D]**) | ⚠️ Moderate | ✅ Hands-on ops, now includes containers | No | Less than SAA | **Medium–high** for ops roles | Good second AWS cert |
| AWS Developer – Associate | ⚠️ | ✅ for serverless dev | No | Less for infra | **Low–medium** for you | |
| **AWS Advanced Networking – Specialty (ANS-C01)** | ✅ for cloud network roles | ✅✅ Deep | Yes | Niche but decisive | **High in year 2–3** | *Your* differentiator |
| AWS Solutions Architect – Professional | ✅ for senior/architect | ✅✅ | **Yes** | Senior roles | **Low now, high later** | After 3+ yrs |
| AZ-900 | ❌ | ❌ | No | Rarely | **Low**: skip | |
| **AZ-104 Azure Administrator** | ✅ Yes in Germany/Gulf enterprise | ✅ | No | ✅ Common in Azure postings | **High** (Germany/Gulf) | Second cloud cert |
| AZ-700 (Azure Network Engineer) | ✅ for cloud-network roles | ✅ | Partly | Niche | **Medium–high** | Good with CCNP |
| AZ-305 | ✅ for architect roles | ✅✅ | **Yes** | Architect roles | Later | |
| Google Associate Cloud Engineer | ⚠️ Only for GCP shops | ✅ | No | Rare | **Low** unless targeting GCP | |
| **HashiCorp Terraform Associate** | ⚠️ Moderate | ✅ Basic IaC | No | Terraform (the skill) appears in nearly all cloud postings sampled **[J]**; the cert rarely does | **Medium**: cheap, quick; the portfolio proves more | |
| **CKA** | ✅ for DevOps/Platform | ✅✅ Performance-based, hard to fake | Partly | ✅ Common in K8s-heavy roles | **High** in year 1–2 | Hands-on exam = credible |
| CKAD | ⚠️ | ✅ | No | Less for infra | **Medium** | Prefer CKA |
| **RHCSA** | ✅ in Linux/enterprise shops | ✅✅ Performance-based | No | ✅ Enterprise Linux roles | **High**: best Linux cert | |
| CompTIA Linux+ | ⚠️ | ✅ | No | Occasionally | **Low–medium** (RHCSA is stronger) | |
| CompTIA Security+ | ✅ US gov/DoD; ⚠️ elsewhere | ✅ Basic | No | ✅ US government roles | **Medium** (comparison path) | |

**Certification strategy for you [A]:** CCNA → **SAA-C03** → **RHCSA** (or solid Linux proof) → **Terraform Associate** → **AZ-104** → *after first job:* CCNP ENCOR **or** ANS-C01 → CKA → SAP/AZ-305 later.
**Anti-pattern:** Cloud Practitioner + AZ-900 + Google Digital Leader + five course badges and no Git history. Recruiters read that as "collects badges" **[A]**.

---

## 17. Portfolio Projects

Every project should live in a public GitHub repo with this **standard structure**:

```
project-name/
├── README.md            # problem, architecture diagram, how to run, cost, teardown, lessons
├── docs/
│   ├── architecture.png # draw.io / diagrams.net export
│   ├── decisions.md     # ADRs: why X over Y
│   └── runbook.md       # how to operate / troubleshoot
├── terraform/ or ansible/ or src/
├── tests/               # pre/post checks, terraform validate, pytest
├── .github/workflows/   # CI: lint, validate, plan
└── screenshots/         # console views, Grafana dashboards, pipeline runs
```

**README must answer:** What problem does this solve? What is the architecture (diagram)? How do I deploy it (commands)? What does it cost per month (and how do I destroy it)? What security decisions did you make? What broke and how did you fix it? What would you do differently in production?

### 17.1 Networking projects
| # | Project | Architecture & tech | Proves to employer |
|---|---|---|---|
| N1 | **Enterprise network lab** | Containerlab or EVE-NG/GNS3/CML: core–distribution–access, 2 sites, OSPF inside, BGP to 2 "ISPs", HSRP/VRRP, DHCP relay, DNS | You can design and troubleshoot a realistic enterprise topology |
| N2 | **VLAN/routing/firewall lab** | Inter-VLAN routing, pfSense/OPNsense or FortiGate VM, zone policies, site-to-site IPsec, NAT, a documented change plan with rollback | Firewall/VPN competence and change discipline |
| N3 | **Network monitoring** | Zabbix or Prometheus + SNMP exporter + Grafana; syslog to Loki/Graylog; alert rules; dashboard screenshots | NOC-to-engineer maturity: telemetry, alerting, baselining |
| N4 | **Python network automation** | Netmiko/Nornir: config backup to Git, compliance audit (e.g., NTP/SNMP/AAA standards), pre/post-change checks, report as CSV/HTML; NetBox as inventory | You remove manual toil; readable, tested code |
| N5 | **Ansible network automation** | Ansible roles for VLAN/interface/BGP config from YAML "intent"; idempotency; Jinja2 templates; GitHub Actions running `ansible-lint` and a dry-run against Containerlab | Infrastructure as code for networks: the key automation-hiring signal |

### 17.2 Cloud projects
| # | Project | Architecture & tech | Proves |
|---|---|---|---|
| C1 | **AWS VPC architecture** | Multi-AZ VPC, public/private/isolated subnets, NAT, VPC endpoints, flow logs; then **Transit Gateway** connecting 3 VPCs across 2 accounts | Cloud network design, your core differentiator |
| C2 | **Secure 3-tier app** | ALB → ASG/ECS in private subnets → RDS (Multi-AZ, encrypted), WAF, Secrets Manager, least-privilege IAM | End-to-end architecture thinking |
| C3 | **Terraform infrastructure** | Reusable modules, remote state (S3 + locking), workspaces/envs, `tflint`, `checkov`, `terraform plan` in PR | Production-grade IaC habits |
| C4 | **CI/CD pipeline** | GitHub Actions: build → test → scan → push image → deploy to ECS/EKS; OIDC to AWS (no static keys); manual approval for prod | DevOps competence and security awareness |
| C5 | **Docker deployment** | Multi-stage Dockerfile, compose for local, image scanning, health checks, non-root user | Container fundamentals |
| C6 | **Monitoring** | CloudWatch dashboards and alarms, or Prometheus/Grafana on EKS; SLO for the app (e.g., 99.5% availability) with an alert | SRE mindset |
| C7 | **Logging** | Centralised logs (CloudWatch Logs → OpenSearch, or Loki); structured JSON logs; retention policy; a saved query that finds an injected error | Operability |
| C8 | **IAM/security** | AWS Organizations with SCPs, IAM Identity Center, permission boundaries, GuardDuty + Security Hub, a documented "blast radius" analysis | Governance, much valued in regulated DE/Gulf sectors |
| C9 | **Hybrid networking** ⭐ | Home-lab/Containerlab router ↔ **AWS Site-to-Site VPN with BGP** ↔ Transit Gateway; route propagation; failover test; Route 53 Resolver for hybrid DNS | **The single most differentiating project for a network person moving to cloud** |
| C10 | **Cloud migration** | "Lift and improve" a VM-based app (e.g., WordPress/Nextcloud on a local VM) to AWS: assessment doc, migration plan, cutover runbook, rollback, cost comparison | Consulting-style migration thinking (what Reply-type employers sell) |

**Cost control:** use budgets/alerts, `terraform destroy` after screenshots, and prefer free-tier-eligible or short-lived resources. A NAT Gateway, Transit Gateway or VPN left running for a month costs real money **[A]**.

---

## 18. CV Strategy (junior Cloud/Network candidate)

### 18.1 Structure (1 page for <3 yrs; 2 pages max; for Germany add a photo only if you choose to (not required); include a German-format *Lebenslauf* only if applying in German)
1. **Header:** name, city/country, work-authorisation status (e.g., "Eligible for EU Blue Card; Chancenkarte holder" — only if true), email, LinkedIn, GitHub.
2. **Summary (3 lines):** role target + strongest proof. *Example:* "Network-focused infrastructure engineer (CCNA, AWS SAA) targeting Cloud/Network Engineer roles. Built a hybrid AWS–on-prem network with BGP over IPsec, Terraform-managed, and a Python config-audit tool covering 40 lab devices. Seeking roles in Germany (English; German B1)."
3. **Technical skills (grouped, no rating bars):** Networking | Cloud | IaC/Automation | Linux/OS | Containers/CI | Monitoring | Languages.
4. **Certifications** (with year; "in progress" with target month is fine).
5. **Projects (3–4, with links)**: the core evidence while you lack experience.
6. **Experience**: any real work, internships, freelance, volunteer. **Never invent.**
7. **Education**: degree, university, anabin status if strong (Germany), relevant thesis.
8. **Languages**: CEFR levels (e.g., German B1 — Goethe certificate).

### 18.2 ATS and keywords
- Mirror posting vocabulary exactly (e.g., "Terraform", "Infrastructure as Code", "Azure DevOps", "VPC", "BGP", "CI/CD"). ATS matches literal strings **[A]**.
- Use a simple single-column layout, standard headings, and no tables or graphics for key content. Export PDF from a text-based source.
- For German postings, add German keyword equivalents where natural (e.g., "Netzwerkadministration", "Rufbereitschaft", "Automatisierung").

### 18.3 Transforming weak bullets into evidence-based bullets
| Weak | Strong (only if true) |
|---|---|
| "Knowledge of AWS and networking." | "Designed and deployed a 3-VPC AWS network (Transit Gateway, private subnets, VPC endpoints) with Terraform; enabled VPC Flow Logs and verified segmentation with automated reachability tests." |
| "Familiar with Python automation." | "Wrote a Nornir/Netmiko tool that backs up configs of 20 lab devices to Git nightly and flags NTP/AAA drift against a YAML standard; cut manual audit time from ~2 h to ~3 min in lab tests." |
| "Worked on network monitoring." | "Deployed Prometheus + SNMP exporter + Grafana for a 12-node lab; created alert rules for interface errors and BGP session drops; documented runbook for each alert." |
| "Helped with IT support." (real job) | "Resolved ~25 tickets/week (L1/L2) across AD, DHCP/DNS and Wi-Fi for a 150-user office; wrote a PowerShell script to automate new-user onboarding, reducing setup from 40 to 10 minutes." |

Numbers must be **measured or honestly bounded** ("in lab tests", "~"). Interviewers probe them.

### 18.4 GitHub and LinkedIn
- **GitHub:** pin 4–6 repos; each has a README with a diagram; there are green CI badges; commits spread over months (not all on one day).
- **LinkedIn:** headline = target role + key stack; "Open to work" visible to recruiters; post short write-ups of projects (a lesson learned, a diagram). Connect with recruiters at integrators/MSPs/consultancies in target cities.

---

## 19. Getting Experience Without a Job

| Method | What it gives you | Employer value [A] | Realism |
|---|---|---|---|
| **Home lab** (Containerlab, EVE-NG, Proxmox) | Hands-on skill | ⭐⭐ (as portfolio) | Very high |
| **Cloud free tiers + budgets** | Real cloud experience | ⭐⭐–⭐⭐⭐ if well documented | Very high |
| **Open source** (docs, bug fixes, Ansible collections, NetBox plugins, Terraform providers/modules) | Public, reviewed contributions | ⭐⭐⭐: code review by strangers is credible | Medium (takes persistence) |
| **Freelancing** (small business networks, Microsoft 365/Azure setups, website hosting) | Real clients, real consequences | ⭐⭐⭐ | Medium; hard to start |
| **Internships / Werkstudent** (Germany) | Formal experience + German reference letter (*Arbeitszeugnis*) | ⭐⭐⭐⭐ | High for students in Germany; low from abroad |
| **Volunteering** (NGOs, schools, mosques/churches, community centres) | Real networks to fix | ⭐⭐–⭐⭐⭐ | High |
| **University projects/thesis** with a company | Formal experience | ⭐⭐⭐ | High if still studying |
| **Small businesses** (family, friends) | Real production changes | ⭐⭐ | High |
| **MSPs** | Breadth: many clients, many stacks | ⭐⭐⭐⭐ (best early experience) | High: MSPs hire juniors |
| **NOC** | Incident discipline, exposure to large networks | ⭐⭐⭐ | High (Egypt/Gulf/India hubs) |
| **IT support / helpdesk** | Professional baseline | ⭐⭐ (unless you escape within 12–18 months) | Very high |
| **Contract work** (short gigs, staff augmentation) | Paid experience | ⭐⭐⭐ | Medium |
| **Cloud support centres** (vendor/partner) | "Cloud" in the title, broad troubleshooting | ⭐⭐⭐⭐ | Medium; competitive |

**What employers actually value [A]:** (1) paid work where you owned something in production, (2) reviewed public work (open source), (3) documented projects that mirror their stack, (4) certifications. Labs count as *evidence of ability*, **not** as *years of experience*. Never list a home lab as a job.

---

## 20. Networking vs Cloud vs Cloud Networking vs DevOps vs Platform vs SRE

Ratings are analytical **[A]** unless tagged.

| Dimension | Networking | Cloud (general) | **Cloud Networking** | DevOps | Platform Eng. | SRE |
|---|---|---|---|---|---|---|
| Learning difficulty | Medium | Medium–high | High (two domains) | High | Very high | Very high |
| Entry barrier | **Lowest** | High | High | High | Very high | Very high |
| Salary ceiling | Medium–high (architects: BLS $134k median US **[D]**) | High | High | High | Very high | **Very high** (Levels.fyi US median TC $201k **[$]**) |
| Demand (2026) | Stable, admin declining (**BLS −4%**) **[F]** | High | Medium volume, scarce talent | High, cyclical | Growing (**Gartner forecast**) **[F]** | Stable–high in tech |
| Stability (5–10 yrs) | High for engineers/architects; low for pure ops | High | **High** | Medium (title churn) | High | High |
| Automation risk | **High for manual ops tasks** | Medium (routine provisioning automated) | Low–medium | Medium | Low | Low |
| AI impact | Assistants speed config/troubleshooting; reduces L1 NOC | Faster IaC authoring; more review needed | Design judgement stays human | Pipeline authoring accelerated | Platforms host AI tools (CNCF: K8s as "OS for AI") **[S]** | Incident analysis assisted; accountability human |
| Remote work | Low (hardware, on-site) | Medium–high | Medium | High | High | High |
| International mobility | High (universal skill) | Very high | Very high | Very high | Very high | High |
| Certification importance | **High** (CCNA/CCNP) | Medium–high | Medium | Low–medium | Low | Low |
| Mathematics | Low (subnetting) | Low | Low | Low | Low | Medium (statistics for SLOs/capacity) |
| Programming | Low → medium (automation) | Medium (scripting, IaC) | Medium | **High** | **High** | **High** |
| Linux | Medium | High | Medium–high | High | High | Very high |
| Language (Germany) | **German usually required** **[J]** | Mixed | Mixed | English often OK **[J]** | English often OK | English often OK |
| Transition from networking | — | Medium | **Easiest high-value move** | Hard | Hard (via cloud/DevOps) | Hard |
| Long-term options | Network architect, security, cloud networking | Architect, platform, security | Network/cloud architect, security architect | Platform, SRE, architect | Principal/staff, architect, mgmt | Principal, mgmt |

---

## 21. Emerging Non-AI Infrastructure Fields: evidence vs hype

| Field | Current demand | Trend | Hiring volume | Entry barrier | Salary potential | Long-term relevance | Evidence quality |
|---|---|---|---|---|---|---|---|
| **Cloud (general)** | High | ↑ Spend $143.4B/qtr, still growing **[D]** | High | Medium–high | High | Very high | Strong |
| **Cloud security** | High | ↑ BLS infosec +21% (2025–35) **[F]**; ISC2: skills gaps more critical than headcount (59% critical/significant, up from 44%) **[S]** | Medium–high | High | High | Very high | Strong |
| **Cloud networking** | Medium, scarce talent | ↑ (hybrid/multi-cloud) **[A]** | Low–medium | High | High | Very high | Medium (few direct statistics) |
| **Platform engineering** | Medium–high | ↑ Gartner forecast 80% of large orgs by 2026 **[F]** | Medium | Very high | Very high | High | Medium: forecast, not measured |
| **DevOps** | High | → (maturing into platform/SRE) | High | High | High | High (as a practice) | Medium |
| **SRE** | Medium–high | → | Medium | Very high | Very high | High | Medium |
| **Kubernetes** | High | ↑ 82% prod use among container users **[S]** | High (as a skill) | High | High | High | Strong |
| **Infrastructure as Code** | High | ↑ Terraform in almost all cloud postings sampled **[J]** | High (as a skill) | Medium | High | Very high | Strong |
| **Network automation** | Medium | ↑ as a skill; Cisco mainstreamed it (CCNA Automation) **[D]** | Low as a title **[J]** | Medium–high | High | High | Medium |
| **Zero Trust** | Medium | ↑ Mostly a feature of security/network roles | Low as a title | High | High | High | Weak (few labour-market statistics) |
| **SASE / SD-WAN** | Medium | ↑ Replacing MPLS/hub-and-spoke | Medium (integrators, vendors) | Medium (natural for network engineers) | Medium–high | High | Weak–medium; **INSUFFICIENT DATA** on job counts |
| **Edge computing** | Low–medium | ↗ Niche (telco, manufacturing, retail) | Low | High | Medium–high | Medium | **Hype > evidence** |
| **FinOps** | Low–medium | ↑ Cost pressure makes it relevant | Low | Medium (needs cloud + finance) | Medium–high | Medium–high | Weak |
| **Observability** | Medium–high | ↑ (OpenTelemetry standardisation) | Medium (as a skill) | Medium–high | High | High | Medium |
| **Data-centre infrastructure** | High | ↑ Build-out driven by capacity demand; VMware exit projects in EU (e.g., Relaxdays OpenStack move) **[J]** | Medium | Medium | Medium–high | High | Medium |
| **Sovereign/private cloud (EU)** | Medium | ↑ in Germany (VMware exits, data sovereignty) **[A]** | Low–medium | Medium–high | High | High | Weak–medium |

---

## 22. Automation and AI Impact on Infrastructure Roles

**Evidence available:**
- BLS explicitly attributes the projected **−4%** in network/sysadmin employment to DevOps absorption, NaaS outsourcing and automation, and does *not* attribute it to AI replacing admins wholesale **[F]**.
- Indeed Hiring Lab: tech postings remain 27–35% below pre-pandemic. Post-boom overstaffing is the main cause, with AI adoption "also playing a role". The recovery favours *experienced* talent over entry-level **[J]**.
- Real posting (Germany, 2026): a cloud infrastructure team plans to use AI agents for **routine provisioning and firewall management**, while hiring a human engineer for architecture, BGP/SDN design and automation **[J]**.
- Egyptian Banks Company hiring a "Team Leader, IT Automation (NOC Excellence)" **[J]**: the NOC is being automated from inside.

| Role | Tasks becoming automated | Responsibilities gaining value | Net outlook [A] |
|---|---|---|---|
| **NOC** | Alarm correlation, ticket triage, first-line remediation, reporting | Automation of runbooks, incident command, escalation judgement | **Shrinking headcount**; still an entry door, but plan to exit within 1–2 yrs |
| **Network Administrator** | Moves/adds/changes, backups, compliance checks, firmware upgrades | Automation ownership, security policy, vendor management | Declining (BLS −4%) |
| **Network Engineer** | Config generation, documentation, basic troubleshooting suggestions | Design, BGP/policy, DC/cloud connectivity, validating AI-generated changes | Stable, if automating |
| **Cloud Engineer** | Boilerplate Terraform, standard deployments (landing-zone accelerators, AI assistants) | Architecture trade-offs, security, cost, multi-account governance, review | Growing, with a higher bar |
| **DevOps** | Pipeline authoring, Dockerfiles, YAML | Platform design, supply-chain security, developer experience | Transforming into platform |
| **Platform Engineer** | Scaffolding | Product thinking for internal users, guardrails, hosting internal AI tools | Growing |
| **SRE** | Log/metric analysis, incident summaries | SLO design, systemic reliability, post-incident learning, accountability | Stable–growing |

**Bottom line [A]:** automation and AI remove the *tasks juniors used to learn on*. This is the real threat to you: the bottom rung shrinks. The countermeasure is to arrive at your first job already able to automate (Python/Ansible/Terraform), so you are the person who builds the automation rather than the person it replaces.

---

## 23. Networking → Cloud Roadmap (16 stages)

Times assume ~15–20 focused hours/week alongside work or study **[A]**.

| Stage | What to learn | What NOT to learn yet | Difficulty | Project | Proof of competence | Time | Job relevance |
|---|---|---|---|---|---|---|---|
| 1 Networking fundamentals | CCNA scope: subnetting, VLANs, STP, OSPF, ACLs, NAT, DHCP/DNS, IPv6; **basic BGP** | MPLS, SD-access, CCIE topics | Medium | N1 | CCNA passed; lab repo | 2–3 mo (you're partly there) | Required for NOC/network roles |
| 2 Linux | Shell, filesystem, permissions, systemd, networking (ip, ss, nftables), SSH, package mgmt, logs | Kernel internals, LFCS/RHCE depth | Medium | Harden and serve a web app on a VM | RHCSA-level tasks without notes | 2 mo | Required for every cloud/DevOps role |
| 3 Python | Basics, data structures, files, JSON/YAML, requests, virtualenv, error handling | OOP frameworks, Django, data science | Medium | N4 starter: config backup | Working script in Git with tests | 2 mo (in parallel with Linux) | Automation baseline |
| 4 Git | Commit, branch, merge, PRs, rebase basics, .gitignore, GitHub Actions hello-world | Git internals | Low | Put everything in Git | Clean commit history | 2 wks | Universal |
| 5 AWS (+ Azure later) | IAM, EC2, S3, VPC basics, RDS, CloudWatch, pricing | 200 services; ML services | Medium | C2 (console first, then IaC) | **SAA-C03** | 2–3 mo | Most requested cloud skill |
| 6 Cloud networking | VPC deep-dive, TGW, endpoints, Route 53/Resolver, VPN with BGP, Direct Connect concepts; Azure VNet/vWAN equivalents | Service mesh | Medium–high | **C1 + C9** | Hybrid BGP lab with failover demo | 1–2 mo | **Your differentiator** |
| 7 Terraform | HCL, providers, modules, state, remote backends, workspaces, validation | Terraform Cloud enterprise features, CDKTF | Medium | C3 (rebuild C1/C2 as code) | Terraform Associate + modular repo | 1–2 mo | In nearly every cloud posting **[J]** |
| 8 Docker | Images, Dockerfile, networking, volumes, compose | Swarm | Low–medium | C5 | Multi-stage, non-root image | 3–4 wks | DevOps/Cloud |
| 9 CI/CD | GitHub Actions (or GitLab CI), OIDC to AWS, environments/approvals | Jenkins plugin sprawl | Medium | C4 | Green pipeline deploying infra & app | 1 mo | DevOps/Cloud |
| 10 Monitoring | CloudWatch, Prometheus/Grafana, alerting, logs, basic SLOs | Full observability platforms | Medium | C6 + C7 | Dashboard + alert + runbook | 1 mo | Ops credibility |
| 11 Security | IAM least privilege, KMS, secrets, SCPs, security groups vs NACLs, GuardDuty, CIS benchmarks | Pen-testing | Medium | C8 | Documented guardrails | 1 mo | Required in regulated DE/Gulf sectors |
| 12 Real-world projects | Combine into C10 (migration) + one volunteer/freelance real system | New tools | Medium | C10 | Case study with before/after | 1–2 mo | Interview material |
| 13 Certification | SAA (done) → AZ-104 → (optional) CKA | Pro/Specialty certs | — | — | — | Spread across | Interview filter |
| 14 First job | Apply: NOC/Network Eng/Cloud Support/Cloud Ops/Junior Cloud at MSPs, integrators, consultancies | — | — | — | Offer | 1–6 mo search **[A]** | — |
| 15 Cloud Engineer | K8s (CKA), advanced networking (ANS-C01 or AZ-700), CCNP ENCOR if network-heavy | Everything at once | High | Production work | Promotion/lateral move | Yr 2–4 | — |
| 16 Senior / Platform / SRE / Architect | SAP-C02/AZ-305, platform (GitOps, IDP), SRE practices, stakeholder skills | — | Very high | — | Scope and ownership | Yr 5–10 | — |

---

## 24. Country Strategy

| Path | Sequence | Advantages | Barriers | Best for [A] |
|---|---|---|---|---|
| **Germany via study** | Master's in Germany → Werkstudent/internship → graduate job → Blue Card/settlement | Best junior access (German degree + German experience + network); reduced Blue Card threshold for recent graduates (€45,934.20) **[D]**; 18-month post-study job search; path to permanent residence | 1.5–2.5 yrs before full-time salary; living costs; still need German for most infra jobs | People who can fund 1.5–2 years and will learn German to B2 |
| **Germany direct (Chancenkarte / Blue Card from abroad)** | Experience at home → German B1 → Chancenkarte → in-country job search → Blue Card | Faster; the Opportunity Card allows part-time work and trial jobs while searching **[D]** | Junior roles need German; employers prefer candidates already in Germany; funds of €1,091/month needed **[D]** | People with 2–3 yrs experience + B1 German |
| **Egypt → build → move** | Egyptian enterprise job (bank/telco/GDC/MSP) 1–3 yrs + certs + portfolio → remote contract / Gulf / Germany | Lowest cost; real experience; Arabic advantage for Gulf | Low local pay; must pick employers with modern stack; EGP volatility | Most realistic *first* step if you are in Egypt now |
| **Gulf direct** | Apply from abroad or visit → join integrator/MSP → move to end-client | High net pay, tax-free; sponsorship routine; English workplace | Nationalisation of junior roles; "GCC experience" preference; no settlement path (residency tied to job); junior foreigners heavily disadvantaged | Candidates with 2–5 yrs experience; less suited to fresh grads |

**Do not assume immigration is easy [A]:** Germany's rules are generous on paper (the Blue Card threshold is below typical IT pay), but the *job offer* is the bottleneck, and for infra juniors the offer is gated by German language. The Gulf is visa-easy but experience-gated and gives no path to permanent residency.

---

## 25. Return on Effort (hours → employability milestones)

Assumes a CCNA-level starting point and deliberate, hands-on practice (at least 60% labs/projects) **[A]**. These are skill milestones, **not salary promises.**

| Hours | Networking | Cloud (AWS-first) | Cloud Networking | DevOps | Platform | Cybersecurity (comparison) |
|---|---|---|---|---|---|---|
| **500** | CCNA solid + labs → **employable for NOC / junior network admin** (Egypt/Gulf/MSP) | SAA-level knowledge + 2 console projects → *not yet employable as Cloud Engineer*; possible cloud-support interviews | Not reachable (needs both domains) | Linux + Git + Docker basics → not employable | Not reachable | Security+ level → SOC L1 interviews in some markets |
| **1,000** | CCNA + automation scripts + firewall/VPN depth → **junior network engineer** | SAA + Linux + Terraform + 3 projects → **cloud support / cloud ops / consultancy trainee** interviews | CCNA + SAA + hybrid BGP project → **strong junior profile** for network/cloud-ops roles | + CI/CD + Terraform → **junior DevOps interviews at best**, competing with CS grads | Not reachable | SOC L1 employable |
| **1,500** | CCNP-core level + Ansible/Python → **competitive for network engineer** (mid-level still needs experience) | + AZ-104 + CI/CD + monitoring → **competitive junior cloud engineer** (if experience or language gates are met) | + Terraform modules + Azure networking → **stand-out junior cloud/network candidate** | + K8s basics → credible junior DevOps | K8s fundamentals only | + cloud security basics |
| **2,500** | + DC/EVPN or SD-WAN depth + automation pipeline → skills at mid level; **title still limited by years of experience** | + CKA + security + migration case study → skills at mid-level cloud engineer | + ANS-C01/AZ-700-level depth → **skills of a mid-level cloud network engineer** | + CKA + GitOps + observability → mid-level skill | Entry to platform concepts; **still needs 2–3 yrs in production** | Mid-level analyst skills |

**Key insight [A]:** beyond ~1,500 hours, **self-study hours have diminishing returns versus production experience**. The highest-ROI move at that point is taking *any* adjacent job (NOC, network engineer, cloud ops) and learning on real systems. **Cloud Networking** has the best marginal return for *you* because your CCNA hours compound instead of being sunk.

---

## 26. Personalised Roadmap (6 / 12 / 24 months)

**Profile:** IT bachelor's · CCNA level · Python/automation interest · AWS interest · targets Germany + Gulf · long-term income · no AI/ML career · willing to study seriously. Assumes ~20 h/week.

### 26.1 Months 0–6: "Employable in operations, visible in cloud"
| Area | Plan |
|---|---|
| Learning | Finish CCNA (incl. basic BGP) → Linux (RHCSA objectives) → Python for network automation → Git → AWS core + VPC |
| Certifications | **CCNA** (month 1–2) · **AWS SAA-C03** (month 5–6) |
| Projects | N1 enterprise lab · N2 firewall/VPN lab · N4 Python config backup/audit · C1 AWS VPC |
| Portfolio | GitHub with 4 repos, READMEs, diagrams; LinkedIn rewritten |
| Language | **Start German now** (A1→A2 by month 6): the single highest-ROI non-technical investment for Germany **[A]** |
| Applications | From month 3: NOC Engineer, Network Support/Administrator, Junior Network Engineer, IT Infrastructure Support at **MSPs, telcos, banks, global delivery centres, integrators** (locally, e.g., in Egypt, or wherever you are) |
| Experience | Volunteer/freelance one real small-business network or Microsoft 365/Azure setup |
| Target titles | NOC Engineer · Network Administrator · Junior Network Engineer · IT Infrastructure Engineer (junior) · Technical Support Engineer (network) |
| Expected level | Junior network/ops; cloud-literate, not cloud-experienced |

### 26.2 Months 6–12: "Get the first job; make it count"
| Area | Plan |
|---|---|
| Learning | Terraform · Docker · GitHub Actions CI/CD · monitoring (Prometheus/Grafana/CloudWatch) · Ansible for network |
| Certifications | **Terraform Associate** · start **AZ-104** (target month 12) |
| Projects | **C9 hybrid BGP-over-VPN to AWS** (flagship) · C3 Terraform modules · N5 Ansible network automation · C4 CI/CD |
| Portfolio | Case-study write-up of C9 (blog/LinkedIn post) |
| Language | German **A2→B1** (take the Goethe/telc exam) |
| Applications | If not yet employed: widen to cloud support, cloud ops, and MSP roles. If employed: volunteer for any automation/cloud task at work, and automate one real process |
| Experience | Target: **6–12 months of paid ops/network experience** by month 12 |
| Target titles | + Cloud Support Engineer · Cloud Operations Engineer · Junior Cloud Engineer (consultancy trainee programmes, esp. if German ≥ B2) |
| Expected level | Junior network engineer with automation; junior cloud skill set |

### 26.3 Months 12–24: "Convert to cloud; prepare the move"
| Area | Plan |
|---|---|
| Learning | Kubernetes (CKA scope) · advanced AWS networking · Azure networking · security guardrails · migration methodology |
| Certifications | **AZ-104** (if not done) · **CKA** *or* **AWS ANS-C01** (choose ANS if you lean cloud-network, CKA if DevOps/platform) · optionally **CCNP ENCOR** if your job is network-heavy |
| Projects | C8 IAM/Org guardrails · C10 migration case study · contribute to 1 open-source infra project (Ansible collection, NetBox plugin, Terraform module) |
| Language | German **B1→B2** |
| Applications | **Germany:** Chancenkarte (once you have ~2 yrs experience + B1 German) *or* Blue Card offers remotely (Cloud/Network Engineer, English-friendly DevOps roles). **Gulf:** integrators/MSPs and end-clients in Dubai/Abu Dhabi/Riyadh for Network/Cloud Engineer roles. **Remote:** contract cloud-ops work |
| Experience | 1.5–2 yrs by month 24, with demonstrable automation/cloud work |
| Target titles | Cloud Engineer · Cloud Network Engineer · Network Engineer (Cloud/Automation) · Cloud Infrastructure Engineer · DevOps Engineer (junior-mid) |
| Expected level | **Early mid-level**: competitive for Cloud/Network Engineer roles; Blue Card threshold (€45,934.20 reduced) is realistically achievable with a German offer **[D + A]** |

**Decision checkpoints:**
- **Month 6:** no interviews? The issue is usually the CV/portfolio or application volume, not a lack of certs. Fix the CV (Part 18) before starting another certification.
- **Month 12:** still no job? Accept the best adjacent ops role (helpdesk at an MSP included) and keep building. Paid experience beats another six months of self-study (Part 25).
- **Month 18:** choose a primary destination (Germany vs Gulf) based on German level and offers, and go all-in on it.

---

## 27. Decision Framework

| If your priority is… | Best-aligned path(s) | Why (evidence) |
|---|---|---|
| **Fastest first IT job** | NOC / IT support / Network Admin at MSPs, telcos | Lowest entry barrier; CCNA-level acceptable **[J]**; BLS: 48,700 support openings/yr even while declining **[F]** |
| **Strongest networking foundation** | Network Engineer (enterprise/ISP) → CCNP | BGP/DC/firewall depth transfers to cloud networking and security |
| **Highest long-term infrastructure salary** | SRE / Platform / Cloud Architect | Levels.fyi US SRE median TC $201k **[$]**; network architects $134k **[D]**; top Germany bands €105–130k **[A]** |
| **Easiest transition from networking** | **Cloud Network Engineer** (or Network Engineer with cloud connectivity) | Reuses routing/BGP/VPN/DNS/firewall knowledge directly; hybrid connectivity is BGP-based |
| **Strongest Germany opportunity** | **Azure/AWS Cloud Engineer** (with German) or **DevOps/Platform** (English-friendly) | Azure dominance in Mittelstand/public sector **[J]**; English-only postings cluster in DevOps **[J]**; network jobs need German C1 **[J]** |
| **Strongest Gulf opportunity** | Cloud/DevOps and senior Network Engineer (**experienced**) | Cloud migration + data-residency demand; nationalisation targets juniors **[D][J]** |
| **Strongest Egypt opportunity** | NOC → Network Engineer at banks/telcos/GDCs; DevOps for foreign clients | Two-tier market: local vs international pay **[$]** |
| **Highest remote potential** | DevOps / Platform / SRE / Cloud Engineer | Code-centric, no hardware; networking is the least remote-friendly |
| **Strongest international mobility** | Cloud Engineer (AWS+Azure) | Same platforms, same certs worldwide; Blue Card thresholds reachable **[D]** |
| **Lowest programming requirement** | Network Engineer / Network Admin / Cloud Ops | Scripting helpful but not core |
| **Strongest technical depth** | SRE, Network Architect (ISP/DC), Platform | Deep systems + coding / deep protocols |
| **Strongest architecture path** | Network Engineer → Cloud Network → Cloud/Infrastructure Architect | Architects need cross-domain breadth. Network + cloud + security is the classic architect profile |

**For your profile specifically [A]:** the path that best balances entry probability, your existing investment, the Germany/Gulf targets and long-term income is:

> **CCNA → NOC/Network Engineer (with automation) → Cloud Network / Cloud Engineer (AWS + Azure, Terraform) → Senior Cloud / Platform or Cloud/Network Architect**

It is not the path with the highest ceiling (SRE/Platform), nor the easiest entry (pure networking). It is the path with the **best risk-adjusted return** for someone who already has networking foundations.

---

## 28. Sources

### 28.1 Source quality table

**Primary / official sources**
| Source | Type | Country | Topic | Date | Reliability | Why used |
|---|---|---|---|---|---|---|
| [BLS OOH – Network & Computer Systems Administrators](https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm) | Government statistics | US | Wages, projections | May 2025 wages; 2025–35 projections | High (accessed via search index; direct fetch blocked) | Official US baseline |
| [BLS OOH – Computer Network Architects](https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm) | Government | US | Wages, projections | 2025/2025–35 | High | Senior networking ceiling |
| [BLS OOH – Information Security Analysts](https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm) | Government | US | Wages, projections | 2025/2025–35 | High | Comparison path |
| [BLS OOH – Computer Support Specialists](https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm) | Government | US | Wages, projections | 2025 | High | Entry-level baseline |
| [BLS OOH – Software Developers, QA & Testers](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) | Government | US | Projections | 2025–35 | High | DevOps/SRE proxy |
| [Bundesagentur für Arbeit – Entgeltatlas](https://web.arbeitsagentur.de/entgeltatlas/) (Netzwerk-Servicetechniker [14713](https://web.arbeitsagentur.de/entgeltatlas/beruf/14713), IT-Administrator [89992](https://web.arbeitsagentur.de/entgeltatlas/beruf/89992), Fachinformatiker SI [7817](https://web.arbeitsagentur.de/entgeltatlas/beruf/7817)) | Administrative payroll data | DE | Salaries (median, quartiles) | Entgeltatlas 2025 | High (via search index) | Most reliable German salary anchor |
| [German Missions – EU Blue Card data sheet (PDF)](https://www.germany.info/resource/blob/2435484/ac4c3cfa8a1147a2e4709b9f9d0617be/eu-blue-card-data.pdf) | Government | DE | Blue Card | May 2026 | High | Official thresholds |
| [Tafapolsky & Smith – Blue Card 2026 thresholds](https://tandslaw.com/germany-updated-eu-blue-card-salary-thresholds-effective-1-january-2026/) | Law firm summary of official rules | DE | Blue Card | Jan 2026 | Medium–high | Cross-check of €50,700 / €45,934.20 |
| [Make it in Germany](https://www.make-it-in-germany.com/) | Government portal | DE | Immigration | 2026 | High | Official routes (Blue Card, Chancenkarte, recognition) |
| [anabin (KMK/ZAB)](https://anabin.kmk.org/) | Government database | DE | Degree recognition | Live | High | Recognition prerequisite |
| [MOHRE – Emiratisation targets](https://mohre.gov.ae/en/guidance-and-awareness-portal-new/emiratisation-targets) and [20–49 employee firms](https://www.mohre.gov.ae/en/media-center/news/2/1/2024/mohre-begins-implementing-emiratisation-targets-on-over-12000-private-companies-with-20-49-employees) | Government | UAE | Nationalisation | 2024–2026 | High | Emiratisation rules |
| [HRSD – engineering/procurement localisation](https://www.hrsd.gov.sa/en/media-center/news/%D8%B1%D9%81%D8%B9-%D9%86%D8%B3%D8%A8-%D8%A7%D9%84%D8%AA%D9%88%D8%B7%D9%8A%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%87%D9%86-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-%D9%88%D9%85%D9%87%D9%86-%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B1%D9%8A%D8%A7%D8%AA) | Government | KSA | Saudization | 2025–26 | High | Saudization rules |
| [Job Bank Canada – Network Administrator wages](https://www.jobbank.gc.ca/marketreport/wages-occupation/3749/ca) | Government | CA | Wages | 2025–26 | High | Canadian wages |
| [IRCC – 2026 category-based selection](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/updates/2026-cbs-express.html) | Government | CA | Immigration | 2026 | High | Express Entry changes |
| [AWS – CloudOps Engineer Associate (SOA-C03)](https://docs.aws.amazon.com/aws-certification/latest/sysops-administrator-associate-03/sysops-administrator-associate-03.html) | Vendor official | Global | Certification | 2025 | High | Certification rename/scope |
| [Cisco – CCNP Automation blog](https://blogs.cisco.com/learning/views-from-an-insider-on-the-ccnp-automation-track-autocor-edition) | Vendor official | Global | Certification | 2026 | High | DevNet → Automation rename |
| [CNCF Annual Cloud Native Survey 2025](https://www.cncf.io/announcements/2026/01/20/kubernetes-established-as-the-de-facto-operating-system-for-ai-as-production-use-hits-82-in-2025-cncf-annual-cloud-native-survey/) | Foundation survey | Global | Kubernetes adoption | Jan 2026 | Medium–high (self-selected respondents) | K8s demand |
| [ISC2 Cybersecurity Workforce Study 2025](https://www.isc2.org/Insights/2025/12/2025-ISC2-Cybersecurity-Workforce-Study) | Professional-body survey | Global | Security workforce | Dec 2025 | Medium–high | Security comparison |

**Secondary / industry sources**
| Source | Type | Country | Topic | Date | Reliability | Why used |
|---|---|---|---|---|---|---|
| [Synergy Research Group – cloud market share](https://www.srgresearch.com/articles/cloud-market-share-trends-big-three-together-hold-63-while-oracle-and-the-neoclouds-inch-higher) | Industry analyst | Global | Cloud market | Q2 2026 | High (industry standard) | Market sizing/shares |
| [Bitkom – IT-Fachkräfte 2025 (PDF)](https://www.bitkom.org/sites/main/files/2026-01/bitkom-studienbericht-it-fachkraefte-2025.pdf), [press release](https://www.bitkom.org/Presse/Presseinformation/Deutschland-fehlen-IT-Fachkraefte) | Industry association survey | DE | IT vacancies | 2025 (pub. Jan 2026) | Medium–high (n=855 firms) | German demand |
| [Gartner – Platform engineering](https://www.gartner.com/en/infrastructure-and-it-operations-leaders/topics/platform-engineering) | Analyst forecast | Global | Platform engineering | 2023 forecast | Medium (forecast) | Trend signal |
| [Indeed Hiring Lab – tech postings](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/), [Tech Q4 PDF](https://d341ezm4iqaae0.cloudfront.net/hiringlaborg/2026/02/20105029/HiringLab-Tech_Q4_1.pdf) | Job-posting index | US/Global | Hiring trends | 2026 | High for postings (not hires) | Demand trend |
| [Fragomen – Saudization engineering](https://www.fragomen.com/insights/saudi-arabia-saudization-requirements-increase-for-certain-engineering-and-procurement-sector-roles.html), [Fragomen – Express Entry 2026](https://www.fragomen.com/insights/canada-updates-to-express-entry-category-based-selection-for-2026.html) | Immigration law firm | KSA/CA | Policy | 2025–26 | High | Policy cross-check |
| [Arab News – SCCC/Alibaba Cloud](https://www.arabnews.com/node/2097666/business-economy), [Business Wire – stc/Alibaba JV](https://www.businesswire.com/news/home/20220525005407/en/stc-Group-and-Alibaba-Establish-Alibaba-Cloud-for-Cloud-Computing-in-Saudi-Arabia) | News / press release | KSA | Alibaba Cloud | 2022 | Medium–high | Alibaba relevance |
| [Faltara – GCC localisation comparison](https://www.faltara.com/blogs/gcc-localization-comparison-2026-qatar-oman-bahrain-foreign-employers) | Consultancy blog | GCC | Localisation | 2026 | Medium–low | Qatar/Oman context (flagged) |

**Job-posting evidence (Indeed API, retrieved 24 Sep 2026)**
| Posting | Country | Date posted | Used for |
|---|---|---|---|
| [Reply – Junior Cloud Engineer (Köln + 7 cities)](https://to.indeed.com/aacjsb6btjsy) | DE | 26 Aug 2026 | True graduate entry; German requirement |
| [CMS IT-Consulting via Instaffo – (Junior) Network Engineer, Berlin](https://to.indeed.com/aavxmshpm4r7) | DE | 21 Sep 2026 | German C1, on-call, licence |
| [YER Group – Cloud Engineer Azure, Essen](https://to.indeed.com/aakqx2rhcx9f) | DE | 15 Sep 2026 | Azure/Terraform, multi-year exp. |
| [Liebherr Digital – DevOps Engineer, Ulm](https://to.indeed.com/aaglqm746jlk) | DE | 23 Sep 2026 | English-only DevOps |
| [Relaxdays – Cloud Infrastructure Engineer (OpenStack)](https://to.indeed.com/aays6wjlm4ch) | DE | 24 Jun 2026 | VMware exit, BGP/SDN, AI agents for routine ops |
| [BlackStone eIT – Cloud Engineer, Dubai](https://to.indeed.com/aabc7bccyw8m) | UAE | 22 Jul 2026 | 2–5+ yrs "cloud or sysadmin" |
| [MASTER-WORKS/SOOR – Cloud & Infrastructure Engineer, Riyadh](https://to.indeed.com/aa2pp8fcwmnj) | KSA | 9 Jul 2026 | 5 yrs minimum |
| [DeepSource – NOC Support Engineer (Saudi National), Riyadh](https://to.indeed.com/aah8yhqjzvbx) | KSA | 26 Aug 2026 | Nationalisation evidence |
| [Roots – NOC Engineer, Cairo](https://to.indeed.com/aaxpbjbc8nt7) | EG | Feb 2026 (listing shows original 2021 date: possibly recycled) | NOC scope |
| [Egyptian Banks Co. – Team Leader IT Automation (NOC Excellence)](https://to.indeed.com/aamhm9pwfv7l) | EG | 3 Sep 2026 | NOC automation trend |
| [CrowdStrike – Network Development Engineer](https://to.indeed.com/aaqg497xzt46) | US | 11 Sep 2026 | Salary range |
| [TherapyNotes – Cloud Security Engineer](https://to.indeed.com/aa6pfnd7ycqy) | US | 2 Sep 2026 | Salary range |

**Salary aggregators (self-reported: lower reliability)**
| Source | Country | Date | Reliability | Note |
|---|---|---|---|---|
| [StepStone Gehaltsreport 2026](https://www.stepstone.de/e-recruiting/gehalt-deutschland/), [DevOps](https://www.stepstone.de/gehalt/DevOps-Engineer.html), [Network Engineer](https://www.stepstone.de/gehalt/Network-Engineer.html) | DE | 2026 | Medium | Large sample; methodology opaque |
| [Glassdoor – Egypt Network Engineer](https://www.glassdoor.com/Salaries/egypt-networking-engineer-salary-SRCH_IL.0,5_IN69_KO6,25.htm), [Cloud Engineer](https://www.glassdoor.com/Salaries/egypt-cloud-engineer-salary-SRCH_IL.0,5_IN69_KO6,20.htm), [DevOps Cairo](https://www.glassdoor.com/Salaries/cairo-egypt-devops-engineer-salary-SRCH_IL.0,11_IM1175_KO12,27.htm) | EG | Sep 2026 | Low–medium | Period mislabelled (monthly shown as yearly) |
| [Glassdoor – Riyadh Cloud Engineer](https://www.glassdoor.com/Salaries/riyadh-saudi-arabia-cloud-engineer-salary-SRCH_IL.0,19_IM1652_KO20,34.htm) | KSA | 2026 | Low | Inconsistent figures; not relied on |
| [Levels.fyi – SRE](https://www.levels.fyi/t/software-engineer/title/site-reliability-engineer) | US | 20 Sep 2026 | Medium (big-tech skew) | Ceiling indicator |
| [Hays GCC Salary Guide](https://www.hays.ae/salary-guide) | GCC | 2026 | High (recruiter) | **Figures not retrieved**; recommended for verification |
| menajobs.me / paymetriclabs / jobxdubai / tech-gehalt.de / nova-search | UAE/KSA/DE | 2026 | Low | Used only as directional ranges; flagged |

**Industry forecasts**
| Source | Forecast | Status |
|---|---|---|
| Gartner | 80% of large software engineering orgs with platform teams by 2026 (from 45% in 2022) | Forecast; not verified as achieved |
| BLS | Admins −4%, Architects +8%, InfoSec +21%, Software +10% (2025–35) | Official projection |

---

## 29. Research Limitations

1. **Primary pages were not fetched directly.** bls.gov, arbeitsagentur.de and bitkom.org were blocked by the research environment's proxy. All figures from them come from search-engine extracts of those official pages. The risk of an extract error is low but not zero.
2. **Job-posting sample is small (~66 listed, ~10 read in full) and single-source (Indeed).** It does **not** meet the 50–100 postings per region target. LinkedIn, StepStone, Bayt, Naukrigulf and Wuzzuf were not queryable. Conclusions from Part 8 are qualitative.
3. **No reliable public data** for: Germany city-by-role medians; Gulf salaries from audited sources (Hays figures not retrieved); Egypt remote/international pay; Canada cloud/DevOps medians; IT-specific Saudization percentages; job counts for "network automation", SASE or FinOps.
4. **Salary aggregators contradict each other** (e.g., StepStone DevOps avg €55,200 vs other 2026 sources ~€78,000 median; Egypt DevOps PayScale ~EGP 10k/month vs Paylab up to EGP 75k/month). Triangulated [A] bands are estimates and should be checked against current offers.
5. **Projections are not predictions of your outcome.** BLS/Gartner describe aggregates. Individual outcomes depend on language, location, network and timing.
6. **Some reported figures are UNVERIFIED** and labelled as such: Bitkom's reported 2026 figure of 79,000 vacancies, Synergy's provider growth rates, the UAE AED 108,000 penalty, Qatar's 20% target, the "no STEM draws in 2026" claim for Canada.
7. **Immigration rules change.** Verify Blue Card thresholds (updated every January), Chancenkarte funds (updated annually) and Gulf quotas with official portals before acting.
8. **Currency conversions** are point-in-time (September 2026) and hide large purchasing-power and tax differences.

---
*Prepared 24 September 2026. The report uses no AI/ML career recommendations. AI is discussed only as a force acting on infrastructure roles.*
