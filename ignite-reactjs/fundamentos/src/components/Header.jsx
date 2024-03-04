import style from './Header.module.css'

export function Header() {

    console.log(style)
    return (
        <header className={style.header}>
            <strong >Ignite Feed</strong>
        </header>
    )
}