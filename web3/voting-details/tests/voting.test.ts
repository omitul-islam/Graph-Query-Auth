import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { votes } from "../generated/schema"
import { votes as votesEvent } from "../generated/Voting/Voting"
import { handlevotes } from "../src/voting"
import { createvotesEvent } from "./voting-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let voter = Address.fromString("0x0000000000000000000000000000000000000001")
    let candidateId = BigInt.fromI32(234)
    let newvotesEvent = createvotesEvent(voter, candidateId)
    handlevotes(newvotesEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("votes created and stored", () => {
    assert.entityCount("votes", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "votes",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "voter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "votes",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "candidateId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
