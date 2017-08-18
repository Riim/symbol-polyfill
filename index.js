var global = Function('return this;')();
var Symbol = global.Symbol;

var idCounter = 0;

if (!Symbol) {
	Symbol = function Symbol(key) {
		return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__';
	};

	Symbol.iterator = Symbol('Symbol.iterator');
}

(typeof module != 'undefined' ? exports : global).Symbol = Symbol;
