(function ($) {
  "use strict";

  $.fn.formify = function (options) {

    var formify = this,
      formifyToken = options.token,
      formifySecret = options.secret,
      formifyURL = options.url,
      formifyFields = options.fields,
      formifyFieldsCount = formifyFields.length;

    formify.setFormSelector = function () {
      var selectorIsForm = $(this).prop('tagName').toLowerCase() === 'form';
      if (selectorIsForm) {
        formify.processFormData($(this));
      } else {
        $(this).append('<form class="formify"></form>');
        formify.processFormData($('.formify'));
      }
    };

    formify.processFormData = function (formifyForm) {
      var i, field, fieldType;
      for (i = 0; i < formifyFieldsCount; i += 1) {
        field = formifyFields[i];
        fieldType = field.type;
        formify.sortFieldType(formifyForm, fieldType, field);
      }

      formifyForm.append('<input type="submit" id="formifySubmit">');
    };

    formify.sortFieldType = function (formifyForm, type, field) {
      var fieldType = type,
        isTextType = fieldType === 'text',
        isSelectType = fieldType === 'select';

      if (isTextType) {
        formify.createTextInput(formifyForm, field);
      }
      if (isSelectType) {
        formify.createSelect(formifyForm, field);
      }
    };

    formify.createTextInput = function (formifyForm, field) {
      var name = field.name,
        label = field.label,
        placeholder = field.placeholder,
        required = field.required || false;

      formifyForm.append('<div class="formify-container">\n \
          <label class="formify-label" for="' + name + '">' + label + '</label>\n \
          <input type="text" id="' + name + '" placeholder="' + placeholder + '" required="' + required + '">\n \
        </div>');
    };

    formify.createSelect = function (formifyForm, field) {
      var i, option,
          name = field.name,
          label = field.label,
          placeholder = field.placeholder,
          selectOptions = field.fieldOptions,
          optionsCount = selectOptions.length,
          required = false || field.required;

      formifyForm.append('<div class="formify-container">\n \
          <select class="formify-select" id="' + name + '" required="' + required + '">\n \
          </select>\n \
        </div>');

      $('#'+name).append('<option selected="selected">' + placeholder + '</option>');

      for (i = 0; i < optionsCount; i+=1) {
        option = selectOptions[i];
        $('#'+name).append('<option value="' + option + '">' + option + '</option>');
      }
    }

    formify.processSubmit = function () {
      var formDataName = $('#name').value(),
          formDataEmail = $('#email').value(),
          formDataState = $('#state').value(),
          formdataNivel = $('#nivel').value();

      var formData = {
        'name': formDataName,
        'email': formDataEmail,
        'estado': formDataState,
        'nível': formdataNivel
      }

      var submitData = {
        'token': formifyToken,
        'secret': formifySecret,
        'lead': formData
      }
      $.ajax({
        type: "POST",
        url: formifyURL,
        data: submitData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
          alert('Envio efetuado com sucesso');
        },
        error: function(errMsg) {
            alert('Falha no envio: '+errMsg);
        }
      });
    }

    return formify.setFormSelector();
  };
})(jQuery);