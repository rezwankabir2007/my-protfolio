export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
];
