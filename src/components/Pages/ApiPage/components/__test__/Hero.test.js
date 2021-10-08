import { render } from "@testing-library/react";
import HeroApi from "../ApiHero/HeroApi";

test('should render 10 listItems from api', () => {
  let {getAllByTestId} = render(<HeroApi/>)

  let listItemsFromApi = getAllByTestId("listitemsMapped")

  expect(listItemsFromApi).toHaveLength(10)
});