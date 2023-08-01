describe('Set', () => {
  test('Case 1', () => {
    expect(2 + 2).toBe(4);
  });

  test('Case 2', () => {
    expect(2 + 3).toBe(5);
  });

  describe('Other groups', () => {
    test('Case 3', () => {
      expect(2 + 4).toBe(6);
    });

    test('Case 4', () => {
      expect(4 + 3).toBe(7);
    });
  });
});
