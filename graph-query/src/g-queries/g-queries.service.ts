import { Injectable } from '@nestjs/common';
import { gql, request } from 'graphql-request';

@Injectable()
export class GQueriesService {
  private endpoint = 'https://api.studio.thegraph.com/query/112514/voting-details/version/latest';

  async getVotes() {
    const query = gql`
      {
        votes(first: 5, orderBy: blockNumber, orderDirection: asc) {
          id
          voter
          candidateId
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    `;
    return await request(this.endpoint, query);
  }

  async getVoteById(id: string) {
    const query = gql`
      query ($id: Bytes!) {
        vote(id: $id) {
          id
          voter
          candidateId
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    `;

    const variables = { id };
    return await request(this.endpoint, query, variables);
  }
}
