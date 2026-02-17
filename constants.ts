import { Publication, ResearchProject, TeachingCourse, SocialLink, NewsItem, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "Mohamed Bella Jalloh",
  title: "Physician, Cardiovascular Researcher & Global Health Professional",
  tagline: "Translating science into real-world impact",
  email: "mbjay208@outlook.com",
  profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  about: `I am a physician (LMCC) and cardiovascular researcher focused on translating high-quality evidence into everyday care. I currently work as an Associate Physician in Cardiology with Alberta Health Services, supporting inpatient care and multidisciplinary decision-making.

I trained at the University of Oxford as a Commonwealth Scholar (MSc) and at McMaster/PHRI through a Clinical Research Fellowship. My research spans cardiovascular disease, clinical trials, and health systems, with publications in leading journals including JACC, European Heart Journal, BMJ Global Health, and BMC.

I am developing scalable solutions for low- and middle-income countries while pursuing Internal Medicine residency training. I welcome collaborations in cardiovascular research, trials, implementation science, and digital health.`
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Google Scholar",
    url: "https://scholar.google.ca/citations?user=QqgcgykAAAAJ&hl=en",
    iconName: "GraduationCap"
  },
  {
    platform: "Twitter / X",
    url: "https://twitter.com/dr_bellajaymd",
    iconName: "Twitter"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bellajaymd",
    iconName: "Linkedin"
  },
  {
    platform: "Substack",
    url: "https://substack.com/@bellajaymd",
    iconName: "BookOpen"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n1",
    title: "Research Fellowship Completion at McMaster University",
    date: "Mar 25, 2025",
    category: "Milestone",
    description: "Successfully completed my research fellowship in Cardiovascular Clinical Trials at McMaster University and the Population Health Research Institute. Grateful for the mentorship of Dr. Harriette Van Spall and the valuable experience gained in implementation science and heart failure research.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b4",
    title: "Good communication in medicine can sometimes be a challenge",
    excerpt: "A reflection on delivering difficult news to patients and the profound lessons learned from a terminal cancer diagnosis conversation.",
    date: "May 25, 2025",
    type: "internal",
    slug: "good-communication-in-medicine",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    tags: ["Reflection", "Palliative Care", "Patient Communication"],
    content: `
      <p class="italic text-xl text-white mb-8">The truth hurts, but silence kills.</p>
      
      <p>These words echoed in my mind as I stood outside the hospital room, bracing myself for what would be one of the most challenging conversations of my medical career.</p>
      
      <p>Have you ever had to deliver news that would shatter someone's world? As a doctor, I've faced this daunting task more times than I care to count, but one experience stands out vividly in my memory.</p>
      
      <p>It was a parched December morning when I met Sarah¹, a vibrant 33-year-old newlywed with a contagious smile. Little did I know that within minutes, I'd be tasked with extinguishing the light in her eyes.</p>
      
      <p>Good communication in medicine can sometimes be a challenge. This truth hit me like a freight train as I fumbled for words, trying to explain to Sarah that she had terminal breast cancer. The weight of the diagnosis hung in the air like a heavy fog, obscuring the path forward.</p>
      
      <p>In medical school, we're taught to provide care and support to those in need, but sometimes this involves delivering difficult or disheartening news. This can be extremely challenging, both emotionally and professionally, and it is a struggle I have faced throughout my career. But in that moment, faced with Sarah's trembling hands and tear-filled eyes, I realized how woefully unprepared I was. It was like trying to navigate a stormy sea with nothing but a paper boat.</p>
      
      <p>I made mistakes that day. I buried Sarah under an avalanche of medical jargon, hoping that big words would somehow soften the blow. I avoided eye contact, afraid that if I looked at her directly, my own emotions would spill over. In my attempt to be professional, I forgot to be human.</p>
      
      <h3>Finding Hope in Vulnerability</h3>
      
      <p>But Sarah, in her vulnerability, became my greatest teacher. It was in this moment that I truly understood the role of hope in end-of-life care. Contrary to what many clinicians believe, I learned that successful coping consistently generates hope, even in the face of adversity. Hope and optimism, I discovered, are not just fleeting emotions but crucial elements in the coping process, persisting even under extreme stress.</p>
      
      <p>What struck most was how hope could take on various forms and meanings for different patients. For Sarah, hope wasn't about a miraculous cure or prolonging life at all costs. Her hope, after being diagnosed with terminal breast cancer, was to have a good death. When I asked her what made for a good death, she said being at peace in her own house with her family was paramount. This revelation shifted my perspective entirely.</p>
      
      <p>Good communication in medicine can sometimes be a challenge, but it's a challenge we must rise to meet. It's not just about conveying information; it's about connecting, understanding, and supporting.</p>
      
      <p>In the weeks that followed, I learned to balance honesty with hope. I discovered that hope isn't always about cure or longevity; sometimes, it's about finding peace, spending quality time with loved ones, or achieving a sense of closure.</p>
      
      <h3>The Bridge of Empathy</h3>

      <p>I began to see my role not just as a bearer of news, but as a guide through uncharted territories. Like a lighthouse keeper, I learned to shine a light on the path ahead, even when that path led to difficult places.</p>
      
      <p>This experience taught me that good communication in medicine is like a bridge. It connects the island of medical knowledge to the vast continent of human experience. Building this bridge requires skill, empathy, and constant practice.</p>
      
      <p>Now, when I face challenging conversations, I remember Sarah. I remember that behind every diagnosis is a story, behind every prognosis is a person. Good communication in medicine can sometimes be a challenge, but it's a challenge that holds the power to heal, comfort, and connect.</p>
      
      <p>As I reflect on this experience, I'm reminded of the profound impact our words can have. In the sterile world of medicine, where we often hide behind charts and lab results, good communication stands as a testament to our humanity. It's a reminder that in our hands lies not just the power to treat, but also the power to transform the patient experience.</p>
      
      <p>The next time you find yourself struggling to convey a difficult message, remember: good communication in medicine can sometimes be a challenge, but it's a challenge worth embracing. For in those moments of connection, we don't just practice medicine – we practice what it means to be human.</p>
      
      <hr />
      <p class="text-sm text-gray-500 italic">¹Sarah is a pseudonym used to protect patient privacy.</p>
    `
  },
  {
    id: "b0",
    title: "Welcome to My New Academic Platform",
    excerpt: "I am excited to launch this new website to share my research, teaching philosophy, and thoughts on global health directly with you.",
    date: "May 20, 2025",
    type: "internal",
    slug: "welcome-to-new-academic-platform",
    tags: ["Announcement", "Personal"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    content: `
      <p>I am thrilled to introduce my new personal website. For years, I have relied on various external platforms to share my work, but I felt it was time to create a centralized hub that truly reflects the intersection of my interests: clinical medicine, implementation science, and global health equity.</p>
      
      <h2>Why a Personal Website?</h2>
      <p>While social media and academic journals are excellent for dissemination, they often lack the personal context that drives my work. Here, I plan to share:</p>
      <ul>
        <li>Behind-the-scenes insights into my ongoing research projects.</li>
        <li>Long-form reflections on healthcare challenges in Sierra Leone and Canada.</li>
        <li>Resources for students and mentees navigating their own careers in global health.</li>
      </ul>

      <h2>The Hybrid Model</h2>
      <p>You will notice that this blog section contains a mix of direct articles (like this one) and links to my Substack. I believe in meeting readers where they are. My Substack will continue to be a home for newsletter-style updates, while this site will host more permanent, referenceable content.</p>

      <p>Thank you for visiting, and I look forward to engaging with you.</p>
    `
  },
  {
    id: "b1",
    title: "The Bouillon Dilemma",
    excerpt: "Reflecting on the delicate balance between fighting malnutrition and managing hypertension in West Africa.",
    date: "Nov 19, 2025",
    type: "external",
    url: "https://substack.com/@bellajaymd/note/p-179319589?utm_source=notes-share-action&r=1tfze3" 
  },
  {
    id: "b2",
    title: "Paper, People, and a Simple Spine: How Sierra Leone Can Build Better Health Data",
    excerpt: "Before anyone dreams of AI, Sierra Leone’s clinics need a simple data spine: patient IDs and offline lab and pharmacy logs that turn paper records into timely, safer care.",
    date: "Oct 03, 2025",
    type: "external",
    url: "https://substack.com/@bellajaymd/note/p-175216329?utm_source=notes-share-action&r=1tfze3"
  }
];

