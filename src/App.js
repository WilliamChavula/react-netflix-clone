import { FaqsContainer } from './containers/Faqs';
import { FooterContainer } from './containers/Footer';
import { JumbotronContainer } from './containers/jumbotron';

function App() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default App;
