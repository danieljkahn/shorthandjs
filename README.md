# shorthandjs
Simple utility functions to help clean up your code. No more repetitive querySelector and addEventListener cluttering the space. Basically a super skinny jquery with familiar functions like the DOM selector $(''), .click(), .addClass(), etc...

## Usage
Just drop the JS file into your project before your other scripts and use the functions, no initialization needed or docready, etc.
- Add / remove class
```
$('#my-element').addClass('my-class');
$('#my-element').removeClass('my-class');

// multiple classes
$('#my-element').addClass(['my-class','another-class']);
$('#my-element').removeClass(['my-class','another-class']);
```
- Add click handler
```
$('#my-element').click(function(){
    console.log('pretty straightforward');
})
```