"use strict";describe("musicApp.version module",function(){beforeEach(module("musicApp.version")),describe("version service",function(){it("should return current version",inject(function(e){expect(e).toEqual("0.1")}))})});