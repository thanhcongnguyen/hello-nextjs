import Link from 'next/link'
import Head from 'next/head'

// const Layout = (props) =>(
// 	<div>
// 		<Link href="/">
// 			<a style={{padding: 10, color: 'red', fontSize: 20}}>Home</a>
// 		</Link>
// 		<Link href="/about">
// 			<a>About</a>
// 		</Link>
// 		{props.children}
// 	</div>
// )

const Layout =({children, title="this is layout"}) =>(
	<div>
		<Head>
			<title>{title}</title>
			<meta charset="utf-8" />
		</Head>

			<div>
				<header>
					<p>this is a header</p>
				</header>
				<nav>
					<Link href="/">
						<a style={{padding: 10}}>Home</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
				</nav>	
				<section>
					{children}
				</section>

				<footer>
					<p>this is a footer</p>
				</footer>		
			</div>
		
	</div>
)

export default Layout