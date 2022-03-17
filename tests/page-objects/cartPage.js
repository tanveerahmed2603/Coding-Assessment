class CartPage {

    itemInCart(itemName){ return $(`//*[text()='${itemName}']`)};
    inventoryItemRemove(value){ return $(`button[id='remove-${value}']`)};
    get checkout(){ return $(`[id="checkout"]`)};


    async verifyItemsInCart(item){
       expect(await this.itemInCart(item)).toBeDisplayedInViewport();
    }

    async removeItemFromCart(items){
        let item = String(items.item).replace(/\s+/g, '-').toLowerCase();
        await this.inventoryItemRemove(item).click();
    }

    async clickCheckout(){
        await this.checkout.click();
    }





}

export default new CartPage();