import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, 
  SiMongodb, SiDocker, SiGithubactions, SiVercel, 
  SiPrisma, SiRedux, SiFigma, SiPostman, SiGit, SiVite, SiWebpack,
  SiGraphql, SiRedis, SiNginx, SiLinux
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const skillsData = {
  frontend: [
    { name: "React.js", icon: SiReact, level: 95 },
    { name: "Next.js", icon: SiNextdotjs, level: 90 },
    { name: "JavaScript", icon: SiJavascript, level: 95 },
    { name: "TypeScript", icon: SiTypescript, level: 85 },
    { name: "HTML5", icon: SiHtml5, level: 98 },
    { name: "CSS3", icon: SiCss3, level: 95 },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
    { name: "Redux", icon: SiRedux, level: 88 },
    { name: "Vite", icon: SiVite, level: 85 },
    { name: "Webpack", icon: SiWebpack, level: 80 },
  ],
  
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 92 },
    { name: "Express.js", icon: SiExpress, level: 90 },
    { name: "PostgreSQL", icon: SiPostgresql, level: 88 },
    { name: "MySQL", icon: SiMysql, level: 85 },
    { name: "MongoDB", icon: SiMongodb, level: 87 },
    { name: "GraphQL", icon: SiGraphql, level: 82 },
    { name: "Redis", icon: SiRedis, level: 78 },
    { name: "Prisma", icon: SiPrisma, level: 85 },
  ],
  
  devops: [
    { name: "Docker", icon: SiDocker, level: 85 },
    { name: "GitHub Actions", icon: SiGithubactions, level: 82 },
    { name: "AWS", icon: FaAws, level: 80 },
    { name: "Vercel", icon: SiVercel, level: 90 },
    { name: "Nginx", icon: SiNginx, level: 75 },
    { name: "Linux", icon: SiLinux, level: 83 },
  ],
  
  tools: [
    { name: "Git", icon: SiGit, level: 95 },
    { name: "Figma", icon: SiFigma, level: 85 },
    { name: "Postman", icon: SiPostman, level: 90 },
  ],
};
