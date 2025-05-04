import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
	const { t } = useTranslation();
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});

			if (!res.ok) throw new Error('Error al enviar');

			setForm({ name: '', email: '', message: '' });
		} catch (error) {
			console.error('Error al enviar el formulario:', error);
			console.log(JSON.stringify(form));
		}
	};

	return (
		<section id='contact' className='section'>
			<SectionTitle section='contact' />
			<form
				className='flex flex-col items-center justify-center w-full gap-4'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					placeholder={t('contact.name')}
					className='w-2/3 bg-gray-800 text-white p-2'
					required
					onChange={handleChange}
					value={form.name}
					name='name'
				/>
				<input
					type='email'
					placeholder={t('contact.email')}
					className='w-2/3 bg-gray-800 text-white p-2'
					required
					onChange={handleChange}
					value={form.email}
					name='email'
				/>
				<textarea
					placeholder={t('contact.message')}
					className='w-2/3 bg-gray-800 text-white p-2'
					required
					onChange={handleChange}
					value={form.message}
					name='message'
				></textarea>
				<button
					type='submit'
					className='py-2 px-10 cursor-pointer rounded-full bg-blue-600 text-white'
				>
					{t('contact.send')}
				</button>
			</form>
		</section>
	);
};
