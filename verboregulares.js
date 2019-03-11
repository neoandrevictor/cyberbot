'use strict';
var normalizePrefix = function normalizePrefix(prefix, options) {
    var option = options.find(function (opt) {
      return RegExp(opt.ifIs + '$').test(prefix);
    });
  
    if (!option) {
      return prefix
    }
  
    var regex = RegExp(option.ifIs + '$');
    var replacer = option.replaceBy;
  
    return prefix.replace(regex, replacer);
  }
  
var parseVerb = function parseVerb(verb) {
    var prefix = verb.replace(/(?:[aei]|pô)r$/i, '');
    var suffix = verb.replace(/^.*((?:[aei]|pô)r)$/i, '$1');
  
    return {
      prefix: prefix,
      suffix: suffix
    };
  };
var buildAr = function buildAr(prefix) {
    return {
      p: [
        prefix + 'o',
        prefix + 'as',
        prefix + 'a',
        prefix + 'amos',
        prefix + 'ais',
        prefix + 'am'
      ],
      pi: [
        prefix + 'ava',
        prefix + 'avas',
        prefix + 'ava',
        prefix + 'ávamos',
        prefix + 'áveis',
        prefix + 'avam'
      ],
      pp: [
        normalizePrefix(prefix, [
          {
            ifIs: 'ç',
            replaceBy: 'c'
          },
          {
            ifIs: 'c',
            replaceBy: 'qu'
          },
          {
            ifIs: 'g',
            replaceBy: 'gu'
          },
        ]) + 'ei',
        prefix + 'aste',
        prefix + 'ou',
        prefix + 'amos',
        prefix + 'astes',
        prefix + 'aram'
      ],
      pmqp: [
        prefix + 'ara',
        prefix + 'aras',
        prefix + 'ara',
        prefix + 'áramos',
        prefix + 'áreis',
        prefix + 'aram'
      ],
      fpte: [
        prefix + 'arei',
        prefix + 'arás',
        prefix + 'ará',
        prefix + 'aremos',
        prefix + 'areis',
        prefix + 'arão'
      ],
      fpto: [
        prefix + 'aria',
        prefix + 'arias',
        prefix + 'aria',
        prefix + 'aríamos',
        prefix + 'aríeis',
        prefix + 'ariam'
      ]
    };
  };
  
var buildEr = function buildEr(prefix) {
    return {
      p: [
        normalizePrefix(prefix, [
          {
            ifIs: 'c',
            replaceBy: 'ç'
          }
        ]) + 'o',
        prefix + 'es',
        prefix + 'e',
        prefix + 'emos',
        prefix + 'eis',
        prefix + 'em'
      ],
      pi: [
        prefix + 'ia',
        prefix + 'ias',
        prefix + 'ia',
        prefix + 'íamos',
        prefix + 'íeis',
        prefix + 'iam'
      ],
      pp: [
        prefix + 'i',
        prefix + 'este',
        prefix + 'eu',
        prefix + 'emos',
        prefix + 'estes',
        prefix + 'eram'
      ],
      pmqp: [
        prefix + 'era',
        prefix + 'eras',
        prefix + 'era',
        prefix + 'êramos',
        prefix + 'êreis',
        prefix + 'eram'
      ],
      fpte: [
        prefix + 'erei',
        prefix + 'erás',
        prefix + 'erá',
        prefix + 'eremos',
        prefix + 'ereis',
        prefix + 'erão'
      ],
      fpto: [
        prefix + 'eria',
        prefix + 'erias',
        prefix + 'eria',
        prefix + 'eríamos',
        prefix + 'eríeis',
        prefix + 'eriam'
      ]
    };
  };
  
var buildIr =function buildIr(prefix) {
    return {
      p: [
        prefix + 'o',
        prefix + 'es',
        prefix + 'e',
        prefix + 'imos',
        prefix + 'is',
        prefix + 'em'
      ],
      pi: [
        prefix + 'ia',
        prefix + 'ias',
        prefix + 'ia',
        prefix + 'íamos',
        prefix + 'íeis',
        prefix + 'iam'
      ],
      pp: [
        prefix + 'i',
        prefix + 'iste',
        prefix + 'iu',
        prefix + 'imos',
        prefix + 'istes',
        prefix + 'iram'
      ],
      pmqp: [
        prefix + 'ira',
        prefix + 'iras',
        prefix + 'ira',
        prefix + 'íramos',
        prefix + 'íreis',
        prefix + 'iram'
      ],
      fpte: [
        prefix + 'irei',
        prefix + 'irás',
        prefix + 'irá',
        prefix + 'iremos',
        prefix + 'ireis',
        prefix + 'irão'
      ],
      fpto: [
        prefix + 'iria',
        prefix + 'irias',
        prefix + 'iria',
        prefix + 'iríamos',
        prefix + 'iríeis',
        prefix + 'iriam'
      ]
    };
  };
  
var buildPor =function buildPor(prefix) {
    return {
      p: [
        prefix + 'ponho',
        prefix + 'pões',
        prefix + 'põe',
        prefix + 'pomos',
        prefix + 'pondes',
        prefix + 'põem'
      ],
      pi: [
        prefix + 'punha',
        prefix + 'punhas',
        prefix + 'punha',
        prefix + 'púnhamos',
        prefix + 'púnheis',
        prefix + 'punham'
      ],
      pp: [
        prefix + 'pus',
        prefix + 'puseste',
        prefix + 'pôs',
        prefix + 'pusemos',
        prefix + 'pusestes',
        prefix + 'puseram'
      ],
      pmqp: [
        prefix + 'pusera',
        prefix + 'puseras',
        prefix + 'pusera',
        prefix + 'puséramos',
        prefix + 'puséreis',
        prefix + 'puseram'
      ],
      fpte: [
        prefix + 'porei',
        prefix + 'porás',
        prefix + 'porá',
        prefix + 'poremos',
        prefix + 'poreis',
        prefix + 'porão'
      ],
      fpto: [
        prefix + 'poria',
        prefix + 'porias',
        prefix + 'poria',
        prefix + 'poríamos',
        prefix + 'poríeis',
        prefix + 'poriam'
      ]
    };
  };
/**
 * Obter toda a conjugação de um verbo.
 *
 * Somente para verbos terminados em -ar, -er, ir ou -pôr.
 *
 * @param {string} verb Um verbo.
 * @returns {object} Toda a conjugação do verbo.
 */
var conjugar = function build(verb) {
  var data = parseVerb(verb);

  switch (data.suffix) {
    case 'ar':
      return buildAr(data.prefix);
      break;
    case 'er':
      return buildEr(data.prefix);
      break;
    case 'ir':
      return buildIr(data.prefix);
      break;
    case 'pôr':
      return buildPor(data.prefix);
      break;
  }
};
