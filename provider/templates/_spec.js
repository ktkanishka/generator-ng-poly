/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('<%= lowerCamel %>', function () {
  var provider;

  beforeEach(module('<%= appName %>'));

  beforeEach(inject(function (<%= lowerCamel %>) {
    provider = <%= lowerCamel %>;
  }));

  it('should equal <%= lowerCamel %>', function () {
    expect(provider.$get()).toEqual('<%= lowerCamel %>');
  });

});