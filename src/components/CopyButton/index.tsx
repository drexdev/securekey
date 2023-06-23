import { useState } from 'react';

import { Copy } from 'iconsax-react';

import styles from './button.module.css';

interface CopyButtonProps {
	password: string[];
}

const CopyButton: React.FC<CopyButtonProps> = ({ password }) => {
	const [copyButtonLabel, setCopyButtonLabel] = useState(
		<>
			Copiar senha
			<Copy variant="Bold" className={styles.iconCopy}/>
		</>
	);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(password.join(''));
			setCopyButtonLabel(
				<>Copiado!</>
			);

			setTimeout(() => setCopyButtonLabel(
				<>
					Copiar senha
					<Copy variant="Bold" className={styles.iconCopy}/>
				</>
			), 1000);
		} catch (error) {
			console.error('Erro ao copiar para a área de transferência:', error);
		}
	};

	return (
		<button className={styles.copyButton} onClick={copyToClipboard}>
			{copyButtonLabel}
		</button>
	);
};

export default CopyButton;