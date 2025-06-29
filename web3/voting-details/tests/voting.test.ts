import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Voted } from "../generated/schema"
import { Voted as VotedEvent } from "../generated/Voting/Voting"
import { handleVoted } from "../src/voting"
import { createVotedEvent } from "./voting-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let voter = Address.fromString("0x0000000000000000000000000000000000000001")
    let candidateId = BigInt.fromI32(234)
    let newVotedEvent = createVotedEvent(voter, candidateId)
    handleVoted(newVotedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("Voted created and stored", () => {
    assert.entityCount("Voted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Voted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "voter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Voted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "candidateId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
