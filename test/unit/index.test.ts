import { helloWorld } from "../../src/index";

test("Hello, World!", () => {
    expect(helloWorld()).toBe("Hello, World!");
});
