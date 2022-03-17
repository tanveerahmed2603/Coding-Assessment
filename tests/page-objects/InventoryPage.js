class InventoryPage {

    /*
        Strategy would be to use either ID or classname for selectors.
        In some scenarios, we can make our selectors more modular.
        Leveraged websites dom strategy to make my elements more modular. (ex. selectSort, inventoryAddItem)
    */

    get sortDropdown(){ return $(`[class="product_sort_container"]`)};
    selectSort(value){ return $(`//*[text()='${value}']`)};
    inventoryItemAdd(value){ return $(`button[id='add-to-cart-${value}']`)};
    get cart(){ return $(`[class="shopping_cart_link"]`)};

    async sortBy(sortValue){
        await this.sortDropdown.click();
        await this.selectSort(sortValue).click();
    }

    async addItemToCart(items){
        let item = String(items.item).replace(/\s+/g, '-').toLowerCase(); // replacing space with - to leverage locator strategy
        await this.inventoryItemAdd(item).click();
    }

    async clickOnCart(){
        await this.cart.click();
    }



}

export default new InventoryPage();