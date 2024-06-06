//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author emrekoca.eth
 */
contract YourContract is Ownable{
	
	//bilet satın alındıgına dair event ekle

	//herkes kendisi için koltuk alıyor

	string public eventName;

	uint256 public maxSeatNumber;

	uint256 public remainingSeat;

	uint256 public counter = 1;

	string public eventLocation;

	string public eventDate;

	event seatPurchase(address buyer,uint256 _seatNo);


	struct seatSchema {
		address ownerOfSeat;
		bool isTaken;
	}

	mapping(uint256 => seatSchema) public seat;
	mapping (address => uint) public seatOwner; //bir kulanıcı maksimum 1 bilet alabilir.

	uint256 public price = 0.005 ether;

	constructor(string memory _eventName,uint256 _maxSeatNumber,string memory _eventLocation,string memory _eventDate){
		eventName = _eventName;
		maxSeatNumber = _maxSeatNumber;
		remainingSeat = maxSeatNumber;
		eventLocation = _eventLocation;
		eventDate = _eventDate;
	}

	function changePrice(uint256 _price) public onlyOwner() {
		price = _price;
		
	}

	function buySeat() public payable returns(bool){ //event ekleyene kadar bool donsun
		require(msg.value == price,"You didnt send exact seat price");
		require(seat[counter].isTaken == false,"Seat already taken.Please select another seat");
		require(seatOwner[msg.sender] == 0,"You already have a seat");
		require(remainingSeat > 0,"No seat left");
		
		seat[counter].ownerOfSeat = address(msg.sender);
		seat[counter].isTaken = true;

		seatOwner[msg.sender] = counter;

		emit seatPurchase(msg.sender,counter);
		
		remainingSeat--;
		counter++;
		


		return true;

	}

	function withdraw() public onlyOwner {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent,) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }


	










}
