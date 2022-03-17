import { Given, When, Then } from '@cucumber/cucumber';

import HomePage from '../page-objects/homePage.js';
import Page from '../page-objects/page.js';
import InventoryPage from '../page-objects/inventoryPage.js';
import CartPage from '../page-objects/cartPage.js';
import CheckoutPage from '../page-objects/checkoutPage.js';
import ItemsTestData from '../utils/itemsTestData.js';


Given(/^I go to Sauce Demo homepage$/, async () => {
  await browser.url('http://www.saucedemo.com');
});

When(/^I enter username '(.*)' and password '(.*)'$/, async (username, password) => {
    await HomePage.inputUsernameAndPassword(username,password);
});

When(/^I click login$/, async () => {
    await HomePage.clickLogin();
});

When(/^I sort the items by$/, async (datatable) => {
    await InventoryPage.sortBy(datatable.hashes()[0].sort);
    await browser.pause(3000);
});


When(/^I add items to cart$/, async (datatable) => {
    for(let x in datatable.hashes()){
        ItemsTestData.items.push(datatable.hashes()[x]);
        await InventoryPage.addItemToCart(datatable.hashes()[x]);
    };
});

When(/^I remove items from cart$/, async (datatable) => {
    for(let x in datatable.hashes()){
       await ItemsTestData.removeFromTestData(datatable.hashes()[x].item);
       await CartPage.removeItemFromCart(datatable.hashes()[x]);
    };
});

When(/^I visit the shopping cart$/, async () => {
    await InventoryPage.clickOnCart();
    await browser.pause(3000);
});

When(/^I fill my info$/, async (datatable) => {
    await CheckoutPage.fillInfo(datatable.hashes()[0]);
});

When(/^I go back$/, async () => {
    await Page.clickBack();
    await browser.pause(3000);
});

When(/^I click checkout$/, async () => {
    await CartPage.clickCheckout();
    await browser.pause(3000);
});

When(/^I click continue$/, async () => {
    await CheckoutPage.clickContinue();
    await browser.pause(3000);
});

When(/^I click finish$/, async () => {
    await CheckoutPage.clickFinish();
    await browser.pause(3000);
});

Then(/^I am navigated to (.*) page$/, async (slug) => {
    await Page.verifyPage(slug);
});

Then(/^I can view the items I selected to add to cart$/, async () => {
    for(let x in ItemsTestData.items){
        await CartPage.verifyItemsInCart(ItemsTestData.items[x].item);
    };
});

Then(/^I verify items I am purchasing my selected items$/, async () => {
    for(let x in ItemsTestData.items){
        await CheckoutPage.verifyItemsInCart(ItemsTestData.items[x].item);
    };
});

Then(/^I verify item sub-total$/, async () => {
    await CheckoutPage.verifySubTotal(ItemsTestData.items);
});


