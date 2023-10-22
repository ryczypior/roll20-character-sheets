declare var $20: any;
declare function setAttrs({ }): any;
declare function getAttrs([]): any;

$20('.selectCharacterButton').on('click', async (e: any) => {
  console.log(JSON.stringify(e));
  console.log($20('[name="attr_view_mode"]'));
  setAttrs({
    view_mode: "1"
  });
  //$20('[name="attr_view_mode"]').attr("value", "1");
});

$20('.selectChar').on('click', async (e: any)=> {
  setAttrs({
    view_mode: "0"
  });
});
