// CSSMathMin对象
bodavm.memory.globalobj['CSSMathMin'] = function CSSMathMin(){if (!(this instanceof CSSMathMin)){return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathMin': Arguments can't be empty")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathMin'], "CSSMathMin");
bodavm.memory.globalobj['CSSMathMin'].prototype.__proto__=bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathMin'].__proto__=bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathMin', "values", {configurable:true, enumerable:true, get:function values (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathMin'].prototype, "CSSMathMin", "values_get", arguments)}, set:undefined},'prototype');