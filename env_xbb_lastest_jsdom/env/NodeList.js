// NodeList对象
bodavm.memory.globalobj['NodeList'] = function NodeList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NodeList'], "NodeList");
bodavm.toolsFunc.defineProperty('NodeList', "entries", {configurable:true, enumerable:true, writable:true, value:function entries (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "entries", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "keys", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "values", {configurable:true, enumerable:true, writable:true, value:function values (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "values", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "forEach", {configurable:true, enumerable:true, writable:true, value:function forEach (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "forEach", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('NodeList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NodeList'].prototype, "NodeList", "item", arguments)}},'prototype');
