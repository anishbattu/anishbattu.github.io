/* ---------------------------------------------------
   Content data — edit this to update the site
--------------------------------------------------- */
const SKILL_GROUPS = [
  {
    title: 'AWS & Cloud',
    tags: [
      ['lambda', 'Lambda'], ['api-gateway', 'API Gateway'], ['step-functions', 'Step Functions'],
      ['sqs', 'SQS'], ['sns', 'SNS'], ['eventbridge', 'EventBridge'], ['s3', 'S3'],
      ['glue', 'Glue'], ['athena', 'Athena'], ['sagemaker', 'SageMaker'],
      ['cloudwatch', 'CloudWatch'], ['cloudtrail', 'CloudTrail'], ['cdk', 'CDK (Java)'],
      ['cloudformation', 'CloudFormation'], ['iam', 'IAM'], ['mtls', 'mTLS']
    ]
  },
  {
    title: 'Languages',
    tags: [['java', 'Java'], ['sql', 'SQL / PL-SQL'], ['javascript', 'JavaScript'], ['typescript', 'TypeScript']]
  },
  {
    title: 'Frontend',
    tags: [['react', 'ReactJS'], ['jsp', 'JSP']]
  },
  {
    title: 'Backend frameworks',
    tags: [['spring', 'Spring / Spring MVC'], ['struts', 'Struts']]
  },
  {
    title: 'Data & persistence',
    tags: [['hibernate', 'Hibernate'], ['jdbc', 'JDBC'], ['oracle', 'Oracle'], ['sql-server', 'SQL Server'], ['mysql', 'MySQL'], ['etl', 'ETL pipelines']]
  },
  {
    title: 'DevOps & CI/CD',
    tags: [['jenkins', 'Jenkins'], ['github-actions', 'GitHub Actions'], ['maven', 'Maven']]
  },
  {
    title: 'Security',
    tags: [['jwt', 'JWT authorizers']]
  },
  {
    title: 'Testing',
    tags: [['junit', 'JUnit']]
  }
];

