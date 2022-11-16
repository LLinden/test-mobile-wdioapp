class FormScreen {
    get inputField() {
        return $('id:text-input')
    }

    get dropdown() {
        return $('id:Dropdown')
    }

    get buttonActive() {
        return $('id:button-Active')
    }

    get buttonOk()  {
        return $('android:id/button1')
    }

    async typeInputField(text) {
        this.inputField.setValue(text)
    }

    async selectDropdownValueByIndex(index) {
        this.dropdown.selectByIndex(index)
    }

    async clickButtonActive() {
        this.buttonActive.click()
    }

    async validateButtonOk() {
        expect(this.buttonOk).toBeDisplayed()
    }

}
module.exports = new FormScreen