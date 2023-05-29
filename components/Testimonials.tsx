import TestimonialCard from './TestimonialCard'

type Props = {
	testimonials: testimony[]
}

const styles: string[] = [
	'md:translate-y-4',
	'md:translate-y-8',
	'md:translate-y-12',
]

const Testimonials = ({ testimonials }: Props) => {
	return (
		<ul className='flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-8 md:space-y-0'>
			{testimonials.map((item, i) => (
				<li key={item.id}>
					<TestimonialCard {...item} classes={styles[i]} />
				</li>
			))}
		</ul>
	)
}

export default Testimonials
