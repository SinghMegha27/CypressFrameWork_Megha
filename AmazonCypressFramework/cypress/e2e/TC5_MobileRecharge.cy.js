import HomePage from "../PageObjectModel/HomePage";
import AmazonPayPage from "../PageObjectModel/AmazonPayPage";
import MobileRechargePage from "../PageObjectModel/MobileRechargePage";
import PaymentMethodPage from "../PageObjectModel/PaymentMethodPage";

const homep = new HomePage();
const amazonpayp = new AmazonPayPage();
const mobilerechargep = new MobileRechargePage();
const paymentmethodp = new PaymentMethodPage();

describe("Verify Mobile Recharge", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    it("Validation of Mobile Recharge Plan", () => {
        cy.fixture("MobileNumberTestData").then((data) => {
            homep.clickOnAmazonPayLink();
            amazonpayp.verifyAmazonPayImageDisplayed();
            amazonpayp.clickOnMobileRecharge();
            mobilerechargep.verifyMobileRechargeTextDisplayed("Mobile Recharge");
            mobilerechargep.enterMobileNumber(data.mobileNumber);
            mobilerechargep.verifyOperatorNotNull();
            mobilerechargep.clickonViewPlan();
            mobilerechargep.chooseAnyPlan();
            mobilerechargep.clickOnContinueButton();
            paymentmethodp.verifyPaymentMethodTextDisplayed("Select a payment method");
        })

    })
    
}
)