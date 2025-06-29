import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { votes } from "../generated/Voting/Voting"

export function createvotesEvent(voter: Address, candidateId: BigInt): votes {
  let votesEvent = changetype<votes>(newMockEvent())

  votesEvent.parameters = new Array()

  votesEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  votesEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )

  return votesEvent
}
