/** @format */

class SharkPunks{
    /**
	 * @typedef {{dm: number, am: number, hp: number, attackNext: boolean, activeTurnPunkJuice: number}} CommandOptions
	 * @param {boolean} hasHead
     * @param {boolean} hasGlasses
     * @param {boolean} hasWeaponLeft
     * @param {boolean} hasWeaponRight
     * @param {number} hp
	 */
    constructor(hasHead, hasGlasses, hasWeaponLeft, hasWeaponRight, hp){
        this.pm = this.getPrecisionMultiplier(hasGlasses);
        this.dm = this.getDefenseMutliplier(hasHead);
        this.am = this.getAttackMultiplier(hasWeaponLeft, hasWeaponRight);
        this.hp = hp;
        this.attackNext = false;
        this.activeTurnPunkJuice = 0
    }

    getDefenseMutliplier(hasHead)
    {
        defMultiplier = 1;
        if (hasHead == true){
            defMultiplier = defMultiplier * 1.1; 
        }
        return defMultiplier;
    }

    getAttackultiplier(hasWeaponLeft, hasWeaponRight)
    {
        attMultiplier = 1;
        if (hasWeaponLeft == true){
            attMultiplier = attMultiplier * 1.1; 
        }
        if (hasWeaponRight == true){
            attMultiplier = attMultiplier * 1.1; 
        }
        return attMultiplier;
    }

    getPrecisionMultiplier(hasGlasses){
        if (hasGlasses == true){
            return true;
        }
        return false;
    }
}

module.exports = SharkPunks;