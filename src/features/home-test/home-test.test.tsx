import "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";
import HomeTest from "./home-test";
import React from "react";

function sum(a: number, b: number) {
  return a + b;
}

test("1+2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assigment", () => {
  const data: any = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

function getResponse() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello Jest!");
    }, 3000);
  });
}

describe("combine async functionality tests", () => {
  test("async function getResponse should return Hello Jest!", async () => {
    const response = await getResponse();
    expect(response).toBe("Hello Jest!");
  });
  test("async function getResponse should not return acd!", async () => {
    const response = await getResponse();
    expect(response).not.toEqual("acd");
  });
});

describe("home-test component testing", () => {
  beforeEach(() => {
    render(<HomeTest />);
  });
  it("should be Home test", () => {
    const text = screen.getByText(/Home test/i);
    expect(text).toBeInTheDocument();
  });
  it("should contain h1 ", () => {
    const text = screen.getByRole("heading", { level: 1 });
    expect(text).toBeInTheDocument();
  });
  it("should contain description ", () => {
    const text = screen.getByTestId("desc");
    expect(text.textContent).toBe("description");
  });
  it("button test should be disable", () => {
    const btn = screen.getByRole("button", { name: /test/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });
  it(" input should be rendered", () => {
    const ipt = screen.getByPlaceholderText("enter the name");
    expect(ipt).toBeInTheDocument();
  });
  it(" button should be active after input is fillded", () => {
    const ipt = screen.getByPlaceholderText("enter the name");
    fireEvent.change(ipt, { target: { value: "test note" } });
    const btn = screen.getByRole("button", { name: /test/i });
    expect(btn).not.toBeDisabled();
  });
});
