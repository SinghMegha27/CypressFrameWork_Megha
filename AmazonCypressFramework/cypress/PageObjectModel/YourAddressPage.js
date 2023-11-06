const selectors = {
    label : {
        yourAdressText : "h1.a-spacing-medium",
        addressSavedText : "h4.a-alert-heading",
        fullnameaftersavingaddress : "span#address-ui-widgets-FullName",
        phonenumberaftersavingaddress : "span#address-ui-widgets-PhoneNumber",
    },
    button : {
        addAddress : "h2.a-color-tertiary",
        submitbutton : "span#address-ui-widgets-form-submit-button>span>input.a-button-input",
    },
    input : {
        fullname : "input#address-ui-widgets-enterAddressFullName",
        mobilenumber : "input#address-ui-widgets-enterAddressPhoneNumber",
        pincode : "input#address-ui-widgets-enterAddressPostalCode",
        flatnumber : "input#address-ui-widgets-enterAddressLine1",
        streetname : "input#address-ui-widgets-enterAddressLine2",
        landmark : "input#address-ui-widgets-landmark",
        towncity : "input#address-ui-widgets-enterAddressCity",
    }

}
class YourAddressPage{
    verifyYourAddressPage(expectedName){
        cy.get(selectors.label.yourAdressText).then((x) => {
            let displayedText = x.text();
            let actualText = displayedText.trim();
            expect(actualText).to.equal(expectedName);
        }
        )
    }

    clickOnAddAdress(expectedName){
        cy.get(selectors.button.addAddress).each(($x, index, $list)=>{
            let x = $x.text();
            if(x.trim()==expectedName){
                cy.wrap($x).click();
            }
        })
    }
    enterFullNameInToFullNameTextBox(name){
        cy.wait(1000);
        cy.get(selectors.input.fullname).type(name);
    }
    enterMobileNumberToMobileNumberTextBox(number){
        cy.wait(1000);
        cy.get(selectors.input.mobilenumber).type(number);
    }
    enterPinCodeToPinCodeTextBox(pin){
        cy.wait(1000);
        cy.get(selectors.input.pincode).type(pin);
    }
    enterFlatNumberInToFlatNumberTextBox(flatnum){
        cy.wait(1000);
        cy.get(selectors.input.flatnumber).type(flatnum);
    }
    enterStreetNumberIntoStreetNumberTextBox(streetname){
        cy.wait(1000);
        cy.get(selectors.input.streetname).type(streetname);
    }
    enterLandMarkInToLandMarkTextBox(landmark){
        cy.wait(1000);
        cy.get(selectors.input.landmark).type(landmark);
    }
    verifyTownCityIsNotNull(){
        cy.get(selectors.input.towncity).then((x) => {
            let resultText = x.text();
            expect(resultText).to.not.equal(null);
        })
    }
    clickOnSubmitButton(){
        cy.get(selectors.button.submitbutton).click();
    }
    verifyAdressSavedMessage(expectedName){
        cy.get(selectors.label.addressSavedText).then((x) => {
            let displayedText = x.text();
            let actualText = displayedText.trim();
            expect(actualText).to.equal(expectedName);
        }
        )
    }
    verifyNameAfterAddingAddressSaved(expectedName){
        cy.get(selectors.label.fullnameaftersavingaddress).each(($el, index, $list)=>{
            let item = $el.text();
            expect(expectedName).to.contains(item.trim());
        })
    }
    verifyPhoneNumberAfterAddingAddressSaved(expectedName){
        cy.get(selectors.label.phonenumberaftersavingaddress).each(($el, index, $list)=>{
            let item = $el.text();
            expect(item.trim()).to.contains(expectedName);
        })
    }
}

export default YourAddressPage