import './logger';
import {log} from "src/logger";
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {positive} from "src/some/positive";

describe('some functions test', function () {
  log.info('test');

  describe('positive', function () {

    it('should work with numbers', function () {
      expect(positive(1)).to.be.true;
      expect(positive(-1)).to.be.false;
    });
  })
});