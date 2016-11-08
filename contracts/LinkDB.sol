pragma solidity ^0.4.4;

contract Link {
    
    uint total_shards = 0;
    mapping (uint => string) shardIndex;
    mapping (string => address) shardList;

    function createShard(string shardName){
        if(shardList[shardName] == 0){
            total_shards++;
            shardIndex[total_shards] = shardName;
            shardList[shardName] = new Shard();
        }
    }
    
    function getTotalShards() constant returns(uint){
       return total_shards;
    }
    
    function getShardName(uint index) constant returns(string){
       return shardIndex[index];
    }
    
    function getShardAddress(string shardName) constant returns(address){
        return shardList[shardName];
    }
}

contract Shard{
    event Broadcast_event(string metadata);

    function broadcast(string metadata){
        Broadcast_event(metadata);
    }
}