import {
  removeMaskFromValue,
  charIsOfCharacterClass,
  applyPlaceholderOnMask,
  applyValueOnMask,
  countFocusPosition,
} from "../src/components/input/masked/index.func";

describe("MaskedInput", () => {
  describe("removeMaskFromValue", () => {
    test("removes mask from a phone", () => {
      let maskedValue = "(22) 99207-4105";
      let mask = "(**) *****-****";
      let cleanValue = "22992074105";

      expect(removeMaskFromValue(maskedValue, mask)).toBe(cleanValue);
    });

    test("removes mask from cpf", () => {
      let maskedValue = "584.569.547-52";
      let mask = "***.***.***-**";
      let cleanValue = "58456954752";

      expect(removeMaskFromValue(maskedValue, mask)).toBe(cleanValue);
    });

    test("removes mask from date", () => {
      let maskedValue = "27/05/1989";
      let mask = "**/**/****";
      let cleanValue = "27051989";

      expect(removeMaskFromValue(maskedValue, mask)).toBe(cleanValue);
    });
  });

  describe("charIsOfCharacterClass", () => {
    test("verifies validity of digit character class", () => {
      expect(charIsOfCharacterClass("5", "d")).toBe(true);
    });

    test("verifies validity of word character class", () => {
      expect(charIsOfCharacterClass("a", "w")).toBe(true);
    });

    test("verifies validity of space character class", () => {
      expect(charIsOfCharacterClass(" ", "s")).toBe(true);
    });

    test("throws error when invalid character classes are passed", () => {
      expect(() => charIsOfCharacterClass("1", "D")).toThrowError(Error);
      expect(() => charIsOfCharacterClass("a", "W")).toThrowError(Error);
      expect(() => charIsOfCharacterClass(" ", "S")).toThrowError(Error);
    });

    test("throws error when wrongly sized chars and character classes are passed", () => {
      expect(() => charIsOfCharacterClass("ab", "w")).toThrowError(Error);
      expect(() => charIsOfCharacterClass("12", "d")).toThrowError(Error);
      expect(() => charIsOfCharacterClass("  ", "s")).toThrowError(Error);
    });
  });

  describe("applyPlaceholderOnMask", () => {
    test("applies a placeholder value on a phone mask", () => {
      let placeholder = "ddddddddddd";
      let mask = "(**) *****-****";
      let maskedPlaceholder = "(dd) ddddd-dddd";
      expect(applyPlaceholderOnMask(placeholder, mask)).toBe(maskedPlaceholder);
    });

    test("applies a placeholder value on a cpf mask", () => {
      let placeholder = "nnnnnnnnnnn";
      let mask = "***.***.***-**";
      let maskedPlaceholder = "nnn.nnn.nnn-nn";
      expect(applyPlaceholderOnMask(placeholder, mask)).toBe(maskedPlaceholder);
    });

    test("applies a placeholder value on a date mask", () => {
      let placeholder = "ddmmyyyy";
      let mask = "**/**/****";
      let maskedPlaceholder = "dd/mm/yyyy";
      expect(applyPlaceholderOnMask(placeholder, mask)).toBe(maskedPlaceholder);
    });
  });

  describe("applyValueOnMask", () => {
    test("applies a value on a phone mask", () => {
      let value = "25985658541";
      let placeholder = "ddddddddddd";
      let mask = "(**) *****-****";
      let maskedValue = "(25) 98565-8541";
      expect(applyValueOnMask(value, placeholder, mask)).toBe(maskedValue);
    });

    test("applies a value on a cpf mask", () => {
      let value = "93254125681";
      let placeholder = "nnnnnnnnnnn";
      let mask = "***.***.***-**";
      let maskedValue = "932.541.256-81";
      expect(applyValueOnMask(value, placeholder, mask)).toBe(maskedValue);
    });

    test("applies a value on a date mask", () => {
      let value = "11031991";
      let placeholder = "ddmmyyyy";
      let mask = "**/**/****";
      let maskedValue = "11/03/1991";
      expect(applyValueOnMask(value, placeholder, mask)).toBe(maskedValue);
    });
  });

  describe("countFocusPosition", () => {
    test("counts the focus position on a phone mask", () => {
      let value = "25";
      let mask = "(**) *****-****";
      let pos = 5;
      expect(countFocusPosition(value, mask)).toBe(pos);
    });

    test("counts the focus position on a cpf mask", () => {
      let value = "932541";
      let mask = "***.***.***-**";
      let pos = 8;
      expect(countFocusPosition(value, mask)).toBe(pos);
    });

    test("counts the focus position on a date mask", () => {
      let value = "11031982";
      let mask = "**/**/****";
      let pos = 10;
      expect(countFocusPosition(value, mask)).toBe(pos);
    });
  });
});
