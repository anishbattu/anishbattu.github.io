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
      ['cloudformation', 'CloudFormation'], ['iam', 'IAM']
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
    tags: [['spring', 'Spring / Spring MVC'], ['struts', 'Struts'], ['jersey', 'Jersey']]
  },
  {
    title: 'Data & persistence',
    tags: [['hibernate', 'Hibernate'], ['jdbc', 'JDBC'], ['oracle', 'Oracle'], ['sql-server', 'SQL Server'], ['etl', 'ETL pipelines']]
  },
  {
    title: 'DevOps & CI/CD',
    tags: [['jenkins', 'Jenkins'], ['github-actions', 'GitHub Actions'], ['maven', 'Maven']]
  },
  {
    title: 'Security',
    tags: [['jwt', 'JWT authorizers'], ['servlet-filters', 'Servlet filters'], ['password-hashing', 'Password hashing']]
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
    dates: 'Dec 2024 — Present',
    bullets: [
      { text: 'Built a serverless AWS platform in Java to replace a legacy processing workflow, contributing core Lambda services behind a shared API Gateway.', tags: ['java', 'lambda', 'api-gateway'] },
      { text: 'Engineered reusable AWS CDK (Java) constructs for the shared gateway, cutting new-service onboarding from 1–2 weeks to 2–3 days.', tags: ['cdk', 'api-gateway', 'java'] },
      { text: "Rolled out JWT authorizers and IAM-based authorization across the gateway's Lambda-backed APIs, standardizing access control org-wide.", tags: ['jwt', 'iam', 'lambda'] },
      { text: 'Owned the GeoSync ETL pipeline end-to-end — watermarking and retry logic guarantee duplicate-free re-runs on failed data pulls.', tags: ['etl'] },
      { text: 'Set up signed-URL delivery via S3 Presigner and idempotent SQL Server loading over JDBC/Hibernate.', tags: ['s3', 'jdbc', 'hibernate', 'sql-server'] },
      { text: 'Instrumented CloudWatch/EMF metrics and EventBridge + CloudTrail alerting, cutting detection time on unauthorized config changes from hours to minutes.', tags: ['cloudwatch', 'eventbridge', 'cloudtrail'] },
      { text: 'Tuned Lambda memory, timeout, and cold-start settings on latency-sensitive tile-delivery endpoints.', tags: ['lambda'] }
    ]
  },
  {
    client: 'Intuit',
    role: 'Software Developer',
    dates: 'Sep 2023 — Nov 2024',
    bullets: [
      { text: 'Built independently deployable microservices on AWS Lambda for discrete steps of the client onboarding process.', tags: ['lambda', 'java'] },
      { text: 'Orchestrated multi-step onboarding in AWS Step Functions with built-in retry and error handling.', tags: ['step-functions'] },
      { text: 'Decoupled service dependencies with SQS for queuing and SNS for pub-sub notifications, improving fault isolation.', tags: ['sqs', 'sns'] },
      { text: 'Assembled ETL pipelines in AWS Glue and queried the results via Athena for ad-hoc analytics access.', tags: ['glue', 'athena', 'etl'] },
      { text: 'Integrated onboarding workflows with AWS SageMaker endpoints for risk-scoring and fraud-detection.', tags: ['sagemaker'] },
      { text: 'Automated environment provisioning with CDK and CloudFormation, cutting turnaround from 3–4 days to under a day.', tags: ['cdk', 'cloudformation'] },
      { text: 'Built CI/CD pipelines with Jenkins, GitHub Actions, and CodePipeline, taking deploys from a half-day manual process to under an hour.', tags: ['jenkins', 'github-actions'] },
      { text: 'Crafted onboarding status UIs in ReactJS/TypeScript with the supporting RESTful APIs.', tags: ['react', 'typescript'] }
    ]
  },
  {
    client: 'Citibank',
    role: 'Java Developer',
    dates: 'Dec 2019 — Aug 2023',
    bullets: [
      { text: 'Delivered core internet-banking screens — account overview, transaction history, portfolio holdings — in JSP, HTML, and JavaScript.', tags: ['jsp', 'javascript'] },
      { text: 'Built a wealth-planning module summarizing customer holdings across trading, liquid assets, and long-term investments.', tags: ['java'] },
      { text: 'Applied the Struts framework for navigation, adding server-side validation with the Struts Validator Framework.', tags: ['struts'] },
      { text: 'Architected a configurable preferences module reused across several country-specific banking sites through configuration, not code changes.', tags: ['java'] },
      { text: 'Wrote SQL and PL/SQL against Oracle, mapping Java domain objects to tables with Hibernate.', tags: ['oracle', 'sql', 'hibernate'] },
      { text: 'Provided JUnit coverage for new features and defects surfaced during QA cycles.', tags: ['junit'] }
    ]
  },
  {
    client: 'UnitedHealthcare',
    role: 'Software Developer',
    dates: 'Jan 2018 — Nov 2019',
    bullets: [
      { text: 'Built a core business-rules and validation engine using Java collections, exception handling, and concurrency utilities.', tags: ['java'] },
      { text: 'Structured an MVC front end with Spring, JSP, and AJAX for the application UI.', tags: ['spring', 'jsp'] },
      { text: 'Exposed RESTful services with Jersey to manage user roles and permissions, secured with servlet filters.', tags: ['jersey', 'servlet-filters'] },
      { text: "Adopted one-way password hashing for credential storage, in line with the team's security standards.", tags: ['password-hashing'] },
      { text: 'Used Hibernate as the ORM layer and wrote JUnit tests to validate business logic before release.', tags: ['hibernate', 'junit'] },
      { text: 'Automated builds with Maven, cutting a multi-hour manual deploy down to 15–20 minutes.', tags: ['maven'] }
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
