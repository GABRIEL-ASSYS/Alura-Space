import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Cards({ itens, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((item) => {
                return (
                    <li key={item.id} className={styles.galeria__card}>
                        <img src={item.imagem} alt={item.titulo} className={styles.galeria__imagem} />
                        <p className={styles.galeria__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={open} alt="ícone de coração curtir" />
                                <img src={favorito} alt="ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
