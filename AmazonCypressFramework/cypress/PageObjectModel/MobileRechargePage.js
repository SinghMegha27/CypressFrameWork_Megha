const selectors = {
    label : {
        mobilerechargetext : "div#categoryTitleBox>h2",
    },
    input : {
        mobile : "input#mobileNumberTextInputId",
        operator : "input#operatorAndCircleTextInputId",
    },
    link : {
        viewplan : "input#amountTextInputId",
    },
    button : {
        rechargeplan : "#POPULAR>tbody>tr:nth-child(3)>td>div>div+div>span",
        continuewithplan : "span#payButtonText",
        allplanprice : "#POPULAR>tbody>tr>td>div>div+div>span>span>span>strong",
        allplanbutton : "#POPULAR>tbody>tr>td>div>div+div>span",
    }

}
class MobileRechargePage{
    verifyMobileRechargeTextDisplayed(expectedName){
        cy.get(selectors.label.mobilerechargetext).each(($el, index, $list)=>{
            let item = $el.text();
            expect(item.trim()).to.contains(expectedName);
        })
    }
    enterMobileNumber(mobileNum){
        cy.get(selectors.input.mobile).type(mobileNum);
    }
    verifyOperatorNotNull(){
        cy.get(selectors.input.operator).then((x) => {
            let resultText = x.text();
            expect(resultText).to.not.equal(null);
        })
    }
    clickonViewPlan(){
        cy.wait(2000);
        cy.get(selectors.link.viewplan).click({force: true});
    }
    chooseAnyPlan(){
        cy.get(selectors.button.rechargeplan).click();
    }
    fetchandchooseplan(plan){
        cy.get(selectors.button.allplanprice).each(($el, index, $array)=>{
            if($el.text().includes(plan)){
                cy.get(selectors.button.allplanbutton).eq(index).click();
            }
        })
    }
    clickOnContinueButton(plan){
        cy.get(selectors.button.continuewithplan).then((value)=>{
            if(value.text().includes(plan)){
                cy.get(selectors.button.continuewithplan).click();
            }
        })
    }
    
}

export default MobileRechargePage