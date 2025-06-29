// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Voting{
    struct candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public isVoted;
    mapping(uint => candidate) public candidates;
    uint public candidateNo;

    event Voted(address indexed voter, uint indexed candidateId);

    constructor() {
        addCandidate("Person1");
        addCandidate("Person2");
    }
    function addCandidate(string memory _name) private {
        candidateNo++;
        candidates[candidateNo] = candidate(candidateNo, _name, 0);
    }
    function vote(uint _candidateId) public {
        require(!isVoted[msg.sender], "You have already voted");
        require(candidates[_candidateId].voteCount > 0 &&  _candidateId <= candidateNo, "Candidate does not exist");
        isVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++; 
        emit Voted(msg.sender, _candidateId);
    }   
}