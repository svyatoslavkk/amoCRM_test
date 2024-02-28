class AmoCRMIntegration {
    constructor(widget, settings) {
        this.widget = widget;
        this.settings = settings;
        this.init();
    }

    init() {
        const saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click', this.handleSave.bind(this));
    }

    async handleSave() {
        const fieldA = document.getElementById('fieldA').value;
        const fieldB = document.getElementById('fieldB').value;

        const sum = parseFloat(fieldA) + parseFloat(fieldB);

        console.log('Сумма:', sum);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new AmoCRMIntegration();
});