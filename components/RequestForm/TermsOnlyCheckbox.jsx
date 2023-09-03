import CheckboxModal from './CheckboxModal';
import TermsText from '../Documents/TermsOfUse/TermsText';
import ProviderOptInText from '../Documents/ProviderOptIn/ProviderOptInText';

const TermsOnlyCheckbox = () => {

  return (
    <CheckboxModal
        checkboxText="I agree to KOW's "
        linkText='Terms and Conditions'
        modalContent1={<TermsText/>}
    />
  );
};

export default TermsOnlyCheckbox;
