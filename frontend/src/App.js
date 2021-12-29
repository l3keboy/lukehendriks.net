import Webpages from './pages';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReactGA from "react-ga4";
import { CookieBanner } from '@palmabit/react-cookie-law';

function App() {
  const handleAccept = () => {
    const measurement_id = process.env.REACT_APP_GA_MEASUREMENT_ID

    ReactGA.initialize(measurement_id, {
      gtagOptions: { 
        'anonymize_ip': true, 
        "cookie_expires": 28 * 24 * 60 * 60 // 28 days (in seconds)
      }
    });
    ReactGA.send("pageview");
  }
  const handleAcceptPreferences = () => {
    
  }
  const handleAcceptStatistics = () => {
    
  }
  const handleAcceptMarketing = () => {
    
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      language="nl"
      useRecaptchaNet="true"
    >
      <Webpages />
      <CookieBanner 
        message="Deze website, en derden, maken op lukehendriks.net gebruik van cookies. Er wordt uitsluitend gebruik gemaakt van functionele cookies, deze cookies worden gebruikt het verbeteren van prestaties en bijhouden van statistieken. De privacyverklaring en gebruiksvoorwaarden zijn van toepassing." 
        acceptButtonText="Alles toestaan" declineButtonText="Weigeren" managePreferencesButtonText="Wijzigen" savePreferencesButtonText="Opslaan"
        onAccept={handleAccept} necessaryOptionText="Functioneel"
        onAcceptPreferences={handleAcceptPreferences} preferencesOptionText="Voorkeuren" showPreferencesOption={false}
        onAcceptStatistics={handleAcceptStatistics} statisticsOptionText="Analyse en statistieken" showStatisticsOption={false}
        onAcceptMarketing={handleAcceptMarketing} marketingOptionText="Marketing" showMarketingOption={false}
        policyLink="/privacy" privacyPolicyLinkText="Onze privacyverklaring"
        // Added custom styles in cookiebanner.css
        styles={{
          dialog: {}, container: {}, message: {}, policy: {}, selectPane: {}, optionWrapper: {}, optionLabel: {}, checkbox: {}, buttonWrapper: {}, button: {}
        }}
        />
        
    </GoogleReCaptchaProvider>
  );
}

export default App;
