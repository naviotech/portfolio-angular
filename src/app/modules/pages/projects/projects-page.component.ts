import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PostComponent } from "../../shared/components/post/post.component";
import { Valid } from '../education/education-page.component';

@Component({
  selector: 'projects-page',
  imports: [PostComponent],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsPageComponent {
  infos = signal<Valid[]>([
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/cocktail.png',
      urlGitPost: 'https://github.com/naviotech/Cocktails-App',
      urlProyectPost: 'https://cocktail-app-naviotech.netlify.app/',
      containTitle: 'Cocktails App',
      containDate: 'Jul. 2024',
      containExplain:
        'Proyecto Web para descubrir qué cócteles y bebidas puedes preparar con los ingredientes que tienes, con un recetario integrado y una sección de favoritos.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, TailwindCSS, TypeScript, React, vite.`,
      comments: 16,
      likes: 52,
      repost: 14,
      graph: 305
    },
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/clone.png',
      urlGitPost: 'https://github.com/naviotech/FinalWeatherApp',
      urlProyectPost: 'https://finalweatherapp-naviotech.netlify.app/',
      containTitle: 'Weather App',
      containDate: 'Jul. 2024',
      containExplain:
        'Esta Web te permite conocer en tiempo real el tiempo actual y previsto del lugar en el que te encuentras asi como otros parametros importantes relacionados con el tiempo meteorológico. Tambien te permite hacer busquedas del tiempo de los lugares que desees.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, TailwindCSS, TypeScript, React, vite.`,
      comments: 14,
      likes: 28,
      repost: 9,
      graph: 114,
    },
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/expense.png',
      urlGitPost: 'https://github.com/naviotech/expense-planner',
      urlProyectPost: 'https://expense-planner-naviotech.netlify.app/',
      containTitle: 'Planificador de Gastos',
      containDate: 'Jun. 2024',
      containExplain:
        'Herramienta fácil de usar para gestionar y planificar tus gastos. Te ayuda a llevar un seguimiento de tus ingresos y gastos, y a optimizar tu presupuesto. Ideal para mantener tus finanzas en orden.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, TypeScript, React, vite.`,
      comments: 1,
      likes: 42,
      repost: 6,
      graph: 230,
    },
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/coinmarket.png',
      urlGitPost: 'https://github.com/naviotech/CoinMarketWatch',
      urlProyectPost: 'https://shorturlapp-mayadevv.netlify.app/',
      containTitle: 'CoinMarketWatch',
      containDate: 'Jun. 2024',
      containExplain:
        'Herramienta para seguir los precios y variaciones de tus criptomonedas favoritas pudiendo elegir la divisa que mas se ajuste a tu localización. También tiene sección de noticias actualizadas sobre el mundo cripto.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, TailwindCss, JavaScript Vanilla, vite.`,
      comments: 2,
      likes: 24,
      repost: 3,
      graph: 169,
    },
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/ecomerce.png',
      urlGitPost: 'https://github.com/naviotech/Ecomerce',
      urlProyectPost: 'https://ecomerce-mayadevv.netlify.app/',
      containTitle: 'Ecomerce Auriculares',
      containDate: 'Mar. 2024',
      containExplain:
        'Este proyecto es un ejemplo de un sistema de comercio electrónico desarrollado con javaScript Vanilla. Permite a los usuarios explorar una variedad de productos, agregarlos a un carrito de compras, completar un formulario de datos para el envío y simular el pago de la orden seleccionada.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, Sass, JavaScript Vanilla, vite.`,
      comments: 8,
      likes: 32,
      repost: 7,
      graph: 201,
    },
    {
      datePost: 'Apr 21, 2025',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/short.png',
      urlGitPost: 'https://github.com/naviotech/ShortUrlApp',
      urlProyectPost: 'https://shorturlapp-mayadevv.netlify.app/',
      containTitle: 'ShortUrl App',
      containDate: 'Feb. 2024',
      containExplain:
        'Este proyecto se enfoca precisamente en abordar esta la necesidad de compartir enlaces concisos , proporcionando una solución eficiente y versátil para la creación de URLs cortas y su acceso a través de códigos QR. Al ofrecer una plataforma intuitiva y fácil de usar, busco simplificar el proceso de compartir enlaces mientras optimizo la experiencia del usuario.',
      containApt: `Tecnologías utilizadas`,
      containAptInfo: `- HTML5, CSS, Sass, JavaScript Vanilla, vite.`,
      comments: 6,
      likes: 16,
      repost: 3,
      graph: 167,
    },
  ]);
}
