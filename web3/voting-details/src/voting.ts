import { votes as votesEvent } from "../generated/Voting/Voting"
import { votes } from "../generated/schema"

export function handlevotes(event: votesEvent): void {
  let entity = new votes(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.candidateId = event.params.candidateId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
