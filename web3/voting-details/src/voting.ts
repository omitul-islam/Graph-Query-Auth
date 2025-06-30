import { Vote } from "../generated/schema";
import { votes as votesEvent } from "../generated/Voting/Voting";
import { Bytes } from "@graphprotocol/graph-ts";

export function handlevotes(event: votesEvent): void {
  let entity = new Vote(event.transaction.hash);

  entity.voter = event.params.voter;
  entity.candidateId = event.params.candidateId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
