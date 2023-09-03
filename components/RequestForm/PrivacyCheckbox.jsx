import CheckboxModal from './CheckboxModal';
import PrivacyText from '../Documents/PrivacyPolicy/PrivacyText';

const PrivacyCheckbox = () => {

  return (
    <CheckboxModal
        checkboxText="I agree to KOW's "
        linkText='Privacy Policy'
        modalContent1={<PrivacyText/>}
    />
  );
};

export default PrivacyCheckbox;
