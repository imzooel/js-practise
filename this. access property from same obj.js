const p100d = {
    Engine: "Electric",
    power: 503,
    type: "hatchback",
    voltage: 350,
    UKprice: "127750",
    BDprice: function (BDT) {
        this.BDprice = this.UKprice * BDT;
        return this.BDprice;
    },
    battery: "Li-ion",
}

console.log(p100d.BDprice(184))