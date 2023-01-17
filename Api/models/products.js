let BancoFake = require('./BancoFake.json')

module.exports = {

    
    GetAll(){
        return BancoFake;
    },
    GetCat(cat){
        let Produts = [];
        for (const item of BancoFake) {
            if(item.category == cat){
                Produts.push(item);
            }
        }
        return Produts;
    }
}