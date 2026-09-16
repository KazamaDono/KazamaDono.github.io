// Reverse engineering (RE) — tools, tutorials, book-length material
module.exports = function(c) {

// ------------- Ghidra -------------
c('Ghidra: Official Getting Started', 'NSA’s official onboarding for Ghidra.', 're', 'https://ghidra-sre.org/CheatSheet.html');
c('Ghidra Book (No Starch companion pages)', 'Chapter overviews from the Ghidra Book, plus scripts.', 're', 'https://ghidrabook.com/');
c('Ghidra Scripting Tutorial', 'Automate reverse engineering with Python/Java scripts inside Ghidra.', 're', 'https://ghidra.re/ghidra_docs/api/');
c('Ghidra 10.x Feature Tour (YouTube)', 'Walkthrough of new features across Ghidra releases.', 're', 'https://www.youtube.com/@GhidraNinja');
c('GhidraNinja: Video Series', 'Beginner-to-advanced Ghidra reversing videos.', 're', 'https://www.youtube.com/@GhidraNinja/videos');

// ------------- IDA / Binary Ninja / Radare2 / Cutter -------------
c('IDA Pro Book (Chris Eagle)', 'Companion resources for the IDA Pro Book.', 're', 'https://www.idabook.com/');
c('Hex-Rays Blog Tutorials', 'Official IDA Pro tutorials.', 're', 'https://hex-rays.com/blog/');
c('Binary Ninja: Getting Started', 'Vector 35’s free intro to Binary Ninja.', 're', 'https://docs.binary.ninja/');
c('Binary Ninja Personal Blog (Reversing With Ninja)', 'Vector 35 team writeups.', 're', 'https://binary.ninja/blog/');
c('Radare2 Book', 'Deep, well-maintained free book on radare2.', 're', 'https://book.rada.re/');
c('Cutter Documentation', 'The Rizin/Radare2 GUI docs.', 're', 'https://cutter.re/docs/');
c('rizin Documentation', 'Fork of radare2 with active development.', 're', 'https://book.rizin.re/');

// ------------- Beginners RE curricula -------------
c('Beginners RE (Yurichev) - Concise Version', 'The compact version of the classic RE textbook.', 're', 'https://beginners.re/RE4B-EN.pdf');
c('CrackMes.one Challenge Repository', 'Public crackme repository organized by difficulty.', 're,ctf', 'https://crackmes.one/');
c('Reverse Engineering For Beginners: Exercises', 'Practical exercises companion to Yurichev.', 're', 'https://challenges.re/');
c('Ghidra vs. IDA Comparison (SANS)', 'Free SANS whitepaper comparing tools.', 're', 'https://www.sans.org/reading-room/whitepapers/reverseengineeringmalware/paper/40225');

// ------------- Malware RE deep dives -------------
c('Malware Analysis Bootcamp (Jazi Yeganeh)', 'Public archive of a malware analysis bootcamp.', 're,blue', 'https://github.com/mikesiko/PracticalMalwareAnalysis-Labs');
c('Zero2Automated (free samples)', 'Public excerpts from the zero2automated course.', 're,red', 'https://courses.zero2auto.com/');
c('SEKTOR7: Introduction to Malware Analysis (free preview)', 'Public preview modules for malware analysis.', 're,blue', 'https://institute.sektor7.net/');
c('OALabs: Malware Unpacking Tutorials', 'Applied unpacking with x64dbg, IDA and Ghidra.', 're,blue', 'https://www.youtube.com/@OALabs/videos');
c('MalwareTech Beginner Malware Reversing Challenges', 'Guided challenges from MalwareTech.', 're,blue,ctf', 'https://www.malwaretech.com/beginner-malware-reversing-challenges');
c('Any.Run Free Interactive Sandbox', 'Analyze samples interactively in-browser.', 're,blue', 'https://any.run/');
c('Hybrid-Analysis (CrowdStrike Falcon Sandbox)', 'Free automated malware sandbox with reports.', 're,blue', 'https://www.hybrid-analysis.com/');
c('VirusTotal Community', 'Free malware intel platform; browse public relationships.', 're,blue', 'https://www.virustotal.com/');
c('Detect It Easy (DIE) Documentation', 'PE/ELF/Mach-O signature detector, tutorials.', 're', 'https://github.com/horsicq/Detect-It-Easy');

// ------------- Anti-anti-analysis -------------
c('Al-Khaser Anti-Analysis Test Suite', 'A living catalog of anti-VM/anti-debug techniques.', 're,red', 'https://github.com/LordNoteworthy/al-khaser');
c('Pafish (Paranoid Fish)', 'Detects analysis environments — study its checks.', 're,red', 'https://github.com/a0rtega/pafish');

// ------------- Emulation / Symbolic Execution -------------
c('angr Documentation', 'Program-analysis framework with tutorials.', 're,exploits', 'https://docs.angr.io/');
c('angr-doc Examples', 'Example workflow scripts for symbolic execution.', 're,exploits', 'https://github.com/angr/angr-doc');
c('Miasm Documentation', 'Reverse engineering framework.', 're', 'https://miasm.re/');
c('Manticore Documentation', 'Symbolic execution engine by Trail of Bits.', 're', 'https://manticore.readthedocs.io/en/latest/');
c('Triton DBA Framework', 'Dynamic binary analysis framework docs.', 're', 'https://triton-library.github.io/');
c('Unicorn Engine Tutorial', 'Multi-arch CPU emulator with a tutorial.', 're', 'https://www.unicorn-engine.org/docs/tutorial.html');
c('Qiling Framework', 'Cross-platform emulation framework.', 're', 'https://docs.qiling.io/en/latest/');
c('Frida Handbook', 'Dynamic instrumentation toolkit tutorials.', 're,mobile', 'https://learnfrida.info/');

// ------------- Windows internals / .NET RE -------------
c('Sysinternals Videos: Windows Internals', 'Free Microsoft videos on Windows internals.', 're,exploits,dev', 'https://learn.microsoft.com/en-us/shows/sysinternals/');
c('.NET Reverse Engineering with dnSpyEx', '.NET assembly inspection and modification.', 're', 'https://github.com/dnSpyEx/dnSpy');
c('ILSpy Documentation', 'Cross-platform .NET decompiler docs.', 're', 'https://github.com/icsharpcode/ILSpy');
c('JEB Community Edition Docs', 'Android/dex + PE reverse engineering.', 're,mobile', 'https://www.pnfsoftware.com/jeb/manual/');

// ------------- File format tutorials -------------
c('ELF Format Reference (LWN + Wiki tutorials)', 'Detailed ELF format reading list.', 're', 'https://refspecs.linuxfoundation.org/elf/elf.pdf');
c('PE Format Deep Dive (0xrick blog)', 'Long-form PE format tour.', 're', 'https://0xrick.github.io/win-internals/pe1/');
c('Mach-O Format Overview (Apple Developer)', 'Apple’s canonical Mach-O reference.', 're', 'https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/MachOTopics/0-Introduction/introduction.html');
c('DEX Format Overview (Android Developers)', 'Dalvik executable format reference.', 're,mobile', 'https://source.android.com/docs/core/runtime/dex-format');

// ------------- Firmware / embedded RE -------------
c('Binwalk Documentation', 'Extract and analyze firmware images.', 're,red', 'https://github.com/ReFirmLabs/binwalk');
c('Firmware Analysis Toolkit', 'Automate emulation of embedded firmware.', 're,red', 'https://github.com/attify/firmware-analysis-toolkit');
c('Ghidra + Firmware Analysis Tutorial (Nozomi Networks)', 'Applied firmware RE tutorial.', 're', 'https://www.nozominetworks.com/blog/');

// ------------- Modern practice sites -------------
c('flare-on Challenges', 'FireEye’s annual malware-focused RE CTF (past challenges free).', 're,ctf', 'https://flare-on.com/');
c('Reversing.kr', 'Wargame-style RE challenges.', 're,ctf', 'http://reversing.kr/');
c('MalwareBazaar', 'Sample database — analyze real malware.', 're,blue', 'https://bazaar.abuse.ch/');
c('URLhaus Malware URLs', 'Free feed of live malicious URLs for research.', 're,blue', 'https://urlhaus.abuse.ch/');
c('Feodo Tracker', 'Track modern banker/loader botnets.', 're,blue', 'https://feodotracker.abuse.ch/');

// ------------- YouTube RE creators -------------
c('Stacksmashing (YouTube)', 'Hardware and embedded RE explorations.', 're', 'https://www.youtube.com/@stacksmashing');
c('LaurieWired', 'Modern low-level RE and internals videos.', 're', 'https://www.youtube.com/@LaurieWired');
c('Guided Hacking: RE Videos', 'RE for game hacking and general.', 're,game', 'https://www.youtube.com/@GuidedHacking/videos');
c('Vector 35 (Binary Ninja) YouTube', 'Binary Ninja livestreams and features.', 're', 'https://www.youtube.com/@vector35');
c('Ghidra Ninja Reversing Challenges', 'GhidraNinja’s themed reversing videos.', 're,ctf', 'https://www.youtube.com/@GhidraNinja/videos');

};
