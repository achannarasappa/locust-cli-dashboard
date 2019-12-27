const { assert } = require('chai');
const sinon = require('sinon');
const terminalKit = require('terminal-kit');
const term = require('./index');

const TERMINAL_KIT_FUNCTION_STUBS = [
  'windowTitle',
  'fullscreen',
  'grabInput',
  'hideCursor',
];

describe('term', () => {

  describe('start', () => {

    let terminal;
    let terminalStubs;

    before(() => {

      terminal = terminalKit.createTerminal();

      terminalStubs = TERMINAL_KIT_FUNCTION_STUBS
        .reduce(
          (acc, functionName) => Object.assign(
            acc,
            {
              [functionName]: sinon.stub(terminal, functionName),
            },
          ),
          {},
        );

    });

    it('clears and sets up the terminal', () => {

      term.start(sinon.spy(), terminal);

      assert.ok(terminalStubs.grabInput.calledOnce);
      assert.ok(terminalStubs.fullscreen.calledOnce);
      assert.ok(terminalStubs.windowTitle.calledOnce);
      // assert.ok(terminalStubs.hideCursor.calledOnce);

    });

    context('when exit key(s) are input', () => {

      it('runs the exit callback and stops the terminal session');

    });

  });

  describe('stop', () => {

    it('resets the terminal and exits after a delay');

  });

});
