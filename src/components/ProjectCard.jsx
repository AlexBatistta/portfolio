
export const ProjectCard = ({ isHorizontal = false, className, title, description, tags, image }) => {
	tags;
	return (
		<div className={`bg-primary flex overflow-hidden rounded-4xl w-70 sm:w-auto ${isHorizontal ? 'flex-row  h-60' : 'flex-col'} ${className}`}>
			<div className={`overflow-hidden rounded-4xl  shadow-darker/25 ${isHorizontal ? "w-[50%] sm:order-1 shadow-left" : "w-full h-auto shadow-xl"} object-cover`}>
				<img className='h-full w-full object-cover' src={image}></img>
			</div>
			<div className={`px-5 flex flex-col justify-center py-5 gap-3 grow ${isHorizontal ? 'w-[50%]' : ''}`} >
				<h3 className='text-secondary text-xl font-poppins'>{title}</h3>
				<p className='font-roboto text-base text-white'>
					{description}
				</p>
				<div className='flex gap-2 mt-auto'>
					{
						tags?.map((tag, index) => (
							<Tag key={index} title={tag} />
						))
					}
				</div>
			</div>
		</div >
	);
};

const Tag = ({ className, title }) => {
	return <div className={`bg-secondary/75 h-5  rounded-md flex justify-center items-center ${className}`}>
		<p className="px-2 text-primary text-sm">{title}</p>
	</div>;
};
