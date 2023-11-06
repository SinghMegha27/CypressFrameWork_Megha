const selectors = {
    label : {
        shoppingCartText : "div#sc-active-cart>div>div>div>h1",
        cartProdcuts : "span.a-truncate-full",
    },
    button : {
        addToCartButton : "input#add-to-cart-button",
        cartButton : "div#attach-added-to-cart-message>div>div.a-col-right>div.a-spacing-top-small>form>span>span>input",
    },
    checkbox : {
        checkedbox : "div.sc-list-item-checkbox>label>input",
    }

}
class ShoppingCartPage{

    verifyShoppingCartText(expectedResult){
        cy.get(selectors.label.shoppingCartText).then((x) => {
            let cartText = x.text();
            let actualshoppingcartText = cartText.trim();
            expect(actualshoppingcartText).to.equal(expectedResult);
        }
        )
    }
    clickAddToCartButton(){
        let addtoCartBtn = cy.get(selectors.button.addToCartButton);
        if(addtoCartBtn.should("be.visible")){
            addtoCartBtn.click();
        }
        else{
            cy.log("The Product is Out of Stock");
        }  
    }
    clickOnCartButton(){
        cy.get(selectors.button.cartButton).should("be.enabled").click();
    }
    checkProductDisplayedAndChecked(expectedResult){
        cy.get(selectors.label.cartProdcuts).each(($el, index, $list) => {
            let item = $el.text();
            if(item.includes(expectedResult)){
                expect(item).to.equal(expectedResult);
            }
        })
        cy.get(selectors.checkbox.checkedbox).should("be.checked");
    }
}

export default ShoppingCartPage