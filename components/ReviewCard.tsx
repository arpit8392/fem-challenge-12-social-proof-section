type Props = {
	stars: number
	ratedBy: string
	classes?: string
}
const ReviewCard = ({ stars, ratedBy, classes }: Props) => {
	return (
		<div
			className={`flex flex-col items-center space-y-4 rounded-lg bg-lightGrayishMagenta py-4 md:flex-row md:space-x-8 md:space-y-0 md:px-8 md:py-5  ${classes}`}>
			<div className='flex flex-row space-x-2'>
				{Array.from({ length: 5 }, (_, i) => (
					<svg
						key={i}
						aria-hidden={true}
						focusable={false}
						width='16'
						height='16'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z'
							fill='#EF9546'
							fillRule='nonzero'
						/>
					</svg>
				))}
			</div>
			<p className='font-bold text-veryDarkMagenta'>
				Rated {stars} Stars in {ratedBy}
			</p>
		</div>
	)
}
export default ReviewCard
