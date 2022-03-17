const expectChai = require('chai').expect
class CheckoutPage {

    /*
            Strategy would be to use either ID or classname for selectors.
            In some scenarios, we can make our selectors more modular.
            Leveraged websites dom strategy to make my elements more modular. (ex. itemInCart, itemsPrice)
    */

    get firstNameInputField(){ return $(`[id="first-name"]`)};
    get lastNameInputField(){ return $(`[id="last-name"]`)};
    get zipInputField(){ return $(`[id="postal-code"]`)};
    get continueButton(){ return $(`[id="continue"]`)};
    get finishButton(){ return $(`[id="finish"]`)};
    get subTotalAmount(){ return $(`[class="summary_subtotal_label"]`)};
    itemInCart(itemName){ return $(`//*[text()='${itemName}']`)};
    itemsPrice(element){ return $$(`[class="inventory_item_price"]`)[element]};

    async fillInfo(customerInfo){
        await this.firstNameInputField.setValue(customerInfo.first_name);
        await this.lastNameInputField.setValue(customerInfo.last_name);
        await this.zipInputField.setValue(customerInfo.zip);
    }

    async clickContinue(){
        await this.continueButton.click();
    }

    async clickFinish(){
        await this.finishButton.click();
    }

    async verifyItemsInCart(item){
        expect(await this.itemInCart(item)).toBeDisplayedInViewport();
    }

    async verifySubTotal(items){
        let subtotal = 0;
        for(let x in items){
          subtotal = subtotal + Number((await this.itemsPrice(x).getText()).replace("$",""));
        };
        expectChai(Number((await this.subTotalAmount.getText()).replace("Item total: $",""))).to.eq(subtotal);
    }


}

export default new CheckoutPage();