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
			<div className='flex flex-row items-center space-x-6'>
				<img
					src={`/images/${image}`}
					alt={`${title}'s Image`}
					className='h-10 w-10 rounded-full'
				/>
				<div className='-space-y-1 text-lg'>
					<h2 className='font-bold'>{title}</h2>
					{isVerifiedBuyer ? (
						<h3 className=' text-softPink'>Verified Buyer</h3>
					) : (
						<h3 className=' text-red-100'>Unverified Buyer</h3>
					)}
				</div>
			</div>
			<blockquote className='text-lg font-medium tracking-normal'>
				{`“ ${testimonial} ”`}
			</blockquote>
		</div>
	)
}
export default TestimonialCard
