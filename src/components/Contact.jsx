import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
	const { t } = useTranslation();
	const [ form, setForm ] = useState({ name: '', email: '', message: '' });

	const handleChange = (e) => {
		setForm({ ...form, [ e.target.name ]: e.target.value });
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
			<div className='flex flex-col sm:flex-row w-[100%] justify-between items-start gap-10'>
				<p className='paraph w-full sm:w-[45%]'>{t('contact.text')}</p>
				<form
					className='flex flex-col w-full px-5 sm:px-0 sm:w-[55%] lg:px-10 items-end justify-center gap-4'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						placeholder={t('contact.name')}
						className='inputContact'
						required
						onChange={handleChange}
						value={form.name}
						name='name'
					/>

					<input
						type='email'
						placeholder={t('contact.email')}
						className='inputContact'
						required
						onChange={handleChange}
						value={form.email}
						name='email'
					/>

					<textarea
						placeholder={t('contact.message')}
						className='inputContact'
						required
						onChange={handleChange}
						value={form.message}
						name='message'
					></textarea>
					<button
						type='submit'
						className='button !px-8 !py-1 mt-2'
					>
						{t('contact.send')}
					</button>
				</form>
			</div>

		</section>
	);
};
