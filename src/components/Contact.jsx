import React from 'react';

export const Contact = () => {
	const handleSubmit = async () => {
		console.log('handleSubmit');
	};

	return (
		<section id="contact" className="section flex-col mb-[300px] gap-4">
			<h2 className="subtitle">Contact</h2>
			<form
				className="flex flex-col items-center justify-center w-full gap-4"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Name"
					className="w-2/3 bg-gray-800 text-white p-2"
					required
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-2/3 bg-gray-800 text-white p-2"
					required
				/>
				<textarea
					placeholder="Message"
					className="w-2/3 bg-gray-800 text-white p-2"
					required
				></textarea>
				<button
					type="submit"
					className="py-2 px-10 cursor-pointer rounded-full bg-blue-600 text-white"
				>
					Send
				</button>
			</form>
		</section>
	);
};
