import { gql } from "@apollo/client";

export const GET_LAUNCHES_PAST = gql`
  query LaunchesPast(
    $find: LaunchFind
    $limit: Int
    $offset: Int
    $order: String
    $sort: String
  ) {
    launchesPast(
      find: $find
      limit: $limit
      offset: $offset
      order: $order
      sort: $sort
    ) {
      rocket {
        rocket_name
        rocket_type
      }
      mission_name
      launch_year
    }
  }
`;
