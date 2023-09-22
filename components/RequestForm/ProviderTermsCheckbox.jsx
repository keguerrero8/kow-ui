import CheckboxModal from './CheckboxModal';
import TermsText from '../Documents/TermsOfUse/TermsText';
import ProviderOptInText from '../Documents/ProviderOptIn/ProviderOptInText';

const ProviderTermsCheckbox = ({ setisOptInAcknowledged, isOptInAcknowledged }) => {

  return (
    <CheckboxModal
        checkboxText="I agree to KOW's "
        linkText='Terms and Conditions'
        modalContent1={<TermsText/>}
        modalContent2={<ProviderOptInText/>}
        setisAcknowledged={setisOptInAcknowledged}
        isAcknowledged={isOptInAcknowledged}
    />
  );
};

export default ProviderTermsCheckbox;
