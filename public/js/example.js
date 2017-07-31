(function() {

    BsModalForm.setConfig({
        'target': 'modalOne',
        'title': 'Titulo',
        'body': 'Contenido',
        'saveFn': onSave
    });

    BsModalForm.show();


    function onSave() {
        console.log('On click save', BsModalForm);
        BsModalForm.hide();
    }

})();
