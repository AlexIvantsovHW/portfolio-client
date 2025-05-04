import { fireEvent, render, screen } from "@testing-library/react";
import { UniversityCard } from "../university-card";
import { dataConvector, Universities } from "../imports";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

beforeEach(() => {
  const university: Universities = {
    companyTitle: "test company title",
    title: "test title",
    link: "https://test-link.com",
    companyLogo: "https://test.com",
    description: "test description",
    certificate: "https://test-certificate.com",
    endAt: "2023-08-31T21:00:00.000Z",
    startAt: "2025-08-31T21:00:00.000Z",
    id: 1,
  };

  render(<UniversityCard university={university} idx={0} />);
});

describe("university card test", () => {
  it("should presence in DOM", () => {
    const companyTitle = screen.getByRole("heading", {
      name: "test company title",
    });
    expect(companyTitle).toBeInTheDocument();
  });

  it("should render properly card data", () => {
    expect(
      screen.getByRole("heading", { name: /test company title/i, level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /test company title/i })
    ).toBeInTheDocument();
    const universityLink = screen.getByRole("link", { name: /university/i });
    expect(universityLink).toHaveAttribute("href", "https://test-link.com");
    const diplomaLink = screen.getByRole("link", { name: /diploma/i });
    expect(diplomaLink).toHaveAttribute("href", "https://test-certificate.com");
    const start = dataConvector("2023-08-31T21:00:00.000Z");
    const end = dataConvector("2025-08-31T21:00:00.000Z");
    const date = screen.getByText(
      (content) => content.includes(start) && content.includes(end)
    );
    expect(date).toBeInTheDocument();
  });
});
