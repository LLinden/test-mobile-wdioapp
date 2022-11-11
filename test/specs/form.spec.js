const formScreen = require("../screens/form.screen");
const homeScreen = require("../screens/home.screen");

describe("Access App and Fill Form", () => {
  it("should successfully fill form", async () => {
    homeScreen.selectForm();
    formScreen.typeInputField("Test");
    formScreen.selectDropdownValueByIndex(0);
    formScreen.clickButtonActive();
  });
});
