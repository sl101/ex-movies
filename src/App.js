import { Header } from './components/Header';
import { Main } from './components/MainPages/Main';
import { Footer } from './components/Footer';
import './styles/App.scss';
import './styles/reset.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
