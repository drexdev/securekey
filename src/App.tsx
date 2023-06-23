import PasswordGenerator from './components/PasswordGenerator';
import styles from './page.module.css';

function App() {


	return (
		<>
			<img src={'/logoBanner.svg'} alt={'Logo da SecureKey'} className={styles.logoBanner}/>

			<div className={styles.content}>
				<h1 className={styles.headerTitle}>Quer uma senha segura? Experimente o forte gerador de senhas da
					securekey.</h1>
				<p className={styles.headerDescription}>Gere senhas aleatórias seguras para ficar seguro online.</p>

				<PasswordGenerator/>
			</div>
		</>
	);
}

export default App;