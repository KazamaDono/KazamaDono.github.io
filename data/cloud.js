// Cloud (AWS / Azure / GCP), Kubernetes, HashiCorp, containers
module.exports = function(c) {

// ------------- AWS -------------
c('AWS Skill Builder: Free Digital Training', 'The AWS free training portal — hundreds of courses.', 'cloud', 'https://explore.skillbuilder.aws/');
c('AWS Cloud Practitioner Essentials', 'Foundational free course toward the CLF-C02 exam.', 'cloud', 'https://explore.skillbuilder.aws/learn/course/134/aws-cloud-practitioner-essentials');
c('AWS Cloud Quest: Cloud Practitioner', 'Gamified role-based learning.', 'cloud', 'https://aws.amazon.com/training/digital/aws-cloud-quest/');
c('AWS Well-Architected Framework', 'The canonical framework for building in AWS.', 'cloud,dev', 'https://aws.amazon.com/architecture/well-architected/');
c('AWS Solutions Architect Learning Plan', 'Free digital plan targeting SAA-C03.', 'cloud', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/82/solutions-architect-learning-plan');
c('AWS DevOps Learning Plan', 'Free digital plan for DevOps Engineer role.', 'cloud,dev', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/85/devops-engineer-learning-plan');
c('AWS Data Analytics Learning Plan', 'Free plan focused on analytics services.', 'cloud', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/83/data-analytics-learning-plan');
c('AWS Security Learning Plan', 'Security-focused digital plan.', 'cloud,blue', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/89/security-learning-plan');
c('AWS Machine Learning Learning Plan', 'Foundation plan for AWS ML services.', 'cloud,aiml', 'https://explore.skillbuilder.aws/learn/public/learning_plan/view/87/machine-learning-learning-plan');
c('AWS Solutions Architect Associate Study Guide', 'Community study path aggregating free AWS courses.', 'cloud', 'https://www.freecodecamp.org/news/pass-the-aws-solutions-architect-associate/');
c('AWS Serverless Land', 'Patterns and workshops for serverless.', 'cloud,dev', 'https://serverlessland.com/');
c('AWS Workshops', 'Massive catalog of self-paced hands-on workshops.', 'cloud,dev', 'https://workshops.aws/');
c('AWS Ramp-Up Guides', 'Structured PDF learning ramp-up plans by role.', 'cloud', 'https://aws.amazon.com/training/ramp-up-guides/');
c('AWS Whitepapers', 'The canonical library — architecture, security, cost.', 'cloud', 'https://aws.amazon.com/whitepapers/');
c('AWS Builders Library', 'Amazon’s own architecture write-ups.', 'cloud,dev', 'https://aws.amazon.com/builders-library/');

// ------------- Azure / Microsoft -------------
c('Microsoft Learn: Azure Fundamentals (AZ-900)', 'Free MS Learn path to AZ-900 exam.', 'cloud', 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/');
c('Microsoft Learn: Azure Administrator (AZ-104)', 'Free training path for AZ-104.', 'cloud', 'https://learn.microsoft.com/en-us/training/paths/az-104-administrator-prerequisites/');
c('Microsoft Learn: Azure Developer (AZ-204)', 'Developer-focused Azure path.', 'cloud,dev', 'https://learn.microsoft.com/en-us/training/paths/az-204-develop-solutions-azure/');
c('Microsoft Learn: Azure Solutions Architect Expert (AZ-305)', 'Architect-level free training path.', 'cloud', 'https://learn.microsoft.com/en-us/training/paths/design-identity-governance-monitor-solutions/');
c('Microsoft Learn: Azure Security Engineer (AZ-500)', 'Security-focused free training path.', 'cloud,blue', 'https://learn.microsoft.com/en-us/certifications/azure-security-engineer/');
c('Microsoft Learn: Azure Data Fundamentals (DP-900)', 'Free foundational data path.', 'cloud', 'https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/');
c('Microsoft Learn: Azure Data Engineer (DP-203)', 'Data engineering on Azure.', 'cloud', 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/');
c('Microsoft Learn: Azure AI Engineer (AI-102)', 'Build AI apps on Azure.', 'cloud,aiml', 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/');
c('Microsoft Learn: Microsoft 365 Fundamentals (MS-900)', 'M365 fundamentals path.', 'cloud', 'https://learn.microsoft.com/en-us/certifications/m365-fundamentals/');
c('Microsoft Learn: Security, Compliance, Identity (SC-900)', 'Foundational Microsoft security path.', 'cloud,blue', 'https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/');
c('Microsoft Learn: Cybersecurity Analyst (SC-200)', 'Sentinel + Defender operational training.', 'cloud,blue', 'https://learn.microsoft.com/en-us/certifications/security-operations-analyst/');
c('Microsoft Learn: Information Protection (SC-400)', 'Data protection and governance.', 'cloud,blue', 'https://learn.microsoft.com/en-us/certifications/information-protection-administrator/');
c('Microsoft Learn: Identity and Access Admin (SC-300)', 'Entra ID (Azure AD) admin training.', 'cloud,blue', 'https://learn.microsoft.com/en-us/certifications/identity-and-access-administrator/');
c('Microsoft Learn Catalog', 'Search the full free-training catalog.', 'cloud', 'https://learn.microsoft.com/en-us/training/');
c('Microsoft Cloud Adoption Framework', 'Governance + operational patterns for Azure.', 'cloud', 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/');
c('Microsoft Well-Architected Framework', 'Azure’s equivalent of AWS Well-Architected.', 'cloud', 'https://learn.microsoft.com/en-us/azure/well-architected/');

// ------------- GCP -------------
c('Google Cloud Skills Boost: Free Learning', 'Google Cloud’s free tier training platform.', 'cloud', 'https://www.cloudskillsboost.google/');
c('Google Cloud: Digital Cloud Leader (learning path)', 'Foundation for Cloud Digital Leader.', 'cloud', 'https://www.cloudskillsboost.google/paths/9');
c('Google Cloud: Associate Cloud Engineer Path', 'Free study path for the ACE cert.', 'cloud', 'https://www.cloudskillsboost.google/paths/11');
c('Google Cloud: Professional Cloud Architect Path', 'Free study path for the PCA cert.', 'cloud', 'https://www.cloudskillsboost.google/paths/12');
c('Google Cloud: Data Engineer Path', 'BigQuery, Dataflow, Dataproc etc.', 'cloud', 'https://www.cloudskillsboost.google/paths/16');
c('Google Cloud: Cybersecurity Learning Path', 'Free security curriculum.', 'cloud,blue', 'https://www.cloudskillsboost.google/paths/13');
c('Google Cloud: DevOps Engineer Path', 'CD, SRE and reliability on GCP.', 'cloud,dev', 'https://www.cloudskillsboost.google/paths/20');
c('Google Cloud: Generative AI Learning Path', 'Vertex AI and Gemini training.', 'cloud,aiml', 'https://www.cloudskillsboost.google/paths/118');
c('Google Cloud: Machine Learning Engineer Path', 'End-to-end ML engineer path.', 'cloud,aiml', 'https://www.cloudskillsboost.google/paths/17');
c('Google Cloud Architecture Framework', 'GCP-specific design pillars.', 'cloud', 'https://cloud.google.com/architecture/framework');

// ------------- Kubernetes -------------
c('Kubernetes: Learn (official)', 'The interactive tutorial from k8s.io.', 'cloud,dev', 'https://kubernetes.io/docs/tutorials/');
c('CNCF Kubernetes Course (LFS158)', 'Free Kubernetes fundamentals on edX / Linux Foundation.', 'cloud,dev', 'https://training.linuxfoundation.org/training/introduction-to-kubernetes/');
c('Kubernetes The Hard Way (Kelsey Hightower)', 'Bootstrap k8s from scratch.', 'cloud,dev', 'https://github.com/kelseyhightower/kubernetes-the-hard-way');
c('KodeKloud Free Playgrounds', 'Hands-on scenario playgrounds.', 'cloud,dev', 'https://kodekloud.com/pages/free-labs');
c('KillerCoda: Kubernetes Sandboxes', 'Free k8s sandboxes for practice.', 'cloud,dev', 'https://killercoda.com/');
c('CNCF CKA Curriculum', 'Learn what CKA tests, section by section.', 'cloud,dev', 'https://github.com/cncf/curriculum');
c('CKAD Study Guide', 'Community CKAD prep material.', 'cloud,dev', 'https://github.com/dgkanatsios/CKAD-exercises');
c('Kubernetes Autoscaling Guide', 'Deep-dive into HPA/VPA/CA.', 'cloud,dev', 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/');
c('Learn Helm', 'Templating + package management for k8s.', 'cloud,dev', 'https://helm.sh/docs/');
c('Kustomize Docs', 'Native k8s config customization.', 'cloud,dev', 'https://kubectl.docs.kubernetes.io/references/kustomize/');
c('ArgoCD Getting Started', 'Declarative continuous delivery for Kubernetes.', 'cloud,dev', 'https://argo-cd.readthedocs.io/en/stable/getting_started/');
c('FluxCD Guides', 'GitOps for Kubernetes.', 'cloud,dev', 'https://fluxcd.io/flux/guides/');
c('Cert-Manager Tutorials', 'Automated cert issuance on Kubernetes.', 'cloud,dev', 'https://cert-manager.io/docs/tutorials/');
c('Ingress-NGINX Docs', 'The most-deployed k8s ingress controller.', 'cloud,dev', 'https://kubernetes.github.io/ingress-nginx/');

// ------------- Service mesh / observability -------------
c('Istio Tutorials', 'Traffic management, security and observability with Istio.', 'cloud,dev', 'https://istio.io/latest/docs/setup/getting-started/');
c('Linkerd Getting Started', 'Ultralight service mesh docs.', 'cloud,dev', 'https://linkerd.io/2/getting-started/');
c('Cilium Docs', 'eBPF-powered networking + security.', 'cloud,dev', 'https://docs.cilium.io/en/stable/');
c('OpenTelemetry Docs', 'Vendor-neutral telemetry standard tutorials.', 'cloud,dev', 'https://opentelemetry.io/docs/');
c('Grafana Fundamentals', 'Free tutorial + docs on Grafana visualization.', 'cloud,dev', 'https://grafana.com/tutorials/');
c('Prometheus Docs', 'Metrics collection tutorials.', 'cloud,dev', 'https://prometheus.io/docs/');
c('Loki Docs', 'Log aggregation companion to Prometheus.', 'cloud,dev', 'https://grafana.com/docs/loki/latest/');
c('Tempo Docs', 'Distributed tracing backend.', 'cloud,dev', 'https://grafana.com/docs/tempo/latest/');
c('Datadog Learning Center', 'Free content for Datadog usage.', 'cloud,dev', 'https://learn.datadoghq.com/');

// ------------- HashiCorp -------------
c('HashiCorp Learn (Developer)', 'Free curriculum across HashiCorp tools.', 'cloud,dev', 'https://developer.hashicorp.com/tutorials');
c('Terraform Fundamentals', 'The get-started path for Terraform.', 'cloud,dev', 'https://developer.hashicorp.com/terraform/tutorials/certification-associate-tutorials');
c('Terraform Associate Certification Prep', 'Free study path for TF-Associate.', 'cloud,dev', 'https://developer.hashicorp.com/terraform/tutorials/certification-associate-tutorials');
c('Vault Fundamentals', 'Secrets management with Vault.', 'cloud,dev', 'https://developer.hashicorp.com/vault/tutorials/get-started');
c('Consul Fundamentals', 'Service discovery + mesh.', 'cloud,dev', 'https://developer.hashicorp.com/consul/tutorials/get-started');
c('Nomad Fundamentals', 'Simple workload orchestrator.', 'cloud,dev', 'https://developer.hashicorp.com/nomad/tutorials/get-started');
c('Packer Fundamentals', 'Immutable image builds.', 'cloud,dev', 'https://developer.hashicorp.com/packer/tutorials');
c('Boundary Fundamentals', 'Modern access management.', 'cloud,dev', 'https://developer.hashicorp.com/boundary/tutorials');

// ------------- Docker / Podman / OCI -------------
c('Docker Getting Started', 'Official Docker tutorial for beginners.', 'cloud,dev', 'https://docs.docker.com/get-started/');
c('Docker Best Practices for Writing Dockerfiles', 'Canonical advice from Docker.', 'cloud,dev', 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/');
c('Docker Skills for Developers (Docker Learning Center)', 'Free interactive Docker training.', 'cloud,dev', 'https://www.docker.com/blog/tag/docker-training/');
c('Podman Tutorials', 'Rootless container engine tutorials.', 'cloud,dev', 'https://docs.podman.io/en/latest/Tutorials.html');
c('BuildKit Docs', 'Advanced Docker build engine.', 'cloud,dev', 'https://docs.docker.com/build/buildkit/');
c('OCI Image Spec', 'Standard container image spec — worth reading.', 'cloud,dev', 'https://github.com/opencontainers/image-spec');

// ------------- Serverless / Edge -------------
c('AWS Lambda Getting Started', 'Deploy first serverless function on AWS.', 'cloud,dev', 'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html');
c('Serverless Framework Docs', 'Deploy serverless apps to multiple clouds.', 'cloud,dev', 'https://www.serverless.com/framework/docs');
c('Cloudflare Workers Learning Path', 'Edge compute tutorials.', 'cloud,dev', 'https://developers.cloudflare.com/workers/');
c('Cloudflare Pages Docs', 'Static + functions edge platform.', 'cloud,dev', 'https://developers.cloudflare.com/pages/');
c('Vercel Documentation', 'Deployments + edge functions.', 'cloud,dev', 'https://vercel.com/docs');
c('Netlify Documentation', 'Modern static + serverless hosting.', 'cloud,dev', 'https://docs.netlify.com/');
c('Fly.io Docs', 'Global edge deployment platform.', 'cloud,dev', 'https://fly.io/docs/');

// ------------- Cloud Security -------------
c('AWS Security Fundamentals', 'Free AWS security-first course.', 'cloud,blue', 'https://explore.skillbuilder.aws/learn/course/44/aws-security-fundamentals-second-edition');
c('AWS re/Start Program Content', 'Free entry-level cloud + IT curriculum.', 'cloud', 'https://aws.amazon.com/training/restart/');
c('CIS AWS Foundations Benchmark', 'Free CIS hardening for AWS.', 'cloud,blue', 'https://www.cisecurity.org/benchmark/amazon_web_services');
c('CIS Azure Foundations Benchmark', 'Free CIS hardening for Azure.', 'cloud,blue', 'https://www.cisecurity.org/benchmark/azure');
c('CIS GCP Foundations Benchmark', 'Free CIS hardening for GCP.', 'cloud,blue', 'https://www.cisecurity.org/benchmark/google');
c('AWS IAM Deep Dive Workshop', 'Understand AWS IAM through a hands-on workshop.', 'cloud,blue', 'https://catalog.workshops.aws/iam-suite/en-US');
c('AWS Well-Architected Security Pillar', 'Deep guidance on securing AWS.', 'cloud,blue', 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html');
c('Amazon Detective Workshops', 'Investigate AWS incidents with Detective.', 'cloud,blue', 'https://catalog.workshops.aws/aws-detective/en-US');
c('Amazon GuardDuty Documentation', 'Threat detection service tutorials.', 'cloud,blue', 'https://docs.aws.amazon.com/guardduty/');
c('Amazon Security Hub Docs', 'Centralized cloud security posture management.', 'cloud,blue', 'https://docs.aws.amazon.com/securityhub/');
c('Kubernetes Security Best Practices', 'Kubernetes.io hardening guide.', 'cloud,blue', 'https://kubernetes.io/docs/concepts/security/');

// ------------- Cost / FinOps -------------
c('FinOps Foundation Free Certification Prep', 'Free intro to FinOps.', 'cloud', 'https://www.finops.org/introduction/what-is-finops/');
c('AWS Cost Optimization Playbook', 'Cost optimization patterns from AWS.', 'cloud', 'https://aws.amazon.com/aws-cost-management/aws-cost-optimization/');
c('Azure Cost Management Best Practices', 'MS docs on cost governance.', 'cloud', 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-best-practices');
c('GCP Cost Management Learning', 'Cost tools + billing in GCP.', 'cloud', 'https://cloud.google.com/cost-management');

};
