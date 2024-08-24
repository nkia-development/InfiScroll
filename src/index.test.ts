import helloWorld from "./index";

test('should log "hello world" to the console', () => {
  const consoleSpy = jest.spyOn(console, "log");

  helloWorld();

  expect(consoleSpy).toHaveBeenCalledWith("hello world");

  consoleSpy.mockRestore();
});
