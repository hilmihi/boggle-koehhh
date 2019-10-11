const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { validasiKata, ERROR_GAME } = require('../src/js/validasi-kata.js')

let list = ["ADIPIC", "ADORE", "ADORN", "ADUNC", "CIDER", "CIRE", "CLIP", "CULICID", "CUPID", "CURD", "CURE", "CURED", "CURN", "DAGO", "DIRE", "DOER", "DORE", "DRIP", "DURE", "DURN", "DURO", "GADI", "GIRD", "GIRN", "GIRO", "GOAD", "GOER", "GORE", "GORED", "IRED", "LIDO", "LIPID", "LIPIDE", "LIRE", "LUDE", "LUDIC", "LUER", "LURED", "LURID", "LUXE", "NUCLIDE", "NUCLIDIC", "NUDE", "NUDER", "NURD", "ODIC", "PIRN", "PIROG", "PIROGI", "PUDIC", "PULI", "PULICIDE", "PURDA", "PURE", "PURI", "REDIP", "REDO", "REDUX", "RIDE", "RIGID", "ROAD", "Rode", "Rude", "Unclip", "Unrig", "Unrip", "Uredo", "Uric", "Xeric"];

describe('validasi kata', function () {

    it('harus menghasilkan true untuk db', async function () {
        let valid = await validasiKata('ADORE', list);
        expect(valid).to.be.eq(true);
        valid = await validasiKata("CupID", list);
        expect(valid).to.be.eq(true);
        valid = await validasiKata("Chat", list);
        expect(valid).to.be.eq(false);
        valid = await validasiKata("dvadsvA", list);
        expect(valid).to.be.eq(false);
        valid = await validasiKata("xxxx", list);
        expect(valid).to.be.eq(false);

    });

    context('input tidak valid', function () {
        it('harusnya keluar error', function () {
            valid = validasiKata(2, list);
            expect(valid).to.be.rejectedWith(Error, ERROR_GAME);
            valid = validasiKata(4, list);
            expect(valid).to.be.rejectedWith(Error, ERROR_GAME);
        })
    });


})
