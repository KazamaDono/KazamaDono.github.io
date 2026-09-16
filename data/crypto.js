// Cryptography — courses, challenge platforms, ZK, cryptanalysis
module.exports = function(c) {

// ------------- Foundations -------------
c('Cryptography I (Dan Boneh, Stanford / Coursera)', 'The canonical modern crypto course, free to audit.', 'crypto,math', 'https://www.coursera.org/learn/crypto');
c('Cryptography II (Dan Boneh, Stanford / Coursera)', 'Zero-knowledge, elliptic curves, and privacy tech.', 'crypto,math', 'https://www.coursera.org/learn/crypto2');
c('Serious Cryptography Companion (Jean-Philippe Aumasson)', 'Reading list + errata for the No Starch cryptography book.', 'crypto', 'https://nostarch.com/seriouscrypto');
c('Applied Cryptography (Bruce Schneier) - Free chapters', 'Selected online chapters and errata.', 'crypto', 'https://www.schneier.com/books/applied-cryptography/');
c('The Joy of Cryptography (Mike Rosulek)', 'Undergrad crypto textbook, free PDF.', 'crypto,math', 'https://joyofcryptography.com/');
c('Crypto 101 (Laurens Van Houtven)', 'Free introductory cryptography book.', 'crypto', 'https://www.crypto101.io/');
c('An Intensive Introduction to Cryptography (Boaz Barak)', 'Harvard lecture notes for the graduate crypto course.', 'crypto,math', 'https://intensecrypto.org/');
c('A Graduate Course in Applied Cryptography (Boneh & Shoup)', 'Free draft of the definitive modern crypto textbook.', 'crypto,math', 'https://toc.cryptobook.us/');

// ------------- Challenge platforms -------------
c('CryptoHack', 'Interactive cryptography challenges organized by topic.', 'crypto,ctf', 'https://cryptohack.org/');
c('Cryptopals Crypto Challenges', 'The classic 8-set cryptanalysis challenges.', 'crypto,ctf', 'https://www.cryptopals.com/');
c('Cryptopals Set 1: Basics', 'Fixed XOR, base64 encode/decode, single-byte XOR.', 'crypto,ctf', 'https://www.cryptopals.com/sets/1');
c('Cryptopals Set 2: Block Crypto', 'ECB/CBC mode attacks and padding.', 'crypto,ctf', 'https://www.cryptopals.com/sets/2');
c('Cryptopals Set 3: Block & Stream Crypto', 'CBC padding oracle, MT19937 recovery.', 'crypto,ctf', 'https://www.cryptopals.com/sets/3');
c('Cryptopals Set 4: Stream Crypto and Randomness', 'Timing and MAC attacks.', 'crypto,ctf', 'https://www.cryptopals.com/sets/4');
c('Cryptopals Set 5: Diffie-Hellman and Friends', 'DH parameter attacks, RSA broadcast.', 'crypto,ctf', 'https://www.cryptopals.com/sets/5');
c('Cryptopals Set 6: RSA and DSA', 'Classic public-key crypto attacks.', 'crypto,ctf', 'https://www.cryptopals.com/sets/6');
c('Cryptopals Set 7: Hashes', 'Length extension, hash collisions.', 'crypto,ctf', 'https://www.cryptopals.com/sets/7');
c('Cryptopals Set 8: Abstract Algebra', 'Elliptic curves and lattice attacks.', 'crypto,ctf', 'https://www.cryptopals.com/sets/8');
c('MysteryTwister C3', 'Long-standing cryptanalysis challenge site.', 'crypto,ctf', 'https://mysterytwister.org/');
c('CryptoPals Follow-up Challenges (id0-rsa)', 'Bonus crypto challenges.', 'crypto,ctf', 'https://id0-rsa.pub/');

// ------------- Practical / applied crypto -------------
c('The Cryptographer’s Toolbox: NaCl / libsodium Docs', 'Modern, misuse-resistant crypto library docs.', 'crypto,dev', 'https://libsodium.gitbook.io/doc/');
c('BoringSSL Documentation', 'Google’s crypto library, useful reading.', 'crypto,dev', 'https://boringssl.googlesource.com/boringssl/+/master/doc/');
c('Trail of Bits: Crypto Guides', 'Applied crypto tutorials and audits.', 'crypto', 'https://blog.trailofbits.com/category/cryptography/');
c('Real-World Cryptography (David Wong)', 'Reading materials + reference site.', 'crypto', 'https://www.davidwong.fr/blockbreakers/');

// ------------- Zero-Knowledge -------------
c('ZKP MOOC (Berkeley / Stanford / MIT)', 'Free MOOC on modern zero-knowledge proofs.', 'crypto,math', 'https://zk-learning.org/');
c('MoonMath Manual to zk-SNARKs', 'Free, deep tutorial on zk-SNARK math.', 'crypto,math', 'https://leastauthority.com/community-matters/moonmath-manual/');
c('Vitalik Buterin: zk-SNARKs Explained', 'Foundational blog series.', 'crypto', 'https://vitalik.eth.limo/general/2016/12/10/qap.html');
c('ZK Study Club (0xPARC)', 'Aggregated ZK curriculum and lecture recordings.', 'crypto', 'https://zkstudyclub.com/');
c('Awesome Zero Knowledge Proofs', 'Curated reading list for ZK proofs.', 'crypto', 'https://github.com/matter-labs/awesome-zero-knowledge-proofs');

// ------------- Post-Quantum / Lattice / MPC / FHE -------------
c('PQ Crystals (Dilithium / Kyber) Reference', 'Reference implementations and tutorials for NIST PQC winners.', 'crypto', 'https://pq-crystals.org/');
c('Lattice-Based Cryptography Book (Peikert)', 'Reference reading for lattice crypto.', 'crypto,math', 'https://web.eecs.umich.edu/~cpeikert/pubs/lattice-survey.pdf');
c('FHE.org Videos and Curriculum', 'Fully-homomorphic encryption community and lectures.', 'crypto,math', 'https://fhe.org/');
c('SEAL FHE Library Tutorials', 'Microsoft SEAL library docs.', 'crypto,dev', 'https://github.com/microsoft/SEAL');
c('MPC Alliance Learning Center', 'Multi-party computation intro material.', 'crypto', 'https://www.mpcalliance.org/');
c('OpenMined Courses', 'Free courses on privacy-preserving ML (federated learning, MPC).', 'crypto,aiml', 'https://courses.openmined.org/');

// ------------- Certificate / PKI / TLS -------------
c('Bulletproof TLS Guide (Ivan Ristic - free chapters)', 'Selected free chapters from the TLS bible.', 'crypto,dev', 'https://www.feistyduck.com/library/bulletproof-tls-guide/online/');
c('SSL Labs Best Practices', 'Free practical guide to TLS configuration.', 'crypto,dev', 'https://www.ssllabs.com/projects/best-practices/');
c('Mozilla Server Side TLS', 'Config generator and recommendations.', 'crypto,dev', 'https://ssl-config.mozilla.org/');
c('Let’s Encrypt Documentation', 'Free certificates + rich integration guides.', 'crypto,dev', 'https://letsencrypt.org/docs/');

// ------------- Historical / classical cryptanalysis -------------
c('The Code Book Companion (Simon Singh)', 'Free companion challenges and cipher solver tools.', 'crypto', 'https://www.simonsingh.net/The_Black_Chamber/');
c('CrypTool Portal', 'Interactive teaching platform for cryptographic techniques.', 'crypto', 'https://www.cryptool.org/en/');
c('Cipher Tools (dCode)', 'Web toolbox for classic ciphers.', 'crypto', 'https://www.dcode.fr/');
c('Practical Cryptanalysis of Real World Systems (list)', 'Reading list of real-world crypto breaks.', 'crypto', 'https://www.cambridge.org/core/journals/journal-of-cryptology');

};
