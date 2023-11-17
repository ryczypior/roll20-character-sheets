declare var $20: any;

declare function setAttrs(attrs: any): any;
declare function getAttrs(elements: any, method?: any): any;
declare function getSectionIDs(sectionName: any, callback: (idList: any) => void): any;
declare function generateRowID(): string;
declare function removeRepeatingRow(fieldName: string): any;

const fillRepeatingSectionFromData = (sectionName: string, dataList: []) => {
    getSectionIDs(`repeating_${sectionName}`, function (idList) {
    const existingRowAttributes: any[] = [];
    idList.map((id: any) => removeRepeatingRow(`repeating_${sectionName}_${id}`));
    getAttrs(existingRowAttributes, (v: any) => {
      const existingRowNames = existingRowAttributes.map((name: string) => v[name]),
        createdIDs: any[] = [],
        setting = dataList.filter((o: any) => !existingRowNames.includes(o.name))
          .map(o => {
            let rowID: string;
            while (!rowID) {
              let newID = generateRowID();
              if (!createdIDs.includes(newID)) {
                rowID = newID;
                createdIDs.push(rowID);
              }
            }
            return Object.keys(o).reduce((m: any, key) => {
              m[`repeating_${sectionName}_${rowID}_${key}`] = o[key];
              return m;
            }, {});
          })
          .reduce((m, o) => Object.assign(m, o), {});
      console.log(setting);
      setAttrs(setting);
    });
  });
};

$20('.selectCharacterButton').on('click', async (e: any) => {
  let character = characters[e.htmlAttributes['data-character']];
  if (!character) {
    console.log('Nie znaleziono postaci ' + e.htmlAttributes['data-character']);
  } else {
    let updateAttributes: any = {
      'character_name': character.name,
      'character_description': character.description,
      'pool_max': character.poll,
      'equipment': character.equipment,
      'statesInfo': character.statesInfo,
    };
    fillRepeatingSectionFromData(`secrets`, character.secrets);
    fillRepeatingSectionFromData(`keys`, character.keys);
    fillRepeatingSectionFromData(`condition`, character.states);
    for(let idx = 0; idx < 6; idx++){
      let name = '';
      if(character.traitsSections[idx]){
        name = character.traitsSections[idx].name;
        fillRepeatingSectionFromData(`tagx${idx}x0`, character.traitsSections[idx].traits);
        fillRepeatingSectionFromData(`tagx${idx}x1`, character.traitsSections[idx].traits_sgl_1);
        fillRepeatingSectionFromData(`tagx${idx}x2`, character.traitsSections[idx].traits_sgl_2);
      }
      updateAttributes[`trait_${idx}`] = name;
    }
    setAttrs(updateAttributes);
  }
  setAttrs({
    view_mode: "1"
  });
});

$20('.selectChar').on('click', async (e: any) => {
  setAttrs({
    view_mode: "0"
  });
});
