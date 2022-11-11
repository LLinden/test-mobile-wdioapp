class HomeScreen {
    get form(){
        return $('id:Forms')
    }

    async selectForm() {
        this.form.click()
    }

}
module.exports = new HomeScreen