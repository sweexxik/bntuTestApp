declare var $: any;
export class StringUtils {
    public static concat(...args: any[]): string {
        if (args && args.length > 0) {
            if (args.length === 1 && $.isArray(args[0])) {
                return args[0].join('');
            }
            return args.join('');
        }
        return null;
    }

    public static isNotEmptyString(value: string): boolean {
        if (!this.isString(value)) {
            return false;
        }
        return value.trim().length > 0;
    }

    public static isString(str: any) {
        if (str == null || str == undefined) {
            return false;
        }
        return typeof str == 'string';
    }
}