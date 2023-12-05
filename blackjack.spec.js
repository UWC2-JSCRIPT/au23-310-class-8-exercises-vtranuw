describe("Unit Test dealerShouldDraw function", function () {
  let deck;

  beforeEach(function () {
    deck = getDeck();
  });

  it("10, 9 passed in to function should return false", function () {
    let hand = [
      { val: 10, displayVal: "10" },
      { val: 9, displayVal: "9" },
    ];
    expect(dealerShouldDraw(hand)).toBe(false);
  });

  it("Ace, 6 passed in to function should return true", function () {
    let hand = [
      { val: 11, displayVal: "Ace" },
      { val: 6, displayVal: "6" },
    ];
    expect(dealerShouldDraw(hand)).toBe(true);
  });

  it("10, 6, Ace passed in to function should return false", function () {
    let hand = [
      { val: 10, displayVal: "10" },
      { val: 6, displayVal: "6" },
      { val: 11, displayVal: "Ace" },
    ];
    expect(dealerShouldDraw(hand)).toBe(false);
  });

  it("2, 4, 2, 5 passed in should return true", function () {
    let hand = [
      { val: 2, displayVal: "2" },
      { val: 4, displayVal: "4" },
      { val: 2, displayVal: "2" },
      { val: 5, displayVal: "5" },
    ];
    expect(dealerShouldDraw(hand)).toBe(true);
  });
});
