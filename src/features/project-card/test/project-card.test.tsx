import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectCard } from "../project-card";
import { dataConvector } from "../imports";

describe("Project card test", () => {
  beforeEach(() => {
    const project = {
      id: 1,
      title: "AgroBazar",
      startAt: "2022-12-31T22:00:00.000Z",
      endAt: "2023-08-31T21:00:00.000Z",
      description: "Agrobazar description",
      link: "https://agrobazar.ru/",
      logo: "https://agrosite.k-digital.pro/img/1.png",
    };

    render(<ProjectCard project={project} idx={1} />);
  });
  it("should render project card", () => {
    const start = dataConvector("2022-12-31T22:00:00.000Z");
    const end = dataConvector("2023-08-31T21:00:00.000Z");

    expect(screen.getByText(/AgroBazar/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /AgroBazar/i })).toBeInTheDocument();

    const date = screen.getByText(
      (content) => content.includes(start) && content.includes(end)
    );

    expect(date).toBeInTheDocument();
  });
});
