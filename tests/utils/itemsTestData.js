class ItemsTestData {
    constructor(){
        this.items = [];
    }

    removeFromTestData(value){
       this.items = this.items.filter(function(x) {
            return x.item !== value
        });
    }

}

export default new ItemsTestData();