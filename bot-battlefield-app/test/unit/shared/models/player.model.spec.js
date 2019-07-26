import { assert } from 'chai';
import { beforeEach } from 'mocha';
import { Player } from '../../../../src/shared/model/player.model';

describe('[shared/models] Player', () => {
    let player = null;

    beforeEach(() => {
        player = new Player();
    });

    describe('properties', () => {
        const errorPhrase = "don't exists in Player";

        it('should have an "id"', () => {
            assert.isDefined(player.id, `"id" ${errorPhrase}`);
        });

        it('should have a "name"', () => {
            assert.isDefined(player.name, `"name" ${errorPhrase}`);
        });

        it('should have a "token"', () => {
            assert.isDefined(player.token, `"token" ${errorPhrase}`);
        });

    });
});
