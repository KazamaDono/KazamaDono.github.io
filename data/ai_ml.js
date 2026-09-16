// AI / ML / DL / LLM courses. All entries are free or free-to-audit.
module.exports = function(c) {

// ------------- Andrew Ng / DeepLearning.AI (Coursera, audit-free) -------------
c('Machine Learning Specialization', 'Andrew Ng’s foundational 3-course specialization: supervised, advanced learning algorithms, unsupervised & reinforcement learning.', 'aiml', 'https://www.coursera.org/specializations/machine-learning-introduction');
c('Deep Learning Specialization', '5-course specialization on deep learning: neural nets, hyperparameter tuning, ConvNets, sequence models, and structuring projects.', 'aiml', 'https://www.coursera.org/specializations/deep-learning');
c('Generative AI with Large Language Models', 'AWS + DeepLearning.AI collaboration explaining transformer internals, fine-tuning, RLHF, and deploying LLMs at scale.', 'aiml', 'https://www.coursera.org/learn/generative-ai-with-llms');
c('AI For Everyone', 'Non-technical primer on what AI can and cannot do, how it fits into an organization, and how to work with AI teams.', 'aiml', 'https://www.coursera.org/learn/ai-for-everyone');
c('Natural Language Processing Specialization', '4-course specialization: classification & vector spaces, probabilistic models, sequence models, attention models.', 'aiml', 'https://www.coursera.org/specializations/natural-language-processing');
c('MLOps Specialization', 'Machine Learning Engineering for Production: design, deploy and monitor real ML systems.', 'aiml,dev', 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops');
c('TensorFlow Developer Professional Certificate', 'Applied TensorFlow: CNNs, NLP, time series, and deployment.', 'aiml', 'https://www.coursera.org/professional-certificates/tensorflow-in-practice');
c('TensorFlow: Advanced Techniques', 'Custom models, distributed training, generative deep learning, and advanced computer vision.', 'aiml', 'https://www.coursera.org/specializations/tensorflow-advanced-techniques');
c('Practical Data Science on AWS', 'End-to-end ML on AWS with SageMaker, from data prep to deployment.', 'aiml,cloud', 'https://www.coursera.org/specializations/practical-data-science');
c('AI for Medicine', '3-course specialization: diagnosis, prognosis, treatment — apply ML to real medical data.', 'aiml,bio', 'https://www.coursera.org/specializations/ai-for-medicine');
c('Mathematics for Machine Learning and Data Science', 'Imperial College math foundations: linear algebra, calculus, statistics, probability for ML.', 'aiml,math', 'https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science');
c('Machine Learning Engineering for Production (MLOps)', 'Design ML production systems that survive real-world data and drift.', 'aiml,dev', 'https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/');

// ------------- DeepLearning.AI Short Courses (free) -------------
c('ChatGPT Prompt Engineering for Developers', 'Best practices for prompting LLMs, few-shot design, output validation, and iterative refinement.', 'aiml', 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/');
c('Building Systems with the ChatGPT API', 'Chain LLM calls, build classifiers, moderation and evaluations for production apps.', 'aiml', 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/');
c('LangChain for LLM Application Development', 'Models, prompts, chains, memory and agents with LangChain.', 'aiml', 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/');
c('LangChain: Chat with Your Data', 'Load and index documents, do retrieval-augmented generation, build chat interfaces.', 'aiml', 'https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/');
c('Building and Evaluating Advanced RAG', 'Sentence-window, auto-merging, hybrid retrieval and evaluation with TruLens.', 'aiml', 'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/');
c('Vector Databases: from Embeddings to Applications', 'Chunking, embedding, similarity search, hybrid queries and scalable ANN indexes.', 'aiml', 'https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/');
c('Preprocessing Unstructured Data for LLM Applications', 'Cleaning HTML, PDFs, and multimodal docs for downstream RAG.', 'aiml', 'https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/');
c('Advanced Retrieval for AI with Chroma', 'Query transformations, cross-encoders and re-ranking to sharpen retrieval quality.', 'aiml', 'https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/');
c('Reinforcement Learning from Human Feedback', 'RLHF end-to-end: reward modeling, policy optimization and evaluation.', 'aiml', 'https://www.deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/');
c('Building Generative AI Applications with Gradio', 'Rapidly prototype AI apps in a browser: chat UIs, image gen, audio pipelines.', 'aiml', 'https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/');
c('Evaluating and Debugging Generative AI', 'W&B for tracking, evaluating and debugging generative pipelines.', 'aiml', 'https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/');
c('How Diffusion Models Work', 'Train and sample from your own diffusion model from scratch.', 'aiml', 'https://www.deeplearning.ai/short-courses/how-diffusion-models-work/');
c('Finetuning Large Language Models', 'When to fine-tune vs. prompt, dataset design, evaluation and cost.', 'aiml', 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/');
c('Large Language Models with Semantic Search', 'Dense retrieval, keyword hybrid search and rerankers with Cohere.', 'aiml', 'https://www.deeplearning.ai/short-courses/large-language-models-semantic-search/');
c('Understanding and Applying Text Embeddings', 'PaLM embeddings, semantic similarity, clustering and classification.', 'aiml', 'https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/');
c('Serverless LLM Apps with Amazon Bedrock', 'Ship production LLM apps on serverless AWS infrastructure.', 'aiml,cloud', 'https://www.deeplearning.ai/short-courses/serverless-llm-apps-amazon-bedrock/');
c('Prompt Engineering with Llama 2 & 3', 'Prompting patterns for Llama models — chat, code and safety.', 'aiml', 'https://www.deeplearning.ai/short-courses/prompt-engineering-with-llama-2/');
c('Open Source Models with Hugging Face', 'Use HF models locally: text, image, audio and multimodal pipelines.', 'aiml', 'https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/');
c('Multi AI Agent Systems with CrewAI', 'Build agent teams that coordinate to solve complex tasks.', 'aiml', 'https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/');
c('AI Agents in LangGraph', 'Stateful, streaming, cyclic agent graphs with LangGraph.', 'aiml', 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/');
c('Building Agentic RAG with LlamaIndex', 'Query planning, sub-question decomposition and tool use with LlamaIndex.', 'aiml', 'https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/');
c('Quantization Fundamentals with Hugging Face', 'Int8/Int4 quantization, GPTQ, AWQ and running LLMs on constrained hardware.', 'aiml', 'https://www.deeplearning.ai/short-courses/quantization-fundamentals-with-hugging-face/');
c('Quantization in Depth', 'Weight-only, activation and full quantization tradeoffs.', 'aiml', 'https://www.deeplearning.ai/short-courses/quantization-in-depth/');
c('Efficiently Serving LLMs', 'Batching, paging, KV caching, and serving stacks for scalable inference.', 'aiml', 'https://www.deeplearning.ai/short-courses/efficiently-serving-llms/');
c('Pretraining LLMs', 'End-to-end pretraining loop: data, tokenization, optimizer and eval.', 'aiml', 'https://www.deeplearning.ai/short-courses/pretraining-llms/');
c('Function-Calling and Data Extraction with LLMs', 'Structured outputs and tool use for reliable pipelines.', 'aiml', 'https://www.deeplearning.ai/short-courses/function-calling-and-data-extraction-with-llms/');
c('Red Teaming LLM Applications', 'Systematically probe LLMs for jailbreaks, prompt injection and unsafe outputs.', 'aiml,red', 'https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/');
c('Quality and Safety for LLM Applications', 'Guardrails, output validation, PII scrubbing and adversarial evals.', 'aiml,red', 'https://www.deeplearning.ai/short-courses/quality-safety-llm-applications/');
c('Prompt Compression and Query Optimization', 'Cut token spend without losing quality.', 'aiml', 'https://www.deeplearning.ai/short-courses/prompt-compression-and-query-optimization/');
c('JavaScript RAG Web Apps with LlamaIndex', 'Build RAG apps end-to-end in the JavaScript ecosystem.', 'aiml,dev', 'https://www.deeplearning.ai/short-courses/javascript-rag-web-apps-with-llamaindex/');
c('Building Multimodal Search and RAG', 'Text + image search and generation with joint embeddings.', 'aiml', 'https://www.deeplearning.ai/short-courses/building-multimodal-search-and-rag/');
c('Knowledge Graphs for RAG', 'Neo4j and vector retrieval combined for grounded QA.', 'aiml', 'https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/');

// ------------- Hugging Face Learn -------------
c('Hugging Face NLP Course', 'The full NLP course: transformers, datasets, tokenizers, fine-tuning and sharing.', 'aiml', 'https://huggingface.co/learn/nlp-course');
c('Hugging Face Deep RL Course', 'Deep reinforcement learning from Q-learning to PPO to SAC, with hands-on Colab labs.', 'aiml', 'https://huggingface.co/learn/deep-rl-course');
c('Hugging Face Diffusion Models Course', 'Train, sample and fine-tune diffusion models for image generation.', 'aiml', 'https://huggingface.co/learn/diffusion-course');
c('Hugging Face Audio Course', 'ASR, TTS and audio classification with modern transformer stacks.', 'aiml', 'https://huggingface.co/learn/audio-course');
c('Hugging Face Machine Learning for Games', 'Integrate ML models with Unity and Godot for playable agents.', 'aiml,game', 'https://huggingface.co/learn/ml-games-course');
c('Hugging Face Agents Course', 'Build LLM agents with tools, memory and multi-step reasoning.', 'aiml', 'https://huggingface.co/learn/agents-course');
c('Hugging Face Community Computer Vision Course', 'Vision fundamentals, CNNs, ViTs, detection and segmentation.', 'aiml', 'https://huggingface.co/learn/computer-vision-course');
c('Hugging Face Cookbook', 'Recipe-style notebooks for RAG, agents, vision and quantization.', 'aiml', 'https://huggingface.co/learn/cookbook');

// ------------- fast.ai -------------
c('Practical Deep Learning for Coders (fast.ai)', 'Top-down course: build state-of-the-art models by writing code from lesson 1.', 'aiml', 'https://course.fast.ai/');
c('Practical Deep Learning Part 2 (fast.ai)', 'From Foundations to Stable Diffusion — implement diffusion from scratch.', 'aiml', 'https://course.fast.ai/Lessons/part2.html');
c('Practical Data Ethics (fast.ai)', 'How to think about AI ethics — bias, disinformation, surveillance and policy.', 'aiml', 'https://ethics.fast.ai/');
c('Code-First NLP (fast.ai)', 'NLP curriculum from tokenization to transformers, code-first.', 'aiml', 'https://www.fast.ai/topics/#nlp');
c('Linear Algebra from Computational Perspective (fast.ai)', 'Numerical linear algebra through the lens of data science.', 'aiml,math', 'https://github.com/fastai/numerical-linear-algebra');

// ------------- Karpathy / 3Blue1Brown / community classics -------------
c('Neural Networks: Zero to Hero (Karpathy)', 'Build micrograd, makemore, GPT-2 from scratch — arguably the best modern DL series.', 'aiml', 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ');
c('Let’s build GPT: from scratch, in code, spelled out.', 'Karpathy live-codes a nano-GPT and explains every step.', 'aiml', 'https://www.youtube.com/watch?v=kCc8FmEb1nY');
c('Let’s reproduce GPT-2 (124M)', 'Karpathy rebuilds GPT-2 end-to-end including training on FineWeb.', 'aiml', 'https://www.youtube.com/watch?v=l8pRSuU81PU');
c('Let’s build the GPT Tokenizer', 'Byte-Pair Encoding from scratch, and why tokenization is weirder than you think.', 'aiml', 'https://www.youtube.com/watch?v=zduSFxRajkE');
c('State of GPT (Karpathy)', 'End-to-end tour of how modern chat LLMs are trained and aligned.', 'aiml', 'https://www.youtube.com/watch?v=bZQun8Y4L2A');
c('Intro to Large Language Models (Karpathy)', '1-hour executive-level intro to modern LLMs.', 'aiml', 'https://www.youtube.com/watch?v=zjkBMFhNj_g');
c('3Blue1Brown: Neural Networks', 'The classic visual explanations of gradient descent, backprop and transformers.', 'aiml,math', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi');
c('3Blue1Brown: Essence of Linear Algebra', 'Geometric intuition for vectors, transformations, eigenvectors.', 'aiml,math', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab');
c('3Blue1Brown: Essence of Calculus', 'Intuitive calculus refresher every ML practitioner should watch once.', 'aiml,math', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr');
c('3Blue1Brown: Essence of Probability', 'Bayesian intuitions, distributions and Monte Carlo visuals.', 'aiml,math', 'https://www.youtube.com/playlist?list=PLZHQObOWTQDN-eiaOAqk4Igj0G-QoOd8g');

// ------------- Stanford (public lecture recordings on YouTube) -------------
c('Stanford CS229: Machine Learning', 'Andrew Ng’s classic full-length ML course lectures.', 'aiml,math', 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU');
c('Stanford CS231n: CNNs for Visual Recognition', 'Foundational computer-vision-with-deep-learning course.', 'aiml', 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv');
c('Stanford CS224n: NLP with Deep Learning', 'Modern NLP, from word embeddings to LLMs.', 'aiml', 'https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4');
c('Stanford CS234: Reinforcement Learning', 'Emma Brunskill’s intro to RL — Q-learning through policy gradients.', 'aiml', 'https://www.youtube.com/playlist?list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u');
c('Stanford CS330: Deep Multi-Task and Meta Learning', 'Chelsea Finn on transfer, multi-task and meta learning.', 'aiml', 'https://www.youtube.com/playlist?list=PLoROMvodv4rMIJ-TvblAIkw28Wxi27B36');
c('Stanford CS336: LLMs from Scratch', 'Full-course lectures on building an LLM stack top-to-bottom.', 'aiml', 'https://stanford-cs336.github.io/spring2024/');
c('Stanford CS25: Transformers United', 'Speaker series on modern transformer architectures.', 'aiml', 'https://web.stanford.edu/class/cs25/');
c('Stanford CS221: AI - Principles and Techniques', 'Percy Liang’s intro to AI covering search, MDPs, ML and logic.', 'aiml', 'https://stanford-cs221.github.io/');
c('Stanford CS324: Large Language Models', 'Course notes on the science, safety and systems of LLMs.', 'aiml', 'https://stanford-cs324.github.io/winter2022/');
c('Stanford CS324 (2023): Advances in Foundation Models', 'Follow-up: newer results on foundation models and applications.', 'aiml', 'https://stanford-cs324.github.io/winter2023/');
c('Stanford CS329s: ML Systems Design', 'Chip Huyen’s course on production ML systems.', 'aiml,dev', 'https://stanford-cs329s.github.io/');
c('Stanford CS103: Mathematical Foundations of Computing', 'Discrete math and proofs, foundational for CS/ML.', 'math', 'https://web.stanford.edu/class/cs103/');
c('Stanford CS228: Probabilistic Graphical Models', 'PGM course notes online.', 'aiml,math', 'https://ermongroup.github.io/cs228-notes/');

// ------------- MIT OpenCourseWare -------------
c('MIT 6.S191: Introduction to Deep Learning', 'MIT’s intro-to-DL bootcamp, refreshed annually.', 'aiml', 'http://introtodeeplearning.com/');
c('MIT 6.036: Introduction to Machine Learning', 'Undergrad intro ML course materials.', 'aiml', 'https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/');
c('MIT 6.867: Machine Learning', 'Graduate-level machine learning at MIT.', 'aiml', 'https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/');
c('MIT 6.5940: TinyML and Efficient Deep Learning', 'Song Han’s course on model compression and edge deployment.', 'aiml,dev', 'https://efficientml.ai/');
c('MIT 18.06: Linear Algebra', 'Gilbert Strang’s classic linear algebra course.', 'math', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/');
c('MIT 18.065: Matrix Methods in Data Analysis', 'Strang’s modern matrix methods for signal processing and ML.', 'math,aiml', 'https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/');
c('MIT 6.006: Introduction to Algorithms', 'Foundational algorithms course.', 'dev,math', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/');
c('MIT 6.046J: Design and Analysis of Algorithms', 'Sequel to 6.006, tougher and broader.', 'dev,math', 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/');
c('MIT 6.824: Distributed Systems', 'Robert Morris’s legendary distributed systems course — Raft, MapReduce, Spinnaker.', 'dev', 'https://pdos.csail.mit.edu/6.824/');
c('MIT 6.828: Operating System Engineering', 'Build a Unix-like kernel from scratch.', 'dev,exploits', 'https://pdos.csail.mit.edu/6.828/');
c('MIT 6.858: Computer Systems Security', 'Great intro to systems security, threat models, and attacks.', 'exploits,dev', 'https://css.csail.mit.edu/6.858/');
c('MIT 6.5610: Advanced Topics in Cryptography', 'Graduate cryptography lecture notes.', 'crypto', 'http://mit.edu/6.5610/');
c('MIT 6.5620/6.875: Foundations of Cryptography', 'Formal foundations of modern crypto.', 'crypto', 'https://mit6875.org/');
c('MIT 6.S898: Deep Learning', 'Graduate deep learning course.', 'aiml', 'https://ocw.mit.edu/courses/6-s898-deep-learning-fall-2019/');

// ------------- Berkeley / CMU / community -------------
c('UC Berkeley CS188: Intro to AI', 'The Pacman AI projects — classic.', 'aiml', 'https://inst.eecs.berkeley.edu/~cs188/');
c('UC Berkeley CS189: Introduction to Machine Learning', 'Undergrad ML from Berkeley.', 'aiml', 'https://www.eecs189.org/');
c('UC Berkeley CS285: Deep Reinforcement Learning', 'Sergey Levine’s excellent DeepRL lectures.', 'aiml', 'https://rail.eecs.berkeley.edu/deeprlcourse/');
c('UC Berkeley Full Stack Deep Learning', 'Practical guide to building and shipping DL systems.', 'aiml,dev', 'https://fullstackdeeplearning.com/course/2022/');
c('CMU 11-785: Introduction to Deep Learning', 'Bhiksha Raj’s comprehensive DL course.', 'aiml', 'https://deeplearning.cs.cmu.edu/S24/');
c('CMU 10-708: Probabilistic Graphical Models', 'Advanced graphical model theory and inference.', 'aiml,math', 'https://sailinglab.github.io/pgm-spring-2019/');
c('CMU 10-708: Deep Learning Systems', 'Chris De Sa on efficient deep learning at scale.', 'aiml,dev', 'https://dlsys.cs.washington.edu/');
c('University of Michigan EECS 498-007: Deep Learning for Computer Vision', 'Justin Johnson’s cv+dl course.', 'aiml', 'https://web.eecs.umich.edu/~justincj/teaching/eecs498/WI2022/');
c('University of Tübingen: Statistical ML', 'Ulrike von Luxburg’s classical stat ML lectures.', 'aiml,math', 'https://www.tml.cs.uni-tuebingen.de/teaching/2020_statistical_learning/');
c('University of Tübingen: Math for Deep Learning', 'Andreas Geiger on the math you actually need.', 'aiml,math', 'https://uni-tuebingen.de/de/205871');
c('University of Tübingen: Deep Learning', 'Full DL course by Andreas Geiger, with lecture videos.', 'aiml', 'https://uni-tuebingen.de/en/191192');
c('University of Toronto CSC 411: Machine Learning', 'Roger Grosse’s classic ML lecture notes.', 'aiml', 'https://www.cs.toronto.edu/~rgrosse/courses/csc411_f18/');
c('University of Waterloo CS480/680: Introduction to Machine Learning', 'Yaoliang Yu’s course materials.', 'aiml', 'https://cs.uwaterloo.ca/~ppoupart/teaching/cs480-fall17/schedule.html');

// ------------- Kaggle Learn micro-courses -------------
c('Kaggle Learn: Intro to Machine Learning', 'Hands-on notebooks: decision trees to random forests.', 'aiml', 'https://www.kaggle.com/learn/intro-to-machine-learning');
c('Kaggle Learn: Intermediate Machine Learning', 'Missing values, categorical variables, pipelines, xgboost.', 'aiml', 'https://www.kaggle.com/learn/intermediate-machine-learning');
c('Kaggle Learn: Feature Engineering', 'Encoding, target encoding, PCA and mutual information.', 'aiml', 'https://www.kaggle.com/learn/feature-engineering');
c('Kaggle Learn: Data Cleaning', 'Handle missing data, scaling, dates and inconsistent entries.', 'aiml', 'https://www.kaggle.com/learn/data-cleaning');
c('Kaggle Learn: Pandas', 'Pandas essentials for a Kaggle workflow.', 'aiml', 'https://www.kaggle.com/learn/pandas');
c('Kaggle Learn: Python', 'Rapid Python intro focused on data-science idioms.', 'aiml,dev', 'https://www.kaggle.com/learn/python');
c('Kaggle Learn: Intro to SQL', 'SQL for exploratory data analysis on BigQuery datasets.', 'aiml,dev', 'https://www.kaggle.com/learn/intro-to-sql');
c('Kaggle Learn: Advanced SQL', 'JOINs, unions, window functions, and analytical patterns.', 'dev', 'https://www.kaggle.com/learn/advanced-sql');
c('Kaggle Learn: Data Visualization', 'Seaborn walkthrough for storytelling with charts.', 'aiml', 'https://www.kaggle.com/learn/data-visualization');
c('Kaggle Learn: Intro to Deep Learning', 'Keras intro — dense networks and callbacks.', 'aiml', 'https://www.kaggle.com/learn/intro-to-deep-learning');
c('Kaggle Learn: Computer Vision', 'CNNs, transfer learning and Keras data pipelines.', 'aiml', 'https://www.kaggle.com/learn/computer-vision');
c('Kaggle Learn: NLP', 'Text classification and embeddings with spaCy.', 'aiml', 'https://www.kaggle.com/learn/natural-language-processing');
c('Kaggle Learn: Time Series', 'Trend, seasonality and forecasting with ML models.', 'aiml', 'https://www.kaggle.com/learn/time-series');
c('Kaggle Learn: Intro to AI Ethics', 'AI fairness, bias, and stakeholder analysis.', 'aiml', 'https://www.kaggle.com/learn/intro-to-ai-ethics');
c('Kaggle Learn: Machine Learning Explainability', 'Permutation importance, SHAP, partial dependence plots.', 'aiml', 'https://www.kaggle.com/learn/machine-learning-explainability');
c('Kaggle Learn: Intro to Game AI and RL', 'Mini-course on RL for Kaggle simulation environments.', 'aiml,game', 'https://www.kaggle.com/learn/intro-to-game-ai-and-reinforcement-learning');
c('Kaggle Learn: Geospatial Analysis', 'GeoPandas and folium for geospatial ML data.', 'aiml', 'https://www.kaggle.com/learn/geospatial-analysis');

// ------------- Google -------------
c('Google Machine Learning Crash Course', 'Google’s TensorFlow-based intro used to onboard internal engineers.', 'aiml', 'https://developers.google.com/machine-learning/crash-course');
c('Google ML Foundational Courses', 'Cross-references: problem framing, decision trees, clustering.', 'aiml', 'https://developers.google.com/machine-learning/foundational-courses');
c('Google Introduction to Generative AI', 'Concept intro to genAI use cases and lifecycle.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/536');
c('Google Introduction to Large Language Models', 'Micro-course on LLM basics from Cloud Skills Boost.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/539');
c('Google Introduction to Responsible AI', 'Fairness, interpretability, privacy and safety practices.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/554');
c('Google Encoder-Decoder Architecture', 'Micro-course on classic sequence-to-sequence architectures.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/543');
c('Google Attention Mechanism', 'How attention works — the piece that makes transformers tick.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/537');
c('Google Transformer Models and BERT Model', 'From attention to BERT and its variants.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/538');
c('Google Image Generation', 'Diffusion and autoregressive image models.', 'aiml', 'https://www.cloudskillsboost.google/course_templates/541');
c('Google Prompt Design in Vertex AI', 'Prompt-engineering patterns for Gemini/Vertex.', 'aiml,cloud', 'https://www.cloudskillsboost.google/course_templates/976');

// ------------- Microsoft -------------
c('Microsoft AI-900: Azure AI Fundamentals Learn Path', 'Free Microsoft Learn path prepping for AI-900 exam.', 'aiml,cloud', 'https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/');
c('Microsoft AI-102: Azure AI Engineer Learn Path', 'Design and implement Azure AI solutions.', 'aiml,cloud', 'https://learn.microsoft.com/en-us/training/paths/get-started-azure-ai/');
c('Microsoft Generative AI for Beginners', '18-lesson curriculum for builders new to generative AI.', 'aiml', 'https://microsoft.github.io/generative-ai-for-beginners/');
c('Microsoft AI Agents for Beginners', 'Community curriculum for building agentic AI apps.', 'aiml', 'https://microsoft.github.io/ai-agents-for-beginners/');
c('Microsoft ML for Beginners', '12-week ML curriculum aimed at students and career switchers.', 'aiml', 'https://microsoft.github.io/ML-For-Beginners/');
c('Microsoft Data Science for Beginners', '10-week data science curriculum.', 'aiml', 'https://microsoft.github.io/Data-Science-For-Beginners/');
c('Microsoft AI for Beginners', 'Classic 12-week AI curriculum — search, RL, NN, GAN.', 'aiml', 'https://microsoft.github.io/AI-For-Beginners/');
c('Microsoft Web Dev for Beginners', 'Web development curriculum, useful for LLM app builders.', 'dev', 'https://microsoft.github.io/Web-Dev-For-Beginners/');
c('Microsoft IoT for Beginners', '12-week IoT curriculum.', 'iot,dev', 'https://microsoft.github.io/IoT-For-Beginners/');
c('Microsoft Cybersecurity for Beginners', 'Community-driven security curriculum.', 'blue,red', 'https://microsoft.github.io/Security-101/');

// ------------- Anthropic / OpenAI / Google DeepMind -------------
c('Anthropic Prompt Engineering Interactive Tutorial', 'Guided Claude prompting curriculum with editable notebooks.', 'aiml', 'https://github.com/anthropics/prompt-eng-interactive-tutorial');
c('Anthropic Real-World Prompting Course', 'Anthropic’s longer tutorial with production-grade prompting patterns.', 'aiml', 'https://github.com/anthropics/courses');
c('OpenAI Cookbook', 'Recipe library for building with the OpenAI API.', 'aiml', 'https://cookbook.openai.com/');
c('OpenAI Evals: An End-to-End Course', 'Design evals for LLM apps — from grading to red teaming.', 'aiml', 'https://github.com/openai/evals');
c('Google DeepMind x UCL: RL Lecture Series', 'David Silver’s classic Reinforcement Learning lectures.', 'aiml', 'https://www.youtube.com/playlist?list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm');
c('DeepMind: Deep Learning Lecture Series 2020', 'DeepMind researchers on modern DL topics.', 'aiml', 'https://www.youtube.com/playlist?list=PLqYmG7hTraZCDxZ44o4p3N5Anz3lLRVZF');

// ------------- MLOps / Data Engineering Zoomcamps (DataTalksClub) -------------
c('DataTalksClub: MLOps Zoomcamp', 'Free multi-week bootcamp on MLOps end-to-end.', 'aiml,dev', 'https://github.com/DataTalksClub/mlops-zoomcamp');
c('DataTalksClub: Machine Learning Zoomcamp', 'Applied ML with classic algorithms and DL.', 'aiml,dev', 'https://github.com/DataTalksClub/machine-learning-zoomcamp');
c('DataTalksClub: Data Engineering Zoomcamp', 'End-to-end data engineering with dbt, Spark, Airflow, Kafka.', 'dev', 'https://github.com/DataTalksClub/data-engineering-zoomcamp');
c('DataTalksClub: LLM Zoomcamp', 'Free LLM + RAG bootcamp with weekly cohorts.', 'aiml', 'https://github.com/DataTalksClub/llm-zoomcamp');
c('DataTalksClub: Stock Markets Analytics Zoomcamp', 'Analytics on markets data.', 'aiml', 'https://github.com/DataTalksClub/stock-markets-analytics-zoomcamp');

// ------------- Full Stack DL / Made With ML / Chip Huyen -------------
c('Made With ML', 'Goku Mohandas’s design-to-deploy MLOps curriculum.', 'aiml,dev', 'https://madewithml.com/');
c('Full Stack LLM Bootcamp', 'Practical LLM app engineering bootcamp materials.', 'aiml,dev', 'https://fullstackdeeplearning.com/llm-bootcamp/');
c('Chip Huyen: Designing ML Systems Companion', 'Book chapters and reading list for ML systems design.', 'aiml,dev', 'https://huyenchip.com/ml-interviews-book/');
c('Chip Huyen: ML Interviews Book', 'Free book for ML interview prep.', 'aiml', 'https://huyenchip.com/ml-interviews-book/');

// ------------- Practical / LangChain / LlamaIndex -------------
c('LangChain Academy', 'Free short courses direct from the LangChain team.', 'aiml', 'https://academy.langchain.com/');
c('LangChain: Chat LangChain', 'Interactive documentation as a course.', 'aiml', 'https://python.langchain.com/docs/get_started/introduction');
c('LlamaIndex: Learning Path', 'Guided tutorials for building RAG and agentic apps.', 'aiml', 'https://docs.llamaindex.ai/en/stable/getting_started/starter_example/');
c('Pinecone: Learn', 'Vector-database and retrieval fundamentals.', 'aiml', 'https://www.pinecone.io/learn/');
c('Weaviate Academy', 'Vector search bootcamp from Weaviate.', 'aiml', 'https://weaviate.io/developers/academy');
c('Chroma: Getting Started', 'Local-first vector DB — RAG in 20 lines.', 'aiml', 'https://docs.trychroma.com/getting-started');
c('MongoDB Atlas Vector Search Tutorial', 'RAG on Atlas end-to-end.', 'aiml,cloud', 'https://learn.mongodb.com/courses/mongodb-vector-search');
c('Elastic: Search Labs', 'Semantic search, ELSER, and hybrid retrieval tutorials.', 'aiml,cloud', 'https://www.elastic.co/search-labs/tutorials');

// ------------- Free books / long-form -------------
c('Dive Into Deep Learning (d2l.ai)', 'Interactive book with code in PyTorch, MXNet and TF.', 'aiml', 'https://d2l.ai/');
c('Deep Learning Book (Goodfellow, Bengio, Courville)', 'The comprehensive DL textbook, free HTML.', 'aiml', 'https://www.deeplearningbook.org/');
c('Understanding Deep Learning (Simon Prince)', 'Modern DL textbook with figures and code.', 'aiml', 'https://udlbook.github.io/udlbook/');
c('Neural Networks and Deep Learning (Nielsen)', 'The friendly first-principles DL book.', 'aiml', 'http://neuralnetworksanddeeplearning.com/');
c('Mathematics for Machine Learning Book', 'Free textbook, essential math foundations for ML.', 'aiml,math', 'https://mml-book.github.io/');
c('Probabilistic Machine Learning (Murphy)', 'Kevin Murphy’s canonical modern ML textbook, free draft PDFs.', 'aiml,math', 'https://probml.github.io/pml-book/');
c('Speech and Language Processing (Jurafsky & Martin)', 'The NLP textbook.', 'aiml', 'https://web.stanford.edu/~jurafsky/slp3/');
c('Deep Learning Interviews Book (Ganguli & Kalman)', 'Interview problems with detailed solutions.', 'aiml', 'https://github.com/BoltzmannEntropy/interviews.ai');
c('Reinforcement Learning: An Introduction (Sutton & Barto)', 'The RL bible, free PDF.', 'aiml', 'http://incompleteideas.net/book/the-book-2nd.html');
c('Foundations of Reinforcement Learning', 'Emma Brunskill + others’ RL lecture notes.', 'aiml', 'https://web.stanford.edu/class/cs234/CS234Win2019/slides/');
c('Deep Reinforcement Learning Hands-On (open sample)', 'Practical DRL walkthroughs and code.', 'aiml', 'https://github.com/PacktPublishing/Deep-Reinforcement-Learning-Hands-On');
c('Interpretable Machine Learning (Molnar)', 'Free online book on ML interpretability.', 'aiml', 'https://christophm.github.io/interpretable-ml-book/');
c('The Little Book of Deep Learning (Fleuret)', 'Concise DL book (~150 pages) with QR-code figures.', 'aiml', 'https://fleuret.org/francois/lbdl.html');

// ------------- Advanced systems / efficient LLMs -------------
c('Efficient AI Computing (Song Han)', 'MIT course on quantization, pruning, distillation.', 'aiml,dev', 'https://hanlab.mit.edu/courses');
c('Tinygrad Notes', 'Karpathy-style bare-metal deep learning framework study.', 'aiml,dev', 'https://mesozoic-egg.github.io/tinygrad-notes/');
c('PyTorch: Learn the Basics', 'Free official PyTorch tutorial series.', 'aiml,dev', 'https://pytorch.org/tutorials/beginner/basics/intro.html');
c('PyTorch Recipes', 'Bite-sized production PyTorch recipes.', 'aiml,dev', 'https://pytorch.org/tutorials/recipes/recipes_index.html');
c('TensorFlow Guides', 'Official TF guides for research and production.', 'aiml,dev', 'https://www.tensorflow.org/guide');
c('JAX Documentation Tutorials', 'Autograd + XLA framework tutorials.', 'aiml,dev', 'https://jax.readthedocs.io/en/latest/tutorials.html');
c('MLC LLM: Machine Learning Compilation', 'Compile LLMs for GPU/CPU/mobile deployment.', 'aiml,dev', 'https://mlc.ai/mlc-llm/docs/');
c('TVM: Machine Learning Compiler Deep-Dive', 'Deep learning compiler internals.', 'aiml,dev', 'https://tvm.apache.org/docs/tutorial/');
c('NVIDIA Deep Learning Institute (free)', 'Free intro courses on GPU, CUDA and DL.', 'aiml,dev', 'https://www.nvidia.com/en-us/training/');
c('NVIDIA CUDA C++ Programming Guide', 'The primary CUDA reference — deep tutorials.', 'aiml,dev', 'https://docs.nvidia.com/cuda/cuda-c-programming-guide/');
c('AMD ROCm Documentation', 'ROCm developer tutorials.', 'aiml,dev', 'https://rocm.docs.amd.com/');

// ------------- Data science staples -------------
c('IBM Data Science Professional Certificate', 'End-to-end data science: Python, SQL, ML, Capstone.', 'aiml', 'https://www.coursera.org/professional-certificates/ibm-data-science');
c('Harvard CS109: Data Science', 'Classic Harvard data-science course materials.', 'aiml,math', 'https://github.com/cs109/2015');
c('Duke: Statistics with R Specialization', 'Bayes + inference in R, from Duke.', 'aiml,math', 'https://www.coursera.org/specializations/statistics');
c('Statistical Rethinking (McElreath)', 'Free lecture recordings for the Bayesian classic.', 'aiml,math', 'https://xcelab.net/rm/statistical-rethinking/');
c('Introduction to Statistical Learning (ISLR)', 'The ISLR textbook, freely available.', 'aiml,math', 'https://www.statlearning.com/');
c('The Elements of Statistical Learning', 'ESL by Hastie/Tibshirani/Friedman, free PDF.', 'aiml,math', 'https://hastie.su.domains/ElemStatLearn/');
c('Kaggle 30 Days of ML', 'Community bootcamp — daily tasks with Kaggle exercises.', 'aiml', 'https://www.kaggle.com/thirty-days-of-ml');

// ------------- LLM ecosystem / applied builders -------------
c('LLM Bootcamp: Prompt Engineering Guide', 'DAIR.AI prompt-engineering handbook.', 'aiml', 'https://www.promptingguide.ai/');
c('Awesome ChatGPT Prompts', 'Curated library of high-signal prompts for developers.', 'aiml', 'https://github.com/f/awesome-chatgpt-prompts');
c('Awesome LLM Apps', 'Curated tutorials for practical LLM applications.', 'aiml', 'https://github.com/Shubhamsaboo/awesome-llm-apps');
c('Awesome LLMOps', 'Best-in-class MLOps for LLMs curriculum.', 'aiml,dev', 'https://github.com/tensorchord/Awesome-LLMOps');
c('The Novice’s LLM Training Guide', 'Fine-tuning small LLMs on consumer hardware.', 'aiml', 'https://rentry.co/llm-training');
c('Cohere LLM University', 'Free LLM curriculum by Cohere.', 'aiml', 'https://cohere.com/llmu');
c('Nvidia LLM Tutorials', 'Nvidia developer center LLM tutorial series.', 'aiml', 'https://developer.nvidia.com/blog/tag/large-language-models/');
c('MLU-Explain (Amazon)', 'Interactive intuition-first ML explainers.', 'aiml', 'https://mlu-explain.github.io/');
c('Distill.pub', 'Interactive ML research explainers.', 'aiml', 'https://distill.pub/');
c('Papers with Code: Methods', 'Browse ML methods with their reference papers and implementations.', 'aiml', 'https://paperswithcode.com/methods');

// ------------- LLM & Agents — practical builders -------------
c('LlamaIndex Course: Learn how to build a RAG', 'Free RAG bootcamp from the LlamaIndex team.', 'aiml', 'https://docs.llamaindex.ai/en/stable/understanding/');
c('LangChain: Build a Chatbot', 'End-to-end chatbot tutorial with memory and tools.', 'aiml', 'https://python.langchain.com/docs/tutorials/chatbot/');
c('LangChain: Build an Extraction Chain', 'Structured extraction from unstructured text.', 'aiml', 'https://python.langchain.com/docs/tutorials/extraction/');
c('LangChain: Build a Q&A app over your data', 'RAG walkthrough with vector stores and retrievers.', 'aiml', 'https://python.langchain.com/docs/tutorials/rag/');
c('LangChain: Build an Agent', 'Tool-using agent walkthrough with LangGraph.', 'aiml', 'https://python.langchain.com/docs/tutorials/agents/');
c('AutoGPT Documentation Tutorials', 'Set up autonomous agents with AutoGPT.', 'aiml', 'https://docs.agpt.co/');
c('BabyAGI Concept Walkthrough', 'Foundational agent architecture explained.', 'aiml', 'https://github.com/yoheinakajima/babyagi');
c('AutoGen Studio', 'Microsoft AutoGen agentic framework tutorials.', 'aiml', 'https://microsoft.github.io/autogen/');

// ------------- Vision / multimodal / audio -------------
c('OpenAI Sora / Video Generation Concepts', 'Concept overviews and papers on video generation.', 'aiml', 'https://openai.com/sora');
c('Deep Learning for Computer Vision (PyImageSearch)', 'Free classic tutorials for CV with OpenCV.', 'aiml', 'https://pyimagesearch.com/start-here/');
c('PyTorch Vision Tutorials', 'Object detection, segmentation, transfer learning.', 'aiml,dev', 'https://pytorch.org/vision/stable/index.html');
c('Detectron2 Tutorial', 'FAIR’s detection/segmentation platform, hands-on.', 'aiml', 'https://detectron2.readthedocs.io/en/latest/tutorials/');
c('MMDetection Tutorial', 'OpenMMLab’s full detection stack.', 'aiml', 'https://mmdetection.readthedocs.io/');
c('YOLOv8: Getting Started', 'Ultralytics YOLO training and deployment.', 'aiml', 'https://docs.ultralytics.com/');
c('Segment Anything (SAM) Tutorial', 'Meta’s SAM segmentation walkthrough.', 'aiml', 'https://segment-anything.com/');
c('Whisper: Robust Speech Recognition', 'OpenAI Whisper repo with fine-tuning notes.', 'aiml', 'https://github.com/openai/whisper');
c('Bark: Text-to-Audio Generative Model', 'Text-to-audio generation with Bark.', 'aiml', 'https://github.com/suno-ai/bark');

// ------------- Alignment / safety -------------
c('MIRI: Alignment Research Field Guide', 'Curated introduction to alignment research.', 'aiml', 'https://intelligence.org/2018/03/17/mirix-alignment-research-guide/');
c('AI Safety Fundamentals Curriculum', 'BlueDot Impact’s free AI Safety course.', 'aiml', 'https://aisafetyfundamentals.com/');
c('Alignment Forum', 'Curated forum for AI alignment writing.', 'aiml', 'https://www.alignmentforum.org/');
c('Anthropic Responsible Scaling Policy', 'Read as case study on how a frontier lab defines safety commitments.', 'aiml', 'https://www.anthropic.com/news/anthropics-responsible-scaling-policy');

// ------------- Deep Learning courses on YouTube (selected) -------------
c('Stanford Online: Machine Learning Full Course (YouTube)', 'Extended lectures for a full ML overview.', 'aiml', 'https://www.youtube.com/playlist?list=PLoROMvodv4rNyWOpJg_Yh4NSqI4Z4vOYy');
c('Yann LeCun & Alfredo Canziani: NYU Deep Learning', 'One of the best modern DL lecture series.', 'aiml', 'https://cds.nyu.edu/deep-learning/');
c('MIT: Introduction to Deep Learning Basics (YouTube)', 'Companion to 6.S191 with hands-on labs.', 'aiml', 'https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI');
c('University of Amsterdam: Deep Learning Course', 'UvA DL notebooks and lectures.', 'aiml', 'https://uvadlc-notebooks.readthedocs.io/');
c('Sebastian Raschka: Statistics and Machine Learning', 'Rigorous, code-forward tutorials.', 'aiml,math', 'https://sebastianraschka.com/pdf/lecture-notes/');
c('Sebastian Raschka: Introduction to Machine Learning and Deep Learning', 'Full lecture series with slides and videos.', 'aiml', 'https://sebastianraschka.com/blog/2021/dl-course.html');
c('Two Minute Papers', 'Digestible research summaries; useful reading list.', 'aiml', 'https://www.youtube.com/@TwoMinutePapers');
c('Yannic Kilcher', 'Paper-a-week AI research breakdowns.', 'aiml', 'https://www.youtube.com/@YannicKilcher');
c('AI Coffee Break with Letitia', 'Concise breakdowns of NLP/vision papers.', 'aiml', 'https://www.youtube.com/@AICoffeeBreak');

// ------------- Specific "Zero to Hero" hand-picked deep dives -------------
c('The Illustrated Transformer (Alammar)', 'Visual walkthrough of the transformer architecture.', 'aiml', 'https://jalammar.github.io/illustrated-transformer/');
c('The Illustrated GPT-2', 'Alammar’s companion for GPT-family models.', 'aiml', 'https://jalammar.github.io/illustrated-gpt2/');
c('The Illustrated Stable Diffusion', 'Same visual style, applied to diffusion.', 'aiml', 'https://jalammar.github.io/illustrated-stable-diffusion/');
c('The Annotated Transformer (Harvard)', 'A PyTorch implementation of "Attention is All You Need".', 'aiml,dev', 'http://nlp.seas.harvard.edu/annotated-transformer/');
c('The Annotated Diffusion Model', 'Line-by-line diffusion model implementation.', 'aiml,dev', 'https://huggingface.co/blog/annotated-diffusion');
c('nanoGPT (Karpathy)', 'Karpathy’s minimal GPT training repo with README as guide.', 'aiml,dev', 'https://github.com/karpathy/nanoGPT');
c('llm.c (Karpathy)', 'GPT-2 training in pure C, with tutorial README.', 'aiml,dev', 'https://github.com/karpathy/llm.c');
c('MinBPE (Karpathy)', 'Minimal byte-pair encoding tokenizer implementation.', 'aiml,dev', 'https://github.com/karpathy/minbpe');
c('MicroGrad (Karpathy)', 'Tiny scalar autograd engine and neural net library.', 'aiml,dev', 'https://github.com/karpathy/micrograd');
c('MakeMore (Karpathy)', 'Character-level language modeling from scratch.', 'aiml,dev', 'https://github.com/karpathy/makemore');

// ------------- Practical deep dives / niche -------------
c('Distributed Training with PyTorch', 'DDP, FSDP and megatron-style tensor parallel intro.', 'aiml,dev', 'https://pytorch.org/tutorials/intermediate/ddp_tutorial.html');
c('Efficiently Serving LLMs (vLLM Docs)', 'Continuous batching, paged attention deep-dive.', 'aiml,dev', 'https://docs.vllm.ai/en/latest/');
c('Flash Attention 2 Paper Walkthrough', 'Read + code walk of memory-efficient attention.', 'aiml,dev', 'https://github.com/Dao-AILab/flash-attention');
c('TensorRT-LLM Docs', 'Nvidia TensorRT-LLM tutorial-style examples.', 'aiml,dev', 'https://nvidia.github.io/TensorRT-LLM/');
c('Triton Language Tutorials (OpenAI)', 'Write GPU kernels in Python with Triton.', 'aiml,dev', 'https://triton-lang.org/main/getting-started/tutorials/index.html');

// ------------- Time series, tabular, forecasting -------------
c('Forecasting: Principles and Practice (Hyndman)', 'The classic free textbook for forecasting.', 'aiml,math', 'https://otexts.com/fpp3/');
c('Nixtla Time Series Bootcamp', 'Modern time-series forecasting courses.', 'aiml', 'https://nixtla.mintlify.app/');
c('Prophet Forecasting Guide', 'Meta’s prophet quickstart and tutorials.', 'aiml', 'https://facebook.github.io/prophet/docs/quick_start.html');
c('sktime Learning', 'A unified framework for time-series tasks.', 'aiml', 'https://www.sktime.net/en/latest/get_started.html');

// ------------- MLOps ecosystem -------------
c('MLflow Docs Getting Started', 'Track experiments, package models, deploy.', 'aiml,dev', 'https://mlflow.org/docs/latest/index.html');
c('DVC Tutorials', 'Data Version Control for reproducible ML.', 'aiml,dev', 'https://dvc.org/doc/start');
c('Weights & Biases Docs', 'Experiment tracking + sweeps + reports.', 'aiml,dev', 'https://docs.wandb.ai/');
c('BentoML Getting Started', 'Model serving and packaging.', 'aiml,dev', 'https://docs.bentoml.com/');
c('Feast Tutorial', 'Open-source feature store hands-on.', 'aiml,dev', 'https://docs.feast.dev/getting-started/quickstart');
c('Kubeflow Tutorials', 'ML on Kubernetes with Kubeflow.', 'aiml,dev,cloud', 'https://www.kubeflow.org/docs/');
c('Ray Train / Ray Tune Tutorials', 'Distributed training and tuning with Ray.', 'aiml,dev', 'https://docs.ray.io/en/latest/train/train.html');
c('Determined AI Tutorials', 'HP search and distributed training platform.', 'aiml,dev', 'https://docs.determined.ai/latest/tutorials/index.html');

// ------------- Speech, audio, TTS -------------
c('Coqui TTS Tutorial', 'Text-to-speech training with Coqui.', 'aiml', 'https://tts.readthedocs.io/en/latest/');
c('SpeechBrain Tutorials', 'End-to-end speech toolkit tutorials.', 'aiml', 'https://speechbrain.readthedocs.io/en/latest/');
c('Whisper Fine-Tuning Guide', 'HF blog walkthrough of Whisper fine-tuning.', 'aiml', 'https://huggingface.co/blog/fine-tune-whisper');
c('AudioCraft (Meta) Documentation', 'MusicGen, EnCodec — training and inference.', 'aiml', 'https://audiocraft.metademolab.com/');

// ------------- Robotics / RL simulation -------------
c('OpenAI Gymnasium Docs', 'RL environments and tutorials.', 'aiml', 'https://gymnasium.farama.org/');
c('PettingZoo Docs', 'Multi-agent RL environments.', 'aiml', 'https://pettingzoo.farama.org/');
c('Isaac Sim / Isaac Lab Tutorials', 'Nvidia’s robotics simulation platform.', 'aiml', 'https://isaac-sim.github.io/IsaacLab/');
c('MuJoCo Documentation', 'Physics simulation for RL research.', 'aiml', 'https://mujoco.readthedocs.io/en/stable/overview.html');
c('CleanRL', 'Reference PPO/SAC/DQN implementations with training notes.', 'aiml', 'https://docs.cleanrl.dev/');
c('Stable Baselines 3 Tutorials', 'Popular RL algorithm library with examples.', 'aiml', 'https://stable-baselines3.readthedocs.io/en/master/');

};
