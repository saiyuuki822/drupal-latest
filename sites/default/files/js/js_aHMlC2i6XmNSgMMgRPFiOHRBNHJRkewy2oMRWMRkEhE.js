/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"An AJAX HTTP error occurred.":"AJAX HTTP\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002","HTTP Result Code: !status":"HTTP \u30ea\u30b6\u30eb\u30c8\u30b3\u30fc\u30c9: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u7570\u5e38\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002","Debugging information follows.":"\u30c7\u30d0\u30c3\u30b0\u7528\u60c5\u5831\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002","Path: !uri":"\u30d1\u30b9: !uri","StatusText: !statusText":"\u30b9\u30c6\u30fc\u30bf\u30b9\u30c6\u30ad\u30b9\u30c8: !statusText","ResponseText: !responseText":"\u30ec\u30b9\u30dd\u30f3\u30b9\u30c6\u30ad\u30b9\u30c8:  !responseText","ReadyState: !readyState":"\u30ec\u30c7\u30a3\u30fc\u30b9\u30c6\u30fc\u30c8: !readyState","CustomMessage: !customMessage":"\u30ab\u30b9\u30bf\u30e0\u30e1\u30c3\u30bb\u30fc\u30b8: !customMessage","Please wait...":"\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044...","The response failed verification so will not be processed.":"\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u691c\u8a3c\u306b\u5931\u6557\u3057\u305f\u305f\u3081\u51e6\u7406\u3055\u308c\u307e\u305b\u3093\u3002","The callback URL is not local and not trusted: !url":"\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URL \u306f\u30ed\u30fc\u30ab\u30eb\u306e\u3082\u306e\u3067\u306f\u306a\u304f\u4fe1\u983c\u3067\u304d\u307e\u305b\u3093: !url","Changed":"\u5909\u66f4\u6e08","Home":"\u30db\u30fc\u30e0","Next":"\u6b21\u3078","closed":"\u30af\u30ed\u30fc\u30ba\u30c9","Open":"\u30aa\u30fc\u30d7\u30f3","Close":"\u9589\u3058\u308b","Extend":"\u6a5f\u80fd\u62e1\u5f35","@label":"@label","Collapse":"\u6298\u308a\u305f\u305f\u3080","opened":"\u958b\u304d\u307e\u3057\u305f","Horizontal orientation":"\u6c34\u5e73\u65b9\u5411","Vertical orientation":"\u5782\u76f4\u65b9\u5411","Tray orientation changed to @orientation.":"\u30c8\u30ec\u30fc\u306e\u65b9\u5411\u3092@orientation\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","@action @title configuration options":"@action @title \u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3","Tabbing is no longer constrained by the Contextual module.":"Contextual \u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u3088\u308b\u30bf\u30d6\u5316\u306e\u5236\u9650\u306f\u3082\u306f\u3084\u306a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"\u30bf\u30d6\u5316\u306f\u3001\u3072\u3068\u7d44\u306e@contextualsCount\u3068\u7de8\u96c6\u30e2\u30fc\u30c9\u306e\u30c8\u30b0\u30eb\u306b\u9650\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002","Press the esc key to exit.":"esc \u30ad\u30fc\u3092\u62bc\u3059\u3068\u623b\u308a\u307e\u3059\u3002","@count contextual link\u0003@count contextual links":"@count \u500b\u306e\u30b3\u30f3\u30c6\u30af\u30b9\u30c1\u30e5\u30a2\u30eb\u30ea\u30f3\u30af\u0003@count \u500b\u306e\u30b3\u30f3\u30c6\u30af\u30b9\u30c1\u30e5\u30a2\u30eb\u30ea\u30f3\u30af","!tour_item of !total":"!tour_item \/ !total","End tour":"\u30c4\u30a2\u30fc\u3092\u7d42\u3048\u308b","The toolbar cannot be set to a horizontal orientation when it is locked.":"\u30c4\u30fc\u30eb\u30d0\u30fc\u304c\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6c34\u5e73\u65b9\u5411\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002","Tray \u0022@tray\u0022 @action.":"\u30c8\u30ec\u30fc \u0022@tray\u0022 \u3092@action\u3002","Tray @action.":"\u30c8\u30ec\u30fc\u3092@action\u3002"}},"pluralFormula":{"1":0,"default":1}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  function findActiveStep(steps) {
    for (var i = 0; i < steps.length; i++) {
      if (steps[i].className === 'is-active') {
        return i + 1;
      }
    }

    if (steps[steps.length - 1].className === 'done') {
      return steps.length;
    }

    return 0;
  }

  function installStepsSetup() {
    var steps = document.querySelectorAll('.task-list li');

    if (steps.length) {
      var header = document.querySelector('header[role="banner"]');
      var stepIndicator = document.createElement('div');
      stepIndicator.className = 'step-indicator';
      stepIndicator.innerHTML = "".concat(findActiveStep(steps), "/").concat(steps.length);
      header.appendChild(stepIndicator);
    }
  }

  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', installStepsSetup);
  }
})();;
