const selectors = {
    label : {
        matchingProductText : "span#productTitle",
    },
    button : {
        addToCartButton : "input#add-to-cart-button",
        cartButton : "div#attach-added-to-cart-message>div>div.a-col-right>div.a-spacing-top-small>form>span>span>input",
    }

}
class ProductDetailsPage{

    verifyMatchingProduct(expectedResult){
        cy.get(selectors.label.matchingProductText).then((x) => {
            let productText = x.text();
            let actualproductText = productText.trim();
            expect(actualproductText).to.equal(expectedResult);
        }
        )
    }
    clickAddToCartButton(){
        let addtoCartBtn = cy.get(selectors.button.addToCartButton);
        if(addtoCartBtn.should("be.visible")){
            cy.wait(1000);
            addtoCartBtn.click();
        }
        else{
            cy.log("The Product is Out of Stock");
        }
        
    }
    clickOnCartButton(){
        cy.get(selectors.button.cartButton).should("be.enabled").click({ force: true });
    }
}

export default ProductDetailsPage