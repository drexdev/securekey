import { useEffect, useState } from 'react';

const usePasswordGenerator = () => {
	const [password, setPassword] = useState([] as string[]);
	const [sizePassword, setSizePassword] = useState('20');

	const generatePassword = () => {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const digits = '0123456789';
		const symbol = '!@#$%^&*()_+';

		const symbolInput = document.querySelector('#symbolcheckbox') as HTMLInputElement;
		const numberInput = document.querySelector('#numbercheckbox') as HTMLInputElement;

		const passwordArray: string[] = [];
		let characters = letters;

		if (numberInput.checked) characters += digits;
		if (symbolInput.checked) characters += symbol;

		for (let i = 0; i < Number(sizePassword); i++) {
			const indice = Math.floor(Math.random() * characters.length);

			passwordArray.push(characters.charAt(indice));
		}

		setPassword(passwordArray);
	};

	const handleChange = () => generatePassword();
	const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSize = event.target.value;
		setSizePassword(newSize);

		generatePassword();
	};

	useEffect(() => generatePassword(), []);

	return {
		password,
		sizePassword,
		handleChange,
		handleSizeChange
	};
};

export default usePasswordGenerator;