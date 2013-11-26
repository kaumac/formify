Formify: Simple form manipulations
==================================

How to use it
-------------

You can download and include the formify jQuery plugin on your page, like this:
```html
<script type="text/javascript" src="jquery.formify.js"></script>
```
Formify depends on jQuery, so you need to include it before the plugin.
(ZeptoJS is untested, but should work just fine also).

###initilizing the plugin

You can initialize the plugin by calling the formify function on a form element or a container selector.

```javascript
$('#formify-container-example').formify(options);
```

If you specify a **form** element, Formify will just add fields to this form element. If you specify a container like a **div** or **article** tag, formify will create a **form** element with the fields inside, inside this container.

###Options

Formify expects an Object to be passed as option parameter with an Array Object specifying the fields. Each item of the Array must be an Object, which can contain the following options:

-   ***type*** (*String*) the type of field, can be either:
    - ***text*** for text fields
    - ***select*** for multi selections dropdowns

-   ***name*** (*String*) the name of this field
-   ***label*** (*String*) label content for this field
-   ***placeholder*** (*String*) placeholder text for this field
-   ***required*** (*Boolean*) wheter this field is required or not. (defaults to *false*)
-   ***fieldOptions*** (*Array Object*) a set of options for the multi selection dropdown

###Example with fields
```javascript
$(function () {
    $('.form-container').formify({
      url: 'http://mockit.com/contact/new',
      token: '62bb61431348e22850828a5829c4373faafe29c1',
      secret: '51a266c2844ccd5cac83d88de88d82d05358aa51',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          placeholder: "What's your name?",
          required: true
        },
        {
          type: 'text',
          name: 'email',
          label: 'E-mail',
          placeholder: "What's your e-mail?",
          required: true
        },
        {
          type: 'select',
          name: 'state',
          label: 'Estado',
          placeholder: 'Where are you from?',
          fieldOptions: [
            'PR',
            'SC',
            'SP',
            'RS'
          ]
        }
      ]
    });
  });
```