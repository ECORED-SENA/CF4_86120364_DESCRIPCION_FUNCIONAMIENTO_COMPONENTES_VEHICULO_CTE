export default {
  global: {
    Name: 'Sistema de transmisión y componentes del eje en vehículos',
    Description:
      'El componente formativo explica el funcionamiento de la caja de transferencia y los ejes en vehículos, abordando la transmisión de la fuerza motriz, tipos de semiejes, rodamientos y sistemas de tracción. También describe mecanismos de acoplamiento y bloqueo para optimizar el desempeño en diferentes terrenos, detallando procedimientos de ajuste y mantenimiento para garantizar un rendimiento adecuado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Transmisión de la fuerza motriz hasta las ruedas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de acoplamiento de tracción controlada en propulsor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/86120364_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Transmisión de la fuerza motriz hasta las ruedas',
      referencia:
        'AUTOTECNICATV (2022). La potencia del motor transmitida a la rueda. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=8BsU5ekiLP4&ab_channel=AUTOTECNICATV ',
    },
    {
      tema: 'Semiejes de propulsión',
      referencia:
        'AUTOTECNICATV (2023). Las diferencias entre tracción TRASERA vs. DELANTERA. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=jJoeQ32-EOQ&ab_channel=AUTOTECNICATV ',
    },
    {
      tema: 'Sistemas de acoplamiento de tracción controlada en propulsor',
      referencia:
        'Repman22. (2020).Todo sobre Diferenciales Torsen vs LSD vs Comun vs XDS. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=lJDYKrAlAk4&ab_channel=Repman22 ',
    },
    {
      tema: 'Tracción en eje delantero',
      referencia:
        'AUTOTECNICATV (2022). Dilemas automovilísticos: ¿Tracción trasera o delantera?. [Archivo de video] Youtube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=oXU3mj5-j9U&ab_channel=AUTOTECNICATV ',
    },
  ],
  glosario: [
    {
      termino: 'Actuador neumático',
      significado:
        'mecanismo que utiliza aire comprimido para accionar o desactivar componentes del sistema de tracción.',
    },
    {
      termino: 'Caja de transferencia',
      significado:
        'mecanismo que distribuye la tracción entre los ejes delantero y trasero.',
    },
    {
      termino: 'Electroválvula',
      significado:
        'dispositivo que controla el paso de fluidos mediante una señal eléctrica en sistemas de tracción.',
    },
    {
      termino: 'Juntas homocinéticas',
      significado:
        'conectores flexibles que permiten transmitir potencia a las ruedas con diferentes ángulos de giro.',
    },
    {
      termino: 'Puntas de eje',
      significado:
        'extremos de los ejes que conectan las ruedas con el sistema de transmisión.',
    },
    {
      termino: 'Rodamientos',
      significado:
        'elementos mecánicos que reducen la fricción y facilitan el movimiento del eje.',
    },
    {
      termino: 'Semieje de propulsión',
      significado:
        'componente que lleva la fuerza del diferencial a las ruedas y permite su giro.',
    },
    {
      termino: 'Sistema de bloqueo',
      significado:
        'mecanismo que permite fijar o liberar la tracción en las ruedas según la necesidad.',
    },
    {
      termino: 'Tracción en las ruedas',
      significado:
        'capacidad del vehículo para recibir potencia del motor en un eje o en ambos.',
    },
    {
      termino: 'Transmisión de fuerza motriz',
      significado:
        'sistema que transfiere la energía del motor a las ruedas para su movimiento.',
    },
  ],
  referencias: [
    {
      referencia: 'ls1tech. (2004). <em>Thread Starter</em>. ',
      link:
        'https://ls1tech.com/forums/advanced-engineering-tech/1000478-lets-build-mid-engine-trans-am-need-advice-10.html ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Desarrollador <i>Full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
