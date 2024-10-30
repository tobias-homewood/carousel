import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

it("renders without crashing", function () {
  render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={1} totalNum={3} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={1} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot with different props", function () {
  const { asFragment } = render(<Card caption={TEST_IMAGES[1].caption} src={TEST_IMAGES[1].src} currNum={2} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});