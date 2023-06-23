import PasswordGenerator from './components/PasswordGenerator';
import styles from './page.module.css';

function App() {


	return (
		<>
			<img src={'/logoBanner.svg'} alt={'Logo da SecureKey'} className={styles.logoBanner}/>

			<div className={styles.content}>
				<h1 className={styles.headerTitle}>Fortaleça sua segurança online com o Gerador de Senhas Seguras da
					SecureKey!</h1>
				<p className={styles.headerDescription}>Proteção online com senhas seguras em um instante!</p>

				<PasswordGenerator/>
			</div>
		</>
	);
}

export default App;