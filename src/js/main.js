import $ from './lib/lib';

$('button').on('click', function () {
    $(this).addAttr('data-attr', '123').getAttr('data-attr');
});