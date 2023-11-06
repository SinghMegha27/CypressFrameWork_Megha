import HomePage from "../PageObjectModel/HomePage";
import YourAccountPage from "../PageObjectModel/YourAccountPage";
import YourAddressPage from "../PageObjectModel/YourAddressPage";

const homep = new HomePage();
const youraccountp = new YourAccountPage();
const youraddressp = new YourAddressPage();

describe("Verification of adding new address ", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    it("Add New Address", () => {
        cy.fixture("AddressTestData").then((data) => {
            homep.clickOnSignInButton();
            youraccountp.verifyYourAccountPage("Your Account");
            youraccountp.clickOnYourAdress("Your Addresses");
            youraddressp.verifyYourAddressPage("Your Addresses");
            youraddressp.clickOnAddAdress("Add address");
            youraddressp.enterFullNameInToFullNameTextBox(data.fullname);
            youraddressp.enterMobileNumberToMobileNumberTextBox(data.mobilenumber);
            youraddressp.enterPinCodeToPinCodeTextBox(data.pincode);
            youraddressp.enterFlatNumberInToFlatNumberTextBox(data.flatnumber);
            youraddressp.enterStreetNumberIntoStreetNumberTextBox(data.areaname);
            youraddressp.enterLandMarkInToLandMarkTextBox(data.landmark);
            youraddressp.verifyTownCityIsNotNull();
            youraddressp.clickOnSubmitButton();
            youraddressp.verifyAdressSavedMessage("Address saved");
            youraddressp.verifyNameAfterAddingAddressSaved(data.fullname);
            youraddressp.verifyPhoneNumberAfterAddingAddressSaved(data.mobilenumber);
        })
        
    })
    
}
)