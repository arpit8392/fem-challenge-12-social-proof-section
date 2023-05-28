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
		<div className='flex flex-col space-y-4'>
			{reviews.map(({ id, stars, reviewedBy }, i) => (
				<ReviewCard
					key={id}
					stars={stars}
					ratedBy={reviewedBy}
					classes={styles[i]}
				/>
			))}
		</div>
	)
}
export default Reviews
