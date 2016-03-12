# RegExpValidation

Validations Test For Strings, Numbers and Objects in JavaScript using Regular Expressions

## Install 

Install with [npm](https://www.npmjs.com) 

```sh
$ npm install regexpvalidator --save
```


## Usage
```
var regExpValidation = require('RegExpValidation')
```

## API

RegExpValidator provides a range of APIs for you to validate and filter javascript data types
### Validations

#### Strings


##### .containsOnlyLetters(string)

Method allows you to test if the string contain only letters
 
```
regExpValidation.containsOnlyLetters('regularExpressions')
//=> true
regExpValidation.containsOnlyLetters('REGULAREXPRESSSION')
//=> true
regExpValidation.containsOnlyLetters('a@a.com')
//=> false
regExpValidation.containsOnlyLetters('a123')
//=> false
regExpValidation.containsOnlyLetters(' ')
//=> false
regExpValidation.containsOnlyLetters('_$%#@')
//=> false
```




##### .containsOnlySmallCaseLetters(string)

Method allows you to test if the string contain only small case letters
 
 
```
regExpValidation.containsOnlySmallCaseLetters('regularexpressions')
//=> true
regExpValidation.containsOnlySmallCaseLetters('regularExpressions')
//=> false
``` 

##### .containsOnlyCapsLetters(string)

Method allows you to test if the string contain only capital case letters

``` 
regExpValidation.containsOnlyCapsLetters('REGULAREXPRESSIONS')
//=> true
regExpValidation.containsOnlySmallCaseLetters('ReGULaREXPreSSIONS')
//=> false
```

##### .matchStringWithPattern(string,pattern)

Method allows you to test if the pattern matches in the string


##### .isValidEmail(string)

Method allows you to test if the string is a valid email

```
regExpValidation.isValidEmail('a@a.com')
//=> true
regExpValidation.isValidEmail('abcd')
//=> false
regExpValidation.isValidEmail(' ')
//=> false
regExpValidation.isValidEmail('_$%#@')
//=> false
```

#### Numbers

##### .isNumber(string)

Method allows you to test if the string is a valid number

```
regExpValidation.isNumber(45)
//=> true
regExpValidation.isNumber('65')
//=> true
regExpValidation.isNumber('-39')
//=> true
regExpValidation.isNumber('-0')
//=> true
regExpValidation.isNumber('-39myFox')
//=> false
```



##### .isDecimalNumber(string)

Method allows you to test if the string is a valid decimal number


```
regExpValidation.isDecimalNumber(8.97)
//=> true
regExpValidation.isDecimalNumber('-8.74')
//=> true
regExpValidation.isDecimalNumber(45)
//=> false
regExpValidation.isDecimalNumber('-0.00')
//=> true
regExpValidation.isDecimalNumber('-39.088myFox')
//=> false
```


##### .hasNDecimalPlaces(string,n)

Method allows you to test if the string has n decimal places

```
regExpValidation.hasNDecimalPlaces(8.97,2)
//=> true
regExpValidation.hasNDecimalPlaces('-8.74',2)
//=> true
regExpValidation.hasNDecimalPlaces(45,0)
//=> true
regExpValidation.hasNDecimalPlaces('-8.74',3)
//=> false
regExpValidation.hasNDecimalPlaces('-0.00',2)
//=> true
```

### Filter

##### .filterNumbers(string)

Method allows you filter all the numbers in a string


```
regExpValidation.filterNumbers('abcd')
//=> ''
regExpValidation.filterNumbers(-39)
//=> '-39'
regExpValidation.filterNumbers('3_BOXES_HAVE_55_BALLS')
//=> '355'
```


##### .filterCharacters(string)

Method allows you filter all the characters in a string

```
regExpValidation.filterNumbers('abcd')
//=> 'abcd'
regExpValidation.filterNumbers(-39)
//=> ''
regExpValidation.filterNumbers('3_BOXES_HAVE_55_BALLS')
//=> 'BOXESHAVEBALLS'
```



