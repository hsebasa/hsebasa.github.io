
describe("A suite", function() {
    beforeEach(module('musicApp.resources'));

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    // Factory of interest is called globalData
    describe('factory: globalData', function() {
        var factory = null;
        beforeEach(inject(function(globalData) {
            factory = globalData;
        }));

        it('Should define atribute limitSearch', function() {
            expect(factory.limitSearch).toBe(8);
        });

        it('Should define atribute offsetAlbums', function() {
            expect(factory.offsetAlbums).toBe(0);
        });

        it('Should define atribute offsetArtists', function() {
            expect(factory.offsetArtists).toBe(0);
        });

        it('Should define atribute offsetTracks', function() {
            expect(factory.offsetTracks).toBe(0);
        });

        it('Should define atribute url_api', function() {
            expect(factory.url_api).toBe('https://api.spotify.com');
        });

        it('Should define atribute results', function() {
            expect(factory.results).toEqual(jasmine.objectContaining({'albums': {'json_data':[]},
                'artists': {'json_data':[]},
                'tracks': {'json_data':[]}}));
        });

        it('Should define atribute results', function() {
            expect(factory.results).toEqual({'albums': {'json_data':[]},
                'artists': {'json_data':[]},
                'tracks': {'json_data':[]}});
        });








    });

});

