import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { queryByText } = render(<CheckoutForm />);
  const { formHeader } = queryByText(/Checkout Form/i);
  expect(formHeader);
});

test("form shows success message on submit with form details", () => {
  const checkoutForm = render(<CheckoutForm />);
  const { getByTestId } = checkoutForm;

  const firstNameInput = getByTestId("firstname");
  const lastNameInput = getByTestId("lastname");
  const addressInput = getByTestId("address");
  const cityInput = getByTestId("city");
  const stateInput = getByTestId("state");
  const zipInput = getByTestId("zip");
  const submitButton = getByTestId("submitButton");

  fireEvent.change(firstNameInput, { target: { value: "Dead" } });
  fireEvent.change(lastNameInput, { target: { value: "Pool" } });
  fireEvent.change(addressInput, {
    target: { value: "11920 W Forest Hill Blvd." },
  });
  fireEvent.change(cityInput, { target: { value: "Kansas City" } });
  fireEvent.change(stateInput, { target: { value: "FL" } });
  fireEvent.change(zipInput, { target: { value: "33676" } });

  fireEvent.click(submitButton);

  const successMessage = getByTestId("successMessage");
  expect(successMessage);
});
