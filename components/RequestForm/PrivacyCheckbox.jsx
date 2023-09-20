import CheckboxModal from './CheckboxModal';
import PrivacyText from '../Documents/PrivacyPolicy/PrivacyText';

const PrivacyCheckbox = ({ setisPrivacyAcknowledged, isPrivacyAcknowledged }) => {

  return (
    <CheckboxModal
        checkboxText="I agree to KOW's "
        linkText='Privacy Policy'
        modalContent1={<PrivacyText/>}
        setisAcknowledged={setisPrivacyAcknowledged}
        isAcknowledged={isPrivacyAcknowledged}
    />
  );
};

export default PrivacyCheckbox;
