export var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (args && args.length > 0) {
            if (args.length === 1 && $.isArray(args[0])) {
                return args[0].join('');
            }
            return args.join('');
        }
        return null;
    };
    StringUtils.isNotEmptyString = function (value) {
        if (!this.isString(value)) {
            return false;
        }
        return value.trim().length > 0;
    };
    StringUtils.isString = function (str) {
        if (str == null || str == undefined) {
            return false;
        }
        return typeof str == 'string';
    };
    return StringUtils;
}());
//# sourceMappingURL=StringUtils.js.map