import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { PostModel } from "models/post.model";
import { handleFixWindowMatchMediaTest } from "utils/test.utils";
import Posts from ".";

handleFixWindowMatchMediaTest();

const mockApi: PostModel[] = [
  {
    id: 101,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  },
  {
    id: 102,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const setup = () => {
  render(<Posts />);
};

describe("Async component", () => {
  it("renders posts if request succeeds", async () => {
    mockedAxios.get.mockResolvedValue(mockApi);
    setup();
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(2);
  });
  it("test id", async () => {
    mockedAxios.get.mockResolvedValue(mockApi);
    setup();
    // wait for do cần bất đồng bộ
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access
      const listItemElements = document.querySelector("ul > li:first-child > span.id");
      console.log("listItemElements?.innerHTML", listItemElements?.innerHTML);
      expect(listItemElements?.innerHTML.toString()).toEqual("101");
    });
  });
});
