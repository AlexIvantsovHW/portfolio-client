import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

beforeEach(() => {
  render(<Header />);
});
// 🧠 Мокаем useRouter глобально
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Header tests", () => {
  it("should render img", () => {
    const image = screen.getByRole("img", { name: /logo/i });
    expect(image).toBeInTheDocument();
  });
  it("should render about btn", () => {
    const aboutBtn = screen.getByRole("button", { name: /about/i });
    expect(aboutBtn).toBeInTheDocument();
  });
  it("should render experience btn", () => {
    const experienceBtn = screen.getByRole("button", { name: /experience/i });
    expect(experienceBtn.textContent).toMatch(/experience/i);
  });
  it("should render projects btn", () => {
    const projectBtn = screen.getByRole("button", { name: /projects/i });
    expect(projectBtn.textContent).toMatch(/projects/i);
  });
  it("should render contact btn", () => {
    const contactBtn = screen.getByRole("button", { name: /contact/i });
    expect(contactBtn.textContent).toMatch(/Contact/i);
  });
  it("should render feedback btn", () => {
    const feedbackBtn = screen.getByRole("button", { name: /feedback/i });
    expect(feedbackBtn.textContent).toMatch(/feedback/i);
  });
  it("should render signIm btn", () => {
    const btn = screen.getByRole("button", { name: /sign in/i });
    expect(btn.textContent).toMatch(/sign in/i);
  });
});
