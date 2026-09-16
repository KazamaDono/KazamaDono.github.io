// Offensive security / red team / exploit dev / malware / evasion
module.exports = function(c) {

// ------------- OpenSecurityTraining2 (OST2) — free, deep, university-quality -------------
c('OST2: Architecture 1001: x86-64 Assembly', 'Learn the x86-64 assembly language essentials — registers, instructions, calling conventions.', 'exploits,re', 'https://ost2.fyi/Arch1001.html');
c('OST2: Architecture 1002: x86-64 OS Internals', 'x86-64 OS-level primitives: virtual memory, interrupts, syscalls.', 'exploits,re', 'https://ost2.fyi/Arch1002.html');
c('OST2: Architecture 2001: Introductory ARM 64 Assembly', 'ARM64 assembly primitives paralleling Arch1001.', 'exploits,re', 'https://ost2.fyi/Arch2001.html');
c('OST2: Architecture 2811: Introductory Intel VT-x Hypervisor', 'Hypervisor primitives on Intel VT-x.', 'exploits', 'https://ost2.fyi/Arch2811.html');
c('OST2: Architecture 3001: x86-64 Intermediate Assembly', 'Advanced x86-64 assembly — SSE, AVX, atomics.', 'exploits,re', 'https://ost2.fyi/Arch3001.html');
c('OST2: Architecture 4001: x86-64 Advanced Assembly and Optimization', 'Deep dive into micro-arch effects and optimization.', 'exploits,re', 'https://ost2.fyi/Arch4001.html');
c('OST2: Reverse Engineering 1001: Ghidra', 'Reverse engineering fundamentals with Ghidra.', 're,exploits', 'https://ost2.fyi/RE1001.html');
c('OST2: Reverse Engineering 1002: C++ Reverse Engineering', 'RE C++ programs — v-tables, name mangling, RTTI.', 're,exploits', 'https://ost2.fyi/RE1002.html');
c('OST2: Reverse Engineering 2001: Windows Kernel Reverse Engineering', 'Deep dive into the Windows kernel with RE tools.', 're,exploits', 'https://ost2.fyi/RE2001.html');
c('OST2: Reverse Engineering 3410: Rootkits', 'Rootkit tradecraft and analysis.', 're,exploits,red', 'https://ost2.fyi/RE3410.html');
c('OST2: Vulnerabilities 1002: Introduction to Software Exploits', 'Foundational exploit development — stack overflows to shellcode.', 'exploits', 'https://ost2.fyi/Vulns1002.html');
c('OST2: Vulnerabilities 1003: Exploit Development', 'Modern exploit techniques — heap, format strings, integer bugs.', 'exploits', 'https://ost2.fyi/Vulns1003.html');
c('OST2: Vulnerabilities 2001: Windows Exploit Development', 'Windows-specific exploitation techniques.', 'exploits', 'https://ost2.fyi/Vulns2001.html');
c('OST2: Vulnerabilities 2101: Symbolic Analysis', 'Angr / KLEE and symbolic execution for vuln discovery.', 'exploits,re', 'https://ost2.fyi/Vulns2101.html');
c('OST2: Vulnerabilities 3110: Fuzzing', 'Fuzzing internals with AFL/LibFuzzer and coverage-guided methods.', 'exploits', 'https://ost2.fyi/Vulns3110.html');
c('OST2: Vulnerabilities 3210: Fuzzing Linux Kernel', 'Kernel fuzzing techniques and setups.', 'exploits', 'https://ost2.fyi/Vulns3210.html');
c('OST2: Debuggers 1101: WinDbg Fundamentals', 'WinDbg for reverse engineers and exploit devs.', 're,exploits', 'https://ost2.fyi/Dbg1101.html');
c('OST2: Debuggers 1102: WinDbg TTD', 'Time-travel debugging with WinDbg.', 're,exploits', 'https://ost2.fyi/Dbg1102.html');
c('OST2: Programming 1001: Intro to Trusted Computing', 'TPM 2.0 basics — attestation, sealing, DRTM.', 'exploits,dev', 'https://ost2.fyi/Prog1001.html');
c('OST2: Programming 3040: Intro to Windows Kernel Programming', 'Write Windows kernel drivers with WDK.', 'exploits,dev', 'https://ost2.fyi/Prog3040.html');
c('OST2: Programming 4020: Detection Engineering for Exploits', 'Building detections against modern exploit techniques.', 'blue,exploits', 'https://ost2.fyi/Detect4020.html');

// ------------- Pwn.College (individual dojos) -------------
c('Pwn.College: Getting Started', 'Set up your environment and learn how to attempt challenges.', 'exploits', 'https://pwn.college/getting-started/');
c('Pwn.College: Linux Luminarium', 'Master Linux command-line proficiency for exploitation.', 'exploits,dev', 'https://pwn.college/linux-luminarium/');
c('Pwn.College: Program Interaction', 'Talk to processes via stdin/args/env for exploitation.', 'exploits', 'https://pwn.college/program-interaction/');
c('Pwn.College: Memory Errors', 'Buffer overflows and other classic memory bugs.', 'exploits', 'https://pwn.college/memory-errors/');
c('Pwn.College: Shellcoding', 'Write portable shellcode for real-world exploits.', 'exploits', 'https://pwn.college/shellcoding/');
c('Pwn.College: Sandboxing', 'Bypass and construct sandboxes — seccomp, chroot, containers.', 'exploits', 'https://pwn.college/sandboxing/');
c('Pwn.College: Binary Exploitation', 'Full ret2libc/ret2syscall/ROP chain challenges.', 'exploits', 'https://pwn.college/binary-exploitation/');
c('Pwn.College: Kernel Security', 'Exploit vulnerabilities in Linux kernel modules.', 'exploits', 'https://pwn.college/kernel-security/');
c('Pwn.College: Race Conditions', 'TOCTOU and concurrent exploitation.', 'exploits', 'https://pwn.college/race-conditions/');
c('Pwn.College: Fuzzing', 'AFL/LibFuzzer-driven bug hunting.', 'exploits', 'https://pwn.college/fuzzing/');
c('Pwn.College: Return Oriented Programming', 'ROP chain construction and mitigations.', 'exploits', 'https://pwn.college/return-oriented-programming/');
c('Pwn.College: Dynamic Allocator Misuse', 'Heap exploitation across ptmalloc/tcmalloc.', 'exploits', 'https://pwn.college/dynamic-allocator-misuse/');
c('Pwn.College: Reverse Engineering', 'Static + dynamic RE challenges.', 're,exploits', 'https://pwn.college/reverse-engineering/');
c('Pwn.College: Microarchitecture Exploitation', 'Speculative execution, side channels.', 'exploits', 'https://pwn.college/microarchitecture-exploitation/');
c('Pwn.College: Fundamentals of Web Security', 'Web security modules integrated into the pwn.college model.', 'webappsec,exploits', 'https://pwn.college/fundamentals-web-security/');
c('Pwn.College: System Security', 'Sandboxing, races and kernel-level topics rolled together.', 'exploits', 'https://pwn.college/system-security/');
c('Pwn.College: Software Exploitation', 'Format strings, file structs, exploitation primitives.', 'exploits', 'https://pwn.college/software-exploitation/');

// ------------- Modern Binary Exploitation (RPI CSCI-4968) -------------
c('Modern Binary Exploitation (RPI)', 'A classic university course on binary exploitation, freely available.', 'exploits', 'https://github.com/RPISEC/MBE');
c('RPISEC Malware Course', 'Malware analysis lectures and labs from RPI.', 're,red', 'https://github.com/RPISEC/Malware');

// ------------- Corelan Tutorials -------------
c('Corelan Exploit Writing Tutorial 1: Stack Based Overflows', 'The classic Corelan Windows exploitation series.', 'exploits', 'https://www.corelan.be/index.php/2009/07/19/exploit-writing-tutorial-part-1-stack-based-overflows/');
c('Corelan Exploit Writing 2: Jumping to Shellcode', 'Part 2 of Corelan’s Windows exploit series.', 'exploits', 'https://www.corelan.be/index.php/2009/07/23/writing-buffer-overflow-exploits-a-quick-and-basic-tutorial-part-2/');
c('Corelan Exploit Writing 3: SEH', 'Structured Exception Handler overwrites.', 'exploits', 'https://www.corelan.be/index.php/2009/07/25/writing-buffer-overflow-exploits-a-quick-and-basic-tutorial-part-3-seh/');
c('Corelan Exploit Writing 3b: SEH Chains', 'Chaining SEH-based exploits.', 'exploits', 'https://www.corelan.be/index.php/2009/07/28/seh-based-exploit-writing-tutorial-continued-just-another-example-part-3b/');
c('Corelan Exploit Writing 4: From Exploit to Metasploit', 'Turn a public POC into a Metasploit module.', 'exploits', 'https://www.corelan.be/index.php/2009/08/12/exploit-writing-tutorials-part-4-from-exploit-to-metasploit-the-basics/');
c('Corelan Exploit Writing 5: How Debugger Modules Help', 'Pipes and gadget hunting.', 'exploits', 'https://www.corelan.be/index.php/2009/09/05/exploit-writing-tutorial-part-5-how-debugger-modules-plugins-can-speed-up-basic-exploit-development/');
c('Corelan Exploit Writing 6: Bypassing Cookies, SafeSEH and DEP', 'Windows mitigations and their bypasses.', 'exploits', 'https://www.corelan.be/index.php/2009/09/21/exploit-writing-tutorial-part-6-bypassing-stack-cookies-safeseh-hw-dep-and-aslr/');
c('Corelan Exploit Writing 7: Unicode', 'Unicode-based buffer overflow exploitation.', 'exploits', 'https://www.corelan.be/index.php/2009/11/06/exploit-writing-tutorial-part-7-unicode-from-0x00410041-to-calc/');
c('Corelan Exploit Writing 8: Win32 Egghunting', 'Egghunter techniques for tiny buffers.', 'exploits', 'https://www.corelan.be/index.php/2010/01/09/exploit-writing-tutorial-part-8-win32-egg-hunting/');
c('Corelan Exploit Writing 9: Introduction to Win32 Shellcoding', 'Roll your own shellcode from scratch.', 'exploits', 'https://www.corelan.be/index.php/2010/02/25/exploit-writing-tutorial-part-9-introduction-to-win32-shellcoding/');
c('Corelan Exploit Writing 10: Chaining DEP with ROP', 'Windows ROP chain construction.', 'exploits', 'https://www.corelan.be/index.php/2010/06/16/exploit-writing-tutorial-part-10-chaining-dep-with-rop-the-rubikstm-cube/');
c('Corelan Exploit Writing 11: Heap Spraying Demystified', 'Heap-spraying for browser exploitation.', 'exploits', 'https://www.corelan.be/index.php/2011/12/31/exploit-writing-tutorial-part-11-heap-spraying-demystified/');
c('Corelan mona.py Documentation', 'Corelan’s mona.py plugin for exploit assistance.', 'exploits', 'https://www.corelan.be/index.php/security/mona-py/');

// ------------- FuzzySecurity Tutorials -------------
c('FuzzySecurity: Windows Exploit Development', 'Complete Windows exploitation series from FuzzySecurity.', 'exploits', 'https://www.fuzzysecurity.com/tutorials.html');
c('FuzzySecurity: Windows Kernel Exploitation', 'Kernel-mode exploitation Windows series.', 'exploits', 'https://www.fuzzysecurity.com/tutorials/expDev/PartI.html');

// ------------- Azeria / ARM -------------
c('Azeria Labs: ARM Assembly Basics', 'The go-to ARM assembly tutorial series.', 'exploits,re', 'https://azeria-labs.com/writing-arm-assembly-part-1/');
c('Azeria Labs: ARM Exploitation Tutorials', 'ARM exploit development from stack overflows to ROP.', 'exploits', 'https://azeria-labs.com/writing-arm-shellcode/');
c('Azeria Labs: ARM64 Reversing and Exploitation', 'ARM64 (AArch64) reverse engineering and exploitation.', 'exploits,re', 'https://azeria-labs.com/arm-data-types-and-registers-part-2/');

// ------------- Ret2 Wargames (free tier) -------------
c('Ret2 Systems Wargames: Reverse Engineering', 'Free browser-based RE challenges.', 're', 'https://wargames.ret2.systems/');
c('LiveOverflow: Binary Exploitation / Buffer Overflow', 'YouTube deep-dive series into exploit dev.', 'exploits', 'https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN');
c('LiveOverflow: Reverse Engineering', 'Modern RE techniques on YouTube.', 're', 'https://www.youtube.com/playlist?list=PLhixgUqwRTjxAnkTuGGE0IZO4y1s2H4te');
c('LiveOverflow: Web Hacking', 'Web hacking series on YouTube.', 'webappsec', 'https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN');
c('LiveOverflow: HackTheBox Machines', 'Walkthroughs across HTB machines with commentary.', 'red', 'https://www.youtube.com/playlist?list=PLhixgUqwRTjzzBeFSHXrw9DnQtssdAwgG');
c('LiveOverflow: CTF Videos', 'A running series of CTF-solving explanations.', 'ctf,red', 'https://www.youtube.com/@LiveOverflow');
c('LiveOverflow: Fuzzing (What The Fuzz)', 'Applied fuzzing walkthroughs.', 'exploits', 'https://www.youtube.com/playlist?list=PLhixgUqwRTjyLgNpe1XU4rHy_QOUymGgH');

// ------------- IPPSec (HackTheBox walkthroughs) -------------
c('IPPSec: HackTheBox Video Walkthroughs', 'Every retired HTB machine solved with commentary — canonical practice resource.', 'red,ctf', 'https://ippsec.rocks/');

// ------------- The Cyber Mentor / TCM Security -------------
c('TCM Security: Practical Ethical Hacker (YouTube)', 'Heath Adams’s free 15-hour ethical hacking course.', 'red', 'https://www.youtube.com/watch?v=3FNYvj2U0HM');
c('TCM Security: Windows Privilege Escalation for Beginners (YouTube)', 'The winPEAS/Sherlock/PowerUp curriculum, free.', 'red', 'https://www.youtube.com/watch?v=6IAcqm1_deI');
c('TCM Security: Linux Privilege Escalation for Beginners (YouTube)', 'linPEAS/PSPY-driven priv-esc course.', 'red', 'https://www.youtube.com/watch?v=8HODfmt3Uz0');
c('TCM Security: Open Source Intelligence Fundamentals (YouTube)', 'Free OSINT primer from TCM.', 'osint', 'https://www.youtube.com/watch?v=qwA6MmbeGNo');
c('TCM Security: Practical Bug Bounty (YouTube)', 'Getting into bug bounty and OWASP-Top-10 tradecraft.', 'webappsec', 'https://www.youtube.com/watch?v=A1K7DRSDaBs');

// ------------- HackerSploit / Cybrary / free full courses -------------
c('HackerSploit: Linux Basics for Ethical Hackers', 'Free hands-on Linux for pentesting.', 'red,dev', 'https://www.youtube.com/playlist?list=PLBf0hzazHTGO5xdMFvpKgv3RdW-9wpTiV');
c('HackerSploit: Penetration Testing Bootcamp', 'End-to-end pentesting playbook.', 'red', 'https://www.youtube.com/playlist?list=PLBf0hzazHTGPgvHrO9nxGjF-c-jSKJEck');
c('HackerSploit: Web Application Penetration Testing', 'Web app pentesting walkthroughs.', 'webappsec', 'https://www.youtube.com/playlist?list=PLBf0hzazHTGNRIw-cKgIPtIwkS7NUFDNK');
c('HackerSploit: Bug Bounty Methodology', 'Recon-focused bug bounty methodology.', 'webappsec', 'https://www.youtube.com/playlist?list=PLBf0hzazHTGPRRRE5ihYtxx1cbGx-9WFn');
c('HackerSploit: Docker for Penetration Testers', 'Containerize your pentest toolkit.', 'red,cloud', 'https://www.youtube.com/playlist?list=PLBf0hzazHTGMLzc22oZzT0EAmqXAg65O0');
c('Cybrary: Introduction to IT and Cybersecurity (free)', 'Free intro courses across the security landscape.', 'red,blue', 'https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/');
c('Cybrary: OWASP Top 10 (free)', 'Explanation and demonstration of the OWASP Top 10.', 'webappsec', 'https://www.cybrary.it/course/owasp/');
c('Cybrary: End User Cybersecurity (free)', 'Foundational security awareness.', 'blue', 'https://www.cybrary.it/course/end-user-cybersecurity/');

// ------------- MalwareUnicorn workshops -------------
c('MalwareUnicorn: Reverse Engineering 101', 'Amanda Rousseau’s workshop on RE fundamentals.', 're,red', 'https://malwareunicorn.org/workshops/re101.html');
c('MalwareUnicorn: Reverse Engineering 102', 'Follow-up workshop with unpacking and anti-analysis.', 're,red', 'https://malwareunicorn.org/workshops/re102.html');
c('MalwareUnicorn: Golang Malware Analysis', 'Analyze modern Go malware.', 're,red', 'https://malwareunicorn.org/workshops/malware_golang.html');
c('MalwareUnicorn: Anti-Analysis', 'Anti-analysis and evasion techniques.', 're,red', 'https://malwareunicorn.org/workshops/anti_analysis.html');
c('MalwareUnicorn: Command & Control', 'Tradecraft for command-and-control channels.', 're,red', 'https://malwareunicorn.org/workshops/c2.html');

// ------------- Hacker101 / HackerOne -------------
c('Hacker101 (HackerOne): Free Class Videos', 'Free class videos across web hacking topics.', 'webappsec', 'https://www.hacker101.com/videos');
c('Hacker101: CTF', 'Practice web hacking against Hacker101 CTF challenges.', 'webappsec,ctf', 'https://ctf.hacker101.com/');
c('HackerOne: Hacktivity', 'Read real bug bounty reports with hunter commentary.', 'webappsec', 'https://hackerone.com/hacktivity');

// ------------- Bugcrowd University -------------
c('Bugcrowd University', 'Free curriculum for aspiring bug bounty hunters.', 'webappsec', 'https://www.bugcrowd.com/hackers/bugcrowd-university/');

// ------------- OverTheWire wargames -------------
c('OverTheWire: Bandit', 'Learn Linux command-line the hard way.', 'ctf,dev', 'https://overthewire.org/wargames/bandit/');
c('OverTheWire: Leviathan', 'Small binary hacking challenges.', 'ctf,exploits', 'https://overthewire.org/wargames/leviathan/');
c('OverTheWire: Krypton', 'Cryptography challenges from OTW.', 'ctf,crypto', 'https://overthewire.org/wargames/krypton/');
c('OverTheWire: Natas', 'Server-side web security via increasingly hard levels.', 'ctf,webappsec', 'https://overthewire.org/wargames/natas/');
c('OverTheWire: Behemoth', 'Binary exploitation wargame.', 'ctf,exploits', 'https://overthewire.org/wargames/behemoth/');
c('OverTheWire: Utumno', 'Advanced binary exploitation with subtle bugs.', 'ctf,exploits', 'https://overthewire.org/wargames/utumno/');
c('OverTheWire: Maze', 'Reverse-engineer daemons and services.', 'ctf,exploits', 'https://overthewire.org/wargames/maze/');
c('OverTheWire: Narnia', 'Classic exploitation challenges.', 'ctf,exploits', 'https://overthewire.org/wargames/narnia/');
c('OverTheWire: Vortex', 'Networking + exploitation combined.', 'ctf,exploits', 'https://overthewire.org/wargames/vortex/');
c('OverTheWire: Manpage', 'Read manpages to solve challenges.', 'ctf', 'https://overthewire.org/wargames/manpage/');
c('OverTheWire: Semtex', 'Old-school exploitation.', 'ctf,exploits', 'https://overthewire.org/wargames/semtex/');

// ------------- PicoCTF & primers -------------
c('picoCTF (Carnegie Mellon)', 'Free CTF platform designed for schools and beginners.', 'ctf,red', 'https://picoctf.org/');
c('picoCTF: picoGym Practice Challenges', 'Year-round practice problems from picoCTF.', 'ctf', 'https://play.picoctf.org/practice');
c('picoCTF: picoPrimer', 'CTF Primer covering all challenge categories.', 'ctf', 'https://primer.picoctf.com/');
c('CTF101 (OSIRIS Lab, NYU Tandon)', 'A well-structured CTF primer.', 'ctf', 'https://ctf101.org/');

// ------------- Root-Me / RingZer0 / others -------------
c('Root-Me', 'Massive collection of hacking and CTF challenges.', 'ctf,red', 'https://www.root-me.org/');
c('RingZer0 CTF', 'Long-standing CTF platform with 300+ challenges.', 'ctf', 'https://ringzer0ctf.com/');
c('WeChall', 'Meta-platform indexing 60+ hacking sites.', 'ctf', 'https://www.wechall.net/');
c('Hack This Site', 'Old-school hacking practice site.', 'ctf,webappsec', 'https://www.hackthissite.org/');
c('CryptoHack', 'Learn crypto by breaking it — free platform.', 'ctf,crypto', 'https://cryptohack.org/');

// ------------- ROP Emporium challenges — noted here as offensive practice -------------
c('ROP Emporium Challenges (mirror docs)', 'ROP challenge series (main site currently intermittent).', 'exploits', 'https://github.com/ROP-Emporium');

// ------------- Windows RedTeam / OffSec free -------------
c('OffSec: Metasploit Unleashed (free)', 'Free comprehensive Metasploit training.', 'red', 'https://www.offensive-security.com/metasploit-unleashed/');
c('OffSec Free Community Kali Books', 'Kali Linux Revealed — the official free book.', 'red', 'https://www.kali.org/docs/introduction/');
c('OffSec: Proving Grounds Community Content', 'Community-tier boxes for practice.', 'red', 'https://www.offensive-security.com/labs/');
c('BC Security: Empire / Starkiller Wiki', 'Empire C2 usage and defensive analysis.', 'red', 'https://bc-security.gitbook.io/empire-wiki/');
c('Sektor7: Malware Development Intro Videos', 'Free intro content for malware dev techniques.', 'red,exploits', 'https://institute.sektor7.net/');
c('Zero-Point Security: Reads and Freebies', 'Free RTO-adjacent public writeups.', 'red,exploits', 'https://training.zeropointsecurity.co.uk/');

// ------------- Windows internals / PE format -------------
c('Windows Internals Study Guide (Pavel Yosifovich)', 'The reference guide to Windows internals.', 'exploits,dev', 'https://github.com/zodiacon/windowsinternals');
c('Sysinternals Book: Windows Internals Chapter Downloads', 'Free excerpts and errata for Windows Internals.', 'exploits,dev', 'https://learn.microsoft.com/en-us/sysinternals/');
c('Corkami: PE 101', 'The famous PE file format visual reference.', 're,exploits', 'https://github.com/corkami/pics/blob/master/binary/README.md');
c('Corkami: ELF 101', 'ELF file format visual reference.', 're,exploits', 'https://github.com/corkami/pics/blob/master/binary/elf101/README.md');

// ------------- Corelan / offense-in-depth playlists -------------
c('Windows Exploit Development Series (h0mbre)', 'Modern Windows exploitation with mitigations.', 'exploits', 'https://h0mbre.github.io/');
c('Exploit Dev with WinDbg (Fatih Erdogan)', 'WinDbg-driven exploit development tutorials.', 'exploits', 'https://sensepost.com/blog/');
c('Sensepost Blog: Exploit Development', 'Sensepost publishes advanced exploitation writeups.', 'exploits,red', 'https://sensepost.com/blog/');

// ------------- Red Team Ops / C2 -------------
c('Cobalt Strike User Guide', 'Official Cobalt Strike operator manual.', 'red', 'https://hstechdocs.helpsystems.com/manuals/cobaltstrike/current/userguide/content/topics/welcome_main.htm');
c('Sliver C2 Docs', 'Open-source, modern C2 — get started guides.', 'red', 'https://sliver.sh/docs');
c('Havoc C2: Documentation', 'Havoc red-team command and control documentation.', 'red', 'https://havocframework.com/docs/welcome');
c('Mythic C2: Getting Started', 'Mythic operator manual and tutorials.', 'red', 'https://docs.mythic-c2.net/');
c('Nuclei Templates for Recon', 'Community templates for offensive recon at scale.', 'red,webappsec', 'https://nuclei.projectdiscovery.io/');

// ------------- Adversary emulation / MITRE -------------
c('MITRE ATT&CK Framework', 'Adversary tactics and techniques matrix.', 'red,blue', 'https://attack.mitre.org/');
c('MITRE ATT&CK Training', 'Official MITRE ATT&CK training modules.', 'red,blue', 'https://attack.mitre.org/resources/training/');
c('MITRE Caldera Docs', 'Automated adversary emulation platform.', 'red,blue', 'https://caldera.readthedocs.io/en/latest/');
c('Atomic Red Team', 'Small, portable tests mapped to ATT&CK.', 'red,blue', 'https://github.com/redcanaryco/atomic-red-team');
c('Vector-R Adversary Emulation Plan Library', 'Public adversary emulation plans.', 'red,blue', 'https://github.com/center-for-threat-informed-defense/adversary_emulation_library');
c('Red Team Village Free Content', 'Conference-style villages and free workshops.', 'red', 'https://redteamvillage.io/training.html');

// ------------- AV/EDR evasion / offensive dev deep dive -------------
c('MalDev Academy (free samples)', 'Free samples from the acclaimed MalDev Academy.', 'red,exploits', 'https://maldevacademy.com/');
c('Vx-Underground', 'Living archive of malware, papers and offensive research.', 'red,exploits', 'https://vx-underground.org/');
c('Sektor7 Institute: Red Team Operator Free Preview', 'Preview lessons from the RTO malware-dev course.', 'red,exploits', 'https://institute.sektor7.net/rtoc');
c('Offensive Notes: Red Teaming', 'Community-maintained red team notebook.', 'red', 'https://www.ired.team/');
c('HackTricks (Book)', 'Massive live-updated pentest technique reference.', 'red,webappsec,exploits', 'https://book.hacktricks.xyz/');
c('HackTricks Cloud', 'Cloud-focused offensive tradecraft reference.', 'red,cloud', 'https://cloud.hacktricks.xyz/');
c('Payloads All The Things', 'Canonical payload / bypass reference.', 'red,webappsec', 'https://github.com/swisskyrepo/PayloadsAllTheThings');

// ------------- SANS Cyber Aces & entry-level -------------
c('SANS Cyber Aces Online', 'Free introductory security courses from SANS.', 'blue,red', 'https://www.sans.org/cyberaces/');
c('SANS Reading Room', 'Enormous free library of SANS whitepapers as reading.', 'blue,red', 'https://www.sans.org/reading-room/');
c('SANS Cyber Talent Discovery Assessment Tools', 'Free skill assessments.', 'red', 'https://www.sans.org/cyber-talent/');
c('National Cyber League Prep Kit', 'Free NCL practice content.', 'red,ctf', 'https://cyberskyline.com/events');

// ------------- Purple team / adversary training -------------
c('BadBlood: Fill AD with Junk', 'Populate a lab AD environment for realistic exercises.', 'red,infra', 'https://github.com/davidprowe/BadBlood');
c('GOAD - Game of Active Directory', 'Vulnerable AD lab kit with reproducible scenarios.', 'red,infra', 'https://github.com/Orange-Cyberdefense/GOAD');
c('OffSec: Purple Teaming Techniques (free lectures)', 'Selected free chapters from purple-team classes.', 'red,blue', 'https://www.offensive-security.com/labs/');
c('Purple Team Exercise Framework (PTEF)', 'Free framework for purple team exercises.', 'red,blue', 'https://github.com/scythe-io/purple-team-exercise-framework');

// ------------- Reverse engineering more picks -------------
c('CTF-Katana Cheatsheets', 'A CTF challenge encyclopedia.', 'ctf,re', 'https://github.com/JohnHammond/ctf-katana');
c('Reverse Engineering For Beginners (Yurichev)', 'Free 1000-page RE book, ever-expanding.', 're', 'https://beginners.re/');
c('OpenSecurityTraining: Life of Binaries (v1 archive)', 'Original OST classic: how binaries live.', 're', 'https://ost2.fyi/OldOST.html');

// ------------- OSINT-heavy offensive -------------
c('IntelTechniques Tools', 'Michael Bazzell’s OSINT quick-tool page.', 'osint', 'https://inteltechniques.com/tools/');
c('OSINT Framework', 'Visual browser of OSINT tools by category.', 'osint', 'https://osintframework.com/');

// ------------- Cloud red team -------------
c('WhoIsThis: AWS Attack Simulator', 'Simulate AWS attacks in a lab.', 'red,cloud', 'https://github.com/RhinoSecurityLabs/pacu');
c('AWS Attack Path Management (Pacu)', 'Pacu framework for AWS exploitation.', 'red,cloud', 'https://rhinosecuritylabs.com/aws/pacu-open-source-aws-exploitation-framework/');
c('CloudGoat', 'Vulnerable-by-design AWS deployment tool.', 'red,cloud', 'https://github.com/RhinoSecurityLabs/cloudgoat');
c('AzureGoat', 'Vulnerable-by-design Azure deployment.', 'red,cloud', 'https://github.com/ine-labs/AzureGoat');
c('GCPGoat', 'Vulnerable-by-design GCP deployment.', 'red,cloud', 'https://github.com/ine-labs/GCPGoat');

// ------------- YouTube red team creators -------------
c('John Hammond: CTF and Malware', 'John’s CTF walkthroughs and malware demos.', 'red,ctf', 'https://www.youtube.com/@_JohnHammond');
c('S4vitar / HackTheBox Content', 'S4vitar’s red-team content and machine walkthroughs.', 'red', 'https://www.youtube.com/@s4vitar');
c('LiveOverflow: 0x00sec Videos', 'Offensive content posted publicly on 0x00sec-adjacent topics.', 'red', 'https://www.youtube.com/@LiveOverflow/videos');
c('MurmusCTF', 'CTF challenge writeups and hacking playlists.', 'red,ctf', 'https://www.youtube.com/@murmus_ctf');
c('The Cyber Mentor: Bug Bounty Weekly', 'Weekly BB roundups and how-tos.', 'webappsec', 'https://www.youtube.com/@TCMSecurityAcademy');

// ------------- Hardware / firmware offensive -------------
c('HackRF Documentation and Tutorials', 'SDR-based radio attacks introduction.', 'red', 'https://hackrf.readthedocs.io/en/latest/');
c('Great Scott Gadgets HackRF Tutorials', 'Learn SDR with HackRF from the manufacturer.', 'red', 'https://greatscottgadgets.com/hackrf/#Tutorials');
c('Ubertooth One Documentation', 'Bluetooth research tool tutorials.', 'red', 'https://ubertooth.readthedocs.io/en/latest/');
c('Trail of Bits Firmware Book', 'Free eBook on firmware analysis.', 'red,exploits', 'https://github.com/trailofbits/pwn-anitcheat');
c('Practical IoT Hacking Book Companion', 'Companion repo for the No Starch IoT hacking book.', 'red,iot', 'https://github.com/practical-iot-hacking/practical-iot-hacking');

// ------------- Fuzzing / vuln research -------------
c('AFL++ Documentation', 'Modern AFL fork — usage, harnesses and best practices.', 'exploits', 'https://aflplus.plus/');
c('LibFuzzer Tutorial', 'Official LibFuzzer tutorial.', 'exploits', 'https://github.com/google/fuzzing/blob/master/tutorial/libFuzzerTutorial.md');
c('Honggfuzz: A Security Oriented Fuzzer', 'Docs and quickstart for Honggfuzz.', 'exploits', 'https://github.com/google/honggfuzz');
c('Fuzzing Book', 'The interactive Fuzzing Book — a full modern textbook.', 'exploits', 'https://www.fuzzingbook.org/');
c('Google OSS-Fuzz: How to Onboard', 'Fuzz OSS projects with Google infrastructure.', 'exploits,dev', 'https://google.github.io/oss-fuzz/getting-started/new-project-guide/');
c('Mayhem for Code Docs', 'ForAllSecure’s Mayhem docs for fuzzing intro.', 'exploits', 'https://docs.mayhem.security/');

// ------------- Practical exploit dev on modern platforms -------------
c('Attacking Network Protocols (companion)', 'James Forshaw companion resources for the book.', 'exploits', 'https://github.com/tyranid/attacking_network_protocols');
c('Windows Kernel Exploitation (0vercl0k blog)', 'Advanced Windows kernel exploit series.', 'exploits', 'https://doar-e.github.io/blog/');
c('Google Project Zero Blog', 'Bleeding-edge vulnerability research writeups.', 'exploits', 'https://googleprojectzero.blogspot.com/');
c('Trail of Bits Blog', 'High-signal security research posts.', 'exploits,blue', 'https://blog.trailofbits.com/');
c('Bishop Fox Labs', 'Applied offensive security research.', 'red,exploits', 'https://bishopfox.com/blog');
c('NCC Group Research', 'Deep vulnerability research and tooling.', 'red,exploits', 'https://research.nccgroup.com/');
c('Bugtraq Archive (Seclists)', 'Historical vuln disclosures — study old bugs to write modern exploits.', 'exploits', 'https://seclists.org/bugtraq/');
c('Exploit-DB', 'Public exploit archive — use for study.', 'exploits', 'https://www.exploit-db.com/');

// ------------- Podcasts / long-form -------------
c('Darknet Diaries', 'Case studies of real attacks, told well.', 'red,blue', 'https://darknetdiaries.com/episode/');
c('Risky Business Podcast', 'Weekly cybersecurity news and analysis.', 'blue,red', 'https://risky.biz/');
c('SANS Internet Storm Center Daily Podcast', 'Daily threat intel briefing.', 'blue', 'https://isc.sans.edu/podcast.html');

};
