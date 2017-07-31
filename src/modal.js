/*
 * modal.js
 * Create a modal bootstrap component
 * http://getbootstrap.com/javascript/#modals
 */
(function() {

    var TARGET_MODAL = 'bsModal';
    var config = {};


    function setup() {
        return {
            'setConfig': setConfig,
            'show': show,
            'hide': hide,
        };
    }


    function hide(argument) {
        var target = getTarget();
        $(target).modal("toggle");
    }


    function show() {
        var target = getTarget();
        setHtml();

        $(target).modal('show');
    }


    function setConfig(data) {
        config.target = ['#', data.target].join('') || undefined;
        config.title = data.title || '';
        config.body = data.body || '';
        config.saveFn = data.saveFn || undefined;
    }


    function setHtml() {
        var html = '<div id="' + TARGET_MODAL + '" class="modal fade" tabindex="-1" role="dialog">';
        html += '	<div class="modal-dialog" role="document">';
        html += '         <div class="modal-content">';
        html += '             <div class="modal-header">';
        html += '                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        html += '                 <h4 class="modal-title">' + config.title + '</h4>';
        html += '             </div>';
        html += '             <div class="modal-body">';
        html += '                 ' + config.body + '';
        html += '             </div>';
        html += '             <div class="modal-footer">';
        html += '                 <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        html += '                 <button id="bsSaveButton" type="button" class="btn btn-primary">Guardar</button>';
        html += '             </div>';
        html += '         </div>';
        html += '     </div>';
        html += '</div>';

        $(config.target).html(html);

        $("#bsSaveButton").bind("click", function() {
            config.saveFn();
        });
    }


    function getTarget(argument) {
        return ['#', TARGET_MODAL].join('');
    }


    window.BsModalForm = setup();


})();
