import React from 'react'
import home from '../../assets/home-ativo.png'
import maisCurtidas from '../../assets/mais-curtidas-inativo.png'
import maisVistas from '../../assets/mais-vistas-inativo.png'
import novas from '../../assets/novas-inativo.png'
import surpreendaMe from '../../assets/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="ícone da página inicial" />
                <a href="/">Ínicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="ícone da página mais curtidas" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="ícone da página mais vistas" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="ícone da página novas" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="ícone da página surpreenda-me" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  );
}
