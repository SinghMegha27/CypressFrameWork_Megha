import HomePage from "../PageObjectModel/HomePage";
import PrimeMembershipDetailPage from "../PageObjectModel/PrimeMembershipDetailPage";

const homep = new HomePage();
const primemembershipp = new PrimeMembershipDetailPage();

describe("Join Primemembership is not a Prime Member", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    it("Validation of Joining PrimeMembership if not a Prime Member", () => {
        homep.clickOnSignInUsingMouseHover();
        homep.clickOnYourPrimeMembershipLink();
        primemembershipp.verifyPrimeMemberShip("You are not a Prime member.");
    })
    
}
)