import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('Resend API Key:', process.env.RESEND_API_KEY);

export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { name, email, message } = req.body;

	try {
		const { data, error } = await resend.emails.send({
			from: 'Portfolio FrontEnd <onboarding@resend.dev>',
			to: [`${process.env.RESEND_EMAIL}`],
			subject: `Nuevo mensaje de: ${name}`,
			html: `<p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
		});

		if (error) {
			console.error('Resend error:', error);
			return res.status(500).json({ error: error.message });
		}

		return res
			.status(200)
			.json({ message: 'Correo enviado correctamente', id: data.id });
	} catch (err) {
		console.error('Catch error:', err);
		return res.status(500).json({ error: 'Ocurrió un error inesperado.' });
	}
}
