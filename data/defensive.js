// Defensive / blue team / SOC / DFIR / threat hunting
module.exports = function(c) {

// ------------- Blue Team Labs / LetsDefend / CyberDefenders (free tiers) -------------
c('Blue Team Labs Online (BTLO)', 'Free tier hands-on blue-team scenarios.', 'blue', 'https://blueteamlabs.online/');
c('LetsDefend Free Rooms', 'SOC analyst investigation labs (free tier available).', 'blue', 'https://letsdefend.io/');
c('CyberDefenders CTFs', 'Blue Team CTF challenges — logs, PCAPs, memory dumps.', 'blue,ctf,forensics', 'https://cyberdefenders.org/');
c('Immersive Labs Community', 'Community-tier defensive challenges.', 'blue', 'https://community.immersivelabs.online/');
c('DFIR.training', 'Public library of DFIR challenges and courses.', 'blue,forensics', 'https://www.dfir.training/');

// ------------- MITRE D3FEND / ATT&CK for defenders -------------
c('MITRE D3FEND', 'Defensive counter-technique matrix — the blue counterpart to ATT&CK.', 'blue', 'https://d3fend.mitre.org/');
c('MITRE Engenuity CTID Adversary Emulation Library', 'Defensive study material via adversary emulation plans.', 'blue,red', 'https://github.com/center-for-threat-informed-defense/adversary_emulation_library');
c('MITRE ATT&CK Data Sources', 'What telemetry to collect to detect each technique.', 'blue', 'https://attack.mitre.org/datasources/');
c('MITRE Shield Active Defense KB', 'Active-defense knowledgebase (deprecated but useful reading).', 'blue', 'https://shield.mitre.org/');
c('MITRE ATT&CK Navigator', 'Interactive coverage matrix — build heat maps of your detection posture.', 'blue', 'https://mitre-attack.github.io/attack-navigator/');
c('MITRE Cyber Analytics Repository', 'Detection analytics mapped to ATT&CK.', 'blue', 'https://car.mitre.org/');
c('SigmaHQ Rules', 'Community-maintained Sigma detection rules.', 'blue', 'https://github.com/SigmaHQ/sigma');
c('The DFIR Report', 'Public incident writeups with IOCs and telemetry.', 'blue,forensics', 'https://thedfirreport.com/');

// ------------- Log analysis / SIEM -------------
c('Splunk Fundamentals 1', 'Free Splunk course covering SPL and dashboards.', 'blue', 'https://www.splunk.com/en_us/training/free-courses/overview.html');
c('Splunk Fundamentals 2', 'Free follow-up: reports, alerts, models.', 'blue', 'https://www.splunk.com/en_us/training/free-courses/overview.html');
c('Splunk Boss of the SOC (BOTS)', 'Detective work in a real Splunk instance — free scenarios.', 'blue,ctf', 'https://github.com/splunk/botsv3');
c('Elastic Stack Fundamentals', 'Learn Elasticsearch, Logstash, Kibana.', 'blue', 'https://www.elastic.co/training/free');
c('Elastic Security Labs Content', 'Deep dives, detection rules, and threat research.', 'blue', 'https://www.elastic.co/security-labs/');
c('Wazuh Documentation Courseware', 'Open-source SIEM & XDR walkthroughs.', 'blue', 'https://documentation.wazuh.com/current/user-manual/index.html');
c('Wazuh Threat Detection Rules', 'Reference ruleset library for Wazuh.', 'blue', 'https://github.com/wazuh/wazuh-ruleset');
c('Graylog Getting Started', 'Log management with Graylog.', 'blue', 'https://docs.graylog.org/docs/getting-started');
c('Chronicle YARA-L Rules', 'Rule authoring guide for Google’s Chronicle SIEM.', 'blue', 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-overview');
c('Microsoft Sentinel Fundamentals', 'Microsoft Learn path for Sentinel.', 'blue,cloud', 'https://learn.microsoft.com/en-us/training/paths/security-ops-sentinel/');
c('Microsoft Defender XDR Learn Path', 'Deploy and operate Defender XDR.', 'blue,cloud', 'https://learn.microsoft.com/en-us/training/paths/get-started-with-microsoft-365-defender/');
c('Sumo Logic Cert Prep', 'Free training toward Sumo certifications.', 'blue', 'https://learn.sumologic.com/');
c('Log Analytics with KQL', 'Kusto Query Language — the syntax of Azure investigations.', 'blue,cloud', 'https://learn.microsoft.com/en-us/training/paths/kql-analyze-data/');

// ------------- Threat hunting -------------
c('Threat Hunting Playbook (Roberto Rodriguez)', 'Data-driven threat hunting notebook.', 'blue', 'https://threathunterplaybook.com/');
c('Mordor Datasets', 'Datasets of ATT&CK-style pre-recorded intrusions for hunting.', 'blue', 'https://mordordatasets.com/');
c('OSQuery Documentation', 'Endpoint queries using SQL — official tutorials.', 'blue', 'https://osquery.readthedocs.io/');
c('Velociraptor Documentation', 'Endpoint monitoring/DFIR tool docs and courses.', 'blue,forensics', 'https://docs.velociraptor.app/');
c('Sysmon Modular', 'Modular Sysmon config with tutorials.', 'blue', 'https://github.com/olafhartong/sysmon-modular');
c('SwiftOnSecurity Sysmon Config', 'A curated Sysmon baseline for defenders.', 'blue', 'https://github.com/SwiftOnSecurity/sysmon-config');
c('Zeek (Bro) Documentation', 'Open-source network security monitor with tutorials.', 'blue', 'https://docs.zeek.org/en/master/');
c('Suricata Documentation', 'Open-source IDS/IPS with training rules.', 'blue', 'https://suricata.readthedocs.io/');
c('Snort 3 Documentation', 'Cisco Snort 3 official user guide.', 'blue', 'https://docs.snort.org/');

// ------------- Malware analysis / DFIR -------------
c('SANS DFIR Reading Room', 'Deep library of DFIR reference materials.', 'blue,forensics', 'https://www.sans.org/reading-room/whitepapers/forensics/');
c('SANS DFIR Cheat Sheets', 'Free cheat sheets for DFIR tooling.', 'blue,forensics', 'https://www.sans.org/security-resources/posters/');
c('13Cubed: Windows Forensics Video Series', 'Windows DFIR walkthroughs on YouTube.', 'blue,forensics', 'https://www.youtube.com/@13cubed');
c('Practical Malware Analysis: Labs', 'Companion lab binaries for the classic book.', 'blue,re', 'https://practicalmalwareanalysis.com/labs/');
c('OALabs (YouTube)', 'Reverse engineering and malware unpacking series.', 'blue,re', 'https://www.youtube.com/@OALabs');
c('MalwareTech Blog', 'Reverse engineering + defensive research by MalwareTech.', 'blue,re', 'https://www.malwaretech.com/');
c('Detection Engineering Blog (Splunk)', 'How Splunk’s SURGe team builds detections.', 'blue', 'https://www.splunk.com/en_us/blog/security.html');
c('DFIR Investigative Mindset (Andrew Rathbun)', 'Free curriculum on DFIR mindset and toolchain.', 'blue,forensics', 'https://aboutdfir.com/');
c('The Ultimate DFIR Cheat Sheet Collection', 'Curated cheat-sheet directory for DFIR.', 'blue,forensics', 'https://github.com/AndrewRathbun/DFIRArtifactMuseum');

// ------------- Incident response -------------
c('SANS Incident Handler’s Handbook', 'Free reference on the 6-step IR process.', 'blue,forensics', 'https://www.sans.org/reading-room/whitepapers/incident/incident-handlers-handbook-33901');
c('NIST 800-61 rev 2 Computer Security Incident Handling Guide', 'The canonical U.S. IR guide.', 'blue', 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final');
c('NIST 800-53 Security and Privacy Controls', 'Reference framework for security controls.', 'blue', 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final');
c('NIST 800-115 Technical Guide to Info Sec Testing', 'Baseline penetration testing framework document.', 'blue,red', 'https://csrc.nist.gov/publications/detail/sp/800-115/final');
c('Playbook of Playbooks (SANS)', 'Free IR playbook templates.', 'blue', 'https://www.sans.org/security-resources/');
c('DFIR Discord Playbook Corpus', 'Community-maintained IR playbooks.', 'blue', 'https://github.com/counteractive/incident-response-plan-template');

// ------------- Detection engineering -------------
c('Detection Engineering Weekly Newsletter', 'Weekly reading of detection craft.', 'blue', 'https://detectionengineering.net/');
c('Elastic Detection Rules', 'Elastic Security’s public detection rules library.', 'blue', 'https://github.com/elastic/detection-rules');
c('Sublime Security Detection Rules', 'Email defense open-source rule set.', 'blue', 'https://github.com/sublime-security/sublime-rules');
c('Panther Detection-as-Code Docs', 'Serverless detection-as-code framework.', 'blue', 'https://docs.panther.com/');
c('Chainsaw for Windows Event Logs', 'Fast Windows EVTX hunting tool docs.', 'blue,forensics', 'https://github.com/WithSecureLabs/chainsaw');
c('Hayabusa Sigma-based Windows Log Hunting', 'Timeline generation for Windows event logs.', 'blue,forensics', 'https://github.com/Yamato-Security/hayabusa');
c('KAPE (Kroll Artifact Parser)', 'Artifact collection and parsing for DFIR.', 'blue,forensics', 'https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape');
c('Velociraptor Learning Path', 'Free multi-part guide from the Velociraptor team.', 'blue,forensics', 'https://docs.velociraptor.app/docs/gui/');
c('SIGMA Rule Writing Guide', 'How to write high-signal Sigma rules.', 'blue', 'https://github.com/SigmaHQ/sigma-specification');

// ------------- Threat intel -------------
c('OTX AlienVault Free Threat Intel', 'Free threat-intel platform with pulses and IOCs.', 'blue', 'https://otx.alienvault.com/');
c('MISP Documentation', 'Threat-intel platform documentation.', 'blue', 'https://www.circl.lu/doc/misp/');
c('OpenCTI Documentation', 'Open-source threat intel platform tutorials.', 'blue', 'https://docs.opencti.io/');
c('Mandiant Threat Intelligence Blog', 'Deep threat-intel reports.', 'blue', 'https://cloud.google.com/blog/topics/threat-intelligence');
c('CrowdStrike Intelligence Blog', 'Nation-state and eCrime threat research.', 'blue', 'https://www.crowdstrike.com/blog/');
c('Recorded Future Intelligence Cloud (free reports)', 'Free public threat intelligence reports.', 'blue', 'https://www.recordedfuture.com/research/');
c('CISA Advisories', 'Federal advisories for actively exploited vulnerabilities.', 'blue', 'https://www.cisa.gov/news-events/cybersecurity-advisories');
c('CISA Known Exploited Vulnerabilities Catalog', 'The KEV catalog — canonical prioritization list.', 'blue', 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog');
c('MITRE CVE Program', 'Vulnerability catalog and CVE program.', 'blue', 'https://cve.mitre.org/');
c('CISA Free Cybersecurity Services and Tools', 'US federal free tools catalog.', 'blue', 'https://www.cisa.gov/resources-tools/services/cisa-services-catalog');

// ------------- Blue team courses -------------
c('AttackIQ Academy', 'Free curriculum on adversary emulation and detection.', 'blue,red', 'https://academy.attackiq.com/');
c('SecurityCareers.help: Free Blue Team Coursework', 'Aggregated free blue-team courses.', 'blue', 'https://github.com/securitycareers/awesome-security-career');
c('Blue Team Handbook Reading List', 'Curated companion reading for the Blue Team Handbook.', 'blue', 'https://github.com/rustyoldrake/awesome-security-handbook');
c('SANS Cyber Aces: Fundamentals (blue-oriented)', 'Free blue-team-oriented foundation modules.', 'blue', 'https://www.sans.org/cyberaces/');

// ------------- Open-source EDR / hunting -------------
c('OpenEDR Documentation', 'Open-source EDR docs.', 'blue', 'https://www.xcitium.com/opensource/');
c('LimaCharlie Documentation', 'Free-tier EDR + hunting platform.', 'blue', 'https://docs.limacharlie.io/');
c('Sysinternals Free Tools + Docs', 'Autoruns, Procmon, Sysmon — reference and how-tos.', 'blue', 'https://learn.microsoft.com/en-us/sysinternals/');
c('Windows Event Viewer Reference (Ultimate Windows Security)', 'Free searchable Windows event ID reference.', 'blue', 'https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/');
c('Sigma Rules Convert Guide (uncoder.io)', 'Convert Sigma to native SIEM query languages.', 'blue', 'https://uncoder.io/');

// ------------- Cloud security defense -------------
c('AWS Security Learn Plan', 'Structured free AWS security path.', 'blue,cloud', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/89/security-learning-plan');
c('Azure Security Learn Path', 'MS Learn security path for Azure.', 'blue,cloud', 'https://learn.microsoft.com/en-us/training/browse/?products=azure&roles=security-engineer');
c('GCP Security Learning Path', 'Google Cloud Skills Boost security path.', 'blue,cloud', 'https://www.cloudskillsboost.google/paths/13');
c('Prowler AWS Security Docs', 'Prowler CLI docs — cloud posture assessment.', 'blue,cloud', 'https://docs.prowler.com/');
c('ScoutSuite Multi-Cloud Auditing', 'Multi-cloud auditor documentation.', 'blue,cloud', 'https://github.com/nccgroup/ScoutSuite');

// ------------- Network defense -------------
c('OWASP Zed Attack Proxy Getting Started', 'ZAP is a defender favorite for continuous scanning.', 'blue,webappsec', 'https://www.zaproxy.org/getting-started/');
c('Practical Networking .NET', 'Deep free networking tutorials, especially TCP/IP fundamentals.', 'blue,dev', 'https://www.practicalnetworking.net/');
c('Rene Molenaar’s Networklessons Free Content', 'Free networking training samples.', 'blue,dev', 'https://networklessons.com/');

// ------------- Foundations & governance -------------
c('CIS Controls v8', 'The Center for Internet Security Controls (free).', 'blue', 'https://www.cisecurity.org/controls');
c('CIS Benchmarks (free PDFs)', 'Free hardening guides for OSes, services, cloud.', 'blue,cloud', 'https://www.cisecurity.org/cis-benchmarks/');
c('OWASP Application Security Verification Standard', 'Requirements you defend against.', 'blue,webappsec', 'https://owasp.org/www-project-application-security-verification-standard/');
c('NIST Cybersecurity Framework', 'US federal risk-based cybersecurity framework.', 'blue', 'https://www.nist.gov/cyberframework');

// ------------- Threat modeling -------------
c('Threat Modeling with STRIDE (free chapter)', 'Adam Shostack’s free reference material.', 'blue', 'https://shostack.org/resources/threat-modeling');
c('OWASP Threat Modeling Cheat Sheet', 'Concise engineering-focused threat modeling.', 'blue', 'https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html');
c('Microsoft Threat Modeling Tool Docs', 'Docs for the free Microsoft Threat Modeling Tool.', 'blue', 'https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool');
c('LINDDUN Privacy Threat Modeling', 'Privacy-focused threat modeling methodology.', 'blue', 'https://linddun.org/');

};
