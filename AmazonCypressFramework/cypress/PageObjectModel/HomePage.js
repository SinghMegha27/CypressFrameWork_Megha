const selectors = {
    input : {
        searchTextBox : "input#twotabsearchtextbox",
    },
    button : {
        signInButton  : "input#nav-search-submit-button",
        languagesBox : "div#p_n_feature_three_browse-bin-title+ul>span>li>span>a>div+span",
    },
    label : {
        searchResultText : "div.a-spacing-top-small>span.a-text-bold",
        matchingResultText : "h2.s-line-clamp-2>a",
        languageNameText : "div.a-color-secondary>div>span.a-color-secondary:first-of-type",
    },
    link : {
        sigin : "a#nav-link-accountList",
        primemembership : "a[href$='nav_AccountFlyout_prime']",
        amazonpay : "a[href$='nav_cs_apay']",
    }

}
class HomePage{

    clickOnSignInButton(){
        cy.get(selectors.link.sigin).click();
    }
    enterProductDetailsInSearchBox(product){
        cy.get(selectors.input.searchTextBox).type(product);
    }
    clickOnSearchButton(){
        cy.get(selectors.button.signInButton).click();
    }
    verifySearchResultDisplayed(expectedResult){
        cy.get(selectors.label.searchResultText).then((x) => {
            let resultText = x.text();
            let actualresult = resultText.slice(1,-1);
            expect(actualresult).to.equal(expectedResult);
        })
    }
    findAndClickOnMatchingProduct(){
        cy.get(selectors.label.matchingResultText).invoke("removeAttr", "target").first().click();
    }
    checkBoxElements(value){
        cy.get(selectors.button.languagesBox).each(($x, index, $list)=>{
            let x = $x.text();
            if(x==value){
                cy.wrap($x).click();
            }
        })
    }
    matchingLanguageBooks(expectedName){
            cy.get(selectors.label.languageNameText).each(($el,index, $list)=>{
                expect($el.text()).to.equal(expectedName);
            })
    }
    clickOnSignInUsingMouseHover(){
        cy.get(selectors.link.sigin).trigger("mouseover")
    }
    clickOnYourPrimeMembershipLink(){
        cy.get(selectors.link.primemembership).click();
    }
    clickOnAmazonPayLink(){
        cy.get(selectors.link.amazonpay).click();
    }
}

export default HomePage