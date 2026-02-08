describe("pow", function() {

  it("возводит 2 в степень 3, ожидаем 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("возводит 3 в степень 4, ожидаем 81", function() {
    assert.equal(pow(3, 4), 81);
  });

  it("если n отрицательное, результат NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("если n дробное, результат NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
  it("возводит 2 в степень 10, ожидаем 1024", function() {
    assert.equal(pow(2, 10), 1024);
  });

});