const EXPERIENCE = [
  {
    client: 'Auto-Owners Insurance',
    role: 'Software Developer',
    dates: 'Aug 2025 — Present',
    bullets: [
      { text: 'Designed and built a serverless AWS platform in Java for API delivery and data ingestion, contributing core Lambda services as part of a multi-engineer effort that replaced a legacy processing workflow.', tags: ['java', 'lambda'] },
      { text: 'Migrated a set of legacy services to AWS Lambda across several planned cutover windows with minimal production disruption.', tags: ['lambda'] },
      { text: 'Engineered reusable AWS CDK (Java) constructs for a shared API Gateway, simplifying new-service onboarding for other engineering teams.', tags: ['cdk', 'api-gateway', 'java'] },
      { text: "Rolled out JWT authorizers for public endpoints and IAM-based authorization for internal endpoints, standardizing access control across the shared gateway's Lambda-backed APIs.", tags: ['jwt', 'iam', 'lambda'] },
      { text: 'Delivered the GIC imagery cache service (Java Lambda + S3), diagnosing and resolving a binary-response/Content-Length integrity defect causing corrupted tile delivery.', tags: ['lambda', 's3'] },
      { text: 'Owned the GeoSync ETL pipeline end-to-end — watermarking, retry logic, and time-window splitting guarantee duplicate-free re-runs on failed data pulls.', tags: ['etl'] },
      { text: 'Established signed-URL delivery via S3 Presigner and idempotent SQL Server loading over JDBC/Hibernate.', tags: ['s3', 'jdbc', 'hibernate', 'sql-server'] },
      { text: 'Instrumented CloudWatch/EMF security metrics and EventBridge + CloudTrail alerting to flag unauthorized gateway configuration changes quickly.', tags: ['cloudwatch', 'eventbridge', 'cloudtrail'] },
      { text: 'Managed persistent S3 resources supporting cache storage and mTLS certificate assets across test, preprod, and production environments.', tags: ['s3', 'mtls'] },
      { text: 'Tuned Lambda memory, timeout, and cold-start settings on latency-sensitive tile-delivery endpoints.', tags: ['lambda'] }
    ]
  },
  {
    client: 'Intuit',
    role: 'Software Developer',
    dates: 'Sep 2024 — Jul 2025',
    bullets: [
      { text: 'Built independently deployable microservices on AWS Lambda for discrete steps of the client onboarding process.', tags: ['lambda', 'java'] },
      { text: 'Decoupled service dependencies with SQS for queuing and SNS for pub-sub notifications, improving fault isolation.', tags: ['sqs', 'sns'] },
      { text: 'Orchestrated multi-step onboarding in AWS Step Functions with built-in retry and error handling.', tags: ['step-functions'] },
      { text: 'Assembled ETL pipelines in AWS Glue and queried the results via Athena for ad-hoc analytics access.', tags: ['glue', 'athena', 'etl'] },
      { text: 'Integrated onboarding workflows with AWS SageMaker endpoints for risk-scoring and fraud-detection.', tags: ['sagemaker'] },
      { text: 'Automated environment provisioning with CDK and CloudFormation, simplifying new-environment setup.', tags: ['cdk', 'cloudformation'] },
      { text: 'Built CI/CD pipelines with Jenkins, GitHub Actions, and CodePipeline to streamline deployments.', tags: ['jenkins', 'github-actions'] },
      { text: 'Crafted onboarding status UIs in ReactJS/TypeScript with the supporting RESTful APIs.', tags: ['react', 'typescript'] },
      { text: 'Optimized Athena queries against large S3 datasets to improve runtime for analytics consumers.', tags: ['athena', 's3'] }
    ]
  },
  {
    client: 'Citibank',
    role: 'Java Developer',
    dates: 'Oct 2021 — Jul 2024',
    bullets: [
      { text: 'Delivered core internet-banking screens — account overview, transaction history, portfolio holdings — in JSP, HTML, and JavaScript.', tags: ['jsp', 'javascript'] },
      { text: 'Built a wealth-planning module summarizing customer holdings across trading, liquid assets, and long-term investments.', tags: ['java'] },
      { text: 'Applied the Struts framework for navigation, adding server-side validation with the Struts Validator Framework.', tags: ['struts'] },
      { text: 'Architected a configurable preferences module reused across several country-specific banking sites through configuration, not code changes.', tags: ['java'] },
      { text: 'Migrated portions of the site from a legacy in-house framework to the team\u2019s Struts-based architecture, standardizing shared code across business lines.', tags: ['struts'] },
      { text: 'Wrote SQL and PL/SQL against Oracle, mapping Java domain objects to tables with Hibernate.', tags: ['oracle', 'sql', 'hibernate'] },
      { text: 'Provided JUnit coverage for new features and defects surfaced during QA cycles.', tags: ['junit'] }
    ]
  },
  {
    client: 'Tata Consultancy Services (TCS)',
    role: 'Java Developer',
    dates: 'Jan 2020 — Sep 2021',
    bullets: [
      { text: 'Developed Web APIs using Java 8/J2EE, JSP, Servlets, JDBC, Spring, SOAP, and REST for enterprise client applications.', tags: ['java', 'jsp', 'spring', 'jdbc'] },
      { text: 'Supported and maintained existing projects, diagnosing production issues and delivering fixes in line with SLAs.', tags: ['java'] },
      { text: 'Developed JDBC transactions through Spring JDBC Template and built single-page application views backed by REST services.', tags: ['jdbc', 'spring'] },
      { text: 'Configured Spring and Maven for new project setups, using Hibernate as the ORM layer against SQL Server.', tags: ['spring', 'maven', 'hibernate', 'sql-server'] },
      { text: 'Built Hibernate DAO classes to retrieve and save data through Spring manager classes, working against a MySQL database.', tags: ['hibernate', 'spring', 'mysql'] },
      { text: 'Designed and implemented XML/WSDL interfaces to expose services to both Java and non-Java client applications.', tags: ['java'] }
    ]
  },
  {
    client: 'ITC Infotech',
    role: 'Software Engineer',
    dates: 'Jan 2018 — Dec 2019',
    bullets: [
      { text: 'Developed application modules using Core Java, J2EE, Spring MVC, Hibernate, JSP, and Servlets for internal business applications.', tags: ['java', 'spring', 'hibernate', 'jsp'] },
      { text: 'Developed Spring configuration files and used annotations to auto-wire Java components across the service layer.', tags: ['spring'] },
      { text: 'Implemented the business/persistence layer using Hibernate with Spring DAO, building ORM mapping files and POJO classes.', tags: ['hibernate', 'spring'] },
      { text: 'Designed and developed UI screens using JSP, Servlets, HTML, CSS, and JavaScript, deploying builds on Apache Tomcat.', tags: ['jsp', 'javascript'] },
      { text: 'Built and consumed SOAP and REST web services to integrate the application with downstream internal systems.', tags: ['java'] },
      { text: 'Wrote SQL queries and stored procedures against an Oracle/MySQL database to support data retrieval and updates.', tags: ['oracle', 'sql', 'mysql'] },
      { text: 'Wrote unit tests using JUnit and performed sanity testing to catch defects before QA handoff.', tags: ['junit'] }
    ]
  }
];

