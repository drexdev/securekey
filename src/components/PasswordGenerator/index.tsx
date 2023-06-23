import React from 'react';

import { ArrowRotateLeft } from 'iconsax-react';

import usePasswordGenerator from '../../hooks/usePasswordGenerator.tsx';
import CopyButton from '../CopyButton';
import styles from './pwgenerator.module.css';

const PasswordGenerator: React.FC = () => {
	const {
		password,
		sizePassword,
		handleChange,
		handleSizeChange
	} = usePasswordGenerator();

	return (
		<div className={styles.passwordForm}>

			{/* Container of password generator */}

			<div className={styles.passwordContainer}>
				<label className={styles.labelContainer}>Senha gerada:</label>

				<div className={styles.generatedPassword}>
					<ArrowRotateLeft className={styles.iconReGenerate} onClick={handleChange}/>

					{password.map((e, i) => {
						if (/^\d+$/.test(e)) return <span key={i} className={styles.digitPassword}>{e}</span>;
						else if (/\W|_/g.test(e)) return <span key={i} className={styles.symbolPassword}>{e}</span>;

						return <span key={i} className={styles.letterPassword}>{e}</span>;
					})}
				</div>
			</div>

			{/* Container of config password */}

			<div className={styles.configContainer}>
				<div className={styles.rangeContainer}>
					<label className={styles.labelContainer}>Tamanho: </label>
					<input
						className={styles.inputSizePassword}
						type={'range'}
						min={8}
						max={100}
						id={'sizepassword'}
						defaultValue={sizePassword}
						onChange={handleSizeChange}
					/>
					<span>{sizePassword}</span>
				</div>

				<label className={styles.checkBox}>
					<input
						type="checkbox"
						className={styles.inputCheckBox}
						id={'symbolcheckbox'}
						onChange={handleChange}
					/>
					<span>Símbolos</span>
				</label>

				<label className={styles.checkBox}>
					<input
						type="checkbox"
						className={styles.inputCheckBox}
						id={'numbercheckbox'}
						onChange={handleChange}
					/>
					<span>Números</span>
				</label>
			</div>

			<CopyButton password={password}/>
		</div>
	);
};

export default PasswordGenerator;