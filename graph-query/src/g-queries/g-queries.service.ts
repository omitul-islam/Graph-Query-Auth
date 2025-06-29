import { Injectable } from '@nestjs/common';
import { gql, request } from 'graphql-request';

@Injectable()
export class GQueriesService {
  private endpoint = 'https://api.studio.thegraph.com/query/112514/voting/version/latest';

  async getVotes() {
    const query = gql`
      {
        votes(first: 5) {
          id
          voter
          candidateId
          blockNumber
        }
      }
    `;
    return await request(this.endpoint, query);
  }
}
