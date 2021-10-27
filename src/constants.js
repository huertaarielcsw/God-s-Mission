const CONTRACT_ADDRESS = '0xd740555ED224d58AD1B856a9acBC443971Aa8B3E';

const transformCharacterData = (characterData) => {
  let character;
  try {
    character = {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
      defense: characterData.defense.toNumber(),
      sacredPower: characterData.sacredPower.toNumber(),
    };
  } catch (error) {
    character = {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  }
  return character;
};

export { CONTRACT_ADDRESS, transformCharacterData };
