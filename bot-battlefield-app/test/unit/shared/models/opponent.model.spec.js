import { assert } from 'chai';
import { beforeEach } from 'mocha';
import { Opponent } from '../../../../src/shared/model/opponent.model';

describe('[shared/models] Opponent', () => {
    let opponent = null;

    beforeEach(() => {
        opponent = new Opponent();
    });

    describe('properties', () => {
        const errorPhrase = "don't exists in Opponent";

        it('should have an "id"', () => {
            assert.isDefined(opponent.id, `"id" ${errorPhrase}`);
        });

        it('should have a "playerOne"', () => {
            assert.isDefined(opponent.playerOne, `"playerOne" ${errorPhrase}`);
        });

        it('should have a "playerTwo"', () => {
            assert.isDefined(opponent.playerTwo, `"playerTwo" ${errorPhrase}`);
        });

        it('should have a "game"', () => {
            assert.isDefined(opponent.game, `"game" ${errorPhrase}`);
        });

    });
});
