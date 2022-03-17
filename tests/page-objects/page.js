
/*
    Browser commands page. Could be extended to other page objects.
*/

class Page{

   async verifyPage(expectedUrl){
       await expect(browser).toHaveUrlContaining(expectedUrl);
    }

   async clickBack(){
        await browser.back();
   }
}

export default new Page();