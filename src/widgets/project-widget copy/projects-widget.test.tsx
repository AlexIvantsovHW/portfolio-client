import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectListSkillet } from "./imports";

describe("Project widget test", () => {
  beforeEach(() => {
    const data = [
      {
        id: 1,
        title: "AgroBazar",
        startAt: "2022-12-31T22:00:00.000Z",
        endAt: "2023-08-31T21:00:00.000Z",
        description: "Agrobazar description",
        link: "https://agrobazar.ru/",
        logo: "https://agrosite.k-digital.pro/img/1.png",
      },
      {
        id: 2,
        title: "OpenAI Chatbot",
        startAt: "2023-01-09T22:00:00.000Z",
        endAt: "2023-05-19T21:00:00.000Z",
        description: "AI-powered chatbot using OpenAI APIs.",
        link: "https://openai.com",
        logo: "https://cdn.example.com/logos/openai.png",
      },
      {
        id: 3,
        title: "Weather App",
        startAt: "2022-02-28T22:00:00.000Z",
        endAt: "2022-06-14T21:00:00.000Z",
        description: "React app to track weather in real-time.",
        link: "https://weatherapp.example.com",
        logo: "https://cdn.example.com/logos/weather.png",
      },
      {
        id: 4,
        title: "Crypto Tracker",
        startAt: "2022-08-11T21:00:00.000Z",
        endAt: "2022-11-30T22:00:00.000Z",
        description: "Monitor crypto prices and portfolios.",
        link: "https://cryptotracker.io",
        logo: "https://cdn.example.com/logos/crypto.png",
      },
    ];
    render(<ProjectListSkillet data={data} />);
  });
  it("should render two elements in ProjectListSkillet", () => {
    const wrongCard = screen.queryByText(/OpenAI asdf/i);
    expect(screen.getByText(/AgroBazar/i)).toBeInTheDocument();
    expect(screen.getByText(/OpenAI Chatbot/i)).toBeInTheDocument();
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
    expect(wrongCard).not.toBeInTheDocument();
  });
});
