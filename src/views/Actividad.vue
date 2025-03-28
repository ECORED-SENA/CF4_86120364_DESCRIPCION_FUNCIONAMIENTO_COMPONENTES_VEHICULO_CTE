<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistema de transmisión y componentes del eje en vehículos',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar la transmisión de la fuerza motriz, el funcionamiento de los semiejes, rodamientos, puntas de eje y sistemas de tracción, asegurando la comprensión de los mecanismos de acoplamiento y bloqueo.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la caja de transferencia en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribuir la tracción entre los ejes delantero y trasero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transmitir la potencia del motor a las ruedas traseras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar la velocidad de las ruedas de manera independiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la fricción en el sistema de transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de rodamientos se utilizan con mayor frecuencia en los ejes de propulsión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rodamientos de agujas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rodamientos de rodillos cilíndricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rodamientos de bolas y cónicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rodamientos magnéticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué función cumplen los semiejes en un vehículo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten la dirección del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmiten la fuerza del diferencial a las ruedas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sirven como amortiguadores en la suspensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conectan la caja de transferencia con la transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En un vehículo con tracción en las cuatro ruedas, ¿qué sistema permite desconectar la tracción delantera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un diferencial bloqueado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sistema de embrague automático.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un freno de estacionamiento especial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema de reducción de torque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué mecanismo permite a los rodamientos reducir la fricción entre los componentes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La lubricación interna de grasa o aceite.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La aplicación de presión hidráulica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La instalación de un ventilador de refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso de imanes de baja fricción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué sucede cuando las ruedas delanteras de un vehículo no tienen tracción?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Giran libremente sobre su propio eje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permanecen inmóviles sin apoyo del sistema de suspensión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reciben la tracción de las ruedas traseras mediante un diferencial adicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dependen exclusivamente de la velocidad del motor para girar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la ventaja principal de un sistema de bloqueo automático en el eje delantero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite una conexión rápida de la tracción sin intervención manual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumenta el consumo de combustible para mejorar el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evita que las ruedas giren en superficies resbaladizas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la desconexión de los frenos en terrenos inestables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cómo se ajusta la tuerca de castillo en las puntas de eje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se aprieta hasta el máximo torque posible sin soltar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se ajusta de manera manual sin necesidad de herramientas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se fija con un seguro de presión sin necesidad de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se ajusta con un torque específico y luego se afloja ligeramente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué componente permite la conexión y desconexión del semieje en un sistema de tracción controlada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un actuador neumático.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un resorte de tensión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un sensor de presión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un motor eléctrico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué algunos vehículos modernos incluyen sensores en los semiejes y manzanas de rueda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para mejorar la aerodinámica del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para enviar señales al sistema de frenos ABS y control de tracción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para medir la temperatura del motor en tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para reducir el desgaste de los neumáticos en largas distancias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los rodamientos de bolas son los únicos utilizados en los sistemas de transmisión de vehículos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los semiejes de propulsión están diseñados para transmitir la fuerza del diferencial a las ruedas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un sistema de bloqueo manual en las ruedas delanteras permite activar o desactivar la tracción sin intervención del conductor.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La caja de transferencia solo se encuentra en vehículos con tracción trasera.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El ajuste incorrecto de los rodamientos puede afectar el desempeño del sistema de tracción y seguridad del vehículo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
