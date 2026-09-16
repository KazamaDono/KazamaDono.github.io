// Additional high-quality sources to push toward the "maximum feasible" scale.
module.exports = function(c) {

// ------------- HackTheBox Academy — free-tier modules -------------
c('HTB Academy: Introduction to Academy', 'The onboarding module for HTB Academy.', 'red,webappsec', 'https://academy.hackthebox.com/module/details/14');
c('HTB Academy: Learning Process', 'Foundational meta-course on how to learn security.', 'red', 'https://academy.hackthebox.com/module/details/9');
c('HTB Academy: Linux Fundamentals', 'Free entry to Linux fundamentals.', 'red,dev', 'https://academy.hackthebox.com/module/details/18');
c('HTB Academy: Windows Fundamentals', 'Free entry to Windows fundamentals.', 'red,dev', 'https://academy.hackthebox.com/module/details/49');
c('HTB Academy: Intro to Networking', 'Free network fundamentals.', 'red,infra', 'https://academy.hackthebox.com/module/details/25');
c('HTB Academy: Web Requests', 'Understand HTTP and web requests.', 'red,webappsec', 'https://academy.hackthebox.com/module/details/35');
c('HTB Academy: Introduction to Web Applications', 'Modern web app anatomy from an attacker perspective.', 'red,webappsec', 'https://academy.hackthebox.com/module/details/75');
c('HTB Academy: Setting Up', 'Prepare a pentest environment.', 'red', 'https://academy.hackthebox.com/module/details/27');

// ------------- TryHackMe — free rooms (learning paths) -------------
c('TryHackMe: Pre Security Path', 'Free foundational rooms package.', 'red,ctf', 'https://tryhackme.com/path/outline/presecurity');
c('TryHackMe: Complete Beginner Path (free rooms)', 'The subset of the beginner path that is free.', 'red,ctf', 'https://tryhackme.com/path/outline/beginner');
c('TryHackMe: Introduction to Cyber Security Path', 'Free intro learning path.', 'red,ctf', 'https://tryhackme.com/path/outline/introtocyber');
c('TryHackMe: OSCP Preparation (free rooms)', 'Free room subset for OSCP prep.', 'red', 'https://tryhackme.com/room/offensivesecurity');

// ------------- Cybrary free full courses -------------
c('Cybrary: Free Career Path — SOC Analyst', 'Free structured SOC career path.', 'blue', 'https://www.cybrary.it/career-path/soc-analyst/');
c('Cybrary: Free Career Path — Penetration Tester', 'Free pentester path.', 'red', 'https://www.cybrary.it/career-path/penetration-tester/');
c('Cybrary: Free Career Path — Incident Handler', 'Free IR path.', 'blue', 'https://www.cybrary.it/career-path/incident-handler/');

// ------------- INE free -------------
c('INE Free Courses (Cyber Security)', 'Public free-tier courses from INE.', 'red,blue', 'https://ine.com/pages/free-training');

// ------------- Codepath (free full stack + Android) -------------
c('CodePath: iOS Fundamentals', 'Free comprehensive iOS course.', 'mobile,dev', 'https://guides.codepath.com/ios');
c('CodePath: Android Fundamentals', 'Free comprehensive Android course.', 'mobile,dev', 'https://guides.codepath.com/android');
c('CodePath: Web Development', 'Free full-stack web development course.', 'dev', 'https://guides.codepath.com/webdev');

// ------------- Google Codelabs (deeper indexing) -------------
c('Google Codelabs Home', 'Massive tutorial library across Google technologies.', 'dev,cloud,aiml', 'https://codelabs.developers.google.com/');
c('Google Codelabs: Cloud', 'GCP-focused hands-on labs.', 'cloud,dev', 'https://codelabs.developers.google.com/?category=cloud');
c('Google Codelabs: TensorFlow', 'ML with TensorFlow hands-on labs.', 'aiml,dev', 'https://codelabs.developers.google.com/?category=tensorflow');
c('Google Codelabs: Android', 'Structured Android hands-on labs.', 'mobile,dev', 'https://codelabs.developers.google.com/?category=android');
c('Google Codelabs: Flutter', 'Flutter step-by-step tutorials.', 'mobile,dev', 'https://codelabs.developers.google.com/?category=flutter');

// ------------- MDN Learn expanded -------------
c('MDN: Learn Web Development — HTML basics', 'Foundational HTML curriculum.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/HTML');
c('MDN: Learn Web Development — CSS basics', 'Foundational CSS curriculum.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/CSS');
c('MDN: Learn Web Development — JS basics', 'Foundational JavaScript curriculum.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript');
c('MDN: Learn Web Development — Accessibility', 'A11y-focused curriculum.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility');
c('MDN: Learn Web Development — Testing', 'Cross-browser testing fundamentals.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing');
c('MDN: Server-side Website Programming', 'Node.js + Express fundamentals.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side');
c('MDN: Progressive Web Apps', 'PWA-specific learning path.', 'dev', 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps');

// ------------- Awesome-* aggregators (each is effectively many courses/resources) -------------
c('Awesome Security', 'Massive curated list of security resources.', 'red,blue', 'https://github.com/sbilly/awesome-security');
c('Awesome Hacking', 'The Hack-with-Github meta-list.', 'red', 'https://github.com/Hack-with-Github/Awesome-Hacking');
c('Awesome Hacking Resources', 'A companion list, especially resource-heavy.', 'red', 'https://github.com/vitalysim/Awesome-Hacking-Resources');
c('Awesome CTF', 'The CTF meta-list.', 'ctf', 'https://github.com/apsdehal/awesome-ctf');
c('Awesome Pentest', 'Comprehensive pentest list.', 'red', 'https://github.com/enaqx/awesome-pentest');
c('Awesome AppSec', 'Application security reading list.', 'webappsec', 'https://github.com/paragonie/awesome-appsec');
c('Awesome Windows Security', 'Windows-focused security list.', 'red,blue', 'https://github.com/undergroundwires/Awesome-Windows-Security');
c('Awesome ICS Security', 'Industrial control system security list.', 'red,blue', 'https://github.com/hslatman/awesome-industrial-control-system-security');
c('Awesome Reverse Engineering', 'The RE meta-list.', 're', 'https://github.com/wtsxDev/reverse-engineering');
c('Awesome Malware Analysis', 'The MA meta-list.', 're,blue', 'https://github.com/rshipp/awesome-malware-analysis');
c('Awesome Incident Response', 'IR-focused resources.', 'blue', 'https://github.com/meirwah/awesome-incident-response');
c('Awesome Threat Intelligence', 'Threat intel resources list.', 'blue', 'https://github.com/hslatman/awesome-threat-intelligence');
c('Awesome DevOps', 'Meta-list for DevOps roles.', 'dev', 'https://github.com/awesome-soft/awesome-devops');
c('Awesome Kubernetes', 'The k8s meta-list.', 'dev,cloud', 'https://github.com/ramitsurana/awesome-kubernetes');
c('Awesome Docker', 'The Docker meta-list.', 'dev,cloud', 'https://github.com/veggiemonk/awesome-docker');
c('Awesome System Design', 'System design meta-list.', 'dev', 'https://github.com/madd86/awesome-system-design');
c('Awesome Compilers', 'Compilers meta-list.', 'dev', 'https://github.com/aalhour/awesome-compilers');
c('Awesome NLP', 'NLP resources list.', 'aiml', 'https://github.com/keon/awesome-nlp');
c('Awesome Deep Learning', 'DL meta-list.', 'aiml', 'https://github.com/ChristosChristofidis/awesome-deep-learning');
c('Awesome Machine Learning', 'ML meta-list.', 'aiml', 'https://github.com/josephmisiti/awesome-machine-learning');
c('Awesome Reinforcement Learning', 'RL meta-list.', 'aiml', 'https://github.com/aikorea/awesome-rl');
c('Awesome ML Interpretability', 'XAI reading list.', 'aiml', 'https://github.com/jphall663/awesome-machine-learning-interpretability');
c('Awesome MLOps', 'MLOps reading list.', 'aiml,dev', 'https://github.com/visenger/awesome-mlops');
c('Awesome LLM', 'Comprehensive curated LLM list.', 'aiml', 'https://github.com/Hannibal046/Awesome-LLM');
c('Awesome LangChain', 'Curated LangChain resources.', 'aiml', 'https://github.com/kyrolabs/awesome-langchain');
c('Awesome LlamaIndex', 'Curated LlamaIndex tutorials/resources.', 'aiml', 'https://github.com/emrgnt-cmplxty/awesome-llamaindex');
c('Awesome Prompt Engineering', 'Prompt engineering reading list.', 'aiml', 'https://github.com/promptslab/Awesome-Prompt-Engineering');
c('Awesome Data Engineering', 'DE meta-list.', 'dev', 'https://github.com/igorbarinov/awesome-data-engineering');
c('Awesome Database Learning', 'DB internals reading list.', 'dev', 'https://github.com/pingcap/awesome-database-learning');
c('Awesome Python', 'Python meta-list.', 'dev', 'https://github.com/vinta/awesome-python');
c('Awesome Rust', 'Rust meta-list.', 'dev', 'https://github.com/rust-unofficial/awesome-rust');
c('Awesome Go', 'Go meta-list.', 'dev', 'https://github.com/avelino/awesome-go');
c('Awesome C++', 'C++ meta-list.', 'dev', 'https://github.com/fffaraz/awesome-cpp');
c('Awesome C', 'C language meta-list.', 'dev', 'https://github.com/inputsh/awesome-c');
c('Awesome iOS', 'iOS dev meta-list.', 'mobile,dev', 'https://github.com/vsouza/awesome-ios');
c('Awesome Android', 'Android dev meta-list.', 'mobile,dev', 'https://github.com/JStumpp/awesome-android');
c('Awesome Bug Bounty', 'BB meta-list.', 'webappsec', 'https://github.com/djadmin/awesome-bug-bounty');
c('Awesome OSINT', 'Canonical OSINT meta-list.', 'osint', 'https://github.com/jivoi/awesome-osint');
c('Awesome Cybersecurity Blueteam', 'Blue-team meta-list.', 'blue', 'https://github.com/fabacab/awesome-cybersecurity-blueteam');
c('Awesome Threat Detection', 'Detection engineering reading list.', 'blue', 'https://github.com/0x4D31/awesome-threat-detection');
c('Awesome Free Software Engineering Books', 'Curated tech book library.', 'dev', 'https://github.com/EbookFoundation/free-programming-books');
c('Awesome Selfhosted', 'Self-host every tool you use.', 'dev', 'https://github.com/awesome-selfhosted/awesome-selfhosted');
c('Awesome DevSecOps', 'Meta-list for shift-left security.', 'blue,dev,webappsec', 'https://github.com/devsecops/awesome-devsecops');
c('Awesome Fuzzing', 'Fuzzing meta-list.', 'exploits', 'https://github.com/cpuu/awesome-fuzzing');
c('Awesome IoT Hacks', 'Hardware/IoT hacking meta-list.', 'iot,red', 'https://github.com/nebgnahz/awesome-iot-hacks');
c('Awesome Chrome DevTools', 'Modern web tooling reading list.', 'dev', 'https://github.com/ChromeDevTools/awesome-chrome-devtools');
c('Awesome Design Patterns', 'Design pattern reading list.', 'dev', 'https://github.com/DovAmir/awesome-design-patterns');
c('Awesome Interviews', 'Interview prep meta-list.', 'dev', 'https://github.com/DopplerHQ/awesome-interview-questions');
c('Awesome Big Data', 'Big data ecosystem meta-list.', 'dev,aiml', 'https://github.com/onurakpolat/awesome-bigdata');
c('Awesome Robotics', 'Robotics meta-list.', 'dev,aiml', 'https://github.com/kiloreux/awesome-robotics');
c('Awesome Public Datasets', 'The classic public dataset directory.', 'aiml,dev', 'https://github.com/awesomedata/awesome-public-datasets');
c('Awesome Deep Vision', 'Curated deep-vision resources.', 'aiml', 'https://github.com/kjw0612/awesome-deep-vision');
c('Awesome Speech Recognition', 'ASR-focused resources.', 'aiml', 'https://github.com/wenet-e2e/speech-recognition-papers');
c('Awesome Time Series', 'Time-series ML resources.', 'aiml', 'https://github.com/MaxBenChrist/awesome_time_series_in_python');
c('Awesome AI Safety', 'AI safety reading list.', 'aiml', 'https://github.com/JosephBFuller/awesome-ai-safety');
c('Awesome Explainable AI', 'XAI reading list.', 'aiml', 'https://github.com/EthicalML/awesome-machine-learning-operations');

// ------------- Additional universities / research group course pages -------------
c('University of Illinois: CS 421 Programming Languages', 'PL course.', 'dev', 'https://courses.engr.illinois.edu/cs421/');
c('University of Washington: CSE 331 Software Design and Implementation', 'Software engineering course notes.', 'dev', 'https://courses.cs.washington.edu/courses/cse331/');
c('University of Washington: CSE 401 Compilers', 'Compilers course.', 'dev', 'https://courses.cs.washington.edu/courses/cse401/');
c('University of Waterloo: CS 341 Algorithms', 'Algo course notes.', 'dev,math', 'https://cs.uwaterloo.ca/~lapchi/cs341/');
c('University of Toronto: CSC 411 Machine Learning', 'ML course.', 'aiml,math', 'https://www.cs.toronto.edu/~rgrosse/courses/csc411_f18/');
c('University of Toronto: CSC 421 Neural Networks', 'NN course notes.', 'aiml', 'https://www.cs.toronto.edu/~lczhang/321/');
c('University of Toronto: CSC 384 Introduction to AI', 'AI course notes.', 'aiml', 'https://www.cs.toronto.edu/~fbacchus/csc384/');
c('Cambridge: Foundations of Computer Science', 'Free course notes.', 'dev', 'https://www.cl.cam.ac.uk/teaching/1516/FoundsCS/');
c('University of Cambridge: Compiler Construction', 'Free compilers course notes.', 'dev', 'https://www.cl.cam.ac.uk/teaching/1213/CompConstr/');
c('University of Cambridge: Advanced Computer Architecture', 'Free architecture course notes.', 'dev', 'https://www.cl.cam.ac.uk/teaching/1516/ACA/');
c('Oxford: Concurrent Programming', 'Free course notes.', 'dev', 'https://www.cs.ox.ac.uk/teaching/materials/');
c('ETH Zurich: Systems Programming and Computer Architecture', 'Free ETH course.', 'dev', 'https://systems.ethz.ch/');
c('ETH Zurich: Reliable and Interpretable AI', 'ETH graduate ML security course.', 'aiml', 'https://www.sri.inf.ethz.ch/teaching/riai2020');
c('ETH Zurich: Advanced Machine Learning', 'ETH grad ML course.', 'aiml', 'https://las.inf.ethz.ch/teaching/aml-s21');
c('Oxford: Machine Learning course', 'Free Oxford ML lecture set.', 'aiml', 'https://www.cs.ox.ac.uk/people/nando.defreitas/machinelearning/');
c('Northwestern: EECS 349 Machine Learning', 'Free ML course notes.', 'aiml', 'https://users.cs.northwestern.edu/~ddowney/courses/349_Spring2020/');

// ------------- Additional MOOC audit tracks -------------
c('Coursera: Introduction to TensorFlow (audit)', 'Free-to-audit TensorFlow intro.', 'aiml', 'https://www.coursera.org/learn/introduction-tensorflow');
c('Coursera: Introduction to Cybersecurity (audit)', 'Cisco-authored intro.', 'red,blue', 'https://www.coursera.org/learn/cybersecurity-for-everyone');
c('Coursera: IT Fundamentals for Cybersecurity Specialization (audit)', 'Free-to-audit fundamentals specialization.', 'red,blue', 'https://www.coursera.org/specializations/it-fundamentals-cybersecurity');
c('Coursera: Google IT Support Certificate (audit)', 'IT support foundational program.', 'infra,dev', 'https://www.coursera.org/professional-certificates/google-it-support');
c('Coursera: Google IT Automation with Python (audit)', 'Automation-focused Python program.', 'dev', 'https://www.coursera.org/professional-certificates/google-it-automation');
c('Coursera: Google Cybersecurity Certificate (audit)', 'Google cybersecurity foundational cert.', 'blue,red', 'https://www.coursera.org/professional-certificates/google-cybersecurity');
c('Coursera: Google Advanced Data Analytics Certificate (audit)', 'Data analytics + ML foundation program.', 'aiml', 'https://www.coursera.org/professional-certificates/google-advanced-data-analytics');
c('Coursera: Google Data Analytics Certificate (audit)', 'Data analytics foundation program.', 'aiml', 'https://www.coursera.org/professional-certificates/google-data-analytics');
c('Coursera: IBM Full Stack Software Developer Certificate (audit)', 'Full-stack path.', 'dev', 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer');
c('Coursera: Meta Front-End Developer Certificate (audit)', 'Front-end certificate audit.', 'dev', 'https://www.coursera.org/professional-certificates/meta-front-end-developer');
c('Coursera: Meta Back-End Developer Certificate (audit)', 'Back-end certificate audit.', 'dev', 'https://www.coursera.org/professional-certificates/meta-back-end-developer');
c('Coursera: Meta Android Developer Certificate (audit)', 'Meta Android developer certificate audit.', 'mobile,dev', 'https://www.coursera.org/professional-certificates/meta-android-developer');
c('Coursera: Meta iOS Developer Certificate (audit)', 'Meta iOS developer certificate audit.', 'mobile,dev', 'https://www.coursera.org/professional-certificates/meta-ios-developer');
c('edX Free Courses (search by "Free")', 'Filter the edX catalog by free tier.', 'dev,aiml', 'https://www.edx.org/search?tab=course&price=Free');
c('edX: MIT 6.00.1x Introduction to CS and Programming', 'MIT intro-to-CS on edX.', 'dev', 'https://www.edx.org/learn/computer-programming/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python');
c('edX: MIT 6.00.2x Introduction to Computational Thinking', 'Follow-up to 6.00.1x.', 'dev', 'https://www.edx.org/learn/computer-programming/massachusetts-institute-of-technology-introduction-to-computational-thinking-and-data-science');
c('edX: Harvard CS50x (free)', 'Harvard’s CS50 on edX (free to enroll).', 'dev', 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science');
c('edX: Harvard Introduction to AI with Python', 'Harvard CS50 AI on edX.', 'dev,aiml', 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python');

// ------------- Nvidia Deep Learning Institute (free intros) -------------
c('Nvidia DLI: Getting Started with AI on Jetson Nano (free)', 'Free short course from Nvidia DLI.', 'aiml,iot', 'https://www.nvidia.com/en-us/training/instructor-led-workshops/getting-started-with-ai-on-jetson-nano/');
c('Nvidia DLI: Accelerating End-to-End Data Science (free)', 'Free short course on RAPIDS.', 'aiml', 'https://www.nvidia.com/en-us/training/instructor-led-workshops/rapids/');
c('Nvidia DLI: Building Transformer-Based NLP Applications (free preview)', 'Public preview of the transformer course.', 'aiml', 'https://www.nvidia.com/en-us/training/instructor-led-workshops/building-transformer-based-natural-language-processing-applications/');

// ------------- YouTube channels as "courses" (canonical creators) -------------
c('freeCodeCamp: YouTube Channel', 'Full multi-hour courses on many topics.', 'dev', 'https://www.youtube.com/@freecodecamp');
c('Fireship YouTube Channel', 'Rapid modern-web tech overviews.', 'dev', 'https://www.youtube.com/@Fireship');
c('The Coding Train (Daniel Shiffman)', 'Creative-code tutorials in JS/p5.', 'dev', 'https://www.youtube.com/@TheCodingTrain');
c('Andrej Karpathy YouTube', 'Karpathy’s DL and language model lectures.', 'aiml', 'https://www.youtube.com/@AndrejKarpathy');
c('Sentdex: Python Machine Learning', 'Long-running Python + ML tutorials.', 'aiml,dev', 'https://www.youtube.com/@sentdex');
c('Corey Schafer: Python Tutorials', 'The canonical Python YouTube channel.', 'dev', 'https://www.youtube.com/@coreyms');
c('The Net Ninja', 'Web dev + JavaScript video series.', 'dev', 'https://www.youtube.com/@NetNinja');
c('Web Dev Simplified', 'Modern web dev tutorials.', 'dev', 'https://www.youtube.com/@WebDevSimplified');
c('Traversy Media', 'Full-stack dev tutorials.', 'dev', 'https://www.youtube.com/@TraversyMedia');
c('TechWorld with Nana', 'DevOps + cloud full courses.', 'dev,cloud', 'https://www.youtube.com/@TechWorldwithNana');
c('Programming with Mosh', 'Structured programming courses.', 'dev', 'https://www.youtube.com/@programmingwithmosh');
c('Computerphile', 'Computer-science topics from Nottingham.', 'dev', 'https://www.youtube.com/@Computerphile');
c('Numberphile', 'Math-themed videos.', 'math', 'https://www.youtube.com/@numberphile');
c('Two Minute Papers', 'AI paper summaries.', 'aiml', 'https://www.youtube.com/@TwoMinutePapers');
c('Yannic Kilcher', 'Deep dives on AI research papers.', 'aiml', 'https://www.youtube.com/@YannicKilcher');
c('AI Coffee Break with Letitia', 'AI research explanations.', 'aiml', 'https://www.youtube.com/@AICoffeeBreak');
c('DeepLearningAI YouTube', 'DL.AI’s official YouTube.', 'aiml', 'https://www.youtube.com/@Deeplearningai');
c('CodeAesthetic', 'Deep code-quality videos.', 'dev', 'https://www.youtube.com/@CodeAesthetic');
c('ThePrimeagen', 'Software engineering + tooling videos.', 'dev', 'https://www.youtube.com/@ThePrimeagen');
c('Low Level Learning', 'Systems programming + RE-adjacent tutorials.', 'dev,re', 'https://www.youtube.com/@LowLevelLearning');
c('Chris Bumgardner (Programming) YouTube', 'Systems + OS course videos.', 'dev', 'https://www.youtube.com/@geohot');
c('geohot livestreams archive', 'Long-form programming livestreams.', 'dev,aiml', 'https://www.youtube.com/@geohotarchive');
c('NetworkChuck', 'IT + networking + cloud tutorials.', 'dev,cloud,infra', 'https://www.youtube.com/@NetworkChuck');
c('Simone Giertz Engineering', 'DIY-engineering-adjacent content.', 'dev', 'https://www.youtube.com/@simonegiertz');
c('Ben Eater', 'Hardware + networking demonstrations.', 'dev,iot', 'https://www.youtube.com/@BenEater');
c('Sebastian Lague', 'Programming + graphics + games.', 'dev,game', 'https://www.youtube.com/@SebastianLague');
c('Coding Adventure Playlist (Sebastian Lague)', 'Iconic long-form dev livestreams.', 'dev,game', 'https://www.youtube.com/playlist?list=PLFt_AvWsXl0eZgMK_DT5_biRkWXftAOf9');

// ------------- Free interactive courses / playgrounds -------------
c('CodeCombat (free tier)', 'Learn programming by playing an RPG.', 'dev', 'https://codecombat.com/');
c('CodeHS: Free Intro to CS', 'Free public intro classes.', 'dev', 'https://codehs.com/course/all');
c('CS Unplugged', 'Free classroom CS activities without computers.', 'dev', 'https://www.csunplugged.org/en/');
c('Programiz', 'Free interactive Python/C/C++ tutorials.', 'dev', 'https://www.programiz.com/');
c('Datacamp: Free First Chapter Library', 'Search chapters marked free.', 'aiml,dev', 'https://www.datacamp.com/');
c('Codecademy Free Courses', 'Free-tier courses on many languages.', 'dev', 'https://www.codecademy.com/catalog/subject/all');

// ------------- Data structures / algo specialized -------------
c('VisuAlgo', 'Visualizations of data structures and algorithms.', 'dev,math', 'https://visualgo.net/en');
c('Algorithms Visualized (algorithm-visualizer.org)', 'Live-code algorithms with visualizations.', 'dev,math', 'https://algorithm-visualizer.org/');
c('Big-O Cheat Sheet', 'Reference for algorithmic complexities.', 'dev,math', 'https://www.bigocheatsheet.com/');
c('Base CS (Vaidehi Joshi)', 'Illustrated CS explainers.', 'dev,math', 'https://medium.com/basecs');
c('Algorithms 4th Edition (Sedgewick & Wayne) Companion Site', 'Companion for the classic algorithms textbook.', 'dev,math', 'https://algs4.cs.princeton.edu/home/');
c('Introduction to Algorithms (CLRS) Solutions Manual (community)', 'Community-maintained CLRS solutions.', 'dev,math', 'https://walkccc.github.io/CLRS/');

// ------------- Cybersecurity readings / newsletters -------------
c('KrebsOnSecurity Reading Archive', 'Long-running investigative security blog.', 'blue,osint', 'https://krebsonsecurity.com/');
c('The DFIR Report: Weekly Threats Digest', 'Weekly threats digest from thedfirreport.com.', 'blue,red', 'https://thedfirreport.com/');
c('tl;dr sec Newsletter Archive', 'The Clint Gibler weekly infosec newsletter.', 'blue,red,webappsec', 'https://tldrsec.com/');
c('CISO Series Podcast', 'Long-form security industry podcast.', 'blue', 'https://cisoseries.com/');
c('Cyber Report by 0-day: Free Digest', 'Weekly Cybersecurity news digest.', 'blue,red', 'https://blog.detectify.com/');
c('The Hacker News', 'News aggregation with technical writeups.', 'blue,red', 'https://thehackernews.com/');
c('Ars Technica Security', 'Long-form security journalism.', 'blue', 'https://arstechnica.com/tag/security/');

// ------------- Language-specific book libraries -------------
c('Rust Cookbook', 'Recipe book for Rust programmers.', 'dev', 'https://rust-lang-nursery.github.io/rust-cookbook/');
c('Go by Example', 'Idiomatic Go code recipes.', 'dev', 'https://gobyexample.com/');
c('The Node.js Way Book', 'Free Node.js patterns book.', 'dev', 'https://github.com/nodejsway/nodejsway');
c('Modern JavaScript Explained For Dinosaurs', 'Free deep intro article — great for absolute beginners.', 'dev', 'https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html');
c('You Don’t Know JS (Kyle Simpson)', 'Free JS deep-dive book series.', 'dev', 'https://github.com/getify/You-Dont-Know-JS');
c('Eloquent JavaScript', 'The free JS book.', 'dev', 'https://eloquentjavascript.net/');
c('Advanced Web Machinery (JS book)', 'Free web-dev deep dives.', 'dev', 'https://advancedweb.hu/');
c('Odin Project: Node.js Path', 'Odin Project’s node subset.', 'dev', 'https://www.theodinproject.com/paths/full-stack-javascript');
c('Odin Project: Ruby on Rails Path', 'Odin Project’s rails subset.', 'dev', 'https://www.theodinproject.com/paths/full-stack-ruby-on-rails');

// ------------- Design / product engineering -------------
c('Refactoring Guru (Design Patterns)', 'Interactive design patterns book.', 'dev', 'https://refactoring.guru/');
c('Refactoring Guru (Refactoring)', 'Refactoring catalog with code samples.', 'dev', 'https://refactoring.guru/refactoring');
c('Learn X in Y Minutes', 'Cheat-sheet style intros for dozens of languages.', 'dev', 'https://learnxinyminutes.com/');
c('30 seconds of code', 'Curated snippet cookbook.', 'dev', 'https://www.30secondsofcode.org/');
c('CSS Tricks Guides', 'Long-form CSS guides (Flexbox, Grid, etc.).', 'dev', 'https://css-tricks.com/guides/');
c('Josh Comeau: Free Articles', 'High-quality free CSS/JS articles.', 'dev', 'https://www.joshwcomeau.com/');
c('Andy Bell: Set Studio (CSS)', 'Modern CSS techniques from Set Studio.', 'dev', 'https://set.studio/blog/');
c('Kevin Powell YouTube (CSS)', 'CSS-focused YouTube channel.', 'dev', 'https://www.youtube.com/@KevinPowell');
c('Stefan Judis: Modern CSS Newsletter', 'Weekly modern web-dev newsletter.', 'dev', 'https://stefanjudis.com/');

// ------------- Modern AI / agent stack -------------
c('Anthropic Cookbook', 'Recipe library for building with Claude.', 'aiml', 'https://github.com/anthropics/anthropic-cookbook');
c('Anthropic API Docs', 'Anthropic API reference and quickstarts.', 'aiml', 'https://docs.anthropic.com/');
c('OpenAI API Docs', 'The OpenAI API reference + guides.', 'aiml', 'https://platform.openai.com/docs/');
c('Google AI Studio Docs', 'Get started with Gemini via AI Studio.', 'aiml,cloud', 'https://ai.google.dev/');
c('Groq Documentation', 'Ultra-fast LLM inference platform docs.', 'aiml', 'https://console.groq.com/docs/');
c('Together AI Docs', 'Multi-model inference platform.', 'aiml', 'https://docs.together.ai/docs');
c('Fireworks AI Docs', 'Model hosting + inference docs.', 'aiml', 'https://docs.fireworks.ai/');
c('Replicate Documentation', 'Run open-source models via API.', 'aiml', 'https://replicate.com/docs');
c('Modal Labs Documentation', 'Serverless GPU compute.', 'aiml,cloud', 'https://modal.com/docs');
c('Runpod Documentation', 'GPU cloud rental docs.', 'aiml,cloud', 'https://docs.runpod.io/');
c('vLLM Documentation', 'High-throughput LLM serving.', 'aiml,dev', 'https://docs.vllm.ai/');
c('SGLang Documentation', 'Efficient LLM inference framework.', 'aiml,dev', 'https://sgl-project.github.io/');
c('LiteLLM Documentation', 'Cross-provider LLM routing.', 'aiml,dev', 'https://docs.litellm.ai/');

// ------------- Emerging security areas -------------
c('Kubernetes Goat', 'Deliberately vulnerable Kubernetes cluster.', 'red,cloud', 'https://madhuakula.com/kubernetes-goat/');
c('Vulhub: Pre-built Vulnerable Environments', 'Container-based vulnerable services.', 'red,webappsec', 'https://github.com/vulhub/vulhub');
c('AWS Attack Simulator (AttackSim)', 'Deliberate misconfig playground.', 'red,cloud', 'https://github.com/RhinoSecurityLabs/security-research');
c('Cloud Penetration Testing (Rhino Security Labs Blog)', 'Applied cloud pentest writeups.', 'red,cloud', 'https://rhinosecuritylabs.com/blog/');
c('Cyber5W Threat Emulation Range', 'Free defensive-focused range.', 'blue,red', 'https://www.cyber5w.com/');

};
