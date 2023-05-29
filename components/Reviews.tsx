import ReviewCard from './ReviewCard'

type Props = {
	reviews: review[]
}

const styles: string[] = [
	'md:-translate-x-16',
	'md:-translate-x-8',
	'md:translate-x-0',
]

const Reviews = ({ reviews }: Props) => {
	return (
		<ul className='flex flex-col space-y-4'>
			{reviews.map(({ id, stars, reviewedBy }, i) => (
				<li key={id}>
					<ReviewCard stars={stars} ratedBy={reviewedBy} classes={styles[i]} />
				</li>
			))}
		</ul>
	)
}
export default Reviews
