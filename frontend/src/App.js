import Webpages from './pages';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      language="nl"
      useRecaptchaNet="true"
    >
      <Webpages />
    </GoogleReCaptchaProvider>
  );
}

export default App;
