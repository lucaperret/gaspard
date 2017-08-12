# [gaspard](https://github.com/lucaperret/gaspard) *0.0.0-development*

> Lightweight DOM helpers


### src/attributes.js


#### hasClass(element, className) 

Determine whether the element is assigned the given class.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| className | `string`  | The class name to search for | &nbsp; |




##### Returns


- `boolean`  Result



#### addClass(element, classNames) 

Adds the specified class(es) to element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| classNames | `string`  | One or more space-separated classes to be added to the class attribute | &nbsp; |




##### Returns


- `Void`



#### removeClass(element, classNames) 

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| classNames | `string`  | One or more space-separated classes to be removed to the class attribute | &nbsp; |




##### Returns


- `Void`



#### toggleClass(element, classNames, state) 

Add or remove one or more classes from element, depending on either the class's presence or the value of the state argument.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| classNames | `string`  | One or more class names (separated by spaces) to be toggled for each element in the matched set | &nbsp; |
| state | `boolean`  | A Boolean value to determine whether the class should be added or removed | &nbsp; |




##### Returns


- `Void`



#### attr(element, attribute[, value]) 

Set the value of an attribute for the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| attribute | `string`  | The name of the attribute to set | &nbsp; |
| value | `string`  | A value to set for the attribute. If null, the specified attribute will be removed | *Optional* |




##### Returns


- `Void`



#### css(element, ruleName[, value]) 

Set a CSS property for the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| ruleName | `string`  | A CSS property | &nbsp; |
| value | `string`  | A value to set for the property | *Optional* |




##### Returns


- `Void`




### src/collection.js


#### new Collection([elements&#x3D;]) 

Use Collection class to perform actions on Elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| elements&#x3D; | `Array.<Element>` `Element` `string`  | DOM Elements, Element, or string to query the DOM | *Optional* |




##### Examples

```javascript
import { Collection } from 'gaspard'
const collection = new Collection('div.highlight')
collection
  .css('background-color', 'green')
  .find('p:first-child') // returns a new gaspard collection
  .addClass('introduction')
  .fadeIn(400)
  .elements // Array of matched elements
  .forEach(element => {
    console.log('div.highlight first paragraph', element)
  })
```


##### Returns


- `Collection`  Collection containing elements



#### Collection.each(method, params) 

Apply a method on each elements and returns the collection to chain methods




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| method | `Function`  | Accept a method to run on each elements | &nbsp; |
| params | `any`  | A list of argument to call the method with | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.addClass(classNames) 

Add classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.toggleClass(classNames, state) 

Toggle classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |
| state | `boolean`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.removeClass(classNames) 

Remove classes to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.attr(attribute, value) 

Set attribute to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| attribute | `string`  |  | &nbsp; |
| value | `any`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.css(ruleName, value) 

Set CSS value to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| ruleName | `string`  |  | &nbsp; |
| value | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.before(htmlString) 

Insert content before each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.after(htmlString) 

Insert content after each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.prepend(element) 

Prepend element to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.append(element) 

Append element to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.remove() 

Remove each elements






##### Returns


- `Collection`  Collection containing elements



#### Collection.text(textString) 

Set text to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| textString | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.html(htmlString) 

Set html to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.replaceWith(htmlString) 

Replace each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.fadeIn(duration) 

Fade in each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| duration | `number`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.fadeOut(duration) 

Fade out each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| duration | `number`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.hide() 

Hide each elements






##### Returns


- `Collection`  Collection containing elements



#### Collection.show() 

Show each elements






##### Returns


- `Collection`  Collection containing elements



#### Collection.on(eventName, eventHandler) 

Attach an event handler function for each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| eventHandler | `Function`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.off(eventName, eventHandler) 

Remove an event handler function for each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| eventHandler | `Function`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.trigger(eventName, data) 

Execute all handlers to each elements




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| eventName | `string`  |  | &nbsp; |
| data | `Object`  |  | &nbsp; |




##### Returns


- `Collection`  Collection containing elements



#### Collection.find(selector) 

Returns a collection of matched elements either found in the DOM based on passed argument




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string`  | Accepts a string containing a CSS selector which is then used to match a set of elements | &nbsp; |




##### Returns


- `Collection`  Collection containing elements




### src/content.js


#### parseHTML(htmlString) 

Parses a string into an array of DOM nodes.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| htmlString | `string`  | HTML string to be parsed | &nbsp; |




##### Returns


- `Array.&lt;Element&gt;`  DOM nodes



#### before(element, htmlString) 

Insert content, specified by the second parameter, before the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| htmlString | `string`  | HTML string to insert | &nbsp; |




##### Returns


- `Void`



#### after(element, htmlString) 

Insert content, specified by the second parameter, after the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| htmlString | `string`  | HTML string to insert | &nbsp; |




##### Returns


- `Void`



#### prepend(parent, element) 

Insert an element, specified by the second parameter, to the beginning of the parent element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Element`  | Parent DOM element | &nbsp; |
| element | `Element`  | DOM element to insert | &nbsp; |




##### Returns


- `Void`



#### append(parent, element) 

Insert an element, specified by the second parameter, to the end of the parent element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| parent | `Element`  | Parent DOM element | &nbsp; |
| element | `Element`  | DOM element to insert | &nbsp; |




##### Returns


- `Void`



#### clone(element) 

