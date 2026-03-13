import { Inter, Bebas_Neue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });

export const metadata = {
    title: 'Service Sensei | Central HR Solutions',
    description: 'Sensei Service Stars (S3) — "Be known for your service." Get your Critical Customer Contact Points graded by our mystery auditors.',
};

export default function ServiceSenseiLayout({ children }) {
    return (
        <div className={`${inter.variable} ${bebas.variable}`}>
            {children}
        </div>
    );
}
