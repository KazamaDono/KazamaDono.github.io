// CS fundamentals, systems, OS, distributed, PL, compilers, algo
module.exports = function(c) {

// ------------- Harvard / MIT / Stanford / Berkeley canonical courses -------------
c('CS50: Introduction to Computer Science (Harvard)', 'The canonical CS intro course, free from Harvard.', 'dev', 'https://cs50.harvard.edu/x/');
c('CS50P: Introduction to Programming with Python (Harvard)', 'Companion Python-focused CS50 track.', 'dev', 'https://cs50.harvard.edu/python/');
c('CS50W: Web Programming with Python and JavaScript', 'Full-stack web programming from Harvard.', 'dev', 'https://cs50.harvard.edu/web/');
c('CS50T: Understanding Technology (Harvard)', 'Non-technical technology literacy course.', 'dev', 'https://cs50.harvard.edu/technology/');
c('CS50AI: Introduction to AI with Python (Harvard)', 'Harvard’s AI intro paired with CS50.', 'dev,aiml', 'https://cs50.harvard.edu/ai/');
c('CS50G: Introduction to Game Development (Harvard)', 'Learn game dev with Lua and JavaScript.', 'dev,game', 'https://cs50.harvard.edu/games/');
c('CS50M: Mobile App Development with React Native', 'Mobile app development track.', 'dev,mobile', 'https://cs50.harvard.edu/mobile/');
c('CS50 Business (Understanding Technology for Business)', 'Non-technical technology track.', 'dev', 'https://cs50.harvard.edu/business/');

c('MIT 6.001: SICP (Structure and Interpretation of Computer Programs)', 'Classic MIT intro to CS.', 'dev', 'https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/');
c('MIT 6.031: Software Construction', 'Modern MIT software construction course.', 'dev', 'https://web.mit.edu/6.031/www/sp22/');
c('MIT 6.033: Computer System Engineering', 'Systems architecture and design.', 'dev', 'https://web.mit.edu/6.033/www/');
c('MIT 6.172: Performance Engineering of Software Systems', 'Charles Leiserson’s performance engineering course.', 'dev', 'https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/');
c('MIT 6.005: Software Construction (2016)', 'Reading + labs on principled software.', 'dev', 'https://ocw.mit.edu/ans7870/6/6.005/s16/');
c('MIT Missing Semester of Your CS Education', 'The class you never took: shell, git, vim, tmux.', 'dev', 'https://missing.csail.mit.edu/');
c('MIT 6.045: Automata, Computability, and Complexity', 'Theory of computation.', 'dev,math', 'https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/');
c('MIT 6.851: Advanced Data Structures', 'Erik Demaine’s advanced data structures.', 'dev,math', 'https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/');

c('Stanford CS106A: Programming Methodology (YouTube)', 'Classic Stanford intro programming course.', 'dev', 'https://see.stanford.edu/Course/CS106A');
c('Stanford CS106B: Programming Abstractions', 'C++ data structures + abstractions.', 'dev', 'https://web.stanford.edu/class/cs106b/');
c('Stanford CS107: Programming Paradigms', 'Multi-paradigm programming.', 'dev', 'https://see.stanford.edu/Course/CS107');
c('Stanford CS110: Principles of Computer Systems', 'Systems programming — networks, threads, filesystems.', 'dev', 'https://web.stanford.edu/class/cs110/');
c('Stanford CS242: Programming Languages', 'PL theory and implementation.', 'dev', 'https://cs242.stanford.edu/');
c('Stanford CS143: Compilers', 'Alex Aiken’s legendary compilers course.', 'dev', 'https://web.stanford.edu/class/cs143/');
c('Stanford CS166: Data Structures', 'Advanced DS course.', 'dev,math', 'https://web.stanford.edu/class/cs166/');
c('Stanford CS161: Design and Analysis of Algorithms', 'Algorithm design + analysis.', 'dev,math', 'https://web.stanford.edu/class/cs161/');
c('Stanford CS255: Introduction to Cryptography', 'Applied crypto intro.', 'crypto,math', 'https://cs255.stanford.edu/');

c('UC Berkeley CS61A: Structure and Interpretation of Computer Programs', 'Modern SICP-inspired intro.', 'dev', 'https://cs61a.org/');
c('UC Berkeley CS61B: Data Structures', 'Java-based data structures course.', 'dev', 'https://sp23.datastructur.es/');
c('UC Berkeley CS61C: Great Ideas in Computer Architecture', 'Machine architecture course.', 'dev', 'https://cs61c.org/');
c('UC Berkeley CS162: Operating Systems', 'Full OS course with Pintos labs.', 'dev', 'https://cs162.org/');
c('UC Berkeley CS186: Introduction to Database Systems', 'Databases from a systems perspective.', 'dev', 'https://cs186berkeley.net/');
c('UC Berkeley CS194: Full-Stack Deep Learning', 'Ship modern ML apps.', 'dev,aiml', 'https://fullstackdeeplearning.com/course/2022/');

c('CMU 15-213: Introduction to Computer Systems', 'The famous CSAPP-companion course.', 'dev', 'http://csapp.cs.cmu.edu/3e/labs.html');
c('CMU 15-445: Database Systems', 'Andy Pavlo’s canonical DB internals course.', 'dev', 'https://15445.courses.cs.cmu.edu/');
c('CMU 15-721: Advanced Database Systems', 'Modern DBMS internals course.', 'dev', 'https://15721.courses.cs.cmu.edu/');
c('CMU 15-411: Compiler Design', 'Undergrad compilers course.', 'dev', 'https://www.cs.cmu.edu/~fp/courses/15411-f14/');
c('CMU 15-441: Computer Networks', 'Networking fundamentals with programming projects.', 'dev', 'https://www.cs.cmu.edu/~srini/15-441/');
c('CMU 15-410: Operating System Design and Implementation', 'Serious OS class.', 'dev', 'https://www.cs.cmu.edu/~410/');
c('CMU 15-780: Graduate Artificial Intelligence', 'Grad-level AI course.', 'aiml,dev', 'https://www.cs.cmu.edu/~15780/');

// ------------- Systems programming -------------
c('CS50X: Legacy Standalone Chapters', 'Chapters + short lectures grouped by topic.', 'dev', 'https://cs50.harvard.edu/x/2024/');
c('Beej’s Guide to Network Programming', 'The classic C-networking tutorial.', 'dev', 'https://beej.us/guide/bgnet/');
c('Beej’s Guide to Unix IPC', 'IPC with pipes, semaphores and message queues.', 'dev', 'https://beej.us/guide/bgipc/');
c('Beej’s Guide to C', 'Great intro to modern C.', 'dev', 'https://beej.us/guide/bgc/');
c('OS Dev Wiki', 'Community resource for OS developers.', 'dev,exploits', 'https://wiki.osdev.org/');
c('Writing an OS in Rust', 'Blog series: build a small kernel in Rust.', 'dev', 'https://os.phil-opp.com/');
c('Nand2Tetris: The Elements of Computing Systems', 'Build a computer from Nand gates to Tetris.', 'dev', 'https://www.nand2tetris.org/');
c('Compiler Explorer (Godbolt) Learning', 'Study compiled code interactively.', 'dev,re', 'https://godbolt.org/');
c('Systems Approach Textbook (Peterson & Davie)', 'Open-source networking textbook.', 'dev', 'https://book.systemsapproach.org/');

// ------------- Distributed systems -------------
c('MIT 6.824: Distributed Systems Lectures', 'Robert Morris’s legendary lectures.', 'dev', 'https://pdos.csail.mit.edu/6.824/');
c('Designing Data-Intensive Applications: Reading Guide', 'Community study guides for Kleppmann’s book.', 'dev', 'https://github.com/donnemartin/system-design-primer');
c('The System Design Primer', 'Massive open-source guide to system design.', 'dev', 'https://github.com/donnemartin/system-design-primer');
c('High Scalability: All-time Best Posts', 'Curated reading list for scaling systems.', 'dev', 'http://highscalability.com/all-time-favorites/');
c('Google SRE Book (free)', 'The SRE bible — hosted free by Google.', 'dev', 'https://sre.google/sre-book/table-of-contents/');
c('The Site Reliability Workbook (free)', 'Companion practical SRE handbook.', 'dev', 'https://sre.google/workbook/table-of-contents/');
c('Building Secure and Reliable Systems (Google)', 'Free SRE + security book.', 'dev,blue', 'https://sre.google/books/building-secure-reliable-systems/');
c('CS 244B: Distributed Systems (Stanford)', 'Advanced distributed systems course.', 'dev', 'https://www.scs.stanford.edu/cs244b/');
c('Raft Consensus Interactive Visualization', 'Understand Raft with an interactive playground.', 'dev', 'https://raft.github.io/');

// ------------- PL / Compilers / Formal Methods -------------
c('CS 421: Programming Languages and Compilers (UIUC)', 'PL foundations.', 'dev', 'https://courses.engr.illinois.edu/cs421/');
c('Software Foundations (Pierce et al.)', 'The Coq-based foundational PL textbook.', 'dev,math', 'https://softwarefoundations.cis.upenn.edu/');
c('The Little Book of Semaphores', 'Free book on concurrency primitives.', 'dev', 'https://greenteapress.com/wp/semaphores/');
c('Crafting Interpreters (Bob Nystrom)', 'Free online book — write a language, twice.', 'dev', 'https://craftinginterpreters.com/');
c('Programming Language Foundations in Agda', 'Interactive book on PL with Agda.', 'dev', 'https://plfa.github.io/');
c('Types and Programming Languages Reading List', 'Companion reading for the classic TAPL.', 'dev,math', 'https://www.cis.upenn.edu/~bcpierce/tapl/resources.html');
c('Awesome Compilers', 'Curated open-source compiler resources.', 'dev', 'https://github.com/aalhour/awesome-compilers');

// ------------- Modern curricula (self-paced) -------------
c('Teach Yourself Computer Science', 'Highly-cited self-taught CS syllabus.', 'dev', 'https://teachyourselfcs.com/');
c('OSSU: Open Source Society University', 'Community-maintained CS curriculum, free.', 'dev', 'https://github.com/ossu/computer-science');
c('The Odin Project', 'Full-stack web dev curriculum, free.', 'dev', 'https://www.theodinproject.com/');
c('Full Stack Open (Helsinki)', 'The excellent free full-stack JS course.', 'dev', 'https://fullstackopen.com/en/');
c('freeCodeCamp Curriculum', 'The comprehensive free coding curriculum.', 'dev', 'https://www.freecodecamp.org/learn');
c('App Academy Open', 'Free full-stack web development curriculum.', 'dev', 'https://open.appacademy.io/');
c('Codecademy Free Tier Courses', 'Community-tier courses across many topics.', 'dev', 'https://www.codecademy.com/catalog/subject/all');
c('Codewars', 'Programming katas to sharpen skills.', 'dev', 'https://www.codewars.com/');
c('Exercism', 'Programming exercises with mentor feedback (free).', 'dev', 'https://exercism.org/');
c('LeetCode Explore', 'Free curated study plans for algorithms.', 'dev', 'https://leetcode.com/explore/');
c('Neetcode 150', 'Curated set of 150 must-know problems.', 'dev', 'https://neetcode.io/roadmap');
c('Blind 75 Problems', 'Community list — the famous 75 problems.', 'dev', 'https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions');

// ------------- Modern web / mobile foundations -------------
c('MDN Web Docs: Learn Web Development', 'Mozilla’s canonical intro to web dev.', 'dev', 'https://developer.mozilla.org/en-US/docs/Learn');
c('web.dev Learn', 'Google’s free curriculum on modern web capabilities.', 'dev', 'https://web.dev/learn/');
c('web.dev Learn CSS', 'Deep interactive CSS course.', 'dev', 'https://web.dev/learn/css/');
c('web.dev Learn HTML', 'A modern HTML deep dive.', 'dev', 'https://web.dev/learn/html/');
c('web.dev Learn JavaScript', 'A modern JS deep dive.', 'dev', 'https://web.dev/learn/javascript/');
c('web.dev Learn Accessibility', 'A11y deep dive.', 'dev', 'https://web.dev/learn/accessibility/');
c('JavaScript.info', 'Modern JS tutorial from scratch to advanced.', 'dev', 'https://javascript.info/');
c('React Documentation Tutorials', 'Official React beta docs — very course-like.', 'dev', 'https://react.dev/learn');
c('Vue Documentation', 'Vue 3 official docs.', 'dev', 'https://vuejs.org/tutorial/');
c('Svelte Tutorial', 'Interactive Svelte tutorial.', 'dev', 'https://learn.svelte.dev/tutorial/welcome-to-svelte');
c('Astro Documentation', 'Astro documentation + guides.', 'dev', 'https://docs.astro.build/en/getting-started/');
c('Solid.js Docs', 'Reactive frontend framework tutorials.', 'dev', 'https://www.solidjs.com/tutorial/introduction_basics');
c('Nuxt Documentation', 'Vue-based full-stack framework docs.', 'dev', 'https://nuxt.com/docs');
c('Next.js Learn', 'Interactive Next.js learn track.', 'dev', 'https://nextjs.org/learn');
c('Remix Docs', 'Modern remix framework docs.', 'dev', 'https://remix.run/docs/en/main/tutorials/blog');
c('SolidStart Docs', 'Full-stack Solid.js meta-framework.', 'dev', 'https://start.solidjs.com/');

// ------------- Language-specific courses -------------
c('Python: The Hard Way (Free samples)', 'Free early chapters of the popular series.', 'dev', 'https://learnpythonthehardway.org/book/preface.html');
c('Real Python Free Content', 'Long-running Python tutorial hub.', 'dev', 'https://realpython.com/tutorials/all/');
c('Automate the Boring Stuff with Python (Al Sweigart)', 'Free online book.', 'dev', 'https://automatetheboringstuff.com/');
c('Learn Rust: The Rust Programming Language Book', 'Rust’s official book.', 'dev', 'https://doc.rust-lang.org/book/');
c('Rust by Example', 'Rust tutorials via runnable examples.', 'dev', 'https://doc.rust-lang.org/rust-by-example/');
c('Rustlings', 'Interactive Rust practice exercises.', 'dev', 'https://github.com/rust-lang/rustlings');
c('Comprehensive Rust (Google)', 'Google’s Rust bootcamp materials.', 'dev', 'https://google.github.io/comprehensive-rust/');
c('Rust for Rustaceans (companion)', 'Bonus material from Jon Gjengset.', 'dev', 'https://rust-for-rustaceans.com/');
c('Learn Go with Tests', 'TDD-based Go tutorial.', 'dev', 'https://quii.gitbook.io/learn-go-with-tests');
c('A Tour of Go (official)', 'Interactive Go tour.', 'dev', 'https://go.dev/tour/');
c('Go Web Examples', 'Go with modern web patterns.', 'dev', 'https://gowebexamples.com/');
c('Learn Elixir (elixir-lang.org)', 'Official language guide.', 'dev', 'https://elixir-lang.org/getting-started/introduction.html');
c('Learn OCaml (Real World OCaml)', 'Real World OCaml full book online.', 'dev', 'https://dev.realworldocaml.org/');
c('Learn Haskell (Learn You a Haskell)', 'The friendliest Haskell tutorial.', 'dev', 'http://learnyouahaskell.com/chapters');
c('Learn Clojure (clojure.org)', 'Official Clojure learn hub.', 'dev', 'https://clojure.org/guides/getting_started');
c('Learn Scala (Scala 3 Book)', 'Official Scala 3 book.', 'dev', 'https://docs.scala-lang.org/scala3/book/introduction.html');
c('Kotlin Documentation', 'Official Kotlin guide.', 'dev', 'https://kotlinlang.org/docs/home.html');
c('Swift Book: The Swift Programming Language', 'Apple’s official Swift book.', 'dev', 'https://docs.swift.org/swift-book/');
c('Erlang the Movie / Learn You Some Erlang', 'The classic Erlang beginner book.', 'dev', 'https://learnyousomeerlang.com/content');
c('Zig Learn', 'Community Zig tutorial.', 'dev', 'https://ziglearn.org/');
c('Modern C (Jens Gustedt)', 'Free online modern C textbook.', 'dev', 'https://gustedt.gitlabpages.inria.fr/modern-c/');
c('Learn C++ (learncpp.com)', 'Very well-organized C++ tutorial.', 'dev', 'https://www.learncpp.com/');
c('Modern C++ Features (cppreference)', 'Reference to modern C++ standard.', 'dev', 'https://en.cppreference.com/w/');
c('Effective C++ Reading Guide (Meyers)', 'Community reading guide.', 'dev', 'https://github.com/CyC2018/CS-Notes');
c('Learn Perl (perlmaven)', 'Free comprehensive Perl tutorial.', 'dev', 'https://perlmaven.com/perl-tutorial');
c('Learn Ruby (Ruby Docs)', 'Official Ruby documentation with tutorials.', 'dev', 'https://www.ruby-lang.org/en/documentation/quickstart/');
c('Ruby on Rails Guides', 'Official Rails learning guides.', 'dev', 'https://guides.rubyonrails.org/');

// ------------- Algo / theory -------------
c('Algorithms Illuminated (Tim Roughgarden)', 'Companion materials for the algorithms book series.', 'dev,math', 'https://www.algorithmsilluminated.org/');
c('Coursera Algorithms Specialization (Roughgarden)', 'Full audit-free algorithms sequence.', 'dev,math', 'https://www.coursera.org/specializations/algorithms');
c('Princeton Algorithms Course I & II', 'Sedgewick’s classic Coursera algorithms courses.', 'dev,math', 'https://www.coursera.org/learn/algorithms-part1');
c('Introduction to Algorithms: 3rd edition (CLRS) Reading Guide', 'Community-maintained CLRS study guide.', 'dev,math', 'https://github.com/gzc/CLRS');
c('Competitive Programmer’s Handbook (Antti Laaksonen)', 'Free CP handbook.', 'dev,math', 'https://cses.fi/book/book.pdf');
c('USACO Guide', 'Free curriculum for competitive programming.', 'dev,math', 'https://usaco.guide/');
c('CS Academy Learning', 'Competitive programming learn tracks.', 'dev,math', 'https://csacademy.com/lesson/');

// ------------- Systems interview prep -------------
c('Ace the System Design Interview (Alex Xu companion)', 'Github repo companion.', 'dev', 'https://github.com/checkcheckzz/system-design-interview');
c('Grokking the Coding Interview Patterns (open list)', 'Curated patterns for coding interviews.', 'dev', 'https://github.com/kdn251/interviews');
c('Modern Data Structures for Interviews', 'Interview-focused DS notes.', 'dev', 'https://github.com/donnemartin/interactive-coding-challenges');

// ------------- Testing / QA -------------
c('Google Testing Blog', 'The Google testing team’s public tips.', 'dev', 'https://testing.googleblog.com/');
c('Kent Beck TDD Rediscovery', 'Reading materials on modern TDD.', 'dev', 'https://tidyfirst.substack.com/');
c('Software Testing Help (Free tutorials)', 'General QA/testing tutorials.', 'dev', 'https://www.softwaretestinghelp.com/');
c('Playwright Docs', 'Browser automation, testing basics.', 'dev', 'https://playwright.dev/docs/intro');
c('Cypress Docs', 'Modern e2e testing docs.', 'dev', 'https://docs.cypress.io/');
c('Postman Learning: Automated Testing', 'Automated API testing tutorials.', 'dev', 'https://learning.postman.com/docs/writing-scripts/test-scripts/');

// ------------- Concurrency / Parallelism -------------
c('Concurrent Programming for Scalable Web Architectures', 'Free short book.', 'dev', 'https://berb.github.io/diploma-thesis/original/index.html');
c('Java Concurrency in Practice Reading Guide', 'Community guide to the classic.', 'dev', 'https://github.com/HugoMatilla/The-Pragmatic-Programmer');
c('The Book of Shaders', 'Interactive GPU shader tutorial book.', 'dev', 'https://thebookofshaders.com/');
c('The Little Book of Elm', 'Free intro to Elm functional web.', 'dev', 'https://elmprogramming.com/');

};
