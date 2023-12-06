import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mongo',
    Svg: require('@site/static/img/mongodb.svg').default,
    description: (
      <>
        Es una base de datos NoSQL orientada a documentos.
        Almacena datos en documentos similares a JSON,
        lo que facilita la manipulación y la escalabilidad.
        Es flexible y permite el almacenamiento de datos no estructurados
        o semiestructurados, siendo adecuado para aplicaciones con datos variables o complejos.
      </>
    ),
  },
  {
    title: 'Cassandra',
    Svg: require('@site/static/img/cassandra.svg').default,
    description: (
      <>
        Es una base de datos distribuida NoSQL diseñada
        para manejar grandes volúmenes de datos y operaciones
        de escritura/lectura intensivas. Se centra en la escalabilidad
        lineal y la alta disponibilidad, siendo ideal para aplicaciones
        que necesitan manejar grandes cantidades de datos distribuidos en múltiples servidores.
      </>
    ),
  },
  {
    title: 'Redis',
    Svg: require('@site/static/img/redis.svg').default,
    description: (
      <>
        Es una base de datos en memoria de tipo clave-valor extremadamente 
        rápida y versátil. Se usa para caché, almacenamiento de datos en tiempo
        real y gestión de sesiones. Sus capacidades de estructuras de datos avanzadas
        lo hacen útil para aplicaciones que requieren alta velocidad y rendimiento.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
