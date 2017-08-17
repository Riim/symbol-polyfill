var Symbol = Function('return this;')().Symbol;

var idCounter = 0;

if (!Symbol) {
	Symbol = function Symbol(key) {
		return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__';
	};

	Symbol.iterator = Symbol('Symbol.iterator');
}

if (typeof module != 'undefined') {
	Symbol.default = Symbol;
	Symbol.__esModule = true;

	module.exports = Symbol.Symbol = Symbol;
} else {
	this.Symbol = Symbol;
}
