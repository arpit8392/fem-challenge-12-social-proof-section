type Props = {
	id: number
	title: string
	image: string
	isVerifiedBuyer: boolean
	testimonial: string
	classes?: string
}

const TestimonialCard = ({
	title,
	image,
	isVerifiedBuyer,
	testimonial,
	classes,
}: Props) => {
	return (
		<div
			className={`flex flex-col space-y-6 rounded-lg bg-veryDarkMagenta px-8 py-11  text-white ${classes}`}>
			<figure className='flex flex-row items-center space-x-6'>
				<img
					src={`/images/${image}`}
					alt={`${title}'s smiling picture for the testimony'`}
					className='h-10 w-10 rounded-full'
				/>
				<figcaption className='-space-y-1 text-lg'>
					<h2 className='font-bold'>{title}</h2>
					{isVerifiedBuyer ? (
						<p className=' text-softPink'>Verified Buyer</p>
					) : (
						<p className=' text-red-100'>Unverified Buyer</p>
					)}
				</figcaption>
			</figure>
			<h2 className='sr-only text-lg font-medium tracking-normal'>{`“ ${testimonial} ”`}</h2>
			<blockquote className='text-lg font-medium tracking-normal'>
				{`“ ${testimonial} ”`}
			</blockquote>
		</div>
	)
}
export default TestimonialCard
