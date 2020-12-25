import * as Comlink from 'comlink';

const obj = {
  evaluate(codeStr, test) {
    // eslint-disable-next-line
    const response = eval(codeStr);
    return response;
  },
};

Comlink.expose(obj);