const TYPE_TEXT = "cat role.txt";

/* ---------------------------------------------------
   Render
--------------------------------------------------- */
function renderTagGroups() {
  const root = document.getElementById('tag-groups');
  SKILL_GROUPS.forEach(group => {
    const wrap = document.createElement('div');
    const title = document.createElement('p');
    title.className = 'tag-group-title';
    title.textContent = group.title;
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.className = 'tag-row';
    group.tags.forEach(([slug, label]) => {
      const btn = document.createElement('button');
      btn.className = 'skill-tag';
      btn.type = 'button';
      btn.dataset.tag = slug;
      btn.textContent = label;
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', () => toggleTag(slug, btn));
      row.appendChild(btn);
    });
    wrap.appendChild(row);
    root.appendChild(wrap);
  });
}

function renderLog() {
  const root = document.getElementById('deploy-log');
  EXPERIENCE.forEach((job, i) => {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    if (i === 0) entry.classList.add('open');

    const head = document.createElement('button');
    head.className = 'log-head';
    head.type = 'button';
    head.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
    head.innerHTML = `
      <span class="log-status" aria-hidden="true"></span>
      <span class="log-head-text">
        <span class="log-client">${job.client}</span><br>
        <span class="log-role">${job.role}</span>
      </span>
      <span class="log-dates">${job.dates}</span>
      <span class="log-chevron" aria-hidden="true">›</span>
    `;
    head.addEventListener('click', () => {
      const isOpen = entry.classList.toggle('open');
      head.setAttribute('aria-expanded', String(isOpen));
    });

    const body = document.createElement('div');
    body.className = 'log-body';
    const bodyInner = document.createElement('div');
    bodyInner.className = 'log-body-inner';
    const ul = document.createElement('ul');
    ul.className = 'log-bullets';
    job.bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b.text;
      li.dataset.tags = b.tags.join(',');
      ul.appendChild(li);
    });
    bodyInner.appendChild(ul);
    body.appendChild(bodyInner);

    entry.appendChild(head);
    entry.appendChild(body);
    root.appendChild(entry);
  });
}

/* ---------------------------------------------------
   Skill trace filter
--------------------------------------------------- */
let activeTag = null;

function toggleTag(slug, btn) {
  const wasActive = activeTag === slug;
  document.querySelectorAll('.skill-tag').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-pressed', 'false');
  });

  activeTag = wasActive ? null : slug;
  if (activeTag) {
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  }
  applyFilter();
}

function applyFilter() {
  const entries = document.querySelectorAll('.log-entry');
  entries.forEach(entry => {
    const items = entry.querySelectorAll('.log-bullets li');
    let anyMatch = false;
    items.forEach(li => {
      const tags = (li.dataset.tags || '').split(',');
      if (!activeTag) {
        li.classList.remove('dimmed', 'matched');
        return;
      }
      const isMatch = tags.includes(activeTag);
      li.classList.toggle('matched', isMatch);
      li.classList.toggle('dimmed', !isMatch);
      if (isMatch) anyMatch = true;
    });

    if (activeTag) {
      entry.classList.toggle('no-match', !anyMatch);
      if (anyMatch && !entry.classList.contains('open')) {
        entry.classList.add('open');
        entry.querySelector('.log-head').setAttribute('aria-expanded', 'true');
      }
    } else {
      entry.classList.remove('no-match');
    }
  });
}

/* ---------------------------------------------------
   Hero typing effect
--------------------------------------------------- */
function typeHero() {
  const el = document.getElementById('typed');
  const reveal = document.getElementById('hero-reveal');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = TYPE_TEXT;
    reveal.classList.add('visible');
    return;
  }

  let i = 0;
  const interval = setInterval(() => {
    el.textContent = TYPE_TEXT.slice(0, i + 1);
    i++;
    if (i >= TYPE_TEXT.length) {
      clearInterval(interval);
      setTimeout(() => reveal.classList.add('visible'), 200);
    }
  }, 45);
}

/* ---------------------------------------------------
   Init
--------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTagGroups();
  renderLog();
  typeHero();
});
