//Problem-3
function oilPrice(DieselQuantity, PetrolQuantity, OctaneQuantity){
    if(typeof(DieselQuantity)==="number" && typeof(PetrolQuantity)==="number" && typeof(OctaneQuantity)==="number"){
    const perLiterDiesel = 114;
    const perLiterPetrol = 130;
    const perLiterOctane = 135;

    const Diesel = DieselQuantity * perLiterDiesel;
    const Petrol = PetrolQuantity * perLiterPetrol;
    const Octane = OctaneQuantity * perLiterOctane;

    const totalOil = Diesel + Petrol + Octane;
    return totalOil;
    }
    else{
        let a='Please Enter Number';
        return a;
    }
}
const total = oilPrice(1,0,2);
console.log(total);