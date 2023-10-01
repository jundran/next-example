import style from './footer.module.css'

export default function Footer () {
	return (
		<footer className={style.container}>
			<nav className="container">
				<a
					className='menu-link'
					href="https://github.com/jundran/next-example"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
			</nav>
		</footer>
	)
}
