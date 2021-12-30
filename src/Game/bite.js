const bite = async (attacker, defender) =>{
    const p = precision(attacker.pm)
    if ( p == 0){
        return 'Attack missed - 0 damage'
    }
    const punkJuiceMultiplier = 1.28
    if (attack)
    const attackPower = getRndInteger(0.7, 1) * (attacker.activeTurnPunkJuice > 0 ? punkJuiceMultiplier: 1);
    const defensePower = getRndInteger(0, 0.3)* (defender.activeTurnPunkJuice > 0 ? punkJuiceMultiplier: 1);
    const attackDamage = Math.round((attackPower - defensePower)*15) * attacker.am / defender.dm;
    defender.hp -= attackDamage;
    return `Damage = ${attackDamage}`;
};


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

function precision(pm){
    const p = Math.random();
    if (pm == 1){
        if (p <= 0.92){
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        if (p <= 0.90){
            return 1;
        }
        else {
            return 0;
        }
    }
};

module.exports = bite;
