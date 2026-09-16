// Web app sec / bug bounty / API sec / offensive web
module.exports = function(c) {

// ------------- PortSwigger Web Security Academy (current URL structure) -------------
c('PortSwigger Web Security Academy', 'The canonical free browser-based web security training platform.', 'webappsec', 'https://portswigger.net/web-security');
c('PortSwigger: All Web Security Topics', 'Every topic PortSwigger covers, one page.', 'webappsec', 'https://portswigger.net/web-security/all-topics');
c('PortSwigger: All Web Security Labs', 'Every interactive lab, one page.', 'webappsec', 'https://portswigger.net/web-security/all-labs');
c('PortSwigger: All Materials', 'All topic articles combined into a single reading track.', 'webappsec', 'https://portswigger.net/web-security/all-materials');
c('PortSwigger: SQL Injection', 'Complete SQLi article + labs.', 'webappsec', 'https://portswigger.net/web-security/sql-injection');
c('PortSwigger: Cross-Site Scripting', 'Reflected, stored, DOM XSS with a lab per subtopic.', 'webappsec', 'https://portswigger.net/web-security/cross-site-scripting');
c('PortSwigger: CSRF', 'Cross-site request forgery — attack and defense.', 'webappsec', 'https://portswigger.net/web-security/csrf');
c('PortSwigger: CORS', 'CORS misconfigurations and their exploitation.', 'webappsec', 'https://portswigger.net/web-security/cors');
c('PortSwigger: Clickjacking', 'UI-redressing attacks and X-Frame-Options defenses.', 'webappsec', 'https://portswigger.net/web-security/clickjacking');
c('PortSwigger: SSRF', 'Server-side request forgery techniques and defenses.', 'webappsec', 'https://portswigger.net/web-security/ssrf');
c('PortSwigger: XXE Injection', 'XML external entity injection tradecraft.', 'webappsec', 'https://portswigger.net/web-security/xxe');
c('PortSwigger: HTTP Request Smuggling', 'Front-end vs. back-end desync attacks.', 'webappsec', 'https://portswigger.net/web-security/request-smuggling');
c('PortSwigger: OS Command Injection', 'Command injection techniques with labs.', 'webappsec', 'https://portswigger.net/web-security/os-command-injection');
c('PortSwigger: Server-Side Template Injection', 'SSTI across common template engines.', 'webappsec', 'https://portswigger.net/web-security/server-side-template-injection');
c('PortSwigger: Directory Traversal', 'Path traversal / LFI techniques.', 'webappsec', 'https://portswigger.net/web-security/file-path-traversal');
c('PortSwigger: Access Control Vulnerabilities', 'IDOR and broken access control.', 'webappsec', 'https://portswigger.net/web-security/access-control');
c('PortSwigger: File Upload Vulnerabilities', 'Bypass upload filters to gain RCE.', 'webappsec', 'https://portswigger.net/web-security/file-upload');
c('PortSwigger: Race Conditions', 'Race-based logic and TOCTOU issues in web apps.', 'webappsec', 'https://portswigger.net/web-security/race-conditions');
c('PortSwigger: Business Logic Vulnerabilities', 'Business-logic flaws in real apps.', 'webappsec', 'https://portswigger.net/web-security/logic-flaws');
c('PortSwigger: Information Disclosure', 'Enumeration and info leaks.', 'webappsec', 'https://portswigger.net/web-security/information-disclosure');
c('PortSwigger: Insecure Deserialization', 'Serialization attacks across languages.', 'webappsec', 'https://portswigger.net/web-security/deserialization');
c('PortSwigger: JWT Attacks', 'JWT algorithm confusion, weak keys, kid injection.', 'webappsec', 'https://portswigger.net/web-security/jwt');
c('PortSwigger: OAuth 2.0 Vulnerabilities', 'OAuth misconfigurations and impersonation.', 'webappsec', 'https://portswigger.net/web-security/oauth');
c('PortSwigger: WebSockets Vulnerabilities', 'WebSocket security topics.', 'webappsec', 'https://portswigger.net/web-security/websockets');
c('PortSwigger: DOM-based Vulnerabilities', 'DOM XSS, open redirects, cookie manipulation.', 'webappsec', 'https://portswigger.net/web-security/dom-based');
c('PortSwigger: Prototype Pollution', 'JS prototype-pollution client- and server-side.', 'webappsec', 'https://portswigger.net/web-security/prototype-pollution');
c('PortSwigger: GraphQL API Vulnerabilities', 'GraphQL-specific attacks and defenses.', 'webappsec', 'https://portswigger.net/web-security/graphql');
c('PortSwigger: Authentication Vulnerabilities', 'Broken authentication tradecraft with labs.', 'webappsec', 'https://portswigger.net/web-security/authentication');
c('PortSwigger: Web Cache Poisoning', 'Cache-poisoning attack chains.', 'webappsec', 'https://portswigger.net/web-security/web-cache-poisoning');
c('PortSwigger: Web Cache Deception', 'Cache-deception attack methodology.', 'webappsec', 'https://portswigger.net/web-security/web-cache-deception');
c('PortSwigger: HTTP Host header attacks', 'Host header injection with labs.', 'webappsec', 'https://portswigger.net/web-security/host-header');
c('PortSwigger: NoSQL Injection', 'NoSQL injection labs and techniques.', 'webappsec', 'https://portswigger.net/web-security/nosql-injection');
c('PortSwigger: API Testing', 'API recon and server-side parameter pollution labs.', 'webappsec', 'https://portswigger.net/web-security/api-testing');
c('PortSwigger: Web LLM Attacks', 'Prompt injection and LLM app attacks.', 'webappsec,aiml', 'https://portswigger.net/web-security/llm-attacks');
c('PortSwigger: Essential Skills (Server-side)', 'Foundational server-side skills track.', 'webappsec', 'https://portswigger.net/web-security/essential-skills');
c('PortSwigger: Burp Suite Documentation', 'The manual — read cover to cover if you use Burp.', 'webappsec', 'https://portswigger.net/burp/documentation');

// ------------- OWASP -------------
c('OWASP Top 10 (2021)', 'The current OWASP Top 10 list with each risk explained.', 'webappsec', 'https://owasp.org/www-project-top-ten/');
c('OWASP API Security Top 10 (2023)', 'API-focused top-10 risks.', 'webappsec', 'https://owasp.org/www-project-api-security/');
c('OWASP Mobile Top 10 (2024)', 'Mobile-focused top-10 risks.', 'webappsec,mobile', 'https://owasp.org/www-project-mobile-top-10/');
c('OWASP LLM Top 10', 'Top-10 risks for LLM applications.', 'webappsec,aiml', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/');
c('OWASP Testing Guide (WSTG)', 'The definitive web security testing handbook.', 'webappsec', 'https://owasp.org/www-project-web-security-testing-guide/');
c('OWASP Mobile Application Security Testing Guide', 'The reference guide for mobile security testing.', 'webappsec,mobile', 'https://mas.owasp.org/MASTG/');
c('OWASP Cheat Sheet Series', 'Focused, code-forward defense cheat sheets.', 'webappsec', 'https://cheatsheetseries.owasp.org/');
c('OWASP Application Security Verification Standard', 'Requirements-first standard for app security.', 'webappsec', 'https://owasp.org/www-project-application-security-verification-standard/');
c('OWASP SAMM v2', 'Maturity model for application security programs.', 'webappsec', 'https://owaspsamm.org/');
c('OWASP Amass Documentation', 'Attack surface mapping and asset discovery.', 'webappsec,red', 'https://github.com/OWASP/Amass/blob/master/doc/user_guide.md');

// ------------- Bug bounty programs -------------
c('HackerOne: Getting Started Hacking', 'Free primer that pairs Hacker101 with programs.', 'webappsec', 'https://www.hackerone.com/hackers/hacker101');
c('Intigriti Hackademy', 'Free platform for bug-bounty learning.', 'webappsec', 'https://blog.intigriti.com/hackademy/');
c('YesWeHack Dojo', 'Free platform for learning bug bounty.', 'webappsec', 'https://dojo-yeswehack.com/');
c('YesWeHack Blog: Learn', 'Case studies from the bug bounty community.', 'webappsec', 'https://blog.yeswehack.com/');
c('Bugcrowd VRT (Vulnerability Rating Taxonomy)', 'Understand severity classifications used by triage teams.', 'webappsec', 'https://bugcrowd.com/vulnerability-rating-taxonomy');
c('The Bug Hunter’s Methodology (Jason Haddix)', 'Public sections of the industry-standard methodology.', 'webappsec', 'https://github.com/jhaddix/tbhm');
c('Nahamsec: Recon Master Class (YouTube)', 'Public recon course for bug bounty.', 'webappsec', 'https://www.youtube.com/@NahamSec');
c('Stok: Bug Bounty (YouTube)', 'Stok’s well-organized bug bounty videos.', 'webappsec', 'https://www.youtube.com/@stokfredrik');
c('Zseano’s Methodology (BugBountyHunter)', 'Free case studies for the BBH platform.', 'webappsec', 'https://www.bugbountyhunter.com/methodology/');
c('The Cyber Mentor: Bug Bounty on YouTube', 'BB tradecraft from TCM Security.', 'webappsec', 'https://www.youtube.com/@TCMSecurityAcademy');

// ------------- Recon tools & knowledge -------------
c('ProjectDiscovery Blog', 'Advanced recon and vuln tooling articles.', 'webappsec,red', 'https://blog.projectdiscovery.io/');
c('ProjectDiscovery Nuclei Templates', 'Public YAML templates for scale scanning.', 'webappsec,red', 'https://github.com/projectdiscovery/nuclei-templates');
c('ProjectDiscovery Docs', 'nuclei, subfinder, httpx, katana docs.', 'webappsec,red', 'https://docs.projectdiscovery.io/');
c('OSCP-Style Bug Bounty Notes: HackTricks Web Pentesting', 'Companion web pentest chapters.', 'webappsec', 'https://book.hacktricks.xyz/pentesting-web');
c('Web Security Learning (RCE-Style Blogs)', 'Curated web security writeups.', 'webappsec', 'https://github.com/CHYbeta/Web-Security-Learning');

// ------------- Application security -------------
c('Snyk Learn', 'Interactive lessons for finding and fixing code vulns.', 'webappsec,dev', 'https://learn.snyk.io/');
c('Semgrep Academy', 'Learn SAST rules and secure-coding patterns.', 'webappsec,dev', 'https://academy.semgrep.dev/');
c('GitHub CodeQL Learning Lab', 'Write CodeQL queries to find vulns at scale.', 'webappsec,dev', 'https://codeql.github.com/');
c('Checkmarx Learn', 'AppSec content library.', 'webappsec,dev', 'https://checkmarx.com/community/');
c('Sonatype Vulnerability Lessons', 'Free education from the OSS Index team.', 'webappsec,dev', 'https://learn.sonatype.com/');
c('OWASP Juice Shop', 'The classic vulnerable web app for hands-on practice.', 'webappsec', 'https://owasp.org/www-project-juice-shop/');
c('OWASP WebGoat', 'Deliberately vulnerable web app with lessons.', 'webappsec', 'https://owasp.org/www-project-webgoat/');
c('OWASP DVWA', 'Damn Vulnerable Web App — many hackers’ first target.', 'webappsec', 'https://github.com/digininja/DVWA');
c('bWAPP', 'Buggy web app for security learning.', 'webappsec', 'http://itsecgames.com/');
c('VulnHub', 'Boot2root VMs you can download and hack locally.', 'webappsec,red', 'https://www.vulnhub.com/');

// ------------- API security -------------
c('APIsec University', 'Free API security courses.', 'webappsec,dev', 'https://www.apisecuniversity.com/');
c('APIsec University: API Penetration Testing Course', 'Deep dive into pentesting REST APIs.', 'webappsec', 'https://www.apisecuniversity.com/courses/api-penetration-testing');
c('APIsec University: API Security Fundamentals', 'Foundational API security course.', 'webappsec', 'https://www.apisecuniversity.com/courses/api-security-fundamentals');
c('APIsec University: OWASP API Security Top 10 Deep Dive', 'Course walking each item of the API Top 10.', 'webappsec', 'https://www.apisecuniversity.com/courses/owasp-api-security-top-10-deep-dive');
c('crAPI: Completely Ridiculous API', 'Vulnerable API playground.', 'webappsec', 'https://github.com/OWASP/crAPI');
c('vAPI: Vulnerable Adversely Programmed Interface', 'Vulnerable API for practice.', 'webappsec', 'https://github.com/roottusk/vapi');
c('Postman API Learning Center', 'Free API design/test/security content.', 'webappsec,dev', 'https://learning.postman.com/');

// ------------- GraphQL security -------------
c('GraphQL Security Best Practices (Apollo)', 'Apollo’s canonical GraphQL security guide.', 'webappsec,dev', 'https://www.apollographql.com/docs/technotes/tn0022-graphql-security-best-practices/');
c('DVGA: Damn Vulnerable GraphQL Application', 'Practice GraphQL exploitation.', 'webappsec', 'https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application');
c('graphql-cop', 'Open-source GraphQL security auditor.', 'webappsec', 'https://github.com/dolevf/graphql-cop');

// ------------- Modern Auth / OAuth / SAML -------------
c('OAuth 2.0 Simplified (Aaron Parecki)', 'Free book on OAuth 2.0 fundamentals.', 'webappsec,dev', 'https://www.oauth.com/');
c('OpenID Connect 1.0 Specification', 'The spec, annotated by implementers.', 'webappsec,dev', 'https://openid.net/specs/openid-connect-core-1_0.html');
c('SAML Basics (OneLogin)', 'Free intro to SAML and federation.', 'webappsec,dev', 'https://developers.onelogin.com/saml');
c('Passkeys Overview (FIDO Alliance)', 'Learn passwordless with passkeys.', 'webappsec,dev', 'https://fidoalliance.org/passkeys/');

// ------------- Real-world writeups -------------
c('PentesterLand: Newsletter Archives', 'Weekly digest of bug bounty writeups.', 'webappsec', 'https://pentester.land/newsletter/');
c('HackerOne: Public Reports', 'Curated repository of high-impact HackerOne reports.', 'webappsec', 'https://hackerone.com/hacktivity');
c('Google Bughunters: Case Studies', 'Google’s public researcher writeups.', 'webappsec', 'https://bughunters.google.com/blog');
c('Meta Bug Bounty Public Reports', 'Meta’s public disclosure reports.', 'webappsec', 'https://about.facebook.com/actions/security/bug-bounty/');
c('GitHub Security Advisories', 'CVE advisories for OSS repos.', 'webappsec,blue', 'https://github.com/advisories');

// ------------- Web LLM / AI red teaming (defenders + offense) -------------
c('OWASP LLM Applications Guide', 'Companion guide to the OWASP LLM Top 10.', 'webappsec,aiml', 'https://genai.owasp.org/llm-top-10/');
c('LangChain Security Best Practices', 'Framework-level guidance for LLM app security.', 'webappsec,aiml', 'https://python.langchain.com/docs/security/');
c('Rebuff.ai: Prompt Injection Defense', 'Open-source framework for prompt-injection detection.', 'webappsec,aiml', 'https://github.com/protectai/rebuff');
c('Garak: LLM Vulnerability Scanner', 'Framework for LLM red teaming.', 'webappsec,aiml,red', 'https://github.com/leondz/garak');

};
