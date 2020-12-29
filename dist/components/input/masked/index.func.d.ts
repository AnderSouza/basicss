export declare const charIsOfCharacterClass: (char: string, charClass: string) => boolean;
export declare const removeMaskFromValue: (maskedValue: string, mask: string) => string;
export declare const applyPlaceholderOnMask: (placeholder: string, mask: string) => string;
export declare const applyValueOnMask: (value: string, placeholder: string, mask: string) => string;
export declare const countFocusPosition: (value: string, mask: string) => number;
export declare const formatValue: (value: string, placeholder: string, mask: string) => string;
export declare const validateInput: (initial: string, format: string, placeholder: string, mask: string) => void;
export declare const handleNewKey: (key: string, value: string, format: string) => string;