Create a deep copy of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Element`  Cloned DOM Element



#### remove(element) 

Remove the element from the DOM




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | The element to remove | &nbsp; |




##### Returns


- `Void`



#### text(element, textString) 

Set the content of the element to the specified text.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| textString | `string`  | The text to set as the content of the element. When Number or Boolean is supplied, it will be converted to a String representation. | &nbsp; |




##### Returns


- `Void`



#### html(element, htmlString) 

Set the HTML contents of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| htmlString | `string`  | A string of HTML to set as the content | &nbsp; |




##### Returns


- `Void`



#### replaceWith(element, htmlString) 

Replace element with the provided new content.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| htmlString | `string`  | The HTML string content to insert | &nbsp; |




##### Returns


- `Void`




### src/effects.js


#### fade(element[, duration&#x3D;400], isFadeIn)  *private method*

Fade in or out the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| duration&#x3D;400 | `number`  | A number determining how long the animation will run | *Optional* |
| isFadeIn | `boolean`  | Determine fadeIn or fadeOut | &nbsp; |




##### Returns


- `Void`



#### fadeIn(element[, duration&#x3D;400]) 

Display the elements by fading them to opaque.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| duration&#x3D;400 | `number`  | A number determining how long the animation will run | *Optional* |




##### Returns


- `Void`



#### fadeOut(element[, duration&#x3D;400]) 

Hide the element by fading them to transparent.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| duration&#x3D;400 | `number`  | A number determining how long the animation will run | *Optional* |




##### Returns


- `Void`



#### hide(element) 

Hide the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Void`



#### show(element) 

Show the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Void`




### src/events.js


#### off(element, eventName, eventHandler) 

Remove an event handler.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| eventName | `string`  | An event type | &nbsp; |
| eventHandler | `Function`  | A handler function previously attached for the event | &nbsp; |




##### Returns


- `Void`



#### on(element, eventName, eventHandler) 

Attach an event handler function for the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| eventName | `string`  | An event type | &nbsp; |
| eventHandler | `Function`  | A function to execute when the event is triggered | &nbsp; |




##### Returns


- `Void`



#### trigger(element, eventName[, data&#x3D;{}]) 

Execute all handlers and behaviors attached to the element for the given event type.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| eventName | `string`  | An event type | &nbsp; |
| data&#x3D;{} | `Object`  | Additional parameters to pass along to the event handler. | *Optional* |




##### Returns


- `Void`



#### documentReady(callback) 

Specify a function to execute when the DOM is fully loaded.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| callback | `Function`  | A function to execute after the DOM is ready. | &nbsp; |




##### Returns


- `Void`




### src/positions.js


#### viewportPosition(element) 

Get the size of the element and its position relative to the viewport.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Object`  Object with properties: left, top, right, bottom, x, y, width, height



#### offset(element) 

Get the current coordinates of the element, relative to the document.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Object`  Contain the properties top and left



#### position(element) 

Get the current coordinates of the element, relative to the offset parent.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Object`  Contain the properties top and left



#### outerHeight(element, withMargin) 

Get the current computed outer height (including padding, border, and optionally margin) for the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| withMargin | `boolean`  | A Boolean indicating whether to include the element's margin in the calculation. | &nbsp; |




##### Returns


- `number`  Height of the element, including top and bottom padding, border, and optionally margin, in pixels



#### outerWidth(element, withMargin) 

Get the current computed outer width (including padding, border, and optionally margin) for the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| withMargin | `boolean`  | A Boolean indicating whether to include the element's margin in the calculation. | &nbsp; |




##### Returns


- `number`  Width of the element, including left and right padding, border, and optionally margin, in pixels




### src/selectors.js


#### find(selector[, context&#x3D;document]) 

Returns a collection of matched elements either found in the DOM based on passed argument




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| selector | `string`  | Accepts a string containing a CSS selector which is then used to match a set of elements | &nbsp; |
| context&#x3D;document | `HTMLDocument` `Element`  | A DOM Element or Document | *Optional* |




##### Returns


- `Array`  A collection of DOM Elements



#### is(element, selectorOrElement) 

Check the element against a selector or element, and returns true if the element match the given argument.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| selectorOrElement | `string` `Element`  | A string containing a selector expression or a DOM node | &nbsp; |




##### Returns


- `boolean`  Is element match with selectorOrElement



#### contains(element, child) 

Check to see if a DOM element is a descendant of another DOM element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |
| child | `Element`  | A potential child DOM node | &nbsp; |




##### Returns


- `boolean`  Is element has child as a descendant



#### prev(element) 

Get the immediately preceding sibling of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Element`  The previous DOM node



#### next(element) 

Get the immediately following sibling of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Element`  The following DOM node



#### siblings(element) 

Get the siblings of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Array`  Siblings DOM nodes



#### parent(element) 

Get the parent of the element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `Element`  | A DOM node | &nbsp; |




##### Returns


- `Element`  The parent DOM node




### src/utils.js


#### toCamelCase(kebabCaseString) 

Transform kebab case string into camel case strings array




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| kebabCaseString | `string`  | The kebab case string | &nbsp; |




##### Returns


- `string`  The camel case transformed string



#### getRealClassNamesArray([classNames&#x3D;&#x27;&#x27;]) 

Filter incorrect class names.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| classNames&#x3D;&#x27;&#x27; | `string`  | One or more space-separated classes to be filtered | *Optional* |




##### Returns


- `Array`  Valid class names array




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
