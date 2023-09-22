import CheckboxModal from './CheckboxModal';
import TermsText from '../Documents/TermsOfUse/TermsText';

const TermsOnlyCheckbox = ({ setisOptInAcknowledged, isOptInAcknowledged }) => {

  return (
    <CheckboxModal
        checkboxText="I agree to KOW's "
        linkText='Terms and Conditions'
        modalContent1={<TermsText/>}
        setisAcknowledged={setisOptInAcknowledged}
        isAcknowledged={isOptInAcknowledged}
    />
  );
};

export default TermsOnlyCheckbox;
