import { dataConvector } from "./data-convector";

describe("Data convector", () => {
  it("should be 2024.02", () => {
    const date = "2024-02-01";
    expect(dataConvector(date)).toEqual("2024.02");
  });
  it("should be incorrect format", () => {
    const date = "202a";
    expect(dataConvector(date)).toEqual("incorrect date format!");
  });

  it("should be 2024.01", () => {
    const date = "2024";
    expect(dataConvector(date)).toEqual("2024.01");
  });
  it("should be 2024.02", () => {
    const date = "2024-02";
    expect(dataConvector(date)).toEqual("2024.02");
  });
});
