import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
mutation create_contact($company_name : String!, $description : String!, $email : String!) {
    EmailSender(company_name: $company_name, description: $description, email: $email, phone: "111111", date_time: "2023-08-08T09:26:20.793655+00:00") {
      error
      message
    }
  }
`;