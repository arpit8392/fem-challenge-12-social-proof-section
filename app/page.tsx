import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Testimonials from '@/components/Testimonials'
import { reviews, testimonials } from '@/data'

export default function Home() {
	return (
		<main className='relative flex flex-col space-y-12 px-6 py-20 md:px-40 md:py-28'>
			<section className='flex flex-col space-y-10 md:flex-row md:items-center md:justify-between'>
				<Header />
				<Reviews reviews={reviews} />
			</section>

			<section>
				<Testimonials testimonials={testimonials} />
			</section>
		</main>
	)
}
