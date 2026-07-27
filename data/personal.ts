import { SocialLink, NewsItem } from '../types';
import escCrtImg from '../assets/esc-crt-plenary.jpg';

export const PERSONAL_INFO = {
  name: "Mohamed Bella Jalloh",
  title: "Physician, Cardiovascular Researcher & Global Health Professional",
  tagline: "Translating science into real-world impact",
  email: "mbjay208@outlook.com",
  profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  about: `I am a physician (LMCC) and cardiovascular researcher focused on translating high-quality evidence into everyday care. I currently work as an Associate Physician in Cardiology with Alberta Health Services, supporting inpatient care and multidisciplinary decision-making.

I trained at the University of Oxford as a Commonwealth Scholar (MSc) and at McMaster/PHRI through a Clinical Research Fellowship. My research spans cardiovascular disease, clinical trials, and health systems, with publications in leading journals including The Lancet, JACC, European Heart Journal, Nature Portfolio journals such as Communications Medicine, BMJ Global Health, and BMC.

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
    description: "Successfully completed my research fellowship in Cardiovascular Clinical Trials at McMaster University and the Population Health Research Institute. Grateful for the mentorship of Dr. Harriette Van Spall and the valuable experience gained in implementation science and heart failure research."
  },
  {
    id: "n2",
    title: "ESC Cardiovascular Round Table Plenary on Diversity in Clinical Trials",
    date: "Jul 6, 2023",
    category: "Speaking",
    description: "Honored to have shared my journey and thoughts on advancing diversity in clinical trials during the European Society of Cardiology Cardiovascular Round Table (ESC CRT) Plenary on July 6, 2023. Inclusive research leads to better science and better care.",
    image: escCrtImg
  }
];

