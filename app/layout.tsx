import './globals.css'
import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({
	subsets: ['latin'],
	variable: '--font-league-spartan',
})

export const metadata = {
	title: 'Social Proof Section',
	description:
		'Frontend Mentor Challenge | Social Proof Section | Developed with Next JS & Tailwind CSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${league_spartan.variable} bg-white bg-topMobile bg-no-repeat font-sans md:bg-topDesktop`}>
				<header role='banner'>
					<img
						src='/images/bg-pattern-bottom-desktop.svg'
						alt='Bottom Pattern for Desktop'
						className='absolute bottom-0 right-0 hidden md:top-36 md:block'
					/>
					<img
						src='/images/bg-pattern-bottom-mobile.svg'
						alt='Bottom Pattern for Mobile'
						className='absolute bottom-0 right-0 top-72 block md:hidden'
					/>
				</header>
				{children}
			</body>
		</html>
	)
}
