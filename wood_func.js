function woodCalculator(chariQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chariQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood+tableWood+bedWood;
    return totalWood;
}

const a = woodCalculator(2,2,5);
console.log('Total Wood Needed: ', a);