import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';


export interface Valid {
  datePost: string;
  imageProfile: string;
  imagePost: string;
  containTitle: string;
  containDate: string;
  containExplain: string;
  containApt: string;
  containAptInfo: string;
  comments: number;
  likes: number;
  repost: number;
  graph: number;
  urlGitPost?: string,
  urlProyectPost?: string
}
@Component({
  selector: 'education-page',
  imports: [PostComponent],
  templateUrl: './education-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EducationPageComponent {
  infos = signal<Valid[]>([
    {
      datePost: 'Apr 17, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'Curso NestJs (Udemy)',
      containDate: 'Mar. 2025 - Abr.2025',
      containExplain:
        'Formación en NestJS enfocada en el desarrollo backend escalable con TypeScript. Aprendí a construir APIs RESTful, estructurar proyectos con arquitectura modular y aplicar buenas prácticas como inyección de dependencias y validación de datos.',
      containApt: `Aptitudes`,
      containAptInfo: `- Desarrollo de APIs RESTful con NestJS, arquitectura modular y mantenible, inyección de dependencias, validación y serialización de datos, manejo de controladores, servicios y middlewares, integración con bases de datos (TypeORM/Prisma), uso de Pipes, Guards e Interceptors, autenticación y autorización (JWT, Passport).`,
      comments: 16,
      likes: 52,
      repost: 14,
      graph: 305
    },
    {
      datePost: 'Apr 17, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'Curso Angular Pro (Udemy)',
      containDate: 'Mar. 2025 - Mar.2025',
      containExplain:
        'Formación centrada en Angular 19 siguiendo las mejores prácticas. Aprendí a construir aplicaciones escalables con componentes, servicios, routing, formularios reactivos, gestión del estado y consumo de APIs.',
      containApt: `Aptitudes`,
      containAptInfo: `- Desarrollo de SPAs con Angular 19, arquitectura basada en componentes, manejo de formularios reactivos y template-driven, enrutamiento y lazy loading, inyección de dependencias y servicios, consumo de APIs REST, observables y programación reactiva con RxJS, mejora de rendimiento y SEO con SSR.`,
      comments: 14,
      likes: 28,
      repost: 9,
      graph: 114,
    },
    {
      datePost: 'Apr 16, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/nebrija.png',
      containTitle: 'UX/UI (Universidad de Nebrija)',
      containDate: 'Ago. 2024 - Feb.2025',
      containExplain:
        'Curso centrado en diseño de experiencia de usuario. Aprendí a investigar necesidades del usuario, crear wireframes, prototipos y aplicar principios de usabilidad para mejorar la interacción con productos digitales.',
      containApt: `Aptitudes`,
      containAptInfo: `- Investigación centrada en el usuario, creación de wireframes y prototipos interactivos, arquitectura de la información, principios de usabilidad y accesibilidad, pruebas de usuario y validación de interfaces.`,
      comments: 1,
      likes: 42,
      repost: 6,
      graph: 230,
    },
    {
      datePost: 'Apr 16, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'Curso Nextjs (Udemy)',
      containDate: 'Ago. 2024 - Sept.2024',
      containExplain:
        'Curso orientado a dominar el framework mas famoso de la librería de javaScript, React.',
      containApt: `Aptitudes`,
      containAptInfo: `- Nextjs, React, TypeScript, Zustand, Redux, JWT, Docker, Prisma.`,
      comments: 2,
      likes: 24,
      repost: 3,
      graph: 169,
    },
    {
      datePost: 'Apr 15, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/harvard.png',
      containTitle: 'CS50 SQL, Data bases (Harvard University)',
      containDate: 'Ene. 2023 - Dic.2023',
      containExplain:
        'Curso enfocado en bases de datos relacionales con SQL. Aprendí a modelar datos, realizar consultas complejas, optimizar búsquedas y aplicar buenas prácticas de normalización.',
      containApt: `Aptitudes`,
      containAptInfo: `- SqLite, SQL.`,
      comments: 8,
      likes: 32,
      repost: 7,
      graph: 201,
    },
    {
      datePost: 'Apr 15, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/conquer.png',
      containTitle: 'Máster Desarrollador Full Stack (ConquerBlocks)',
      containDate: 'Sept. 2022 - Oct.2024 [Barcelona, España]',
      containExplain:
        'Máster en Desarrollo Web Full Stack en ConquerBlocks, centrado en el aprendizaje práctico de tecnologías frontend y backend modernas. Adquirí experiencia construyendo aplicaciones reales con JavaScript, Node.js, bases de datos y frameworks actuales.',
      containApt: `Aptitudes`,
      containAptInfo: `- Linux, git, github, HTML, CSS, TailwindCss, javaScript, TypeScript, React, Angular, Nodejs, SQL.`,
      comments: 6,
      likes: 16,
      repost: 3,
      graph: 167,
    },
  ]);
}
