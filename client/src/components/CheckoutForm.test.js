import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { queryByText } = render(<CheckoutForm />);
  const { formHeader } = queryByText(/Checkout Form/i);
  expect(formHeader);
});

test("form shows success message on submit with form details", () => {});