export const PUBLICATIONS: Publication[] = [
  // Peer-reviewed manuscripts
  {
    id: "m25",
    title: "The evolving cardiovascular burden in Sierra Leone: a 33-year analysis of the Global Burden of Disease study 2023",
    authors: ["Jalloh MB", "et al"],
    venue: "Nutrition, Metabolism and Cardiovascular Diseases",
    year: 2025,
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0939475326000748?via%3Dihub",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m24",
    title: "Towards the elimination of rheumatic heart disease in Africa and globally: the ERADICATE Consortium",
    authors: ["Gaye B", "Jobe M", "Marijon E", "ERADICATE Consortium"],
    venue: "European Heart Journal",
    year: 2025,
    doi: "10.1093/eurheartj/ehaf886",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m23",
    title: "A qualitative study of academic bullying among junior doctors in Sierra Leone",
    authors: ["Jalloh F", "Bah AK", "Bah AT", "Jalloh MB", "et al"],
    venue: "BMC Public Health",
    year: 2025,
    doi: "10.1186/s12889-025-24423-3",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m1",
    title: "Prevalence and predictors of unintended pregnancy among antenatal women in Sierra Leone: a cross sectional study",
    authors: ["Kanu A", "Bah AK", "Orsi M", "Jalloh MB", "et al"],
    venue: "PLOS Glob Public Health",
    year: 2025,
    doi: "10.1371/journal.pgph.0005086",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m2",
    title: "Mobile health for cardiovascular care in Africa: progress, gaps and the missing chatbots",
    authors: ["Jalloh MB", "Gaye B"],
    venue: "Heart",
    year: 2025,
    doi: "10.1136/heartjnl-2025-326697",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m3",
    title: "Cross-sectional study of the association between diet and physical inactivity with obesity, diabetes and hypertension among older adults in Sierra Leone",
    authors: ["Bockarie T", "Shanker A", "Jalloh MB", "et al"],
    venue: "BMJ Open",
    year: 2025,
    doi: "10.1136/bmjopen-2024-095825",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m4",
    title: "Physician burnout and patient care practices in Sierra Leone",
    authors: ["Jalloh MB", "Naveed A", "Johnson SAA", "et al"],
    venue: "Discov Public Health",
    year: 2025,
    doi: "10.1186/s12982-025-00700-9",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m5",
    title: "Prevalence and determinants of academic bullying among junior doctors in Sierra Leone: cross sectional study",
    authors: ["Jalloh F", "Bah AT", "Kanu A", "Jalloh MB", "et al"],
    venue: "JMIRx Med",
    year: 2025,
    doi: "10.2196/68865",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m6",
    title: "Advancing health equity within the Canadian health system",
    authors: ["Saka AK", "Jalloh MB", "Ozurigbo I", "Massaquoi N"],
    venue: "Can J Public Health",
    year: 2025,
    doi: "10.17269/s41997-025-01010-y",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m7",
    title: "May Measurement Month 2022: an analysis of blood pressure screening findings from Sierra Leone",
    authors: ["Jalloh MB", "Williams CEE", "Jegede OG", "et al"],
    venue: "Discov Med",
    year: 2025,
    doi: "10.1007/s44337-025-00234-8",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m8",
    title: "Barriers and facilitators to implementation of intravenous cardiovascular treatments in ambulatory settings",
    authors: ["Jalloh MB", "Osoro I", "Januzzi JL", "et al"],
    venue: "ESC Heart Fail",
    year: 2025,
    doi: "10.1002/ehf2.15076",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m9",
    title: "Perceptions of burnout among public sector physicians in Sierra Leone: a qualitative study",
    authors: ["Jalloh MB", "Naveed A", "Johnson SAA", "et al"],
    venue: "PLOS Glob Public Health",
    year: 2024,
    doi: "10.1371/journal.pgph.0003739",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m10",
    title: "Reporting quality of heart failure randomized controlled trials 2000-2020: temporal trends in adherence to CONSORT criteria",
    authors: ["Jalloh MB", "Bot VA", "Borjaille CZ", "et al"],
    venue: "Eur J Heart Fail",
    year: 2024,
    doi: "10.1002/ejhf.3229",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m11",
    title: "Bridging treatment implementation gaps in patients with heart failure: JACC Focus Seminar 2/3",
    authors: ["Jalloh MB", "Averbuch T", "Kulkarni P", "et al"],
    venue: "J Am Coll Cardiol",
    year: 2023,
    doi: "10.1016/j.jacc.2023.05.050",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m12",
    title: "Experiences, coping strategies, and perspectives of people in Malaysia during the COVID-19 pandemic",
    authors: ["Cheah PK", "Jalloh MB", "Cheah P-K", "et al"],
    venue: "BMC Public Health",
    year: 2023,
    doi: "10.1186/s12889-023-15892-5",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m13",
    title: "Multi-level implementation strategies to improve uptake of evidence-based therapies in heart failure",
    authors: ["Jalloh MB", "Granger CB", "Fonarow GC", "Van Spall HGC"],
    venue: "Eur Heart J",
    year: 2023,
    doi: "10.1093/eurheartj/ehad150",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m15",
    title: "Twelve-month observational study of children with cancer in 41 countries during the COVID-19 pandemic",
    authors: ["Global Health Research Group on Children’s Non-Communicable Diseases Collaborative"],
    venue: "BMJ Glob Health",
    year: 2022,
    doi: "10.1136/bmjgh-2022-008797",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m16",
    title: "Impact of the COVID-19 pandemic on patients with paediatric cancer in low-income, middle-income, and high-income countries: a multicentre, international, observational cohort study",
    authors: ["Global Health Research Group on Children’s Non-Communicable Diseases Collaborative"],
    venue: "BMJ Open",
    year: 2022,
    doi: "10.1136/bmjopen-2021-054690",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m17",
    title: "International survey of medical students’ exposure to relevant global surgery (ISOMERS): a cross-sectional study",
    authors: ["InciSioN Collaborative"],
    venue: "World J Surg",
    year: 2022,
    doi: "10.1007/s00268-022-06440-0",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m18",
    title: "Pursuing health systems strengthening through disease-specific programme grants: experiences in Tanzania and Sierra Leone",
    authors: ["Hemingway CD", "Jalloh MB", "Silumbe R", "et al"],
    venue: "BMJ Glob Health",
    year: 2021,
    doi: "10.1136/bmjgh-2021-006615",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m19",
    title: "What factors shape surgical access in West Africa? A qualitative study exploring patient and provider experiences of managing injuries in Sierra Leone",
    authors: ["Virk A", "Jalloh MB", "Koedoyoma S", "et al"],
    venue: "BMJ Open",
    year: 2021,
    doi: "10.1136/bmjopen-2020-042402",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m21",
    title: "Barriers to accessing and providing rehabilitation after a lower limb amputation in Sierra Leone: a multidisciplinary patient and service provider perspective",
    authors: ["Allen APT", "Bolton WS", "Jalloh MB", "et al"],
    venue: "Disabil Rehabil",
    year: 2022,
    doi: "10.1080/09638288.2020.1836043",
    category: "Peer-reviewed Manuscripts"
  },
  {
    id: "m22",
    title: "Reasons to pursue a career in medicine: a qualitative study in Sierra Leone",
    authors: ["Woodward A", "Thomas S", "Jalloh MB", "et al"],
    venue: "Glob Health Res Policy",
    year: 2017,
    doi: "10.1186/s41256-017-0054-7",
    category: "Peer-reviewed Manuscripts"
  },
  // Preprints
  {
    id: "p1",
    title: "Predictors of In-Hospital Mortality among Adults with Chronic Kidney Disease at a National Tertiary Hospital in Sierra Leone",
    authors: ["Foray M", "Sankoh Jr H", "Coker J", "Jalloh MB"],
    venue: "SSRN Electron J [preprint]",
    year: 2025,
    doi: "10.2139/ssrn.5778103",
    category: "Preprints"
  },
  {
    id: "p2",
    title: "Trends in the burden of sickle cell disease in Sierra Leone, 1990 to 2023: a Global Burden of Disease analysis",
    authors: ["Faulkner MMJ", "Jalloh F", "Foray MF", "Gborie SL", "Jalloh MB"],
    venue: "medRxiv [preprint]",
    year: 2025,
    doi: "10.64898/2025.12.01.25341432",
    category: "Preprints"
  },
  {
    id: "p3",
    title: "Trends of age-standardised hypertension prevalence, treatment, and control among adults aged 30–79 years in Africa from 1990 to 2019",
    authors: ["Gaye ND", "Jalloh MB", "Gary-Webb TL", "Bamba G", "Anne M", "AbdelNoor AT", "et al"],
    venue: "SSRN Electron J [preprint]",
    year: 2025,
    doi: "10.2139/ssrn.5747164",
    category: "Preprints"
  },
  {
    id: "p4",
    title: "Age-standardised trends in incidence rates of noncommunicable diseases among adults aged 30 to 79 in Senegal from 2000 to 2019",
    authors: ["Gaye ND", "Jalloh MB", "Gary-Webb TL", "et al"],
    venue: "medRxiv [preprint]",
    year: 2025,
    doi: "10.1101/2025.09.26.25336768",
    category: "Preprints"
  },
  // Conference abstracts and posters
  {
    id: "c1",
    title: "Scoping review of barriers and facilitators to implementation of intravenous cardiovascular treatments in ambulatory settings (SA5)",
    authors: ["Jalloh MB", "et al"],
    venue: "ISPOR",
    year: 2024,
    category: "Conference Abstracts and Posters"
  },
  {
    id: "c2",
    title: "Adherence of randomized controlled trials in heart failure to CONSORT reporting standards",
    authors: ["Jalloh MB", "et al"],
    venue: "American Heart Association Annual Scientific Sessions (Abstract 16310)",
    year: 2023,
    category: "Conference Abstracts and Posters"
  },
  {
    id: "c3",
    title: "Assessment of surgical site infections at the University of Sierra Leone Teaching Hospitals Complex: Connaught",
    authors: ["Jalloh MB"],
    venue: "HBIOMED-SL Annual Scientific Session (Abstract 10)",
    year: 2018,
    category: "Conference Abstracts and Posters"
  },
  {
    id: "c4",
    title: "Opportunities to improve antimicrobial stewardship in a tertiary referral hospital in Freetown, Sierra Leone",
    authors: ["Beynon F", "Howlett P", "Clarke I", "Conteh S", "Jalloh MB", "et al"],
    venue: "ECCMID (Poster EV0429)",
    year: 2017,
    category: "Conference Abstracts and Posters"
  },
  // Opinion Pieces
  {
    id: "o1",
    title: "Mpox Surge in Sierra Leone: A Stress Test for National Readiness",
    authors: ["Jalloh MB"],
    venue: "Think Global Health",
    year: 2025,
    url: "https://www.thinkglobalhealth.org/article/mpox-surge-sierra-leone-stress-test-national-readiness",
    category: "Opinion Pieces",
    topic: "Global Health",
    description: "An analysis of Sierra Leone's response to the mpox outbreak and what it reveals about pandemic preparedness in West Africa."
  },
  {
    id: "o2",
    title: "A Silent Emergency: The Neglected Burden of Cardiovascular Disease in Sierra Leone",
    authors: ["Jalloh MB"],
    venue: "BMJ Global Health Blog",
    year: 2025,
    url: "https://blogs.bmj.com/bmjgh/2025/04/30/a-silent-emergency-the-neglected-burden-of-cardiovascular-disease-in-sierra-leone/",
    category: "Opinion Pieces",
    topic: "Cardiovascular Medicine",
    description: "Exploring the growing cardiovascular disease burden in Sierra Leone and the urgent need for sustainable healthcare solutions."
  },
  {
    id: "o4",
    title: "Institutional Dominance versus Collaborative Equity in Global Health",
    authors: ["Jalloh MB"],
    venue: "Global Health Unfiltered",
    year: 2024,
    url: "https://www.globalhealthunfiltered.com/blog/a-fissure-in-the-fabric-of-global-health-institutional-dominance-versus-collaborative-equity",
    category: "Opinion Pieces",
    topic: "Global Health Equity",
    description: "Examining power dynamics in global health and the need for more equitable partnerships between institutions."
  },
  {
    id: "o5",
    title: "How to Stop West Africa's Brain Drain",
    authors: ["Jalloh MB"],
    venue: "Think Global Health",
    year: 2023, 
    url: "https://www.thinkglobalhealth.org/article/how-stop-west-africas-brain-drain",
    category: "Opinion Pieces",
    topic: "Healthcare Policy",
    description: "Strategies for addressing the healthcare workforce crisis in West Africa and retaining medical professionals."
  },
  {
    id: "o6",
    title: "The Visa Hurdle: Why Conference Applicants from the Global South Can't Always Clear It",
    authors: ["Jalloh MB"],
    venue: "NPR (Goats and Soda)",
    year: 2022,
    url: "https://www.npr.org/sections/goatsandsoda/2022/07/13/1111135757/the-visa-hurdle-why-conference-applicants-from-the-global-south-cant-always-clea",
    category: "Opinion Pieces",
    topic: "Global Health Equity",
    description: "An NPR feature on visa barriers preventing Global South researchers from attending international conferences."
  }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "r1",
    title: "Cardiometabolic Diseases in Underserved Populations",
    description: "Investigating the impact of social determinants of health on long-term cardiovascular recovery rates in urban environments. This project utilizes big data analytics to map recovery hotspots and coldspots.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "r2",
    title: "Digital Health Implementation",
    description: "Developing a framework for integrating digital health tools into routine cardiology practice to reduce administrative burden and improve patient-provider interaction time in resource-limited settings.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const TEACHING_COURSES: TeachingCourse[] = [
  {
    id: "t1",
    code: "Mentor",
    title: "Mentorship",
    role: "~15–20 mentees (undergraduate to postgraduate)",
    semester: "Since 2015",
    description: "I provide longitudinal mentorship focused on research skills and career development. Support includes research methods, study planning, scientific writing and presentations, and navigating training pathways. I also advise on identifying opportunities and strengthening graduate school applications."
  },
  {
    id: "t2",
    code: "Teaching Assistant",
    title: "Biochemistry (COMAHS, University of Sierra Leone)",
    role: "Freetown, Sierra Leone",
    semester: "Feb 2019 to Oct 2020",
    description: "Led teaching sessions and laboratory demonstrations for medical students, nursing and pharmacy students while developing course materials, assessments, and coordinating practical activities for undergraduate biochemistry courses. Mentored learners on study strategies, exam preparation, and scientific reasoning."
  },
  {
    id: "t3",
    code: "Course Coordinator",
    title: "SLEMSA Global Health Certificate Course",
    role: "Freetown, Sierra Leone",
    semester: "Apr 2017 to May 2017",
    description: "Designed and coordinated an evidence-informed inaugural global health curriculum in collaboration with subject-matter experts. Introduced medical students to core themes including health systems, equity, priority setting, and implementation in resource-limited settings."
  }
];