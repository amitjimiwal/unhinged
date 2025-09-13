export interface ResumeSection {
     id: string;
     title: string;
     content: string[];
     enabled: boolean;
}

export interface ResumeData {
     name: string;
     photo?: string; // Base64 encoded image data
     sections: ResumeSection[];
}

export interface FormField {
     id: string;
     label: string;
     type: 'text' | 'textarea' | 'list';
     placeholder?: string;
     value: string | string[];
}

export const DEFAULT_SECTIONS: ResumeSection[] = [
     {
          id: 'professional-summary',
          title: 'Professional Summary:',
          content: ['Peak Brain Rot Genz Retard who FAFOs and Get Shit Done'],
          enabled: true,
     },
     {
          id: 'education',
          title: 'Education',
          content: ['Non IIT (Tier 3 College)'],
          enabled: true,
     },
     {
          id: 'skills',
          title: 'Skills',
          content: ['Yapping', 'Shitposting', 'ChatGPT stuff', 'Think inside the box'],
          enabled: true,
     },
     {
          id: 'experience',
          title: 'Experience',
          content: [
               'Chronically online',
               '1. Twitter',
               '2. TikTok (via VPN)',
               '3. Reddit',
               '4. LinkedIn',
          ],
          enabled: true,
     },
     {
          id: 'hobbies',
          title: 'Hobbies',
          content: ['Yapping', 'Giving free advice (no one asks for)'],
          enabled: true,
     },
];

export const SECTION_TEMPLATES: Record<string, Partial<ResumeSection>> = {
     'professional-summary': {
          title: 'Professional Summary:',
          content: ['Enter your unhinged professional summary here...'],
     },
     'education': {
          title: 'Education',
          content: ['Your educational background'],
     },
     'skills': {
          title: 'Skills',
          content: ['Skill 1', 'Skill 2', 'Skill 3'],
     },
     'experience': {
          title: 'Experience',
          content: ['Job Title', 'Company Name', 'Description'],
     },
     'hobbies': {
          title: 'Hobbies',
          content: ['Hobby 1', 'Hobby 2'],
     },
     'achievements': {
          title: 'Achievements',
          content: ['Achievement 1', 'Achievement 2'],
     },
     'contact': {
          title: 'Contact',
          content: ['Email', 'Phone', 'Social Media'],
     },
};
