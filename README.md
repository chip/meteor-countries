meteor-countries
================

Meteor package for providing a list of countries

Installation:

```
  meteor add chipcastle:countries
```


Example usage:

```
  <select>
    {{#each countries}}
      <option value="{{name}}">{{name}}</option>
    {{/each}}
  </select>
```

Source of country list:

Provided by the [US Department of State](http://www.state.gov/misc/list/)
